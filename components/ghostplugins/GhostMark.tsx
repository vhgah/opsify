import * as React from "react";

export function GhostMark({
  size = 56,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 6c-13.255 0-24 10.745-24 24v28.3c0 1.6 1.87 2.48 3.12 1.47l4.63-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.62 3.76a2 2 0 0 0 2.52 0l4.62-3.76a2 2 0 0 1 2.52 0l4.63 3.76c1.25 1.01 3.12.13 3.12-1.47V30C56 16.745 45.255 6 32 6Z"
        fill="#111"
      />
      <circle cx="24" cy="31" r="5" fill="#fff" />
      <circle cx="40" cy="31" r="5" fill="#fff" />
      <circle cx="24" cy="31" r="2.5" fill="#111" />
      <circle cx="40" cy="31" r="2.5" fill="#111" />
    </svg>
  );
}

