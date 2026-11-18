import Image from 'next/image';
import { Button } from '@/components/ui';
import Link from 'next/link';
import './main-banner.css';

export function MainBanner() {
  return <section className="main-banner" aria-labelledby="banner-title">
    <div className="banner-copy"><div className="banner-copy-inner">
      <p className="eyebrow">ERP · RETAIL · E-INVOICING</p>
      <h1 id="banner-title">Your business.<br /><span>Better connected.</span></h1>
      <p className="banner-intro">Bring your operations, sales, and invoicing into focus with Addis Systems.</p>
      <div className="banner-actions"><Button href="/contact" light>Book a walkthrough</Button><Link className="banner-secondary" href="#products">Explore our products <span aria-hidden="true">↗</span></Link></div>
      <div className="banner-product-links" aria-label="Our product family"><Link href="/products/hex-erp">HEX ERP<span>Business operations</span></Link><Link href="/products/shelf">Shelf App<span>Everyday retail</span></Link><Link href="/products/e-invoice">E-Invoice<span>Digital billing</span></Link></div>
    </div></div>
    <div className="banner-art">
      <Image className="banner-desktop-image" src="/media/home-banner.webp" alt="Illustrative business software dashboards displayed across a desktop monitor, phone, and tablet." width={1944} height={809} sizes="(max-width: 820px) 1px, 100vw" preload />
      <Image className="banner-mobile-image" src="/media/main-banner-mobile.webp" alt="Illustrative HEX ERP, Shelf, and E-Invoice screens on a monitor, phone, and tablet." width={900} height={563} sizes="(max-width: 820px) 100vw, 1px" />
    </div>
  </section>;
}

