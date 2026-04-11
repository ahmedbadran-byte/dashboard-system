import type { DecisionItemCollection } from '@/lib/mock-data';

const emptyDecisionItems: DecisionItemCollection = {
  alerts: [],
  insights: [],
  recommendations: []
};

export function normalizeDecisionItems(input: Partial<DecisionItemCollection> | undefined): DecisionItemCollection {
  return {
    alerts: Array.isArray(input?.alerts) ? input.alerts : emptyDecisionItems.alerts,
    insights: Array.isArray(input?.insights) ? input.insights : emptyDecisionItems.insights,
    recommendations: Array.isArray(input?.recommendations) ? input.recommendations : emptyDecisionItems.recommendations
  };
}
