/** An open geometric P: a contact point interrupts the returning signal. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path d="M11 41V7H29L38 16V22L30 30H23" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M18 14H27L31 18V21" stroke="currentColor" strokeOpacity=".45" strokeWidth="1.8" />
    <path d="M11 30H15" stroke="currentColor" strokeWidth="2.6" />
    <circle cx="19" cy="30" r="2.8" fill="#8fbcd0" />
  </svg>;
}
