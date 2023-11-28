import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Ideas', async () => {
  it('should return all ideas with no errors', async () => {
    const { data, error } = await phylo.getIdeas();

    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data) {
      expect(data.count).toBeGreaterThan(0);
      expect(data.previous).toBeDefined();
      expect(data.next).toBeDefined();
      expect(data.results?.length).toBe(15);
    }
  });

  it('should return 1 idea with no errors', async () => {
    const { data, error } = await phylo.getIdea(123);

    expect(error).toBeUndefined();
    expect(data).toBeDefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.previous).toBeUndefined();
      expect(data.next).toBeUndefined();
    }
  });
});
