export type OrderStatus = 'PENDING' | 'ACCEPTED' | 'PREPARING' | 'DELIVERED' | 'REJECTED';

export interface Order {
  id: string;
  roomNumber: string;
  totalAmount: number;
  status: OrderStatus;
  items: string[];
}

export interface Booking {
  id: string;
  guestName: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: 'ACTIVE' | 'CHECKED_OUT' | 'CANCELLED';
}
