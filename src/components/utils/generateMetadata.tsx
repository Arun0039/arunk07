// src/utils/generateMetadata.ts
import { siteConfig } from '@/src/configs/config';

interface MetadataParams {
  title?: string;
  description?: string;
  path: string;
}

/**
 * Generates metadata for a web page, including Open Graph and SEO-related properties.
 *
 * @param {MetadataParams} params - The parameters for generating metadata.
 * @param {string} params.title - The title of the page.
 * @param {string} params.description - The description of the page.
 * @param {string} params.path - The path of the page relative to the base URL.
 * @returns {object} The metadata object containing properties for SEO and Open Graph.
 *
 * @remarks
 * This function assumes the existence of a `siteConfig` object that provides
 * default metadata values such as `titlePrefix`, `baseUrl`, `metadata`, and `profile_image`.
 * 
 * Note: The `twitter` property is omitted as the site does not have a Twitter account.
 */
export const generateMetadata = ({
  title,
  description,
  path
}: MetadataParams) => {
  const titlePrefix = siteConfig.titlePrefix || '';
  const fullPath = `${siteConfig.baseUrl}${path}`;
  const pageTitle = title ? ` ${title} · ${titlePrefix}` : titlePrefix;

  return {
    title: pageTitle,
    description: description || siteConfig.metadata.description,
    keywords: siteConfig.metadata.keywords,
    url: fullPath,
    type: siteConfig.metadata.type,
    openGraph: {
      title: pageTitle,
      description: description || siteConfig.metadata.description,
      url: fullPath,
      type: siteConfig.metadata.type,
      site_name: titlePrefix,
      image: siteConfig.profile_image // Add profile image for Open Graph
    },
    twitter: {
      title: pageTitle,
      description: description || siteConfig.metadata.description,
      card: 'summary_large_image',
      //site: siteConfig.social.twitter,
      image: siteConfig.profile_image // Add profile image for Twitter card
    },
    alternates: {
      canonical: fullPath // Adding canonical URL
    },
    link: [
      {
        rel: 'icon',
        href: '/favicon.ico' // Icon link
      }
    ]
  };
};
