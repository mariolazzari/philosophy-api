import { describe, it, expect } from 'vitest';
import { phylo } from './global';
import { Root } from '../src';

describe('Info', async () => {
  const res: Root = await phylo.getInfo();
  const keys = Object.keys(res);

  it('should return 4 endpoints', () => {
    expect(keys.length).toBe(4);
  });

  it('should include philosophers  endpoint', () => {
    expect(keys.includes('philosophers')).toBeTruthy();
  });
});
