import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Order } from '../../../types/domain';
import { colors } from '../../../shared/theme/colors';

interface OrderCardProps {
  order: Order;
  onPress: () => void;
}

export function OrderCard({ order, onPress }: OrderCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.id}>#{order.id}</Text>
        <Text style={styles.meta}>Room {order.roomNumber}</Text>
        <Text style={styles.meta}>{order.items.join(' • ')}</Text>
      </View>
      <View style={styles.rightCol}>
        <Text style={styles.amount}>${order.totalAmount}</Text>
        <Text style={styles.status}>{order.status}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  id: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text
  },
  meta: {
    color: colors.muted,
    marginTop: 2
  },
  rightCol: {
    alignItems: 'flex-end'
  },
  amount: {
    color: colors.text,
    fontWeight: '700'
  },
  status: {
    marginTop: 6,
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600'
  }
});
