# Overview

# Design tokens 
Never hardcode a reusable design value (color, font-size, line-height, letter-spacing, radius, spacing, etc.) as a Tailwind arbitrary value (text-[14px], bg-[#f7f6f3], ...) in JSX. Use an existing design token/shared config.

Prefer Tailwind's standard built-in scale first (text-xs/sm/base/lg/xl/2xl, rounded-sm/md/lg/xl/2xl/full, the default spacing scale p-1/2/3/4/5/6/8/10...). If a design value is close to a standard step (small visual drift, roughly ≤2px, is acceptable), snap to that standard class instead of inventing a custom one — don't preserve odd decimal values (e.g. 14.4px, 22.896px) just because that's what the source/mockup produced; those are usually cascading/em-compounding artifacts, not intentional design decisions.

Only add a new custom token (in globals.css) when the value is a deliberate design decision that doesn't fit the standard scale — e.g. a brand color, or a one-off structural layout dimension (a container max-width, a fixed sidebar width). Name custom tokens by role or scale position; avoid project-specific, source-specific, or implementation-specific names.