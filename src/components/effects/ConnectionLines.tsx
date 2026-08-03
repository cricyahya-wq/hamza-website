import { cn } from "@/lib/utils";

const nodes = [
  { x: 8, y: 22 },
  { x: 28, y: 62 },
  { x: 52, y: 14 },
  { x: 74, y: 48 },
  { x: 92, y: 20 },
  { x: 46, y: 88 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [3, 5],
];

const resolvedLinks = links.map(([a, b]) => ({
  from: nodes[a]!,
  to: nodes[b]!,
}));

interface ConnectionLinesProps {
  className?: string;
}

export function ConnectionLines({ className }: ConnectionLinesProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 size-full",
        className,
      )}
    >
      <defs>
        <linearGradient id="connection-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4cc9f0" stopOpacity="0" />
          <stop offset="50%" stopColor="#4cc9f0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4cc9f0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {resolvedLinks.map((link, index) => (
        <line
          key={`base-${index}`}
          x1={link.from.x}
          y1={link.from.y}
          x2={link.to.x}
          y2={link.to.y}
          stroke="#2a6f97"
          strokeWidth="0.3"
          strokeOpacity="0.35"
        />
      ))}

      {resolvedLinks.map((link, index) => (
        <line
          key={`pulse-${index}`}
          x1={link.from.x}
          y1={link.from.y}
          x2={link.to.x}
          y2={link.to.y}
          stroke="url(#connection-gradient)"
          strokeWidth="0.6"
          strokeDasharray="8 100"
          style={{
            animation: "connection-flow 3.5s linear infinite",
            animationDelay: `${index * 0.45}s`,
          }}
        />
      ))}

      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.x}
          cy={node.y}
          r="1.1"
          fill="#4cc9f0"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}
