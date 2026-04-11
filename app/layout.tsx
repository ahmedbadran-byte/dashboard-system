import './globals.css';
import type { Metadata } from 'next';
import { LanguageProvider } from '@/components/providers/language-provider';

export const metadata: Metadata = {
  title: 'Kleen Management System',
  description: 'Configurable internal management system for decision support.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
