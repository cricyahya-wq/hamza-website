"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Scene } from "./Scene";

const RADIUS = 1.45;
const NUM_NODES = 350;
const CONNECTION_DISTANCE = 0.5;

function getFibonacciSpherePoints(samples: number, radius: number) {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius));
  }
  return points;
}

// A custom group that handles the rotation and floating
function GlobeRig({ children, reducedMotion }: { children: React.ReactNode; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    const t = clock.getElapsedTime();
    
    // Rotate continuously on Y axis (One rotation every ~20s)
    group.current.rotation.y = t * (Math.PI * 2 / 20);
    group.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    
    // Subtle floating up and down (8 second period, ~8px translation)
    group.current.position.y = Math.sin(t * (Math.PI * 2 / 8)) * 0.08;
  });

  return <group ref={group}>{children}</group>;
}

// Core sphere and wireframe
function GlobeBase() {
  return (
    <group>
      {/* Dark core so lines on the back are obscured/dimmed */}
      <mesh>
        <sphereGeometry args={[RADIUS * 0.98, 48, 48]} />
        <meshBasicMaterial color="#030b14" transparent opacity={0.9} />
      </mesh>
      
      {/* Base wireframe for the globe structure */}
      <mesh>
        <sphereGeometry args={[RADIUS, 32, 24]} />
        <meshBasicMaterial 
          color="#1e3a8a" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// The nodes and network lines
function NetworkGeometry({ points }: { points: THREE.Vector3[] }) {
  // Generate Line segments
  const { linePositions, curves } = useMemo(() => {
    const pos: number[] = [];
    const generatedCurves: THREE.QuadraticBezierCurve3[] = [];
    
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const p1 = points[i]!;
        const p2 = points[j]!;
        const dist = p1.distanceTo(p2);
        
        if (dist < CONNECTION_DISTANCE) {
          // Find a midpoint slightly elevated to make a curve
          const mid = p1.clone().add(p2).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS + dist * 0.2);
          const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
          generatedCurves.push(curve);
          
          // Sample curve for line geometry
          const segments = 10;
          const curvePoints = curve.getPoints(segments);
          for (let k = 0; k < segments; k++) {
            const cp1 = curvePoints[k]!;
            const cp2 = curvePoints[k+1]!;
            pos.push(
              cp1.x, cp1.y, cp1.z,
              cp2.x, cp2.y, cp2.z
            );
          }
        }
      }
    }
    return { 
      linePositions: new Float32Array(pos), 
      curves: generatedCurves 
    };
  }, [points]);

  // Set up instanced mesh for nodes
  const nodeMeshRef = useRef<THREE.InstancedMesh>(null);
  
  useEffect(() => {
    if (nodeMeshRef.current) {
      const dummy = new THREE.Object3D();
      points.forEach((point, i) => {
        dummy.position.copy(point);
        // Randomize scale slightly for pulsing effect
        const scale = 0.5 + Math.random() * 0.5;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        nodeMeshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      nodeMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  }, [points]);

  return (
    <group>
      {/* Network Lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color="#2563EB" 
          transparent 
          opacity={0.3} 
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Nodes */}
      <instancedMesh ref={nodeMeshRef} args={[undefined, undefined, points.length]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshBasicMaterial 
          color="#38BDF8" 
          transparent 
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </instancedMesh>

      {/* Traffic Packets */}
      <NetworkTraffic curves={curves} />
    </group>
  );
}

// Data packets traversing the network
function NetworkTraffic({ curves }: { curves: THREE.QuadraticBezierCurve3[] }) {
  const NUM_PACKETS = 80;
  const packetMeshRef = useRef<THREE.InstancedMesh>(null);
  
  const packets = useMemo(() => {
    return Array.from({ length: NUM_PACKETS }).map(() => ({
      curveIndex: Math.floor(Math.random() * curves.length),
      progress: Math.random(),
      speed: 0.2 + Math.random() * 0.4,
    }));
  }, [curves]);

  useFrame((_, delta) => {
    if (!packetMeshRef.current || curves.length === 0) return;
    
    const dummy = new THREE.Object3D();
    
    packets.forEach((packet, i) => {
      packet.progress += delta * packet.speed;
      
      if (packet.progress >= 1) {
        // Reset packet to a new random curve
        packet.progress = 0;
        packet.curveIndex = Math.floor(Math.random() * curves.length);
        packet.speed = 0.2 + Math.random() * 0.4;
      }
      
      const curve = curves[packet.curveIndex]!;
      const pos = curve.getPointAt(packet.progress);
      
      dummy.position.copy(pos);
      
      // Make them pulse at the ends of the curve
      const scale = Math.sin(packet.progress * Math.PI) * 1.5;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      packetMeshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    packetMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={packetMeshRef} args={[undefined, undefined, NUM_PACKETS]}>
      <sphereGeometry args={[0.025, 8, 8]} />
      <meshBasicMaterial 
        color="#ffffff" 
        transparent 
        opacity={0.9} 
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

interface HeroGlobeProps {
  interactive?: boolean;
  reducedMotion?: boolean;
}

export function HeroGlobe({
  interactive = true,
  reducedMotion = false,
}: HeroGlobeProps) {
  const points = useMemo(() => getFibonacciSpherePoints(NUM_NODES, RADIUS), []);

  return (
    <Scene camera={{ position: [0, 0, 4.6], fov: 42 }}>
      <ambientLight intensity={0.5} />
      
      {/* Fallback directional light for depth */}
      <directionalLight position={[5, 3, 4]} intensity={1.5} color="#38BDF8" />
      
      <GlobeRig reducedMotion={reducedMotion}>
        <GlobeBase />
        <NetworkGeometry points={points} />
      </GlobeRig>
    </Scene>
  );
}
