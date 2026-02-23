'use client';

import { Card } from '@/components/Card';
import { useRoleGuard } from '@/hooks/useRoleGuard';
import { useScopedData } from '@/hooks/useScopedData';

export default function ReportsPage() {
  useRoleGuard();
  const { scopedRevenue, scopedOrders } = useScopedData();

  const revenue = scopedRevenue.reduce((sum, item) => sum + item.amount, 0);
  const delivered = scopedOrders.filter((order) => order.status === 'DELIVERED').length;

  return (
    <div className="grid">
      <Card title="Financial Report Snapshot" value={`$${revenue.toLocaleString()}`}>
        <p className="muted">Mock export is prepared for future API-connected reporting backend.</p>
      </Card>
      <Card title="Operational Completion" value={`${delivered} delivered orders`} />
    </div>
  );
}
