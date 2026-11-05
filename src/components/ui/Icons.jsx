const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="m20 20-4.6-4.6" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);

export const ChevronIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m7 10 5 5 5-5" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 1 1 13 0C18.5 15 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const ClockIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const WhatsAppIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4.2 19.8 5.3 16A8 8 0 1 1 8.1 18.7Z" />
    <path d="M9.2 8.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .6-.3 1.3-.9 1.6-.6.3-1.4.4-2.7-.1-2.2-.9-3.8-2.8-4.4-3.9-.6-1.1-.6-2.2.1-3.5Z" />
  </svg>
);

export const InstagramIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const YouTubeIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="2.8" y="5.5" width="18.4" height="13" rx="3.5" />
    <path d="m10.2 9.3 4.6 2.7-4.6 2.7Z" />
  </svg>
);
