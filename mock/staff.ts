import { StaffMember } from '@/types';

export const staffMembers: StaffMember[] = [
  { id: 's1', hotelId: 'h1', name: 'Ava Chef', role: 'CHEF', shift: 'Morning' },
  { id: 's2', hotelId: 'h1', name: 'Noah Front Desk', role: 'FRONT_DESK', shift: 'Evening' },
  { id: 's3', hotelId: 'h2', name: 'Emma Chef', role: 'CHEF', shift: 'Night' },
  { id: 's4', hotelId: 'h2', name: 'Liam Housekeeping', role: 'HOUSEKEEPING', shift: 'Morning' },
  { id: 's5', hotelId: 'h3', name: 'Mia Manager', role: 'MANAGER', shift: 'Day' },
  { id: 's6', hotelId: 'h3', name: 'Ethan Chef', role: 'CHEF', shift: 'Evening' }
];
