type PlanUiItem = {
  description: string;
  features: string[];
  badge?: string;
  highlight?: boolean;
  cta: string;
};

export const getPlanUI = (): Record<string, PlanUiItem> => ({
  TOURNAMENT_MONTHLY: {
    description: 'Manage external tournaments with full control.',
    cta: 'Start',
    features: [
      'Unlimited tournaments',
      'Teams and players',
      'Match generation',
      'Table and scoring',
      'Top scorer tracking',
      'Full statistics',
    ],
  },
  SCHOOL_MONTHLY: {
    description: 'Sports school management in one place.',
    badge: 'Most Popular',
    highlight: true,
    cta: 'Add School',
    features: [
      'Create school',
      'Team management',
      'Player profiles',
      'Internal school matches',
      'Multiple match types',
      'Individual player statistics',
      'Season history',
    ],
  },
  BOTH_MONTHLY: {
    description: 'Everything together in one plan.',
    cta: 'Buy',
    features: [
      'Academy + tournament features',
      'Unlimited internal tournaments',
      'Manage multiple flows',
      'General school statistics',
      'Priority support',
    ],
  },
  FREE: {
    description: 'Try Sportify for free.',
    badge: 'Free',
    cta: 'Create Tournament',
    features: [
      'One-time tournament',
      'Add teams',
      'Add players',
      'Basic match flow',
      'Simple standings',
      'Manual score tracking',
    ],
  },
});
