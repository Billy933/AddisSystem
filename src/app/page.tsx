import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { Button, CTA, SectionTitle, Arrow } from '@/components/ui';
import { ProductVisual } from '@/components/product-visual';
import { HomeStories } from '@/components/home-stories';
import { MainBanner } from '@/components/main-banner';
import { PartnersClients } from '@/components/partners-clients';
export default function Home() {
  return <div className="home-reference">
    <MainBanner />
    <PartnersClients />
    <section id="products" className="section container home-products">
      <div className="split-heading"><SectionTitle eyebrow="OUR PRODUCT FAMILY" title="Good tools. Better ways to work.">Three products for the operations, retail, and invoicing work that keeps your business moving.</SectionTitle><Link className="text-link" href="/products">All products and services <Arrow /></Link></div>
      <div className="product-grid">{products.map((product, index) => <article className={`product-card product-card-${product.slug}`} key={product.slug}>
        <Link className="product-card-image" href={`/products/${product.slug}`} aria-label={`Explore ${product.name}`}><Image src={`/media/${product.slug}.webp`} alt={`${product.name} illustrative product mockup`} width={1448} height={1086} sizes="(max-width: 700px) 100vw, 33vw" /></Link>
        <div className="home-card-body"><div className="card-top"><p className="eyebrow">{product.audience}</p><span className="card-index">0{index + 1}</span></div>
          <div className="card-logo">{product.logo ? <Image src={product.logo} alt={product.name} width={165} height={80} /> : <span className="invoice-wordmark">E<span>&ndash;</span>Invoice</span>}</div>
          <h3>{product.label}</h3><p>{product.description}</p><div className="product-capabilities">{product.workflows.slice(0, 2).map(workflow => <span key={workflow}>{workflow}</span>)}</div><Link className="text-link" href={`/products/${product.slug}`}>Explore {product.name}<Arrow diagonal /></Link>
        </div>
      </article>)}</div>
    </section>
    <section className="section home-about"><div className="container story-grid">
      <div className="story-art"><ProductVisual kind="hex-erp" scene /></div>
      <div className="home-about-content"><SectionTitle eyebrow="ABOUT ADDIS SYSTEMS" title="Built in Ethiopia. Built around your business.">Addis Systems PLC develops business software for the way Ethiopian teams work, trade, and grow.</SectionTitle>
        <p className="home-about-copy">We bring together ERP, digital invoicing, and retail tools to help businesses organize their operations. From finance and HR to stock, sales, and customer relationships, our work starts with the needs of your team.</p>
        <div className="home-values">{[['01', 'Local understanding', 'Software shaped around Ethiopian businesses, from small shops to growing organizations.'], ['02', 'A system that fits', 'Configuration and integration planning around the workflows your business needs.'], ['03', 'Support beyond setup', 'Implementation, team training, and ongoing support discussed as part of your project.']].map(([number, title, text]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        <Link className="text-link" href="/about">More about Addis Systems <Arrow diagonal /></Link>
      </div>
    </div></section>
    <section className="section container home-next-step"><div className="split-heading"><SectionTitle eyebrow="A PRACTICAL NEXT STEP" title="Explore the options. Talk through the fit.">Find product details and pricing, or start with a walkthrough of your own workflow.</SectionTitle><Button href="/contact">Talk to our team</Button></div>
      <div className="home-plan-grid">{products.map(product => <Link key={product.slug} className="home-plan-link" href={`/products/${product.slug}#pricing`}><span>{product.name}</span><h3>{product.slug === 'hex-erp' ? 'A tailored implementation' : product.slug === 'shelf' ? 'Free and Premium' : 'Plans for your team'}</h3><p>{product.slug === 'hex-erp' ? 'Discuss modules, locations, and implementation scope.' : product.slug === 'shelf' ? 'Compare the options for your store.' : 'Explore billing cycles, team sizes, and plan features.'}</p><strong>Explore pricing <Arrow diagonal /></strong></Link>)}</div>
    </section>
    <HomeStories />
    <CTA />
  </div>;
}
