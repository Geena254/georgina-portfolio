"use client"

import { useRef } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import dynamic from "next/dynamic"
import * as THREE from "three"

// Dynamically import components to avoid SSR issues
const FloatingBoxes = dynamic(() => import("./floating-boxes"), { ssr: false })
const ParticlesAnimation = dynamic(() => import("./particles-animation"), { ssr: false })

function Scene() {
  const groupRef = useRef<THREE.Group>(null!)
  const { camera } = useThree()

  useFrame(({ mouse }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.5, 0.1)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.5, 0.1)
    }
  })

  return (
    <group ref={groupRef}>
      <ParticlesAnimation />
      <FloatingBoxes />
    </group>
  )
}

export default function ThreeScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Scene />
      <OrbitControls />
    </Canvas>
  )
}
