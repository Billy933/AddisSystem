import Image from 'next/image';
const descriptions: Record<string, string> = {
  'hex-erp': 'Illustrative HEX ERP launcher displayed on a desktop monitor.',
  shelf: 'Illustrative Shelf inventory screen displayed on a smartphone.',
  'e-invoice': 'Illustrative Addis E-Invoice analytics dashboard on a tablet.',
};
export function ProductVisual({ kind = 'overview', scene = false }: { kind?: string; scene?: boolean }) {
  const product = kind in descriptions ? kind : 'hex-erp';
  const sceneDescriptions: Record<string, string> = {
    'hex-erp': 'Illustrative warehouse team reviewing HEX ERP on a desktop computer.',
    shelf: 'Illustrative shopkeeper checking Shelf inventory on a phone at a store counter.',
    'e-invoice': 'Illustrative finance officer reviewing invoices alongside an E-Invoice dashboard.',
  };
  return <figure className={`supplied-visual${scene ? ' supplied-scene' : ''}`}>
    <Image src={`/media/${product}${scene ? '-scene' : ''}.webp`} alt={scene ? sceneDescriptions[product] : descriptions[product]} width={scene ? 1536 : 1448} height={scene ? 1024 : 1086} sizes="(max-width: 820px) 100vw, 50vw" />
  </figure>;
}
