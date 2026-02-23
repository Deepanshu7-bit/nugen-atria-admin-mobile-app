import { ReactNode } from 'react';

export function Card({ title, value, children }: { title: string; value?: string | number; children?: ReactNode }) {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      {value !== undefined && <p className="card-value">{value}</p>}
      {children}
    </div>
  );
}
