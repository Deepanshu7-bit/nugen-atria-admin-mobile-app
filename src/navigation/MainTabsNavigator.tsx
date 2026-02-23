import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { DashboardScreen } from '../features/dashboard/screens/DashboardScreen';
import { OrdersScreen } from '../features/orders/screens/OrdersScreen';
import { BookingsScreen } from '../features/bookings/screens/BookingsScreen';
import { SettingsScreen } from '../features/settings/screens/SettingsScreen';
import { MainTabParamList } from './types';
import { colors } from '../shared/theme/colors';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { height: 64, paddingBottom: 8, paddingTop: 8 },
        tabBarIcon: ({ color, size }) => {
          const iconByRoute = {
            Dashboard: 'dashboard',
            Orders: 'restaurant-menu',
            Bookings: 'hotel',
            Settings: 'settings'
          } as const;

          return <MaterialIcons name={iconByRoute[route.name]} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
