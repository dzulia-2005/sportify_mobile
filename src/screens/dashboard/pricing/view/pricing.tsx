import React, { useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useGetPlansQuery } from '../../../../feature/billing/plan/model/getPlan/useGetPlansQuery';
import { getPlanUI } from '../data/data';
import { PLAN_CODE_MAP } from '../components/planCodeMap';
import { useCheckoutMutation } from '../../../../feature/billing/billing/model/checkout/useCheckoutMutation';
import { PlanResponse } from '../../../../shared/api/plan/index.type';
import { styles } from '../styles/pricing.style';
import { gel, order } from '../components/order';

const Pricing: React.FC = () => {
  const { data: plansFromApi, isLoading } = useGetPlansQuery();
  const {
    mutate: checkoutMutate,
    isPending,
    variables,
    isError,
  } = useCheckoutMutation();

  const PLAN_UI = useMemo(() => getPlanUI(), []);

  if (isLoading) {
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

          const isFree = plan.code === 'FREE';

          const isLoadingThis =
            !isFree &&
            isPending &&
            variables?.planCode === PLAN_CODE_MAP[plan.code];

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
                disabled={!isFree && isPending}
                onPress={() => {
                  if (isFree) {
                    return;
                  }

                  checkoutMutate({
                    planCode: PLAN_CODE_MAP[plan.code],
                  });
                }}
                style={[
                  styles.button,
                  ui.highlight ? styles.highlightButton : styles.defaultButton,
                  !isFree && isPending ? styles.disabledButton : null,
                ]}
              >
                {isLoadingThis ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>{ui.cta}</Text>
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
