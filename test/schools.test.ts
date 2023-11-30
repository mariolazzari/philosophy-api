import { describe, it, expect } from 'vitest';
import { phylo } from './global';
import School from '../src/types/School';

describe('Schools', () => {
  it('should return first page schools with no errors', async () => {
    const { data, error } = await phylo.getSchools();

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBeGreaterThan(0);
      expect(data.next).toBeDefined();
      expect(data.previous).toBeNull();
      expect(data.results).toBeDefined();
      expect(data.results?.length).toBe(15);
    }
  });

  it('should return second page schools with no errors', async () => {
    const { data, error } = await phylo.getSchools('', 2);

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBeGreaterThan(0);
      expect(data.next).toBeDefined();
      expect(data.previous).toBeDefined();
      expect(data.results).toBeDefined();
    }
  });

  it('should return 1 school with no errors', async () => {
    const id = 4;
    const { data, error } = await phylo.getSchool(id);

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.results?.id).toBe(id);
    }
  });

  it('should return not found error', async () => {
    const id = -1;
    const { data, error } = await phylo.getSchool(id);

    expect(data).toBeDefined();
    expect(error).toBeUndefined();

    if (data) {
      expect(data.count).toBe(1);
      expect(data.results?.id).toBe(id);
    }
  });
});
