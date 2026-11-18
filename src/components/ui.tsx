import Link from 'next/link';
import type { ReactNode } from 'react';
export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>; }
export function Button({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) { return <Link className={`button ${light ? 'button-light' : ''}`} href={href}>{children}<Arrow /></Link>; }
export function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) { return <div className="section-title"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{children && <p className="lead">{children}</p>}</div>; }
export function CTA() { return <section className="container"><div className="cta"><div><p className="eyebrow">LET’S TALK ABOUT YOUR BUSINESS</p><h2>Your next chapter.<br /><span>A clearer way to work.</span></h2></div><div><p>Tell us what you’re working on.<br />We’ll help you find the right product.</p><Button href="/contact" light>Let’s find your fit</Button></div><span className="cta-orbit" aria-hidden="true" /></div></section>; }
