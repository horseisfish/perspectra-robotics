import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow"><span aria-hidden="true" />{children}</p>; }
export function TextLink({ href, children }: { href: string; children: ReactNode }) { return <Link className="text-link" href={href}>{children}<ArrowUpRight size={17} aria-hidden="true" /></Link>; }
export function ButtonLink({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) { return <Link className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></Link>; }
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <header className="page-intro shell"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="lede">{description}</p></header>; }
export function SectionTitle({ number, label, title, children }: { number: string; label: string; title: string; children?: ReactNode }) { return <div className="section-title"><div><p className="section-label"><span>{number}</span> / {label}</p><h2>{title}</h2></div>{children && <div className="section-description">{children}</div>}</div>; }
