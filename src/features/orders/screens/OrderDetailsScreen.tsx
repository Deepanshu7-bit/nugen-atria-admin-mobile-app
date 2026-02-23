import React, { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { orders } from '../../../data/mockData';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/theme/colors';
import { RootStackParamList } from '../../../navigation/types';

type OrderDetailsRoute = RouteProp<RootStackParamList, 'OrderDetails'>;

export function OrderDetailsScreen() {
  const route = useRoute<OrderDetailsRoute>();

  const order = useMemo(
    () => orders.find((item) => item.id === route.params.orderId),
    [route.params.orderId]
  );

  if (!order) {
    return (
      <ScreenContainer>
        <Text style={styles.title}>Order not found</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Text style={styles.title}>Order #{order.id}</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Room</Text>
        <Text style={styles.value}>{order.roomNumber}</Text>

        <Text style={styles.label}>Items</Text>
        <Text style={styles.value}>{order.items.join(', ')}</Text>

        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{order.status}</Text>

        <Text style={styles.label}>Total</Text>
        <Text style={styles.value}>${order.totalAmount}</Text>
      </View>
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
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    gap: 6
  },
  label: {
    color: colors.muted,
    marginTop: 8
  },
  value: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600'
  }
});
