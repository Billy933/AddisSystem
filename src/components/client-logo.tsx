'use client';
import { useState } from 'react';

export function ClientLogo({ name, source }: { name: string; source: string }) {
  const [failed, setFailed] = useState(false);
  return failed ? null : <img className="client-logo" src={source} alt={`${name} logo`} width={140} height={64} loading="lazy" onError={() => setFailed(true)} />;
}
