import { User } from '@/types';

export const users: User[] = [
  { id: 'u1', name: 'Olivia Owner', role: 'OWNER', assignedHotelIds: ['h1', 'h2', 'h3'] },
  { id: 'u2', name: 'Mark Manager', role: 'MANAGER', assignedHotelIds: ['h1'] },
  { id: 'u3', name: 'Sam Staff', role: 'STAFF', assignedHotelIds: ['h1'] }
];
