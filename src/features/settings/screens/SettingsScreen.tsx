import React, { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/theme/colors';

export function SettingsScreen() {
  const [alertsEnabled, setAlertsEnabled] = useState(true);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.optionLabel}>Push alerts</Text>
        <Switch value={alertsEnabled} onValueChange={setAlertsEnabled} />
      </View>

      <Pressable style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign out</Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text
  },
  card: {
    marginTop: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionLabel: {
    color: colors.text,
    fontWeight: '600'
  },
  signOutButton: {
    marginTop: 8,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#DC2626'
  },
  signOutText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
