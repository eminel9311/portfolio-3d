import { motion } from "framer-motion"

export default function IntroScreen({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My 3D World
      </motion.h1>

      <motion.button
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white text-lg font-semibold rounded-xl transition-all"
        whileHover={{ scale: 1.1 }}
        onClick={onEnter}
      >
        Enter Site
      </motion.button>
    </div>
  )
}
