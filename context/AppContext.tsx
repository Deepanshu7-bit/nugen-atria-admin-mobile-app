'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { bookingService } from '@/services/bookingService';
import { hotelService } from '@/services/hotelService';
import { notificationService } from '@/services/notificationService';
import { orderService } from '@/services/orderService';
import { revenueService } from '@/services/revenueService';
import { staffService } from '@/services/staffService';
import { AppState, Order, OrderStatus, SelectedHotel, User, UserRole } from '@/types';

interface AppContextValue extends AppState {
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setSelectedHotel: (hotel: SelectedHotel) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => Promise<void>;
  rejectOrder: (orderId: string) => Promise<void>;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const initialState: AppState = {
  user: null,
  role: null,
  assignedHotels: [],
  selectedHotel: 'ALL',
  orders: [],
  bookings: [],
  revenueData: [],
  notifications: [],
  staff: [],
  hotels: []
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function bootstrap() {
      try {
        setLoading(true);
        const [hotels, orders, bookings, revenueData, notifications, staff] = await Promise.all([
          hotelService.getHotels(),
          orderService.getOrders(),
          bookingService.getBookings(),
          revenueService.getRevenueData(),
          notificationService.getNotifications(),
          staffService.getStaff()
        ]);

        setState((prev) => ({ ...prev, hotels, orders, bookings, revenueData, notifications, staff }));
      } catch {
        setError('Unable to load application data.');
      } finally {
        setLoading(false);
      }
    }

    bootstrap();
  }, []);

  const setUser = useCallback((user: User | null) => {
    setState((prev) => {
      const role = user?.role ?? null;
      const assignedHotels = prev.hotels.filter((hotel) => user?.assignedHotelIds.includes(hotel.id));
      return {
        ...prev,
        user,
        role,
        assignedHotels,
        selectedHotel: role === 'OWNER' ? 'ALL' : assignedHotels[0]?.id ?? 'ALL'
      };
    });
  }, []);

  const setSelectedHotel = useCallback((selectedHotel: SelectedHotel) => {
    setState((prev) => ({
      ...prev,
      selectedHotel: prev.role === 'OWNER' ? selectedHotel : prev.assignedHotels[0]?.id ?? selectedHotel
    }));
  }, []);

  const patchOrder = (updatedOrder: Order) => {
    setState((prev) => ({
      ...prev,
      orders: prev.orders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
    }));
  };

  const updateOrderStatus = useCallback(async (orderId: string, status: OrderStatus) => {
    const updatedOrder = await orderService.updateOrderStatus(orderId, status);
    patchOrder(updatedOrder);
  }, []);

  const rejectOrder = useCallback(async (orderId: string) => {
    const updatedOrder = await orderService.rejectOrder(orderId);
    patchOrder(updatedOrder);
  }, []);

  const value = useMemo(
    () => ({ ...state, loading, error, setUser, setSelectedHotel, updateOrderStatus, rejectOrder }),
    [state, loading, error, setUser, setSelectedHotel, updateOrderStatus, rejectOrder]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
};

export const canAccessRoute = (role: UserRole | null, route: string) => {
  const accessMap: Record<UserRole, string[]> = {
    OWNER: ['/dashboard', '/orders', '/bookings', '/staff', '/reports', '/notifications'],
    MANAGER: ['/dashboard', '/orders', '/bookings', '/staff', '/notifications'],
    STAFF: ['/dashboard', '/orders', '/notifications']
  };

  if (!role) return false;
  return accessMap[role].includes(route);
};
