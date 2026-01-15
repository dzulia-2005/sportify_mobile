import { useMemo } from 'react';
import { MatchResponse } from '../../../../shared/api/mySchoolMatches/index.type';

const useCategorizedMatches = (
  matches?: MatchResponse[],
  matchType?: number,
) => {
  const categorizedMatches = useMemo(() => {
    if (!matches)
      return { group: [], quarterFinal: [], semiFinal: [], final: [] };

    if (matchType !== 1) {
      return {
        group: matches,
        quarterFinal: [],
        semiFinal: [],
        final: [],
      };
    }

    const totalMatches = matches.length;

    return matches.reduce(
      (acc, match, index) => {
        if (totalMatches === 1) {
          acc.final.push(match);
        } else if (index === totalMatches - 1) {
          acc.final.push(match);
        } else if (index >= totalMatches - 3 && index < totalMatches - 1) {
          acc.semiFinal.push(match);
        } else if (index >= totalMatches - 7 && index < totalMatches - 3) {
          acc.quarterFinal.push(match);
        } else {
          acc.group.push(match);
        }
        return acc;
      },
      {
        group: [] as MatchResponse[],
        quarterFinal: [] as MatchResponse[],
        semiFinal: [] as MatchResponse[],
        final: [] as MatchResponse[],
      },
    );
  }, [matches, matchType]);

  const groupedMatches = useMemo(() => {
    if (!matches || matchType !== 2) return {};
    return matches.reduce((acc, match) => {
      const key = [match.teamAName, match.teamBName].sort().join('-');
      if (!acc[key]) acc[key] = [];
      acc[key].push(match);
      return acc;
    }, {} as Record<string, MatchResponse[]>);
  }, [matches, matchType]);

  const hasKnockoutStages =
    categorizedMatches.quarterFinal.length > 0 ||
    categorizedMatches.semiFinal.length > 0 ||
    categorizedMatches.final.length > 0;

  return { categorizedMatches, groupedMatches, hasKnockoutStages };
};

export default useCategorizedMatches;
