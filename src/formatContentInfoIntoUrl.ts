import { type SiteContentInfo, siteContentRules } from './siteContentRules';

export const formatContentInfoIntoUrl = (
  content: SiteContentInfo[keyof SiteContentInfo],
): string => {
  const { site, contentType, urlVariant } = content;

  const locator = `${site}.${contentType}.${urlVariant}`;

  if (!siteContentRules[locator]) {
    throw new Error(`Unknown content type: ${locator}`);
  }

  return siteContentRules[locator].formatUrl(content);
};
