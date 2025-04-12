"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function FloatingBoxes({ count = 20 }) {
  const mesh = useRef()

  // Generate random boxes
  const dummyBoxes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: Math.random() * 0.4 + 0.2,
      speed: Math.random() * 0.02 + 0.01,
    }))
  }, [count])

  // Animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    dummyBoxes.forEach((box, i) => {
      if (mesh.current && mesh.current.children[i]) {
        const child = mesh.current.children[i]

        // Floating animation
        child.position.y += Math.sin(time * box.speed) * 0.01

        // Slow rotation
        child.rotation.x += 0.002
        child.rotation.y += 0.003
      }
    })
  })

  return (
    <group ref={mesh}>
      {dummyBoxes.map((box, i) => (
        <mesh key={i} position={box.position} rotation={box.rotation} scale={box.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL(Math.random(), 0.7, 0.5)}
            roughness={0.5}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}
