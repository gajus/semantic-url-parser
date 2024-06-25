import { type SiteContentInfo, siteContentRules } from './siteContentRules';

export const extractContentInfoFromUrl = (inputUrl: string) => {
  const url = new URL(inputUrl);

  for (const instructions of Object.values(siteContentRules).sort(
    (a, b) => a.weight - b.weight,
  )) {
    const subjectDomain = url.hostname.replace('www.', '');

    if (typeof instructions.domain === 'string') {
      if (subjectDomain !== instructions.domain) {
        continue;
      }
    } else if (!instructions.domain.test(subjectDomain)) {
      continue;
    }

    const attributes = instructions.extractContentInfo(
      url,
      new URLSearchParams(url.search),
    );

    if (!attributes) {
      continue;
    }

    return {
      contentType: instructions.contentType,
      site: instructions.site,
      urlVariant: instructions.urlVariant,
      ...attributes,
    } as SiteContentInfo[keyof SiteContentInfo];
  }

  return null;
};
