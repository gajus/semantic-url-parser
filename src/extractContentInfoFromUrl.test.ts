import { extractContentInfoFromUrl } from './extractContentInfoFromUrl';
import { siteContentRules } from './siteContentRules';
import { expect, it } from 'vitest';

for (const [siteContentId, { contentType, tests, site }] of Object.entries(
  siteContentRules,
)) {
  for (const [inputUrl, attributes] of Object.entries(tests)) {
    it(
      '[' +
        siteContentId +
        '] extracts content info from URL (' +
        inputUrl +
        ')',
      () => {
        const contentInfo = extractContentInfoFromUrl(inputUrl);

        if (attributes === null) {
          expect(contentInfo).toBeNull();

          return;
        }

        if (!contentInfo) {
          throw new Error('No content info extracted');
        }

        expect(contentInfo?.site).toBe(site);
        expect(contentInfo?.contentType).toBe(contentType);

        for (const [key, value] of Object.entries(attributes)) {
          expect(contentInfo?.[key]).toBe(value);
        }
      },
    );
  }
}
