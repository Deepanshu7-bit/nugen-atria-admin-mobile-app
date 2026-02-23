import { OrderStatus } from '@/types';

const map: Record<string, string> = {
  DELIVERED: 'status delivered',
  PREPARING: 'status preparing',
  ACCEPTED: 'status active',
  PENDING: 'status active',
  REJECTED: 'status rejected',
  ACTIVE: 'status active'
};

export function StatusBadge({ label }: { label: OrderStatus | string }) {
  return <span className={map[label] ?? 'status'}>{label}</span>;
}
