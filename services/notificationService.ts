import { notifications } from '@/mock/notifications';
import { simulateDelay } from './utils';

export const notificationService = {
  async getNotifications() {
    return simulateDelay(notifications, 250);
  }
};
