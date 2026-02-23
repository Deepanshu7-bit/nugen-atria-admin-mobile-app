'use client';

import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { StatusBadge } from '@/components/StatusBadge';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function OrdersPage() {
  useRoleGuard();
  const { loading, scopedOrders, bookings, updateOrderStatus, rejectOrder } = useScopedData();

  if (loading) return <LoadingState label="Loading orders..." />;
  if (!scopedOrders.length) return <EmptyState label="No orders in this hotel scope." />;

  return (
    <div className="grid">
      {scopedOrders.map((order) => {
        const elapsedMinutes = Math.floor((Date.now() - new Date(order.createdAt).getTime()) / 60_000);
        const delayed = elapsedMinutes > order.preparationTime && !['DELIVERED', 'REJECTED'].includes(order.status);
        const checkedOutGuest = bookings.some(
          (booking) => booking.hotelId === order.hotelId && booking.roomNumber === order.roomNumber && booking.status === 'CHECKED_OUT'
        );

        return (
          <Card key={order.id} title={`Order ${order.id}`}>
            <div className={`grid ${delayed ? 'delayed' : ''}`}>
              <div className="row"><p>Room {order.roomNumber}</p><StatusBadge label={order.status} /></div>
              <p className="muted">Items: {order.items.map((item) => `${item.name} x${item.quantity}`).join(', ')}</p>
              <p>Total: ${order.totalAmount}</p>
              <p className="muted">Elapsed: {elapsedMinutes} min / SLA {order.preparationTime} min</p>
              {delayed && <p className="error">Delayed order - requires immediate action.</p>}
              {checkedOutGuest && order.status === 'PENDING' && (
                <p className="error">Guest checkout detected before order acceptance.</p>
              )}
            </div>
            <div className="actions">
              <button onClick={() => updateOrderStatus(order.id, 'ACCEPTED')}>Accept</button>
              <button onClick={() => rejectOrder(order.id)}>Reject</button>
              <button onClick={() => updateOrderStatus(order.id, 'PREPARING')}>Preparing</button>
              <button onClick={() => updateOrderStatus(order.id, 'DELIVERED')}>Delivered</button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
