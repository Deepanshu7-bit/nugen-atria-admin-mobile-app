'use client';

import { Card } from '@/components/Card';
import { EmptyState } from '@/components/EmptyState';
import { LoadingState } from '@/components/LoadingState';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function StaffPage() {
  useRoleGuard();
  const { loading, scopedStaff, role } = useScopedData();

  if (loading) return <LoadingState label="Loading staff..." />;
  if (!scopedStaff.length) return <EmptyState label="No staff in this hotel scope." />;

  return (
    <div className="grid">
      {scopedStaff.map((member) => (
        <Card key={member.id} title={member.name}>
          <div className="row">
            <p>{member.role}</p>
            <p className="muted">{member.shift}</p>
          </div>
          {role === 'MANAGER' && <p className="muted">Manager mode: limited editing permissions.</p>}
        </Card>
      ))}
    </div>
  );
}
