// Private design-review fixtures. Never import these amounts in client components.
export const invoiceTiers = [
  { name: 'Starter', fit: 'A focused start', description: 'For a single business getting its invoicing organized.', monthly: 3200, annual: 35900, users: '2 users', locations: '1 location', features: ['Core digital invoicing', 'Customer & invoice history', 'Standard reports & exports', 'Standard remote support'] },
  { name: 'Business', fit: 'Room for your team', description: 'For a growing team that needs more visibility and guidance.', monthly: 4900, annual: 51900, users: '5 users', locations: '1 location', features: ['Everything in Starter', 'Invoicing analytics', 'Transaction management', 'Assisted onboarding', 'Priority remote support'] },
  { name: 'Professional', fit: 'Across your locations', description: 'For teams coordinating invoicing across several locations.', monthly: 6500, annual: 61900, users: '15 users', locations: 'Up to 3 locations', features: ['Everything in Business', 'Advanced reporting', 'Extended admin governance', 'Priority technical escalation'] },
];
export function annualSavings(monthly, annual) { return monthly * 12 - annual; }
export function allowPreviewPricing(env) {
  return env.PREVIEW_PRICING === 'true' && env.VERCEL_ENV !== 'production' &&
    (env.NODE_ENV === 'development' || env.VERCEL_ENV === 'preview');
}
