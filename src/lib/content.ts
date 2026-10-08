export const company = {
  name: "Perspectra Robotics Inc.", chineseName: "觀象科技股份有限公司",
  email: "perspectrarobotics@gmail.com", phone: "(02) 2249-9912", phoneHref: "tel:+886222499912",
  address: "新北市中和區安和路161號",
} as const;

export const navigation = [{ href: "/research", label: "Research" }, { href: "/models", label: "Models" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];

export interface Publication { title: string; slug: string; kind: string; status: string; summary: string; pdf?: string; venue?: string; date?: string }
export const publications: Publication[] = [{
  title: "Haptic World Models: Predicting Physical Interaction for Embodied Intelligence",
  slug: "/research/haptic-world-models", kind: "Research direction", status: "White paper in preparation",
  summary: "A research thesis for learning action-relevant representations of contact, force, resistance, and physical constraints.",
}];
export interface ResearchUpdate { title: string; date: string; summary: string; href?: string }
export const researchUpdates: ResearchUpdate[] = [];

export interface Model { name: string; family: string; status: "Research direction" | "Public release"; description: string; inputModalities: string[]; outputRepresentation: string; intendedApplications: string[]; technicalReport?: string; evaluationResults?: string; availability: string }
export const models: Model[] = [{ name: "Haptic World Models", family: "Physical intelligence", status: "Research direction",
  description: "Our core model-development direction: predicting how physical interaction evolves under action.",
  inputModalities: ["Vision", "Motion / proprioception", "Touch", "Force", "Action"],
  outputRepresentation: "Action-relevant interaction states and possible physical futures",
  intendedApplications: ["Contact-rich planning", "Adaptive manipulation", "Embodied decision-making"],
  availability: "Research-stage direction. No public checkpoints or APIs are announced on this site.",
}];
export const themes = [
  { number: "01", title: "Interaction representations", text: "Learning states that describe contact, resistance, deformation, and constraints—not only visual appearance." },
  { number: "02", title: "Action-conditioned dynamics", text: "Exploring how candidate actions change the evolution of physical interaction, including uncertainty and branching outcomes." },
  { number: "03", title: "Sensorimotor learning", text: "Investigating how human and robot interaction experience can supervise physically meaningful representations." },
];
