import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Philosophers', () => {
  it('should return all philosophers', async () => {
    const res = await phylo.getPhilosohpers();

    expect(res.count).toBeGreaterThan(0);
    expect(res.error).toBeUndefined();
    expect(res.previous).toBeNull();
    expect(res.next).toBeNull();
    expect(res.results?.length).toBe(res.count);
  });

  it('should return Immaguel Kant.', async () => {
    const search = 'kant';
    const res = await phylo.getPhilosohpers(search);

    expect(res.count).toBe(1);
    expect(res.error).toBeUndefined();
    expect(res.previous).toBeNull();
    expect(res.next).toBeNull();
    expect(res.results?.[0].name.toLowerCase()).includes(search);
    expect(res.results?.length).toBe(res.count);
  });
});
