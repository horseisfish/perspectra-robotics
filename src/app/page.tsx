import { ButtonLink, TextLink } from "@/components/ui";
import { company } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Physical Intelligence Research", "We develop Haptic World Models to help AI anticipate physical interaction.", "/");

export default function Home() {
  return <>
    <section className="shell minimal-hero">
      <p className="section-label">PERSPECTRA ROBOTICS</p>
      <h1>A physical perspective<br />on intelligence.</h1>
      <p className="minimal-lede">We develop Haptic World Models to help AI anticipate how the physical world responds to action.</p>
      <ButtonLink href="/research">Explore our research</ButtonLink>
    </section>
    <section className="shell minimal-section minimal-research">
      <div><p className="section-label">OUR FOCUS</p><h2>Haptic World Models</h2></div>
      <div><p>Learning from vision, touch, and force to understand contact, predict interaction, and support adaptive decisions.</p><p className="minimal-status">Research in progress · White paper in preparation</p><TextLink href="/research/haptic-world-models">Read our research perspective</TextLink></div>
    </section>
    <section className="shell minimal-section minimal-contact">
      <h2>Let’s build understanding.</h2>
      <p>For research and collaboration, <a href={`mailto:${company.email}`}>get in touch ↗</a></p>
    </section>
  </>;
}
