import React, { useRef, useState, Suspense } from "react"
import { useFrame } from "@react-three/fiber"

export default function FallingBox() {
  const boxRef = useRef(null)
  const [falling, setFalling] = useState(true)
  const [y, setY] = useState(2)

  useFrame(() => {
    if (!falling) return
    if (y > 0.6) {
      const newY = y - 0.015
      setY(newY)
      boxRef.current.position.y = newY
    } else {
      setFalling(false)
    }
  })

  return (
    <mesh ref={boxRef} position={[0, y, 0]} scale={[0.4, 0.4, 0.4]}>
      <boxGeometry />
      <meshStandardMaterial
        color="#0ff"
        emissive="#0ff"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  )
}
