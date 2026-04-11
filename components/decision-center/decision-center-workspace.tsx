'use client';

import { departments, getDecisionItems } from '@/lib/mock-data';
import { useLanguage } from '@/components/providers/language-provider';

function departmentName(slug: string, language: 'en' | 'ar') {
  const department = departments.find((item) => item.slug === slug);
  if (!department) return slug;
  return language === 'ar' ? department.nameAr : department.nameEn;
}

export function DecisionCenterWorkspace() {
  const { language, t } = useLanguage();
  const { alerts, insights, recommendations } = getDecisionItems();

  return (
    <section className="space-y-6 p-4 md:p-6">
      <section className="card p-5">
        <h3 className="text-lg font-semibold text-slate-900">{t('alerts')}</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {alerts.length === 0 ? (
            <p className="text-sm text-slate-500">No alerts available.</p>
          ) : (
            alerts.map((alert) => (
              <article key={alert.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-slate-900">{alert.title}</p>
                  <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700">{alert.severity}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{alert.description}</p>
                <p className="mt-3 text-xs text-slate-500">Department: {departmentName(alert.departmentSlug, language)}</p>
                <p className="text-xs text-slate-500">Period: {alert.period}</p>
                <p className="text-xs text-slate-500">Report: {alert.reportRef}</p>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="card p-5">
        <h3 className="text-lg font-semibold text-slate-900">{t('insights')}</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {insights.length === 0 ? (
            <p className="text-sm text-slate-500">No insights available.</p>
          ) : (
            insights.map((insight) => (
              <article key={insight.id} className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-700">{insight.summary}</p>
                <p className="mt-3 text-xs text-slate-500">Department: {departmentName(insight.departmentSlug, language)}</p>
                <p className="text-xs text-slate-500">Period: {insight.period}</p>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="card p-5">
        <h3 className="text-lg font-semibold text-slate-900">{t('recommendations')}</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {recommendations.length === 0 ? (
            <p className="text-sm text-slate-500">No recommendations available.</p>
          ) : (
            recommendations.map((recommendation) => (
              <article key={recommendation.id} className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-700">{recommendation.action}</p>
                <p className="mt-3 text-xs text-slate-500">Department: {departmentName(recommendation.departmentSlug, language)}</p>
                <p className="text-xs text-slate-500">Period: {recommendation.period}</p>
                <p className="text-xs text-slate-500">Related Report: {recommendation.reportRef}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </section>
  );
}
