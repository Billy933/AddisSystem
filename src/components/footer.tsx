import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { company } from '@/lib/company';
export function Footer() { return <footer className="footer"><div className="container"><div className="footer-grid">
  <div><Link href="/"><Image src="/brand/addis-white.webp" alt="Addis Systems" width={220} height={42} /></Link><p>Software for the way<br />your business moves.</p><span className="footer-location">{company.office}</span></div>
  <div><h2>Products and Service</h2><Link href="/products">Explore all solutions</Link>{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.name}</Link>)}</div>
  <div><h2>Explore</h2><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact Us</Link></div>
  <div><h2>Start a conversation</h2><p>From your first question to<br />your next implementation.</p><a href={`mailto:${company.email}`}>{company.email}</a><Link href="/contact" className="footer-cta">Talk to Addis Systems ↗</Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Addis Systems PLC</span><span>HEX ERP · Shelf App · E-Invoice</span><a href="#top">Back to top ↑</a></div></div></footer>; }
