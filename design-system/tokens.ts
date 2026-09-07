export const tokens = {
  color: {
    ink: "#0A0A0A",
    hanji: "#EAE6DF",
    stone: "#4A4A4A",
    jade: "#5B6F5F",
    silver: "#B9B9B5",
    warmGrey: "#9D988F",
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.875rem",
    md: "1.5rem",
    lg: "3rem",
    xl: "6rem",
    xxl: "10rem",
  },
  type: {
    display: "clamp(3.5rem, 10vw, 9rem)",
    title: "clamp(2.4rem, 6vw, 5rem)",
    body: "clamp(1rem, 1.5vw, 1.2rem)",
    micro: "0.72rem",
  },
  motion: {
    slow: "1200ms",
    medium: "800ms",
    fast: "450ms",
  },
} as const;
