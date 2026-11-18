import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA, SectionTitle } from '@/components/ui';
export const metadata: Metadata = { title: 'Blog', description: 'Explore Addis Systems writing about business software, digital invoicing, retail, and delivery operations.' };
const topics = [
  { category: 'BUSINESS OPERATIONS', title: 'Making sense of ERP as your business grows', description: 'How a shared system can help teams organize their growing operational needs.', icon: '▦' },
  { category: 'DIGITAL INVOICING', title: 'A clearer approach to everyday finance', description: 'Explore the shift from manual billing tasks toward digital invoice workflows.', icon: '≋' },
  { category: 'LOGISTICS & COMMERCE', title: 'The changing shape of delivery in Ethiopia', description: 'Perspectives on coordinating delivery providers, customers, and the last mile.', icon: '⇄' },
];
export default function Blog() { return <>
  <section className="page-intro container"><p className="eyebrow"><span />ADDIS SYSTEMS BLOG</p><h1>Ideas for business.<br /><span className="accent">Perspective for what’s next.</span></h1><p className="lead">Explore business software, digital commerce, and the workflows connecting them.</p></section>
  <section className="section soft-section"><div className="container"><SectionTitle eyebrow="FROM OUR EXISTING BLOG" title="Explore the conversations." /><p className="blog-context">These topic summaries introduce writing on our current website. Follow the links to browse the original posts.</p><div className="blog-grid">{topics.map((topic,i) => <article key={topic.category} className="blog-card"><div className={`blog-art blog-art-${i}`} aria-hidden="true"><span>{topic.icon}</span><div className="blog-art-lines"><i /><i /><i /></div><small>ADDIS SYSTEMS · PERSPECTIVES</small></div><div className="blog-card-body"><p className="eyebrow">{topic.category}</p><h2>{topic.title}</h2><p>{topic.description}</p><a className="text-link" href="https://www.addissystems.et/blog" target="_blank" rel="noopener noreferrer">Browse the original blog <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div></article>)}</div></div></section>
  <section className="section container blog-cta"><div><p className="eyebrow">TURN IDEAS INTO YOUR NEXT STEP</p><h2>Find the tool behind the workflow.</h2></div><Link className="button" href="/products">Explore products and service <span aria-hidden="true">↗</span></Link></section><CTA />
  </>; }
