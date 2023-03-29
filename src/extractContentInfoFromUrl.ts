import { type SiteContentInfo, siteContentRules } from './siteContentRules';

export const extractContentInfoFromUrl = (inputUrl: string) => {
  const url = new URL(inputUrl);

  for (const instructions of Object.values(siteContentRules).sort(
    (a, b) => a.weight - b.weight,
  )) {
    if (url.hostname.replace('www.', '') !== instructions.domain) {
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
      ...attributes,
    } as SiteContentInfo[keyof SiteContentInfo];
  }

  return null;
};
