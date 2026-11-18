import { test } from 'node:test';
import assert from 'node:assert/strict';
import { allowPreviewPricing, annualSavings, invoiceTiers } from '../src/lib/pricing.mjs';
test('unapproved rates are gated from production even when a flag is mistakenly enabled', () => {
  assert.equal(allowPreviewPricing({NODE_ENV:'production', PREVIEW_PRICING:'true',VERCEL_ENV:'production'}),false);
  assert.equal(allowPreviewPricing({NODE_ENV:'production', PREVIEW_PRICING:'true'}),false);
  assert.equal(allowPreviewPricing({NODE_ENV:'development',PREVIEW_PRICING:'false'}),false);
  assert.equal(allowPreviewPricing({NODE_ENV:'development',PREVIEW_PRICING:'true'}),true);
  assert.equal(allowPreviewPricing({NODE_ENV:'production',PREVIEW_PRICING:'true',VERCEL_ENV:'preview'}),true);
});
test('annual savings match twelve monthly payments minus the full annual bill', () => {
  assert.deepEqual(invoiceTiers.map(t=>annualSavings(t.monthly,t.annual)),[2500,6900,16100]);
});
