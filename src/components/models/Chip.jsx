export default function Chip({ position = [0, 0, 0] }) {
  return (
    <mesh position={position} scale={[0.5, 0.1, 0.5]}>
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
