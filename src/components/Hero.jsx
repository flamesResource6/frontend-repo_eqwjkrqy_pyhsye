import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Code2, Braces, Globe, GitBranch, Database, Cloud, Smartphone, Layers } from 'lucide-react'

// Floating icon component
function FloatingIcon({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -10, 0], opacity: 1 }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Parallax gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-yellow-400/30 blur-[90px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/30 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Text */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Khotami Putra
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
            >
              Programmer muda yang kreatif, menyukai pembangunan aplikasi web dan mobile,
              fokus pada pengalaman pengguna, performa, dan clean code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#portfolio" className="px-5 py-2.5 rounded-full bg-black text-white shadow hover:shadow-md transition">Lihat Karya</a>
              <a href="mailto:khotamiputra@example.com" className="px-5 py-2.5 rounded-full border border-black/10 bg-white/60 backdrop-blur hover:bg-white">Hubungi</a>
            </motion.div>
          </div>

          {/* Right: 3D + Photo with orbiting icons */}
          <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/60 to-white/20 backdrop-blur border border-white/40 shadow-xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            {/* Orbiting icons around a centered avatar placeholder */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/70 shadow-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop" alt="Khotami Putra" className="h-full w-full object-cover" />
              </div>

              <FloatingIcon delay={0} className="left-10 top-10 text-emerald-500">
                <Code2 />
              </FloatingIcon>
              <FloatingIcon delay={0.4} className="right-10 top-14 text-blue-500">
                <Braces />
              </FloatingIcon>
              <FloatingIcon delay={0.8} className="left-5 bottom-10 text-yellow-500">
                <Globe />
              </FloatingIcon>
              <FloatingIcon delay={1.2} className="right-6 bottom-8 text-purple-500">
                <Layers />
              </FloatingIcon>
              <FloatingIcon delay={1.6} className="left-1/4 top-1/3 text-emerald-500">
                <Database />
              </FloatingIcon>
              <FloatingIcon delay={2.0} className="right-1/4 top-1/4 text-sky-500">
                <Cloud />
              </FloatingIcon>
              <FloatingIcon delay={2.4} className="left-1/3 bottom-1/4 text-rose-500">
                <GitBranch />
              </FloatingIcon>
              <FloatingIcon delay={2.8} className="right-1/3 bottom-1/3 text-indigo-500">
                <Smartphone />
              </FloatingIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
