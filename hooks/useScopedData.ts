'use client';

import { useMemo } from 'react';
import { useAppContext } from '@/context/AppContext';

export const useScopedData = () => {
  const context = useAppContext();

  return useMemo(() => {
    const scopedOrders =
      context.selectedHotel === 'ALL'
        ? context.orders
        : context.orders.filter((order) => order.hotelId === context.selectedHotel);

    const scopedBookings =
      context.selectedHotel === 'ALL'
        ? context.bookings
        : context.bookings.filter((booking) => booking.hotelId === context.selectedHotel);

    const scopedRevenue =
      context.selectedHotel === 'ALL'
        ? context.revenueData
        : context.revenueData.filter((point) => point.hotelId === context.selectedHotel);

    const scopedNotifications =
      context.selectedHotel === 'ALL'
        ? context.notifications
        : context.notifications.filter((item) => item.hotelId === context.selectedHotel);

    const scopedStaff =
      context.selectedHotel === 'ALL'
        ? context.staff
        : context.staff.filter((member) => member.hotelId === context.selectedHotel);

    return { ...context, scopedOrders, scopedBookings, scopedRevenue, scopedNotifications, scopedStaff };
  }, [context]);
};
