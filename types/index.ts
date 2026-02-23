export type UserRole = 'OWNER' | 'MANAGER' | 'STAFF';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  assignedHotelIds: string[];
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'PENDING' | 'ACCEPTED' | 'PREPARING' | 'DELIVERED' | 'REJECTED';

export interface Order {
  id: string;
  hotelId: string;
  roomNumber: string;
  items: OrderItem[];
  totalAmount: number;
  createdAt: string;
  status: OrderStatus;
  preparationTime: number;
  assignedStaffId?: string;
}

export interface Booking {
  id: string;
  hotelId: string;
  guestName: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: 'ACTIVE' | 'CHECKED_OUT' | 'CANCELLED';
}

export interface StaffMember {
  id: string;
  hotelId: string;
  name: string;
  role: 'MANAGER' | 'CHEF' | 'HOUSEKEEPING' | 'FRONT_DESK';
  shift: string;
}

export interface RevenuePoint {
  date: string;
  hotelId: string;
  amount: number;
}

export interface AppNotification {
  id: string;
  hotelId: string;
  message: string;
  type: 'ORDER' | 'BOOKING' | 'SYSTEM';
  createdAt: string;
  read: boolean;
}

export type SelectedHotel = 'ALL' | string;

export interface AppState {
  user: User | null;
  role: UserRole | null;
  assignedHotels: Hotel[];
  selectedHotel: SelectedHotel;
  orders: Order[];
  bookings: Booking[];
  revenueData: RevenuePoint[];
  notifications: AppNotification[];
  staff: StaffMember[];
  hotels: Hotel[];
}
