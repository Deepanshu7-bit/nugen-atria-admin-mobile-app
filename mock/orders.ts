import { Order } from '@/types';

const now = Date.now();
const mins = (n: number) => new Date(now - n * 60_000).toISOString();

export const orders: Order[] = [
  { id: 'o1', hotelId: 'h1', roomNumber: '101', items: [{ id: 'i1', name: 'Club Sandwich', quantity: 1, price: 18 }], totalAmount: 18, createdAt: mins(55), status: 'PENDING', preparationTime: 20, assignedStaffId: 's1' },
  { id: 'o2', hotelId: 'h1', roomNumber: '220', items: [{ id: 'i2', name: 'Caesar Salad', quantity: 2, price: 12 }], totalAmount: 24, createdAt: mins(42), status: 'ACCEPTED', preparationTime: 25, assignedStaffId: 's1' },
  { id: 'o3', hotelId: 'h2', roomNumber: '308', items: [{ id: 'i3', name: 'Pasta', quantity: 1, price: 20 }], totalAmount: 20, createdAt: mins(15), status: 'PREPARING', preparationTime: 30, assignedStaffId: 's3' },
  { id: 'o4', hotelId: 'h2', roomNumber: '410', items: [{ id: 'i4', name: 'Fruit Bowl', quantity: 1, price: 10 }], totalAmount: 10, createdAt: mins(10), status: 'DELIVERED', preparationTime: 15, assignedStaffId: 's4' },
  { id: 'o5', hotelId: 'h3', roomNumber: '120', items: [{ id: 'i5', name: 'Coffee', quantity: 2, price: 5 }], totalAmount: 10, createdAt: mins(80), status: 'PENDING', preparationTime: 15, assignedStaffId: 's6' },
  { id: 'o6', hotelId: 'h1', roomNumber: '115', items: [{ id: 'i6', name: 'Steak', quantity: 1, price: 32 }], totalAmount: 32, createdAt: mins(33), status: 'PREPARING', preparationTime: 20, assignedStaffId: 's1' },
  { id: 'o7', hotelId: 'h3', roomNumber: '402', items: [{ id: 'i7', name: 'Soup', quantity: 1, price: 9 }], totalAmount: 9, createdAt: mins(5), status: 'ACCEPTED', preparationTime: 18, assignedStaffId: 's6' },
  { id: 'o8', hotelId: 'h2', roomNumber: '206', items: [{ id: 'i8', name: 'Burger', quantity: 1, price: 14 }], totalAmount: 14, createdAt: mins(95), status: 'PENDING', preparationTime: 22, assignedStaffId: 's3' },
  { id: 'o9', hotelId: 'h1', roomNumber: '330', items: [{ id: 'i9', name: 'Tea', quantity: 1, price: 4 }], totalAmount: 4, createdAt: mins(65), status: 'REJECTED', preparationTime: 10, assignedStaffId: 's2' },
  { id: 'o10', hotelId: 'h3', roomNumber: '118', items: [{ id: 'i10', name: 'Omelette', quantity: 1, price: 11 }], totalAmount: 11, createdAt: mins(28), status: 'DELIVERED', preparationTime: 16, assignedStaffId: 's6' },
  { id: 'o11', hotelId: 'h2', roomNumber: '251', items: [{ id: 'i11', name: 'Wrap', quantity: 1, price: 13 }], totalAmount: 13, createdAt: mins(70), status: 'PENDING', preparationTime: 25, assignedStaffId: 's3' }
];
