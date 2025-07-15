import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei"
import { Suspense } from "react"
import Floor from "./Floor"
import Chip from "./models/Chip"
import FallingBox from "./FallingBox"

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 4, 4], fov: 35 }} shadows>

      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={3} color="#00ffff" />

      <Suspense fallback={<Html><p>Loading...</p></Html>}>
        <Environment
          files="/textures/blue_photo_studio_1k.hdr"
          background={false}
        />
        <Floor />
        <Chip position={[0, 0, 0]} />
        <FallingBox />
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
