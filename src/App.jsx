import React from 'react'
import { ThemeProvider } from './components/ThemeContext'
import SeasonSwitcher from './components/SeasonSwitcher'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function SeasonalBackground() {
  // Render seasonal ambient effects using CSS and small DOM nodes
  const theme = document?.body?.getAttribute('data-theme') || 'summer'

  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      {theme === 'winter' && (
        <div className="absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-white/80 shadow"
              style={{
                left: `${(i * 97) % 100}%`,
                animation: `snow ${6 + (i % 5)}s linear ${(i % 6) * 0.5}s infinite`,
                opacity: 0.8,
                filter: 'blur(0.5px)'
              }}
            />
          ))}
        </div>
      )}
      {theme === 'autumn' && (
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-0 h-2 w-3 bg-orange-400 rounded-sm rotate-45"
              style={{
                left: `${(i * 73) % 100}%`,
                animation: `leaf ${7 + (i % 5)}s ease-in ${(i % 6) * 0.4}s infinite`,
                opacity: 0.9,
              }}
            />
          ))}
        </div>
      )}
      {theme === 'rain' && (
        <div className="absolute inset-0">
          {Array.from({ length: 80 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-0 h-10 w-px bg-white/40"
              style={{
                left: `${(i * 53) % 100}%`,
                animation: `rain ${1.2 + (i % 5) * 0.2}s linear ${(i % 10) * 0.1}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function Shell({ children }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 text-gray-900">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-white/40 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="font-bold tracking-tight">Khotami Putra</div>
          <SeasonSwitcher />
        </div>
      </div>

      {/* Ambient seasonal effects */}
      <SeasonalBackground />

      {children}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell>
        <main>
          <Hero />
          <Portfolio />
        </main>
        <Footer />
      </Shell>
    </ThemeProvider>
  )
}
