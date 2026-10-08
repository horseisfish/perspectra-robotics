import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/metadata";
export const metadata: Metadata = { ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}), title: { default: "Perspectra Robotics — Physical Intelligence Research", template: "%s | Perspectra Robotics" }, description: "Building predictive models for physical intelligence. Perspectra develops Haptic World Models to anticipate how physical interactions evolve under action.", robots: { index: !!siteUrl, follow: !!siteUrl }, icons: { icon: "/icon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Navigation/><main id="main">{children}</main><Footer/></body></html>; }
