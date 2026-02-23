'use client';

import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function DashboardPage() {
  useRoleGuard();
  const { loading, error, role, scopedOrders, scopedBookings, scopedRevenue, hotels, selectedHotel } = useScopedData();

  if (loading) return <LoadingState />;
  if (error) return <p className="error">{error}</p>;

  const totalRevenue = scopedRevenue.reduce((sum, item) => sum + item.amount, 0);
  const activeOrders = scopedOrders.filter((o) => ['PENDING', 'ACCEPTED', 'PREPARING'].includes(o.status)).length;
  const activeBookings = scopedBookings.filter((booking) => booking.status === 'ACTIVE').length;

  if (!scopedOrders.length && !scopedBookings.length) {
    return <EmptyState label="No data found for this hotel scope." />;
  }

  return (
    <div className="grid">
      {role === 'OWNER' && (
        <>
          <div className="grid two">
            <Card title="Aggregated Revenue" value={`$${totalRevenue.toLocaleString()}`} />
            <Card title="Hotels in Scope" value={selectedHotel === 'ALL' ? hotels.length : 1} />
          </div>
          <Card title="Hotel Comparison">
            {hotels.map((hotel) => {
              const hotelRevenue = scopedRevenue
                .filter((item) => item.hotelId === hotel.id)
                .reduce((sum, item) => sum + item.amount, 0);
              return (
                <div key={hotel.id} className="row">
                  <p>{hotel.name}</p>
                  <p>${hotelRevenue.toLocaleString()}</p>
                </div>
              );
            })}
          </Card>
          <Card title="Revenue Graph (Last 30 Days Mock)">
            <p className="muted">Trend index: {Math.round(totalRevenue / 30).toLocaleString()} avg/day</p>
          </Card>
        </>
      )}

      {role === 'MANAGER' && (
        <div className="grid two">
          <Card title="Hotel Revenue" value={`$${totalRevenue.toLocaleString()}`} />
          <Card title="Active Bookings" value={activeBookings} />
          <Card title="Active Orders" value={activeOrders} />
          <Card title="Operations Health" value={activeOrders > 8 ? 'Busy' : 'Stable'} />
        </div>
      )}

      {role === 'STAFF' && (
        <Card title="Order Queue" value={activeOrders}>
          <p className="muted">Only operational queue and task visibility is enabled for staff role.</p>
        </Card>
      )}
    </div>
  );
}
