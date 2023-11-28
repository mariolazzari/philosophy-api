import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Philosophers', () => {
  it('should return all philosophers with no errors', async () => {
    const { data, error } = await phylo.getPhilosohpers();

    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data) {
      expect(data.count).toBeGreaterThan(0);
      expect(data.previous).toBeNull();
      expect(data.next).toBeNull();
      expect(data.results?.length).toBe(data.count);
    }
  });

  it('should search Immaguel Kant.', async () => {
    const search = 'kant';
    const { data, error } = await phylo.getPhilosohpers(search);

    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.previous).toBeNull();
      expect(data.next).toBeNull();
      expect(data.results?.[0].name.toLowerCase()).includes(search);
      expect(data.results?.length).toBe(data.count);
    }
  });

  it('should return Renée Descartes.', async () => {
    const id = 1;
    const { data, error } = await phylo.getPhilosopher(id);

    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.previous).toBeUndefined();
      expect(data.next).toBeUndefined();

      expect(data.results).toBeDefined;
      expect(data.results?.id).toBe(id);
      expect(data.results?.name.toLowerCase()).includes('descartes');
    }
  });
});
