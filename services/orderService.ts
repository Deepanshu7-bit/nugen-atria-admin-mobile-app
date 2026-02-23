import { orders as orderMock } from '@/mock/orders';
import { Order, OrderStatus } from '@/types';
import { simulateDelay } from './utils';

let orders = [...orderMock];

export const orderService = {
  async getOrders() {
    return simulateDelay([...orders]);
  },
  async updateOrderStatus(orderId: string, status: OrderStatus) {
    orders = orders.map((order) => (order.id === orderId ? { ...order, status } : order));
    return simulateDelay(orders.find((order) => order.id === orderId) as Order, 300);
  },
  async rejectOrder(orderId: string) {
    return this.updateOrderStatus(orderId, 'REJECTED');
  }
};
