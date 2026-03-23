import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGetPlansQuery } from '../../../../feature/billing/plan/model/getPlan/useGetPlansQuery';
import { getPlanUI } from '../data/data';
import { PLAN_CODE_MAP } from '../components/planCodeMap';
import { useCheckoutMutation } from '../../../../feature/billing/billing/model/checkout/useCheckoutMutation';
import { PlanResponse } from '../../../../shared/api/plan/index.type';
import { styles } from '../styles/pricing.style';
import { gel, order } from '../components/order';
import { showErrorToast } from '../../../../shared/utils/showErrorToast';
import { useSubscriptionQuery } from '../../../../feature/billing/billing/model/subscription/useSubscriptionQuery';

const normalizeCode = (value: unknown) =>
  String(value ?? '')
    .trim()
    .toUpperCase();

const Pricing: React.FC = () => {
  const { data: plansFromApi, isLoading } = useGetPlansQuery();
  const { data: Subscribed, isLoading: SubscribeLoading } =
    useSubscriptionQuery();

  const {
    mutate: checkoutMutate,
    isPending,
    variables,
    isError,
  } = useCheckoutMutation();

  const PLAN_UI = useMemo(() => getPlanUI(), []);

  const handleCheckout = (planCode: number) => {
    checkoutMutate(
      { planCode },
      {
        onSuccess: async data => {
          const url = data?.redirectUrl;

          if (!url) {
            showErrorToast('Payment link not found');
            return;
          }

          const supported = await Linking.canOpenURL(url);

          if (!supported) {
            showErrorToast('Cannot open payment page');
            return;
          }

          await Linking.openURL(url);
        },
        onError: err => {
          showErrorToast(err);
        },
      },
    );
  };

  if (isLoading || SubscribeLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
      </View>
    );
  }

  const plans: PlanResponse[] = (plansFromApi ?? []).sort(
    (a, b) => (order[a.code] ?? 999) - (order[b.code] ?? 999),
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {plans.map(plan => {
          const ui = PLAN_UI[plan.code] ?? {
            description: '',
            features: [],
            cta: 'Buy',
          };

          const isFree = normalizeCode(plan.code) === 'FREE';
          const isActive =
            normalizeCode(Subscribed?.planCode) === normalizeCode(plan.code);

          const mappedPlanCode = PLAN_CODE_MAP[plan.code];

          const isLoadingThis =
            !isFree &&
            !isActive &&
            isPending &&
            variables?.planCode === mappedPlanCode;

          return (
            <View
              key={plan.id}
              style={[
                styles.card,
                ui.highlight ? styles.highlightCard : styles.defaultCard,
              ]}
            >
              {ui.badge ? (
                <View
                  style={[
                    styles.badge,
                    ui.highlight ? styles.highlightBadge : styles.defaultBadge,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      ui.highlight
                        ? styles.highlightBadgeText
                        : styles.defaultBadgeText,
                    ]}
                  >
                    {ui.badge}
                  </Text>
                </View>
              ) : null}

              <View style={styles.headerRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.planTitle}>{plan.name}</Text>
                  <Text style={styles.description}>{ui.description}</Text>
                </View>
              </View>

              <View style={styles.priceRow}>
                <Text style={styles.priceText}>
                  {isFree ? 'Free' : gel(plan.price)}
                </Text>

                <Text style={styles.durationText}>
                  {isFree ? '/ forever' : `/ ${plan.durationDays} days`}
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.85}
                disabled={isActive || !mappedPlanCode || (!isFree && isPending)}
                onPress={() => {
                  const currentIsActive =
                    normalizeCode(Subscribed?.planCode) ===
                    normalizeCode(plan.code);

                  if (isFree || currentIsActive) {
                    return;
                  }

                  if (!mappedPlanCode) {
                    showErrorToast('Plan code is invalid');
                    return;
                  }

                  handleCheckout(mappedPlanCode);
                }}
                style={[
                  styles.button,
                  ui.highlight ? styles.highlightButton : styles.defaultButton,
                  isActive || !mappedPlanCode || (!isFree && isPending)
                    ? styles.disabledButton
                    : null,
                ]}
              >
                {isLoadingThis ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>
                    {isActive ? 'Current Plan' : ui.cta}
                  </Text>
                )}
              </TouchableOpacity>

              {isError && isLoadingThis ? (
                <Text style={styles.errorText}>
                  Payment init failed. Try again.
                </Text>
              ) : null}

              <View style={styles.divider} />

              <Text style={styles.includedTitle}>Included</Text>

              <View style={styles.featuresWrapper}>
                {ui.features.map(feature => (
                  <View key={feature} style={styles.featureRow}>
                    <Icon
                      name="circle"
                      size={8}
                      color="#38BDF8"
                      style={styles.featureDot}
                    />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pricing;
