import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { orders } from '../../../data/mockData';
import { ScreenContainer } from '../../../shared/components/ScreenContainer';
import { colors } from '../../../shared/theme/colors';
import { OrderCard } from '../components/OrderCard';
import { RootStackParamList } from '../../../navigation/types';

type OrdersNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function OrdersScreen() {
  const navigation = useNavigation<OrdersNavigationProp>();

  return (
    <ScreenContainer>
      <Text style={styles.title}>Room Service Orders</Text>
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onPress={() => navigation.navigate('OrderDetails', { orderId: order.id })}
        />
      ))}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4
  }
});
