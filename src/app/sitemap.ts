import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap { return siteUrl ? ["", "/research", "/research/haptic-world-models", "/models", "/about", "/contact"].map(path=>({url:`${siteUrl}${path}`,changeFrequency: "monthly",priority:path === "" ? 1 : .8})) : []; }
