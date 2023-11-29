import { describe, it, expect } from 'vitest';
import { phylo } from './global';

describe('Books', () => {
  it('should return all books with no errors', async () => {
    const { data, error } = await phylo.getBooks();

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBeGreaterThan(0);
      expect(data.results).toBeDefined();
    }
  });

  it('should return first book', async () => {
    const id = 1;
    const { data, error } = await phylo.getBook(id);

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.results).toBeDefined();
      expect(data.next).toBeUndefined();
      expect(data.previous).toBeUndefined();
    }
  });
});
