'use client';

import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { StatusBadge } from '@/components/StatusBadge';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function BookingsPage() {
  useRoleGuard();
  const { loading, scopedBookings } = useScopedData();

  if (loading) return <LoadingState label="Loading bookings..." />;
  if (!scopedBookings.length) return <EmptyState label="No bookings for selected hotel." />;

  return (
    <div className="grid">
      {scopedBookings.map((booking) => (
        <Card key={booking.id} title={`${booking.guestName} (${booking.id})`}>
          <div className="row">
            <p>Room {booking.roomNumber}</p>
            <StatusBadge label={booking.status} />
          </div>
          <p className="muted">Check-in: {booking.checkIn}</p>
          <p className="muted">Check-out: {booking.checkOut}</p>
        </Card>
      ))}
    </div>
  );
}
