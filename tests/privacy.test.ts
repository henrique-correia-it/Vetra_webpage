import { describe, expect, it } from 'vitest';
import { site } from '../src/config/site';
import { locales } from '../src/content/locales';
import { getPrivacy } from '../src/content/privacy';

describe('public privacy contact', () => {
  it('routes every translated account deletion request to the active support address', () => {
    expect(site.supportEmail).toBe('support@vetra-app.com');
    for (const locale of locales) {
      expect(getPrivacy(locale.id).deletionSteps.join(' '), locale.id).toContain(
        site.supportEmail,
      );
    }
  });
});
