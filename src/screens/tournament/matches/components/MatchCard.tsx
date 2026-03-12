import React, { useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { EditedData, Match } from '../types/match.type';

type Team = {
  id?: string;
  name: string;
};



type MatchCardProps = {
  match: Match;
  editingId: string | number | null;
  editedData: EditedData;
  setEditedData: React.Dispatch<React.SetStateAction<EditedData>>;
  teams: Team[];
  startEditing: (match: Match) => void;
  saveChanges: (match: Match) => void;
  cancelEditing: () => void;
};

type TeamSelectProps = {
  label: string;
  value: string;
  options: Team[];
  onSelect: (value: string) => void;
};

const TeamSelect: React.FC<TeamSelectProps> = ({ label, value, options, onSelect }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.selectWrapper}>
      <Text style={styles.selectLabel}>{label}</Text>

      <TouchableOpacity style={styles.selectButton} onPress={() => setVisible(true)}>
        <Text style={styles.selectButtonText}>{value || 'Select team'}</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setVisible(false)}>
          <Pressable style={styles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {options.map((team, index) => (
                <TouchableOpacity
                  key={`${team.name}-${index}`}
                  style={styles.optionItem}
                  onPress={() => {
                    onSelect(team.name);
                    setVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{team.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const ScoreInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <View style={styles.scoreInputBox}>
      <Text style={styles.scoreInputLabel}>{label}</Text>

      <View style={styles.scoreControlRow}>
        <TouchableOpacity
          style={styles.scoreControlBtn}
          onPress={() => onChange(Math.max(0, value - 1))}
        >
          <Text style={styles.scoreControlBtnText}>-</Text>
        </TouchableOpacity>

        <TextInput
          value={String(value)}
          onChangeText={(text) => {
            const parsed = Number(text.replace(/[^0-9]/g, ''));
            onChange(Number.isNaN(parsed) ? 0 : Math.min(parsed, 99));
          }}
          keyboardType="numeric"
          maxLength={2}
          style={styles.scoreInput}
        />

        <TouchableOpacity
          style={styles.scoreControlBtn}
          onPress={() => onChange(Math.min(99, value + 1))}
        >
          <Text style={styles.scoreControlBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MatchCard: React.FC<MatchCardProps> = ({
  match,
  editingId,
  editedData,
  setEditedData,
  teams,
  startEditing,
  saveChanges,
  cancelEditing,
}) => {
  const isEditing = editingId === match.id;
  const hasScore = match.homeScore !== undefined && match.awayScore !== undefined;

  const winner = useMemo(() => {
    if (!hasScore) return null;
    if (match.homeScore === match.awayScore) return null;
    return match.homeScore! > match.awayScore! ? 'home' : 'away';
  }, [hasScore, match.awayScore, match.homeScore]);

  const cardBorderColor = isEditing
    ? '#10b981'
    : winner === 'home'
      ? '#22c55e'
      : winner === 'away'
        ? '#ef4444'
        : 'rgba(255,255,255,0.12)';

  const scoreBoxBorderColor = hasScore
    ? winner === 'home'
      ? 'rgba(34,197,94,0.35)'
      : winner === 'away'
        ? 'rgba(239,68,68,0.35)'
        : 'rgba(245,158,11,0.35)'
    : 'rgba(255,255,255,0.12)';

  return (
    <View style={[styles.card, { borderColor: cardBorderColor }]}>
      {hasScore && winner && (
        <View
          style={[
            styles.winnerBadge,
            winner === 'home' ? styles.homeWinnerBadge : styles.awayWinnerBadge,
          ]}
        >
          <Text style={styles.winnerBadgeText}>
            {winner === 'home' ? '🏆 Winner' : '🎯 Winner'}
          </Text>
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.topSection}>
          {isEditing ? (
            <View style={styles.editTeamsWrapper}>
              <TeamSelect
                label="Team A"
                value={editedData.homeTeamName}
                options={teams}
                onSelect={(value) => setEditedData({ ...editedData, homeTeamName: value })}
              />

              <View style={styles.vsBox}>
                <Text style={styles.vsText}>VS</Text>
              </View>

              <TeamSelect
                label="Team B"
                value={editedData.awayTeamName}
                options={teams}
                onSelect={(value) => setEditedData({ ...editedData, awayTeamName: value })}
              />
            </View>
          ) : (
            <View style={styles.teamsRow}>
              <View style={styles.teamSide}>
                <View style={[styles.teamAvatar, styles.homeAvatar]}>
                  <Text style={styles.teamAvatarText}>{match.homeTeamName?.charAt(0) || 'A'}</Text>
                </View>
                <Text style={styles.teamName}>{match.homeTeamName}</Text>
              </View>

              <View style={styles.vsDisplayBox}>
                <Text style={styles.vsText}>VS</Text>
              </View>

              <View style={[styles.teamSide, styles.teamSideRight]}>
                <Text style={[styles.teamName, styles.teamNameRight]}>{match.awayTeamName}</Text>
                <View style={[styles.teamAvatar, styles.awayAvatar]}>
                  <Text style={styles.teamAvatarText}>{match.awayTeamName?.charAt(0) || 'B'}</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={styles.bottomSection}>
          {isEditing ? (
            <>
              <View style={styles.editScoreContainer}>
                <ScoreInput
                  label="A"
                  value={editedData.homeScore}
                  onChange={(value) => setEditedData({ ...editedData, homeScore: value })}
                />

                <View style={styles.scoreDivider} />

                <ScoreInput
                  label="B"
                  value={editedData.awayScore}
                  onChange={(value) => setEditedData({ ...editedData, awayScore: value })}
                />
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity style={[styles.actionBtn, styles.saveBtn]} onPress={() => saveChanges(match)}>
                  <Text style={styles.actionBtnText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionBtn, styles.cancelBtn]} onPress={cancelEditing}>
                  <Text style={[styles.actionBtnText, styles.cancelBtnText]}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={[styles.scoreDisplayBox, { borderColor: scoreBoxBorderColor }]}>
                <Text
                  style={[
                    styles.scoreText,
                    { color: winner === 'home' ? '#4ade80' : '#34d399' },
                  ]}
                >
                  {match.homeScore ?? 0}
                </Text>

                <View style={styles.scoreDisplayDivider} />

                <Text
                  style={[
                    styles.scoreText,
                    { color: winner === 'away' ? '#f87171' : '#fb7185' },
                  ]}
                >
                  {match.awayScore ?? 0}
                </Text>
              </View>

              <TouchableOpacity style={[styles.actionBtn, styles.editBtn]} onPress={() => startEditing(match)}>
                <Text style={styles.actionBtnText}>Edit</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.statusRow}>
          <View
            style={[
              styles.statusBadge,
              hasScore ? styles.completedBadge : styles.currentBadge,
            ]}
          >
            <Text
              style={[
                styles.statusBadgeText,
                { color: hasScore ? '#4ade80' : '#facc15' },
              ]}
            >
              {hasScore ? 'Completed' : 'Current'}
            </Text>
          </View>

          {winner && (
            <Text
              style={[
                styles.winnerNameText,
                { color: winner === 'home' ? '#4ade80' : '#f87171' },
              ]}
            >
              {winner === 'home' ? `🏆 ${match.homeTeamName}` : `🎯 ${match.awayTeamName}`}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '100%',
    borderWidth: 2,
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#102d59',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  winnerBadge: {
    position: 'absolute',
    top: -10,
    right: -6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    zIndex: 10,
  },
  homeWinnerBadge: {
    backgroundColor: 'rgba(34,197,94,0.18)',
    borderColor: 'rgba(34,197,94,0.35)',
  },
  awayWinnerBadge: {
    backgroundColor: 'rgba(239,68,68,0.18)',
    borderColor: 'rgba(239,68,68,0.35)',
  },
  winnerBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    gap: 16,
  },
  topSection: {
    gap: 16,
  },
  editTeamsWrapper: {
    gap: 12,
  },
  teamsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  teamSide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  teamSideRight: {
    justifyContent: 'flex-end',
  },
  teamAvatar: {
    width: 40,
    height: 40,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeAvatar: {
    backgroundColor: '#3b82f6',
  },
  awayAvatar: {
    backgroundColor: '#f97316',
  },
  teamAvatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  teamName: {
    flexShrink: 1,
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  teamNameRight: {
    textAlign: 'right',
  },
  vsBox: {
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(168,85,247,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(168,85,247,0.25)',
  },
  vsDisplayBox: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(168,85,247,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(168,85,247,0.25)',
  },
  vsText: {
    color: '#d8b4fe',
    fontWeight: '700',
    fontSize: 14,
  },
  bottomSection: {
    gap: 14,
  },
  editScoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.18)',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(16,185,129,0.28)',
    padding: 12,
    gap: 14,
  },
  scoreDivider: {
    width: 1,
    height: 42,
    backgroundColor: 'rgba(16,185,129,0.28)',
  },
  scoreInputBox: {
    alignItems: 'center',
    gap: 8,
  },
  scoreInputLabel: {
    color: '#34d399',
    fontWeight: '700',
    fontSize: 12,
  },
  scoreControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  scoreControlBtn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreControlBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  scoreInput: {
    width: 50,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  scoreDisplayBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 2,
    backgroundColor: 'rgba(0,0,0,0.18)',
    alignSelf: 'center',
  },
  scoreText: {
    minWidth: 30,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
  },
  scoreDisplayDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.25)',
    marginHorizontal: 16,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    minHeight: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  saveBtn: {
    backgroundColor: '#059669',
  },
  cancelBtn: {
    backgroundColor: 'rgba(239,68,68,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(239,68,68,0.3)',
  },
  editBtn: {
    backgroundColor: 'rgba(59,130,246,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(59,130,246,0.3)',
  },
  actionBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  cancelBtnText: {
    color: '#f87171',
  },
  footer: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.06)',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    flexWrap: 'wrap',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  completedBadge: {
    backgroundColor: 'rgba(34,197,94,0.18)',
  },
  currentBadge: {
    backgroundColor: 'rgba(245,158,11,0.18)',
  },
  statusBadgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  winnerNameText: {
    fontSize: 12,
    fontWeight: '700',
  },
  selectWrapper: {
    flex: 1,
  },
  selectLabel: {
    color: '#34d399',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  selectButton: {
    minHeight: 44,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  selectButtonText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    maxHeight: 350,
    borderRadius: 16,
    backgroundColor: '#0f172a',
    paddingVertical: 8,
  },
  optionItem: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },
  optionText: {
    color: '#fff',
    fontSize: 15,
  },
});