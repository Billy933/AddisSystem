'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/lib/company';
import { products } from '@/lib/products';

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function dismiss(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);
  return <header className={`site-header${path === '/' ? ' home-floating-header' : ''}`} ref={header}><div className="container nav">
    <Link href="/" aria-label="Addis Systems home" onClick={() => setOpen(false)}><Image src="/brand/addis-color.webp" alt="Addis Systems" width={210} height={40} priority /></Link>
    <button className="menu-toggle" ref={toggle} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button>
    <nav id="main-nav" className={open ? 'is-open' : ''} aria-label="Main navigation">{navigation.map(item => item.href === '/products' ? <details className="product-nav" key={item.href} onKeyDown={event => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }}><summary>{item.label}<span aria-hidden="true">⌄</span></summary><div className="product-dropdown"><Link href="/products" onClick={event => { setOpen(false); event.currentTarget.closest('details')?.removeAttribute('open'); }}>All products and services</Link>{products.map(product => <Link key={product.slug} href={`/products/${product.slug}`} aria-current={path === `/products/${product.slug}` ? 'page' : undefined} onClick={event => { setOpen(false); event.currentTarget.closest('details')?.removeAttribute('open'); }}>{product.name}<small>{product.audience}</small></Link>)}</div></details> : <Link key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined} className={item.href === '/contact' ? 'button nav-button' : undefined} onClick={() => setOpen(false)}>{item.label}{item.href === '/contact' && <span aria-hidden="true">↗</span>}</Link>)}</nav>
  </div></header>;
}
