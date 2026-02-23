import { Booking } from '@/types';

export const bookings: Booking[] = [
  { id: 'b1', hotelId: 'h1', guestName: 'Lucas Green', roomNumber: '101', checkIn: '2026-02-20', checkOut: '2026-02-25', status: 'ACTIVE' },
  { id: 'b2', hotelId: 'h1', guestName: 'Sophie Stone', roomNumber: '220', checkIn: '2026-02-22', checkOut: '2026-02-24', status: 'ACTIVE' },
  { id: 'b3', hotelId: 'h1', guestName: 'Mason Hall', roomNumber: '115', checkIn: '2026-02-19', checkOut: '2026-02-21', status: 'CHECKED_OUT' },
  { id: 'b4', hotelId: 'h2', guestName: 'Aria West', roomNumber: '308', checkIn: '2026-02-21', checkOut: '2026-02-26', status: 'ACTIVE' },
  { id: 'b5', hotelId: 'h2', guestName: 'Henry Cole', roomNumber: '410', checkIn: '2026-02-18', checkOut: '2026-02-20', status: 'CHECKED_OUT' },
  { id: 'b6', hotelId: 'h2', guestName: 'Ella Cruz', roomNumber: '206', checkIn: '2026-02-24', checkOut: '2026-02-27', status: 'ACTIVE' },
  { id: 'b7', hotelId: 'h3', guestName: 'James Ford', roomNumber: '120', checkIn: '2026-02-20', checkOut: '2026-02-23', status: 'ACTIVE' },
  { id: 'b8', hotelId: 'h3', guestName: 'Zoe Price', roomNumber: '402', checkIn: '2026-02-23', checkOut: '2026-02-24', status: 'CANCELLED' },
  { id: 'b9', hotelId: 'h3', guestName: 'Leo Burns', roomNumber: '118', checkIn: '2026-02-22', checkOut: '2026-02-28', status: 'ACTIVE' },
  { id: 'b10', hotelId: 'h1', guestName: 'Nina Park', roomNumber: '330', checkIn: '2026-02-20', checkOut: '2026-02-22', status: 'CHECKED_OUT' },
  { id: 'b11', hotelId: 'h2', guestName: 'Ryan Dale', roomNumber: '251', checkIn: '2026-02-22', checkOut: '2026-02-25', status: 'ACTIVE' }
];
