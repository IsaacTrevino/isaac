type IconProps = { className?: string };

export function AppStoreIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function GooglePlayIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
    >
      <path
        fill="currentColor"
        d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
      />
      <path
        fill="currentColor"
        opacity="0.85"
        d="M16.95 15.838 6.05 22.5l7.742-7.742 3.158 1.08z"
      />
      <path
        fill="currentColor"
        opacity="0.7"
        d="M16.95 8.162 6.05 1.5l7.742 7.742 3.158-1.08z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M20.108 10.87 17.5 9.97V14.03l2.608-.9a1 1 0 0 0 0-1.86z"
      />
    </svg>
  );
}
