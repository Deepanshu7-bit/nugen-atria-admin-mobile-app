import { Booking, Order } from '../types/domain';

export const orders: Order[] = [
  { id: 'o-1001', roomNumber: '101', totalAmount: 26, status: 'PENDING', items: ['Club Sandwich', 'Orange Juice'] },
  { id: 'o-1002', roomNumber: '220', totalAmount: 42, status: 'PREPARING', items: ['Pasta', 'Minestrone Soup'] },
  { id: 'o-1003', roomNumber: '411', totalAmount: 18, status: 'DELIVERED', items: ['Caesar Salad'] }
];

export const bookings: Booking[] = [
  { id: 'b-810', guestName: 'Sarah Jones', roomNumber: '314', checkIn: '2026-02-20', checkOut: '2026-02-24', status: 'ACTIVE' },
  { id: 'b-811', guestName: 'Marcus Lee', roomNumber: '210', checkIn: '2026-02-22', checkOut: '2026-02-26', status: 'ACTIVE' },
  { id: 'b-812', guestName: 'Ava Patel', roomNumber: '119', checkIn: '2026-02-18', checkOut: '2026-02-23', status: 'CHECKED_OUT' }
];
