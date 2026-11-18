import './partners-clients.css';
import { ClientLogo } from './client-logo';
// Names and original artwork supplied by the user in Addis-Systems-Logos.
const clients = [
  ['elon-travel', 'Elon Travel Service'],
  ['bridgetech', 'Bridgetech PLC'],
  ['addispay', 'Addis Pay'],
  ['addis-transformer-switchgears', 'Addis Transformer & Switchgears PLC'],
  ['dema-hope', 'Dema Hope Real Estate'],
  ['gilando', 'Gilando Biomedical Solution PLC'],
  ['jourilabs', 'Jourilabs'],
  ['lolis-coffee', 'Loli’s Coffee'],
];
export function PartnersClients() {
  return <section className="partners-clients" aria-labelledby="partners-heading"><div className="container">
    <div className="partners-heading"><div><p className="eyebrow">RELATIONSHIPS THAT MATTER</p><h2 id="partners-heading">Our Partners &amp; Clients</h2></div><p>Meet some of the businesses<br />we’ve worked with.</p></div>
    <div className="partners-scroll" role="region" aria-label="Selected clients" tabIndex={0}>
      <div className="partners-track">{[0, 1].map(copy => <ul className="partners-names" key={copy} aria-label={copy === 0 ? 'Selected clients' : undefined} aria-hidden={copy === 1 ? true : undefined}>{clients.map(([slug, name]) => <li key={slug}><ClientLogo name={name} source={`/clients/${slug}.webp`} /><strong>{name}</strong></li>)}</ul>)}</div>
    </div>
  </div></section>;
}
