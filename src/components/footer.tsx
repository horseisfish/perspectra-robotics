import Link from "next/link";
import { company, navigation } from "@/lib/content";
import { Brand } from "./navigation";
import { TextLink } from "./ui";
export function Collaboration() { return <section className="collaboration"><div className="shell collaboration-inner"><div><p className="section-label">RESEARCH / COLLABORATION</p><h2>Let’s explore what<br/>physical intelligence can become.</h2></div><TextLink href="/contact">Start a conversation</TextLink></div></section>; }
export function Footer() { return <footer className="footer shell"><div className="footer-top"><Brand/><p>Building predictive models<br/>for physical intelligence.</p><nav aria-label="Footer navigation">{navigation.map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {company.name}</p><p lang="zh-Hant">{company.chineseName}</p><a href={`mailto:${company.email}`}>{company.email}</a></div></footer>; }
