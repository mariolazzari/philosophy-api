import { describe, it, expect } from 'vitest';
import { phylo } from './global';
import { Root } from '../src';

describe('Info', async () => {
  const res = await phylo.getRoot();

  it('should return 4 endpoints', () => {
    expect(res.results).toBeDefined();
    expect(res.error).toBeUndefined();
  });

  it('should include philosophers endpoint', () => {
    expect(res.error).toBeUndefined();
    expect(res.results['philosophers']).toBeDefined();
  });
});
