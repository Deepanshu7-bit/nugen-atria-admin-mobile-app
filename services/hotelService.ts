import { hotels } from '@/mock/hotels';
import { simulateDelay } from './utils';

export const hotelService = {
  async getHotels() {
    return simulateDelay(hotels);
  }
};
