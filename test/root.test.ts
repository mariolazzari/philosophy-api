import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Root', async () => {
  const res = await phylo.getRoot();

  it('should return data with no errors', () => {
    expect(res.error).toBeUndefined();
    expect(res.data).toBeDefined();
  });

  it('should return 1 result', () => {
    expect(res.data?.results).toBeDefined();
    expect(res.data?.count).toBe(1);
  });

  it('should return 4 endpoints', () => {
    if (res.data?.results) {
      const keys = Object.keys(res.data.results!);
      expect(keys.length).toBe(4);
    }
  });

  it('should include philosophers endpoint', () => {
    expect(res.data?.results?.['philosophers']).toBeDefined();
  });
});
