import { revenueData } from '@/mock/revenue';
import { simulateDelay } from './utils';

export const revenueService = {
  async getRevenueData() {
    return simulateDelay(revenueData, 400);
  }
};
