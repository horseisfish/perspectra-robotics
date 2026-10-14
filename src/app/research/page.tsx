import { PageIntro, SectionTitle } from "@/components/ui";
import { Publications } from "@/components/publications";
import { Collaboration } from "@/components/footer";
import { themes } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Research", "Research into interaction-state representations, action-conditioned prediction, and sensorimotor learning for physical intelligence.", "/research");
export default function Research() { return <><PageIntro eyebrow="RESEARCH AT PERSPECTRA" title="Understanding a world we can act on." description="Our research asks how AI can learn the physical relationships that matter for action—not only the observations that follow it."/><section className="shell section research-feature"><SectionTitle number="01" label="FEATURED RESEARCH" title="Haptic World Models"/><Publications/></section><section className="section tinted"><div className="shell"><SectionTitle number="02" label="RESEARCH THEMES" title="Toward predictive physical intelligence."/><div className="theme-list">{themes.map(theme=><article key={theme.number}><span className="mono">{theme.number}</span><h3>{theme.title}</h3><p>{theme.text}</p></article>)}</div></div></section><Collaboration/></>; }
