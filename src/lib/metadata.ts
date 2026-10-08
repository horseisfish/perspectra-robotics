import type { Metadata } from "next";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: { title: `${title} | Perspectra Robotics`, description, type: "website", locale: "en_US", ...(siteUrl ? { url: `${siteUrl}${path}` } : {}), images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Perspectra Robotics — Building Predictive Models for Physical Intelligence" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] } };
}
