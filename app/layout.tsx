import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { AppShell } from '@/components/AppShell';

export const metadata = {
  title: 'Atria Admin',
  description: 'Mobile-first hotel management admin app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
