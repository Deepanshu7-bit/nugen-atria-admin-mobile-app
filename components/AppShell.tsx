'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { BottomNav } from './BottomNav';
import { HotelSwitcher } from './HotelSwitcher';
import { useAppContext } from '@/context/AppContext';

export function AppShell({ children }: { children: ReactNode }) {
  const { user } = useAppContext();
  const pathname = usePathname();

  if (pathname === '/auth') {
    return <>{children}</>;
  }

  return (
    <div className="app-shell">
      <header className="header">
        <div>
          <p className="muted">Hotel Management Admin</p>
          <h1>{user?.name ?? 'Welcome'}</h1>
        </div>
        <HotelSwitcher />
      </header>
      <main className="content">{children}</main>
      {user && <BottomNav role={user.role} />}
    </div>
  );
}
