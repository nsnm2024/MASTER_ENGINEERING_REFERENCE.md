import React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export type IconName =
  | "globe" | "scale" | "cpu" | "bolt" | "breaker" | "lifebuoy"
  | "eye" | "cursor" | "keyboard" | "component" | "robot" | "git"
  | "radar" | "leaf" | "copy" | "check" | "search" | "download"
  | "doc" | "arrow" | "phone" | "mail" | "user" | "gauge" | "plus" | "x" | "menu" | "reset";

const paths: Record<IconName, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.8 2.4 4 5.3 4 8.5s-1.2 6.1-4 8.5c-2.8-2.4-4-5.3-4-8.5s1.2-6.1 4-8.5Z" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M12 4 6 6.5M12 4l6 2.5" />
      <path d="M6 6.5 3.5 12a2.9 2.9 0 0 0 5 0L6 6.5ZM18 6.5 15.5 12a2.9 2.9 0 0 0 5 0L18 6.5Z" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  bolt: <path d="M13 2 5 13.5h5.5L10 22l8.5-11.5H13L13 2Z" />,
  breaker: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5V8M12 16v4.5M8.5 8.5 15.5 15.5" />
    </>
  ),
  lifebuoy: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="m6 6 3.3 3.3M18 6l-3.3 3.3M18 18l-3.3-3.3M6 18l3.3-3.3" />
    </>
  ),
  eye: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  cursor: <path d="M6 3.5 19 10l-5.5 1.8L10.5 17 6 3.5ZM13.5 12.5 19 19" />,
  keyboard: (
    <>
      <rect x="2.5" y="7" width="19" height="10.5" rx="1.5" />
      <path d="M5.5 10h.01M8.5 10h.01M11.5 10h.01M14.5 10h.01M17.5 10h.01M5.5 13h.01M17.5 13h.01M8 14.5h8M8 13h.01M11.5 13h.01M14.5 13h.01" />
    </>
  ),
  component: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <path d="M17 13.5v3.2a.3.3 0 0 1-.3.3h-3.2" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="8" width="14" height="10" rx="2" />
      <path d="M12 8V4.5M12 4.5h.01" />
      <circle cx="12" cy="3.8" r="0.9" />
      <path d="M9 12.5h.01M15 12.5h.01M9.5 15.5c.8.6 1.6.9 2.5.9s1.7-.3 2.5-.9M2.5 12v3M21.5 12v3" />
    </>
  ),
  git: (
    <>
      <circle cx="6.5" cy="5.5" r="2.2" />
      <circle cx="6.5" cy="18.5" r="2.2" />
      <circle cx="17.5" cy="8.5" r="2.2" />
      <path d="M6.5 7.7v8.6M17.5 10.7c0 3.3-2.5 4.8-5.5 5.3-1.8.3-3.3 1-3.9 2" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 12 18 6.5M12 12h.01" />
    </>
  ),
  leaf: (
    <>
      <path d="M19.5 4.5C12 4 5.5 7.5 5 14.5c-.2 2.6.6 4.4 1.5 5 3-8 8-11.5 8-11.5s-6.5 4.5-8 12c1 .5 3 .8 5 .3 7-1.8 8.5-10 8-15.8Z" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="12" height="12" rx="1.5" />
      <path d="M15.5 5.5v-1a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 4.5V14A1.5 1.5 0 0 0 5 15.5h1" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5L19.5 6.5" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </>
  ),
  download: <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4 17.5v1.5a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 19v-1.5" />,
  doc: (
    <>
      <path d="M6 3.5h8L19 8.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 0 6 19V3.5Z" />
      <path d="M14 3.5v5h5M9 12.5h6M9 15.5h6" />
    </>
  ),
  arrow: <path d="M14.5 5 8 12l6.5 7" />,
  phone: (
    <>
      <path d="M5 4h4l1.5 4.5-2.2 1.6a12 12 0 0 0 5.6 5.6l1.6-2.2L20 15v4a1.5 1.5 0 0 1-1.6 1.5C10.5 20 4 13.5 3.5 5.6A1.5 1.5 0 0 1 5 4Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.2-3.8 4-5.5 7.5-5.5s6.3 1.7 7.5 5.5" />
    </>
  ),
  gauge: (
    <>
      <path d="M4.5 18.5a8.5 8.5 0 1 1 15 0" />
      <path d="m12 14 4-5.5" />
      <circle cx="12" cy="14.5" r="1.2" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 6.5h16M4 12h16M4 17.5h10" />,
  reset: (
    <>
      <path d="M4.5 8A8.6 8.6 0 1 1 3.6 13" />
      <path d="M4.5 3.5V8H9" />
    </>
  ),
};

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
