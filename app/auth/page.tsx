'use client';

import { useRouter } from 'next/navigation';
import { Card } from '@/components/Card';
import { useAppContext } from '@/context/AppContext';
import { authService } from '@/services/authService';
import { UserRole } from '@/types';

export default function AuthPage() {
  const { setUser } = useAppContext();
  const router = useRouter();

  const signInAs = async (role: UserRole) => {
    const user = await authService.signInAs(role);
    setUser(user);
    router.push('/dashboard');
  };

  return (
    <div className="grid">
      <Card title="Sign in (Mock Auth)">
        <p className="muted">Select a role profile to test role-based navigation and permissions.</p>
        <div className="actions">
          <button onClick={() => signInAs('OWNER')}>Sign in as Owner</button>
          <button onClick={() => signInAs('MANAGER')}>Sign in as Manager</button>
          <button onClick={() => signInAs('STAFF')}>Sign in as Staff</button>
        </div>
      </Card>
    </div>
  );
}
