'use client';

import { useLanguage } from '@/components/providers/language-provider';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value as 'en' | 'ar')}
      className="rounded-lg border border-slate-300 px-2 py-1 text-sm"
      aria-label="Language Switcher"
    >
      <option value="en">English</option>
      <option value="ar">العربية</option>
    </select>
  );
}
