import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import TeamInfo from './TeamInfo';
import TeamSelector from './TeamSelector';
import { Match, Team, TempScores } from '../types/index.type';

interface MatchCardProps {
  match: Match;
  isEditing: boolean;
  tempScores: TempScores;
  onEdit: () => void;
  onSave: () => void;
  onScoreChange: (field: string, value: number) => void;
  onTeamSelect: (teamId: string, teamName: string, isTeamA: boolean) => void;
  teams: Team[];
  isFinal?: boolean;
  isSemiFinal?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({
  match,
  isEditing,
  tempScores,
  onEdit,
  onSave,
  onScoreChange,
  onTeamSelect,
  teams,
  isFinal = false,
  isSemiFinal = false,
}) => {
  const [showTeamASelector, setShowTeamASelector] = useState(false);
  const [showTeamBSelector, setShowTeamBSelector] = useState(false);

  const isCompleted = match.scoreA !== undefined && match.scoreB !== undefined;
  const winner =
    isCompleted && match.scoreA !== match.scoreB
      ? (match.scoreA ?? 0) > (match.scoreB ?? 0)
        ? 'home'
        : 'away'
      : null;

  return (
    <View
      style={[
        styles.matchCard,
        isFinal && styles.finalCard,
        isSemiFinal && styles.semiFinalCard,
      ]}
    >
      {/* Stage Badge */}
      {(isFinal || isSemiFinal) && (
        <View
          style={[
            styles.stageBadge,
            isFinal ? styles.finalBadge : styles.semiFinalBadge,
          ]}
        >
          <Text style={styles.badgeText}>
            {isFinal ? 'ფინალი' : 'ნახევარფინალი'}
          </Text>
        </View>
      )}

      {/* Teams */}
      <View style={styles.teamsContainer}>
        {isEditing ? (
          <>
            <View style={styles.teamSelector}>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setShowTeamASelector(true)}
              >
                <Text style={styles.selectButtonText}>გუნდი A</Text>
              </TouchableOpacity>
              {tempScores.teamAId && (
                <TeamInfo
                  logo={match.teamALogoUrl}
                  name={match.teamAName}
                  isWinner={winner === 'home'}
                  isFinal={isFinal}
                />
              )}
            </View>

            <Text style={styles.vsText}>vs</Text>

            <View style={styles.teamSelector}>
              <TouchableOpacity
                style={styles.selectButton}
                onPress={() => setShowTeamBSelector(true)}
              >
                <Text style={styles.selectButtonText}>გუნდი B</Text>
              </TouchableOpacity>
              {tempScores.teamBId && (
                <TeamInfo
                  logo={match.teamBLogoUrl}
                  name={match.teamBName}
                  isWinner={winner === 'away'}
                  isFinal={isFinal}
                />
              )}
            </View>

            <TeamSelector
              visible={showTeamASelector}
              onClose={() => setShowTeamASelector(false)}
              onSelect={(teamId, teamName) => {
                onTeamSelect(teamId, teamName, true);
                setShowTeamASelector(false);
              }}
              teams={teams}
              selectedTeamId={tempScores.teamAId}
            />

            <TeamSelector
              visible={showTeamBSelector}
              onClose={() => setShowTeamBSelector(false)}
              onSelect={(teamId, teamName) => {
                onTeamSelect(teamId, teamName, false);
                setShowTeamBSelector(false);
              }}
              teams={teams}
              selectedTeamId={tempScores.teamBId}
            />
          </>
        ) : (
          <>
            <TeamInfo
              logo={match.teamALogoUrl}
              name={match.teamAName}
              isWinner={winner === 'home'}
              isFinal={isFinal}
            />
            <Text style={styles.vsText}>vs</Text>
            <TeamInfo
              logo={match.teamBLogoUrl}
              name={match.teamBName}
              isWinner={winner === 'away'}
              isFinal={isFinal}
            />
          </>
        )}
      </View>

      {/* Scores */}
      <View style={styles.scoresContainer}>
        {isEditing ? (
          <>
            <View style={styles.scoreInputContainer}>
              <Text style={styles.scoreLabel}>ქულა A</Text>
              <TextInput
                style={styles.scoreInput}
                keyboardType="numeric"
                value={String(tempScores.scoreA)}
                onChangeText={text =>
                  onScoreChange('scoreA', parseInt(text) || 0)
                }
              />
            </View>
            <Text style={styles.scoreColon}>:</Text>
            <View style={styles.scoreInputContainer}>
              <Text style={styles.scoreLabel}>ქულა B</Text>
              <TextInput
                style={styles.scoreInput}
                keyboardType="numeric"
                value={String(tempScores.scoreB)}
                onChangeText={text =>
                  onScoreChange('scoreB', parseInt(text) || 0)
                }
              />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={onSave}>
              <Text style={styles.saveButtonText}>💾 შენახვა</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.scoreDisplay}>
              <Text style={styles.scoreValue}>{match.scoreA ?? 0}</Text>
              <Text style={styles.scoreTeamLabel}>გუნდი A</Text>
            </View>
            <Text style={styles.scoreColon}>:</Text>
            <View style={styles.scoreDisplay}>
              <Text style={styles.scoreValue}>{match.scoreB ?? 0}</Text>
              <Text style={styles.scoreTeamLabel}>გუნდი B</Text>
            </View>
            <TouchableOpacity style={styles.editButton} onPress={onEdit}>
              <Text style={styles.editButtonText}>✏️ რედაქტირება</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchCard: {
    backgroundColor: '#0b1830',
    borderWidth: 1,
    borderColor: '#ffffff1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  finalCard: {
    borderColor: '#fbbf2480',
    backgroundColor: '#fbbf2408',
  },
  semiFinalCard: {
    borderColor: '#a855f780',
    backgroundColor: '#a855f708',
  },
  stageBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
  },
  finalBadge: {
    backgroundColor: '#fbbf2433',
    borderColor: '#fbbf2450',
  },
  semiFinalBadge: {
    backgroundColor: '#a855f733',
    borderColor: '#a855f750',
  },
  badgeText: {
    color: '#fbbf24',
    fontSize: 10,
    fontWeight: 'bold',
  },
  teamsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  vsText: {
    color: '#60a5fa',
    fontSize: 18,
    fontWeight: 'bold',
  },
  teamSelector: {
    gap: 8,
  },
  selectButton: {
    backgroundColor: '#112240',
    borderWidth: 1,
    borderColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  scoresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  scoreInputContainer: {
    alignItems: 'center',
    gap: 4,
  },
  scoreLabel: {
    color: '#fff9',
    fontSize: 10,
  },
  scoreInput: {
    width: 50,
    backgroundColor: '#112240',
    borderWidth: 1,
    borderColor: '#3b82f6',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    fontSize: 16,
  },
  scoreColon: {
    color: '#60a5fa',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreDisplay: {
    alignItems: 'center',
  },
  scoreValue: {
    color: '#4ade80',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreTeamLabel: {
    color: '#fff9',
    fontSize: 10,
  },
  saveButton: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  editButtonText: {
    color: '#60a5fa',
    fontSize: 12,
  },
});

export default MatchCard;
