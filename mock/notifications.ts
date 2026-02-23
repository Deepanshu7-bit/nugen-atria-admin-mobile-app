import { AppNotification } from '@/types';

export const notifications: AppNotification[] = [
  { id: 'n1', hotelId: 'h1', message: 'Order o1 delayed beyond prep SLA.', type: 'ORDER', createdAt: new Date().toISOString(), read: false },
  { id: 'n2', hotelId: 'h2', message: 'VIP guest checked in to room 308.', type: 'BOOKING', createdAt: new Date().toISOString(), read: false },
  { id: 'n3', hotelId: 'h3', message: 'Kitchen maintenance planned at 10 PM.', type: 'SYSTEM', createdAt: new Date().toISOString(), read: true },
  { id: 'n4', hotelId: 'h1', message: 'Guest in room 115 checked out before order acceptance.', type: 'BOOKING', createdAt: new Date().toISOString(), read: false }
];
