// Public company facts from addissystems.et; see resources/COMPANY-CONTENT-SOURCES.md.
export const company = {
  name: 'Addis Systems PLC',
  email: 'support@addissystems.et',
  office: 'Megenagna, City Mole building, 5th floor, Addis Ababa, Ethiopia',
  values: [
    { name: 'Trust', description: 'Honest relationships and dependable work.' },
    { name: 'Responsiveness', description: 'Listening carefully and adapting to client needs.' },
    { name: 'Creativity & value', description: 'Ideas that solve practical business problems.' },
    { name: 'Transparency', description: 'Open communication and clear accountability.' },
    { name: 'Security', description: 'Care for business data and operations.' },
  ],
  services: [
    { name: 'Solution configuration', description: 'Discuss how ERP and retail workflows can be configured around your business requirements.', icon: '▦' },
    { name: 'Integration planning', description: 'Review your existing systems and the connections your implementation needs.', icon: '⇄' },
    { name: 'Training & support', description: 'Talk through onboarding, team training, and ongoing product support. Scope and availability are agreed with our team.', icon: '↗' },
  ],
};
export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products and Service' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
] as const;
