import { users } from '@/mock/users';
import { UserRole } from '@/types';
import { simulateDelay } from './utils';

export const authService = {
  async signInAs(role: UserRole) {
    const user = users.find((item) => item.role === role) ?? users[0];
    return simulateDelay(user, 350);
  }
};
