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
import type {
  MatchResponse,
  EditMatchesPayload,
} from '../../../../shared/api/mySchoolMatches/index.type';
import { Team } from '../types/index.type';

interface MatchCardProps {
  match: MatchResponse;
  teams: Team[];
  editingMatchId: string | null;
  tempScores: EditMatchesPayload;
  setTempScores: React.Dispatch<React.SetStateAction<EditMatchesPayload>>;
  handleEdit: (match: MatchResponse) => void;
  handleSave: (id: string) => void;
  isFinal?: boolean;
  isSemiFinal?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({
  teams,
  match,
  editingMatchId,
  tempScores,
  setTempScores,
  handleEdit,
  handleSave,
  isFinal = false,
  isSemiFinal = false,
}) => {
  const [showTeamA, setShowTeamA] = useState(false);
  const [showTeamB, setShowTeamB] = useState(false);

  const isEditing = editingMatchId === match.id;

  const isCompleted = match.scoreA !== undefined && match.scoreB !== undefined;

  const winner =
    isCompleted && match.scoreA !== match.scoreB
      ? match.scoreA! > match.scoreB!
        ? 'home'
        : 'away'
      : null;

  return (
    <View
      style={[
        styles.card,
        isFinal && styles.finalCard,
        isSemiFinal && styles.semiFinalCard,
      ]}
    >
      {/* Badge */}
      {(isFinal || isSemiFinal) && (
        <View
          style={[styles.badge, isFinal ? styles.finalBadge : styles.semiBadge]}
        >
          <Text style={styles.badgeText}>
            {isFinal ? 'Final' : 'Semi Final'}
          </Text>
        </View>
      )}

      {/* Teams */}
      <View style={styles.teamsRow}>
        {isEditing ? (
          <>
            <View style={styles.teamBlock}>
              <TouchableOpacity
                style={styles.selectorBtn}
                onPress={() => setShowTeamA(true)}
              >
                <Text style={styles.selectorText}>Choose Team A</Text>
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

            <Text style={styles.vs}>vs</Text>

            <View style={styles.teamBlock}>
              <TouchableOpacity
                style={styles.selectorBtn}
                onPress={() => setShowTeamB(true)}
              >
                <Text style={styles.selectorText}>Choose Team B</Text>
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
              visible={showTeamA}
              teams={teams}
              selectedTeamId={tempScores.teamAId}
              onClose={() => setShowTeamA(false)}
              onSelect={id => {
                setTempScores(prev => ({
                  ...prev,
                  teamAId: id,
                }));
                setShowTeamA(false);
              }}
            />

            <TeamSelector
              visible={showTeamB}
              teams={teams}
              selectedTeamId={tempScores.teamBId}
              onClose={() => setShowTeamB(false)}
              onSelect={id => {
                setTempScores(prev => ({
                  ...prev,
                  teamBId: id,
                }));
                setShowTeamB(false);
              }}
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
            <Text style={styles.vs}>vs</Text>
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
      <View style={styles.scoreRow}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.scoreInput}
              keyboardType="numeric"
              value={String(tempScores.scoreA ?? 0)}
              onChangeText={v =>
                setTempScores(prev => ({
                  ...prev,
                  scoreA: Number(v) || 0,
                }))
              }
            />

            <Text style={styles.colon}>:</Text>

            <TextInput
              style={styles.scoreInput}
              keyboardType="numeric"
              value={String(tempScores.scoreB ?? 0)}
              onChangeText={v =>
                setTempScores(prev => ({
                  ...prev,
                  scoreB: Number(v) || 0,
                }))
              }
            />

            <TouchableOpacity
              style={styles.saveBtn}
              onPress={() => handleSave(match.id)}
            >
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.scoreA}>{match.scoreA ?? 0}</Text>
            <Text style={styles.colon}>:</Text>
            <Text style={styles.scoreB}>{match.scoreB ?? 0}</Text>

            <TouchableOpacity onPress={() => handleEdit(match)}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0b1830',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },

  finalCard: {
    borderColor: 'rgba(251,191,36,0.5)',
    backgroundColor: 'rgba(251,191,36,0.05)',
  },

  semiFinalCard: {
    borderColor: 'rgba(168,85,247,0.5)',
    backgroundColor: 'rgba(168,85,247,0.05)',
  },

  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },

  finalBadge: {
    backgroundColor: 'rgba(251,191,36,0.2)',
    borderColor: 'rgba(251,191,36,0.3)',
  },

  semiBadge: {
    backgroundColor: 'rgba(168,85,247,0.2)',
    borderColor: 'rgba(168,85,247,0.3)',
  },

  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fbbf24',
  },

  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },

  teamBlock: {
    alignItems: 'center',
    gap: 8,
  },

  selectorBtn: {
    backgroundColor: '#112240',
    borderWidth: 1,
    borderColor: '#3b82f6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  selectorText: {
    color: '#fff',
    fontSize: 12,
  },

  vs: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60a5fa',
  },

  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },

  scoreInputBlock: {
    alignItems: 'center',
    gap: 4,
  },

  scoreLabel: {
    fontSize: 10,
    color: '#ffffff99',
  },

  scoreInput: {
    width: 48,
    backgroundColor: '#112240',
    borderWidth: 1,
    borderColor: '#3b82f6',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    fontSize: 16,
  },

  colon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#60a5fa',
  },

  scoreDisplay: {
    alignItems: 'center',
  },

  scoreA: {
    color: '#4ade80',
    fontSize: 18,
    fontWeight: 'bold',
  },

  scoreB: {
    color: '#f87171',
    fontSize: 18,
    fontWeight: 'bold',
  },

  scoreTeam: {
    fontSize: 10,
    color: '#ffffff99',
  },

  saveBtn: {
    backgroundColor: '#16a34a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },

  saveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  editText: {
    color: '#60a5fa',
    fontSize: 12,
    marginLeft: 8,
  },
});
