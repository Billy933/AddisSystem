export const products = [
  { slug: 'hex-erp', name: 'HEX ERP', label: 'Your operations, connected', audience: 'For growing businesses', headline: 'A clearer view of your whole business.', description: 'Bring finance, inventory, sales, and day-to-day operations into the same conversation.', color: 'orange', logo: '/brand/erp-color.webp', workflows: ['Finance & reporting', 'Sales & purchasing', 'Inventory & operations'], detail: 'Move from disconnected records to a shared view of your operations. Start with the workflows that matter to your team, then plan implementation around your business.' },
  { slug: 'shelf', name: 'Shelf App', label: 'Your shop. In your pocket.', audience: 'For retailers & store managers', headline: 'Keep sales moving. Keep stock in view.', description: 'Mobile POS and inventory tools for the everyday rhythm of retail.', color: 'yellow', logo: '/brand/shelf-color.webp', workflows: ['Mobile point of sale', 'Stock management', 'Sales visibility'], detail: 'Make checkout, stock checks, and sales tracking part of one retail routine. Explore Shelf with your own store’s needs in mind.' },
  { slug: 'e-invoice', name: 'E-Invoice', label: 'A better way to bill', audience: 'For finance teams', headline: 'Less invoice admin. More business.', description: 'Bring structure to digital invoicing, customer records, and reporting as your team grows.', color: 'violet', logo: null, workflows: ['Digital invoicing', 'Customer & invoice history', 'Reports & exports'], detail: 'Choose an invoicing setup that fits your team and locations. Compare the plans, then speak with us about the details before you commit.' },
] as const;
export type ProductSlug = typeof products[number]['slug'];
export function inquiryHref(product?: string, plan?: string, cycle?: string) {
  const params = new URLSearchParams();
  if (product) params.set('product', product);
  if (plan) params.set('plan', plan);
  if (cycle) params.set('cycle', cycle);
  return '/contact' + (params.size ? '?' + params.toString() : '');
}
