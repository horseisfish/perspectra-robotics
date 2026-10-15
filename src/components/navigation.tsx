"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoMark } from "./logo";
import { navigation } from "@/lib/content";
export function Brand() { return <Link className="brand" href="/" aria-label="Perspectra Robotics home"><LogoMark/><span>PERSPECTRA<small>ROBOTICS</small></span></Link>; }
export function Navigation() {
  const [open, setOpen] = useState(false); const path = usePathname();
  useEffect(() => {
    // Next.js may retain scroll when the next page is already visible.
    // Run after its navigation scroll handling; keep explicit section anchors.
    const frame = requestAnimationFrame(() => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [path]);
  return <header className="site-header"><div className="shell nav"><Brand/><button type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav id="main-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={path.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}{item.label === "Contact" && <ArrowUpRight size={14} aria-hidden="true"/>}</Link>)}</nav></div></header>;
}
