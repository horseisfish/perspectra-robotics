"use client";

import { useId, useState } from "react";

const materials = [
  { name: "Soft", stiffness: 0.15, detail: "More give. The surface deforms easily." },
  { name: "Springy", stiffness: 0.35, detail: "Less give. More resistance to deformation." },
  { name: "Firm", stiffness: 1.2, detail: "Very little give. The surface barely moves." },
];

export function PushBack() {
  const [force, setForce] = useState(0);
  const [materialIndex, setMaterialIndex] = useState(1);
  const [discoveredMaterials, setDiscoveredMaterials] = useState<boolean[]>(() => materials.map(() => false));
  const discovered = discoveredMaterials[materialIndex];
  const id = useId();
  const material = materials[materialIndex];
  // Illustrative, quasi-static linear springs: reaction = applied force, x = F / k.
  const displacement = force / material.stiffness;
  const surfaceX = 310 + displacement * 1.5;
  const arrowLength = force * 9;

  return <section className="shell push-back" aria-labelledby={`${id}-title`}>
    <div className="push-intro">
      <p className="section-label">WHAT DOES CONTACT REVEAL?</p>
      <h2 id={`${id}-title`}>You act.<br /> The world pushes back.</h2>
      <p>Three surfaces. The same appearance. Push to discover what lies beneath.</p>
    </div>
    <div className="push-experiment">
      <div className="push-materials" role="group" aria-label="Surface material">
        {materials.map((item, index) => <button key={item.name} type="button" aria-pressed={materialIndex === index} onClick={() => { setMaterialIndex(index); setForce(0); }}>{discoveredMaterials[index] ? item.name : `Surface ${String.fromCharCode(65 + index)}`}</button>)}
        <button className="push-release" type="button" onClick={() => setForce(0)}>Release ↗</button>
      </div>
      <svg className="push-scene" viewBox="0 0 600 270" role="img" aria-label={`${discovered ? material.name : "Unknown"} surface. Applied force ${force.toFixed(1)} newtons, opposing reaction ${force.toFixed(1)} newtons, deformation ${displacement.toFixed(1)} millimeters.`}>
        <defs>
          <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse"><path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeOpacity=".07" /></pattern>
        </defs>
        <rect width="600" height="270" fill={`url(#${id}-grid)`} />
        <line x1="310" y1="52" x2="310" y2="230" stroke="currentColor" strokeOpacity=".2" strokeDasharray="3 5" />
        <path className="push-shape" d={`M 310 52 H 560 V 230 H 310 Q 310 202 ${surfaceX} 141 Q 310 80 310 52 Z`} fill="var(--secondary)" stroke="var(--accent)" strokeWidth="1.5" />
        <g className="push-probe" transform={`translate(${surfaceX - 310} 0)`}>
          <rect x="128" y="129" width="168" height="24" rx="12" fill="var(--ink)" />
          <circle cx="296" cy="141" r="14" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2" />
          <circle cx="296" cy="141" r="4" fill="var(--accent)" />
        </g>
        <text x="130" y="76" className="push-svg-label">YOUR ACTION</text>
        <text x="395" y="76" className="push-svg-label">WORLD RESPONSE</text>
        {force > 0 && <>
          <path d={`M ${surfaceX - 90 - arrowLength} 103 H ${surfaceX - 90} l -7 -5 m 7 5 l -7 5`} fill="none" stroke="var(--ink)" strokeWidth="2" />
          <path d={`M ${surfaceX + 28 + arrowLength} 179 H ${surfaceX + 28} l 7 -5 m -7 5 l 7 5`} fill="none" stroke="var(--accent)" strokeWidth="2" />
        </>}
        <text x="130" y="213" className="push-svg-value">Push → {force.toFixed(1)} N</text>
        <text x="395" y="213" className="push-svg-value">← Push back {force.toFixed(1)} N</text>
      </svg>
      <div className="push-control"><label htmlFor={`${id}-force`}>Applied force</label><output htmlFor={`${id}-force`}>{force.toFixed(1)} N</output><input id={`${id}-force`} type="range" min="0" max="10" step="0.5" value={force} onChange={(event) => { const nextForce = Number(event.target.value); setForce(nextForce); if (nextForce > 0) setDiscoveredMaterials(previous => previous.map((known, index) => known || index === materialIndex)); }} /><span>No push</span><span>Stronger push</span></div>
      <div className="push-result" aria-live="polite" aria-atomic="true"><strong>{discovered ? `${material.name} · ${displacement.toFixed(1)} mm of give` : "Unknown surface"}</strong><p>{!discovered ? "Push to discover. Move the slider to make contact." : force === 0 ? "Released. The surface returns to its resting shape." : material.detail}</p></div>
      <p className="push-takeaway">The same force. A different response. Understanding interaction means learning how the world pushes back.</p>
      <p className="push-disclaimer">Concept illustration · Idealized spring at equilibrium, with equal and opposite forces. Not a model prediction or measured material data.</p>
    </div>
  </section>;
}
