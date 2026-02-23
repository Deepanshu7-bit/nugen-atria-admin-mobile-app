import { bookings } from '@/mock/bookings';
import { simulateDelay } from './utils';

export const bookingService = {
  async getBookings() {
    return simulateDelay(bookings);
  }
};
