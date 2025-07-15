import { useState } from "react"
import IntroScreen from "./components/IntroScreen"
import Experience from "./components/Experience"

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {!entered ? (
        <IntroScreen onEnter={() => setEntered(true)} />
      ) : (
        <Experience />
      )}
    </div>
  )
}
