import { motion } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'

interface ThemeToggleProps {
  darkMode: boolean
  toggleTheme: () => void
}

const ThemeToggle = ({ darkMode, toggleTheme }: ThemeToggleProps) => {
  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </motion.button>
  )
}

export default ThemeToggle 