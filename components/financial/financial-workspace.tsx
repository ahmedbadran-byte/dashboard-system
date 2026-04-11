'use client';

import { useMemo, useState } from 'react';
import { costAccountingTable, financialBaseInputs, type FinancialTabKey } from '@/lib/mock-data';
import clsx from 'clsx';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const tabs: Record<FinancialTabKey, string> = {
  cvp: 'CVP Analysis',
  breakEven: 'Break-Even Analysis',
  cba: 'Cost-Benefit Analysis',
  costAccounting: 'Cost Accounting'
};

export function FinancialWorkspace() {
  const [activeTab, setActiveTab] = useState<FinancialTabKey>('cvp');

  const [cvpInputs, setCvpInputs] = useState(financialBaseInputs.cvp);
  const [breakEvenInputs, setBreakEvenInputs] = useState(financialBaseInputs.breakEven);
  const [cbaInputs, setCbaInputs] = useState(financialBaseInputs.cba);

  const cvpResult = useMemo(() => {
    const contributionPerUnit = cvpInputs.price - cvpInputs.variableCost;
    const contributionMarginRatio = contributionPerUnit / cvpInputs.price;
    const operatingIncome = contributionPerUnit * cvpInputs.volume - cvpInputs.fixedCost;
    return { contributionPerUnit, contributionMarginRatio, operatingIncome };
  }, [cvpInputs]);

  const breakEvenResult = useMemo(() => {
    const contributionPerUnit = breakEvenInputs.price - breakEvenInputs.variableCost;
    const breakEvenUnits = breakEvenInputs.fixedCost / contributionPerUnit;
    const expectedProfit = contributionPerUnit * breakEvenInputs.volume - breakEvenInputs.fixedCost;
    return { breakEvenUnits, breakEvenRevenue: breakEvenUnits * breakEvenInputs.price, expectedProfit };
  }, [breakEvenInputs]);

  const cbaResult = useMemo(() => {
    const netBenefit = cbaInputs.expectedBenefit - cbaInputs.investment - cbaInputs.operatingCost;
    const ratio = cbaInputs.expectedBenefit / (cbaInputs.investment + cbaInputs.operatingCost);
    const monthlyPayback = cbaInputs.investment / (cbaInputs.expectedBenefit / cbaInputs.horizonMonths);
    return { netBenefit, ratio, monthlyPayback };
  }, [cbaInputs]);

  const trendData = useMemo(
    () => [
      { month: 'Jan', actual: 0.84, plan: 0.8 },
      { month: 'Feb', actual: 0.9, plan: 0.86 },
      { month: 'Mar', actual: 0.98, plan: 0.93 },
      { month: 'Apr', actual: 1.06, plan: 1.01 },
      { month: 'May', actual: 1.12, plan: 1.08 },
      { month: 'Jun', actual: 1.21, plan: 1.16 }
    ],
    []
  );

  const renderDynamicSection = () => {
    if (activeTab === 'cvp') {
      return (
        <>
          <InputGrid
            title="CVP Inputs"
            fields={[
              { label: 'Price per Unit ($)', value: cvpInputs.price, onChange: (value) => setCvpInputs((prev) => ({ ...prev, price: value })) },
              {
                label: 'Variable Cost per Unit ($)',
                value: cvpInputs.variableCost,
                onChange: (value) => setCvpInputs((prev) => ({ ...prev, variableCost: value }))
              },
              { label: 'Fixed Cost ($)', value: cvpInputs.fixedCost, onChange: (value) => setCvpInputs((prev) => ({ ...prev, fixedCost: value })) },
              { label: 'Volume (units)', value: cvpInputs.volume, onChange: (value) => setCvpInputs((prev) => ({ ...prev, volume: value })) }
            ]}
          />
          <MetricsCards
            rows={[
              { label: 'Contribution / Unit', value: `$${cvpResult.contributionPerUnit.toFixed(2)}` },
              { label: 'Contribution Margin Ratio', value: `${(cvpResult.contributionMarginRatio * 100).toFixed(1)}%` },
              { label: 'Operating Income', value: `$${cvpResult.operatingIncome.toLocaleString()}` }
            ]}
          />
        </>
      );
    }

    if (activeTab === 'breakEven') {
      return (
        <>
          <InputGrid
            title="Break-Even Inputs"
            fields={[
              {
                label: 'Price per Unit ($)',
                value: breakEvenInputs.price,
                onChange: (value) => setBreakEvenInputs((prev) => ({ ...prev, price: value }))
              },
              {
                label: 'Variable Cost per Unit ($)',
                value: breakEvenInputs.variableCost,
                onChange: (value) => setBreakEvenInputs((prev) => ({ ...prev, variableCost: value }))
              },
              {
                label: 'Fixed Cost ($)',
                value: breakEvenInputs.fixedCost,
                onChange: (value) => setBreakEvenInputs((prev) => ({ ...prev, fixedCost: value }))
              },
              {
                label: 'Forecast Volume (units)',
                value: breakEvenInputs.volume,
                onChange: (value) => setBreakEvenInputs((prev) => ({ ...prev, volume: value }))
              }
            ]}
          />
          <MetricsCards
            rows={[
              { label: 'Break-Even Units', value: `${Math.round(breakEvenResult.breakEvenUnits).toLocaleString()} units` },
              { label: 'Break-Even Revenue', value: `$${Math.round(breakEvenResult.breakEvenRevenue).toLocaleString()}` },
              { label: 'Expected Profit', value: `$${Math.round(breakEvenResult.expectedProfit).toLocaleString()}` }
            ]}
          />
        </>
      );
    }

    if (activeTab === 'cba') {
      return (
        <>
          <InputGrid
            title="Cost-Benefit Inputs"
            fields={[
              {
                label: 'Investment ($)',
                value: cbaInputs.investment,
                onChange: (value) => setCbaInputs((prev) => ({ ...prev, investment: value }))
              },
              {
                label: 'Expected Benefit ($)',
                value: cbaInputs.expectedBenefit,
                onChange: (value) => setCbaInputs((prev) => ({ ...prev, expectedBenefit: value }))
              },
              {
                label: 'Operating Cost ($)',
                value: cbaInputs.operatingCost,
                onChange: (value) => setCbaInputs((prev) => ({ ...prev, operatingCost: value }))
              },
              {
                label: 'Horizon (months)',
                value: cbaInputs.horizonMonths,
                onChange: (value) => setCbaInputs((prev) => ({ ...prev, horizonMonths: value }))
              }
            ]}
          />
          <MetricsCards
            rows={[
              { label: 'Net Benefit', value: `$${Math.round(cbaResult.netBenefit).toLocaleString()}` },
              { label: 'Benefit-Cost Ratio', value: cbaResult.ratio.toFixed(2) },
              { label: 'Payback Period', value: `${cbaResult.monthlyPayback.toFixed(1)} months` }
            ]}
          />
        </>
      );
    }

    return (
      <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="card p-5">
          <h3 className="text-sm font-semibold text-slate-900">Cost Accounting Trend</h3>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#0d9488" strokeWidth={3} dot />
                <Line type="monotone" dataKey="plan" stroke="#f59e0b" strokeWidth={2} strokeDasharray="6 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Value</th>
                <th className="px-4 py-3 font-semibold">Comment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {costAccountingTable.map((row) => (
                <tr key={row.item}>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.item}</td>
                  <td className="px-4 py-3">{row.value}</td>
                  <td className="px-4 py-3 text-slate-600">{row.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <section className="space-y-4 p-4 md:p-6">
      <div className="card p-4">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(tabs) as FinancialTabKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                activeTab === tab ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              )}
            >
              {tabs[tab]}
            </button>
          ))}
        </div>
      </div>

      {renderDynamicSection()}
    </section>
  );
}

function InputGrid({
  title,
  fields
}: {
  title: string;
  fields: Array<{ label: string; value: number; onChange: (value: number) => void }>;
}) {
  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.label} className="space-y-1 text-sm">
            <span className="font-medium text-slate-700">{field.label}</span>
            <input
              type="number"
              value={field.value}
              onChange={(event) => field.onChange(Number(event.target.value))}
              className="w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        ))}
      </div>
    </div>
  );
}

function MetricsCards({ rows }: { rows: Array<{ label: string; value: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {rows.map((row) => (
        <article key={row.label} className="card p-5">
          <p className="text-sm text-slate-500">{row.label}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{row.value}</p>
        </article>
      ))}
    </div>
  );
}
