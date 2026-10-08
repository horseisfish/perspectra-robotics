"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/content";
export function Brand() { return <Link className="brand" href="/" aria-label="Perspectra Robotics home"><svg width="35" height="35" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M6 30V10L20 3l14 7v20l-14 7L6 30Z" stroke="currentColor" strokeWidth="1.5"/><path d="m6 10 14 8 14-8M20 18v19M6 30l14-8 14 8M20 3v19" stroke="currentColor" strokeWidth="1.2"/><circle cx="20" cy="18" r="3" fill="#3979C8"/></svg><span>PERSPECTRA<small>ROBOTICS</small></span></Link>; }
export function Navigation() {
  const [open, setOpen] = useState(false); const path = usePathname();
  return <header className="site-header"><div className="shell nav"><Brand/><button type="button" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button><nav id="main-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{navigation.map(item => <Link key={item.href} href={item.href} aria-current={path.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}{item.label === "Contact" && <ArrowUpRight size={14} aria-hidden="true"/>}</Link>)}</nav></div></header>;
}
