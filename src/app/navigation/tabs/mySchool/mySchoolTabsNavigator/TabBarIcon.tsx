import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ScoreIcon = ({ color, size }: { color: string; size: number }) => (
  <Icon name="scoreboard-outline" color={color} size={size} />
);

export const MatchesIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="soccer-field" color={color} size={size} />;

export const TournamentTeamIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="trophy-outline" color={color} size={size} />;

export const MySchoolAllPlayerIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="account-star-outline" color={color} size={size} />;

export const MySchoolTeamsIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="account-group-outline" color={color} size={size} />;

export const SchoolIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <Icon name="school-outline" color={color} size={size} />;
