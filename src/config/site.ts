export const siteUrl =
  process.env.NEXT_PUBLIC_APP_URL || "https://next-starter-v2.vercel.app";

export const siteConfig = (locale: string = "en") => ({
  name: "Next Starter v2",
  url: siteUrl + "/" + locale,
  ogImage: `${siteUrl}/${locale}/opengraph-image`,
  description: "Comprehensive Starter Template for your Next.js project.",
  links: {
    twitter: "https://twitter.com/immoinulmoin",
  },
});

export type SiteConfig = typeof siteConfig;
