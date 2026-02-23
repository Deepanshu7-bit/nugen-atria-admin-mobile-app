'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserRole } from '@/types';

const navByRole: Record<UserRole, { href: string; label: string }[]> = {
  OWNER: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/orders', label: 'Orders' },
    { href: '/bookings', label: 'Bookings' },
    { href: '/staff', label: 'Staff' },
    { href: '/reports', label: 'Reports' },
    { href: '/notifications', label: 'Alerts' }
  ],
  MANAGER: [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/orders', label: 'Orders' },
    { href: '/bookings', label: 'Bookings' },
    { href: '/staff', label: 'Staff' },
    { href: '/notifications', label: 'Alerts' }
  ],
  STAFF: [
    { href: '/dashboard', label: 'Queue' },
    { href: '/orders', label: 'Orders' },
    { href: '/notifications', label: 'Tasks' }
  ]
};

export function BottomNav({ role }: { role: UserRole }) {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      {navByRole[role].map((item) => (
        <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
