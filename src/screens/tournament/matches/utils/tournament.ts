import { MatchType } from "../types/match.type";

export const getTournamentTypeInfo = (matchType: MatchType) => {
  switch (matchType) {
    case 0:
      return {
        title: 'All On All',
        description: 'All teams play against each other.',
        icon: '👥',
      };
    case 1:
      return {
        title: 'Single Knockout',
        description: 'Losing team is eliminated immediately.',
        icon: '⚔️',
      };
    case 2:
      return {
        title: 'Double Knockout',
        description: 'Teams play two matches.',
        icon: '🏆',
      };
    default:
      return {
        title: '',
        description: '',
        icon: '🏅',
      };
  }
};