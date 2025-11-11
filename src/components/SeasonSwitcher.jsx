import React from 'react'
import { Sun, Snowflake, CloudRain, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeContext'

const themes = [
  { key: 'summer', label: 'Panas', icon: Sun, emoji: '☀️' },
  { key: 'winter', label: 'Dingin', icon: Snowflake, emoji: '❄️' },
  { key: 'autumn', label: 'Gugur', icon: Leaf, emoji: '🍂' },
  { key: 'rain', label: 'Hujan', icon: CloudRain, emoji: '🌧️' },
]

export default function SeasonSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="inline-flex items-center gap-2 p-1 rounded-full bg-white/70 backdrop-blur border border-white/40 shadow-lg">
      {themes.map(({ key, label, icon: Icon, emoji }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`relative group px-3 py-2 rounded-full transition-colors ${
            theme === key ? 'bg-black text-white' : 'text-gray-700 hover:bg-black/5'
          }`}
          aria-label={`Tema ${label}`}
        >
          <div className="flex items-center gap-2">
            <Icon size={16} />
            <span className="hidden sm:inline text-sm font-medium">{label}</span>
            <span className="sm:hidden text-base" aria-hidden>
              {emoji}
            </span>
          </div>
          {theme === key && (
            <motion.span
              layoutId="season-underline"
              className="absolute inset-0 rounded-full ring-2 ring-black/10"
            />
          )}
        </button>
      ))}
    </div>
  )
}
