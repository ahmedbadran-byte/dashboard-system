import { LanguageProvider } from '@/components/providers/language-provider';
import { Sidebar } from '@/components/layout/sidebar';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider><div className="min-h-screen lg:flex">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div></LanguageProvider>
  );
}
