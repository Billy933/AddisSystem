import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from './ui';

const testimonials = [
  { name: 'Elon Travel Service', quote: 'Exceptional Service!' },
  { name: 'Rose Travel Agency', quote: 'Truly Outstanding!' },
  { name: 'Bridge Tech PLC', quote: 'A Seamless Experience!' },
];
const clientWork = [
  { name: 'Elon Travel Service', area: 'Travel & service', modules: ['CRM', 'HR management'] },
  { name: 'Rose Travel Agency', area: 'Travel & service', modules: ['CRM'] },
  { name: 'Bridge Tech PLC', area: 'Business operations', modules: ['HR', 'CRM', 'Sales', 'Inventory', 'Purchasing', 'Projects'] },
  { name: 'Addis Transformer and Switch Gears PLC', area: 'Business operations', modules: ['Finance', 'HR', 'Sales', 'Projects', 'Purchasing', 'Inventory'] },
];
const stories = [
  { category: 'BUSINESS OPERATIONS', title: 'Making sense of ERP as your business grows', description: 'Explore the role of connected systems in everyday operations.', image: 'hex-erp-scene' },
  { category: 'RETAIL & INVENTORY', title: 'A closer look at everyday retail workflows', description: 'Discover Shelf and the stock and sales tasks it brings together.', image: 'shelf-scene' },
  { category: 'DIGITAL INVOICING', title: 'A clearer approach to everyday finance', description: 'Explore digital invoicing and more organized billing workflows.', image: 'e-invoice-scene' },
];
export function HomeStories() {
  return <>
    <section className="section client-work-section"><div className="container">
      <div className="split-heading"><SectionTitle eyebrow="SELECTED CLIENT WORK" title="Real teams. Connected workflows.">From customer relationships to finance and inventory, a closer look at the work we have supported.</SectionTitle><Link className="text-link" href="/contact">Discuss your workflow <span aria-hidden="true">↗</span></Link></div>
      <div className="client-work-grid">{clientWork.map((client, index) => <article className="client-work-card" key={client.name}><div className="work-card-top"><span className="work-number">0{index + 1}</span><span>{client.area}</span></div><h3>{client.name}</h3><ul aria-label="Project workflows">{client.modules.map(module => <li key={module}>{module}</li>)}</ul></article>)}</div>
    </div></section>
    <section className="section testimonials-section"><div className="container">
      <SectionTitle eyebrow="CLIENT VOICES" title="Good work builds relationships.">A few words from clients, as featured on our existing website.</SectionTitle>
      <div className="testimonial-grid">{testimonials.map(item => <figure className="testimonial-card" key={item.name}>
        <span className="quote-mark" aria-hidden="true">“</span><blockquote><p>{item.quote}</p></blockquote><figcaption><strong>{item.name}</strong><span>Addis Systems client</span></figcaption>
      </figure>)}</div>
      <a className="text-link testimonial-source" href="https://addissystems.et/?trk=public_post_reshare-text" target="_blank" rel="noopener noreferrer">Read the original client testimonials <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
    </div></section>
    <section className="section container home-blog" id="home-blog"><div className="split-heading"><SectionTitle eyebrow="THE ADDIS SYSTEMS BLOG" title="A fresh perspective on what’s next.">Explore ideas on business operations, retail, and digital invoicing.</SectionTitle><Link className="text-link" href="/blog">Explore the blog <span aria-hidden="true">↗</span></Link></div>
      <div className="blog-grid">{stories.map(story => <article className="blog-card" key={story.title}>
        <Link href="/blog" className="home-blog-image" aria-label={`Explore the blog: ${story.title}`}><Image src={`/media/${story.image}.webp`} alt="" width={1536} height={1024} sizes="(max-width: 820px) 100vw, 33vw" /></Link>
        <div className="blog-card-body"><p className="eyebrow">{story.category}</p><h3><Link href="/blog">{story.title}</Link></h3><p>{story.description}</p><Link className="text-link" href="/blog">Explore the topic <span aria-hidden="true">↗</span></Link></div>
      </article>)}</div>
    </section>
  </>;
}
