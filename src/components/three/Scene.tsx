"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas, type CanvasProps } from "@react-three/fiber";

interface SceneProps extends Omit<CanvasProps, "children"> {
  children: ReactNode;
  fallback?: ReactNode;
}

export function Scene({ children, fallback = null, ...props }: SceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      {...props}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </Canvas>
  );
}
