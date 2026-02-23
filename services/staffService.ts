import { staffMembers } from '@/mock/staff';
import { simulateDelay } from './utils';

export const staffService = {
  async getStaff() {
    return simulateDelay(staffMembers, 300);
  }
};
