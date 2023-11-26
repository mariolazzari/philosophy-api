import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Philosophers', async () => {
  const res = await phylo.getPhilosohpers();

  it('should return all philosophers', () => {
    expect(res.length).toBeGreaterThan(0);
  });
});
