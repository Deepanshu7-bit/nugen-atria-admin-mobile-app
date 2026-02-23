import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabsNavigator } from './MainTabsNavigator';
import { RootStackParamList } from './types';
import { OrderDetailsScreen } from '../features/orders/screens/OrderDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabsNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsScreen}
        options={{ title: 'Order Details' }}
      />
    </Stack.Navigator>
  );
}
