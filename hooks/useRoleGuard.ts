'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { canAccessRoute, useAppContext } from '@/context/AppContext';

export const useRoleGuard = () => {
  const { role, user } = useAppContext();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.replace('/auth');
      return;
    }

    if (!canAccessRoute(role, pathname)) {
      router.replace('/dashboard');
    }
  }, [pathname, role, router, user]);
};
