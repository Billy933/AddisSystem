import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
import '@/components/home-refinements.css';
import '@/components/reference-design.css';
import '@/components/future-home.css';
export const metadata: Metadata = { title: { default: 'Addis Systems — Business, better connected', template: '%s | Addis Systems' }, description: 'Explore HEX ERP, Shelf App, and E-Invoice. Business operations, retail sales, and digital invoicing from Addis Systems PLC.', robots: { index: false, follow: false } };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>; }
