import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../shared/theme/colors';

interface KpiCardProps {
  label: string;
  value: string;
}

export function KpiCard({ label, value }: KpiCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 96,
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center'
  },
  value: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700'
  },
  label: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4
  }
});
