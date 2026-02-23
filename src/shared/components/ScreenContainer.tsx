import React, { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export function ScreenContainer({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 16,
    gap: 12
  }
});
