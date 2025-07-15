import { useRef, useEffect } from "react"
import * as THREE from "three"

export default function Floor() {
  const gridRef = useRef()

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.material.opacity = 0.1
      gridRef.current.material.color = new THREE.Color("#0ff")
      gridRef.current.material.transparent = true
    }
  }, [])

  return <gridHelper ref={gridRef} args={[20, 40]} />
}
