import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bookings, orders } from '../../../data/mockData';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/theme/colors';
import { KpiCard } from '../components/KpiCard';

export function DashboardScreen() {
  const metrics = useMemo(() => {
    const activeBookings = bookings.filter((booking) => booking.status === 'ACTIVE').length;
    const pendingOrders = orders.filter((order) => order.status === 'PENDING').length;
    const revenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);

    return {
      activeBookings,
      pendingOrders,
      revenue
    };
  }, []);

  return (
    <ScreenContainer>
      <Text style={styles.title}>Operations Dashboard</Text>
      <Text style={styles.subtitle}>Snapshot for today across assigned hotels.</Text>

      <View style={styles.kpiRow}>
        <KpiCard label="Active bookings" value={String(metrics.activeBookings)} />
        <KpiCard label="Pending orders" value={String(metrics.pendingOrders)} />
      </View>

      <KpiCard label="Food revenue" value={`$${metrics.revenue}`} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 8,
    fontSize: 14,
    color: colors.muted
  },
  kpiRow: {
    flexDirection: 'row',
    gap: 12
  }
});
