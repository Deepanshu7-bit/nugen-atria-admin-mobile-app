'use client';

import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function NotificationsPage() {
  useRoleGuard();
  const { loading, scopedNotifications } = useScopedData();

  if (loading) return <LoadingState label="Loading notifications..." />;
  if (!scopedNotifications.length) return <EmptyState label="No notifications available." />;

  return (
    <div className="grid">
      {scopedNotifications.map((note) => (
        <Card key={note.id} title={note.type}>
          <p>{note.message}</p>
          <p className="muted">{new Date(note.createdAt).toLocaleString()}</p>
        </Card>
      ))}
    </div>
  );
}
