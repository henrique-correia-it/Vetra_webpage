import { describe, expect, it } from 'vitest';
import { readTheme, writeTheme } from '../src/scripts/preferences';
describe('theme preferences', () => {
  it('ignores denied or malformed storage', () => {
    expect(readTheme(null)).toBeNull();
    expect(readTheme({ getItem: () => 'purple' })).toBeNull();
    expect(
      readTheme({
        getItem: () => {
          throw new Error('denied');
        },
      }),
    ).toBeNull();
    expect(() =>
      writeTheme(
        {
          setItem: () => {
            throw new Error('denied');
          },
        },
        'dark',
      ),
    ).not.toThrow();
  });
  it('uses a saved theme and persists an explicit choice', () => {
    const values = new Map<string, string>();
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => {
        values.set(key, value);
      },
    };
    writeTheme(storage, 'dark');
    expect(readTheme(storage)).toBe('dark');
  });
});
