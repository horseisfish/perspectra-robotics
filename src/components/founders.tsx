"use client";

import { useId, useState } from "react";
import Image from "next/image";

const founders = [
  { name: "Shih-Yu Ma", portraitClass: "founder-portrait-close", focus: "Research & Development", photo: "/team/shih-yu-ma.jpg", description: "Shih-Yu leads research and development at Perspectra, turning ideas about physical interaction into prototypes and experiments." },
  { name: "Tom Yeh", portraitClass: "", focus: "Algorithms", photo: "/team/tom-yeh.png", description: "Tom leads algorithm design at Perspectra, developing the computational methods and logic behind our models." },
];

export function Founders() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const id = useId();
  return <section className="shell founders section" aria-labelledby="founders-title">
    <p className="section-label">THE PEOPLE BEHIND THE QUESTIONS</p>
    <h2 id="founders-title">Two perspectives.<br />One shared curiosity.</h2>
    <div className="founder-grid">{founders.map(founder => <article className={`founder ${expanded[founder.name] ? "is-expanded" : ""}`} key={founder.name}>
      <button type="button" className="founder-trigger" aria-expanded={!!expanded[founder.name]} aria-controls={`${id}-${founder.name.replaceAll(" ", "-")}`} onClick={() => setExpanded(previous => ({ ...previous, [founder.name]: !previous[founder.name] }))}>
        <div className={`founder-portrait ${founder.portraitClass}`}><Image src={founder.photo} alt={`Portrait of ${founder.name}`} width={640} height={640} sizes="(max-width: 560px) 100vw, 50vw" /><span className="founder-reveal">Meet {founder.name} <span aria-hidden="true">↗</span></span></div>
        <div className="founder-heading"><span className="founder-name">{founder.name}</span><span className="founder-toggle" aria-hidden="true">+</span></div>
        <span className="founder-role">Co-founder · {founder.focus}</span>
      </button>
      <div className="founder-collapse" id={`${id}-${founder.name.replaceAll(" ", "-")}`} inert={!expanded[founder.name]} aria-hidden={!expanded[founder.name]}><div className="founder-collapse-inner"><div className="founder-bio"><p>{founder.description}</p></div></div></div>
    </article>)}</div>
  </section>;
}
