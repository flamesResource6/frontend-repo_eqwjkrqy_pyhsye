import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Aplikasi analitik realtime untuk memonitor performa bisnis.',
    img: 'https://images.unsplash.com/photo-1551281044-8d8d0d8d0d8d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E-Commerce Mobile',
    desc: 'Aplikasi belanja mobile dengan checkout cepat dan aman.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Landing Page Startup',
    desc: 'Halaman pemasaran modern dengan konversi tinggi.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
            <p className="text-gray-600 dark:text-gray-300">Beberapa proyek pilihan karya Khotami Putra.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white/70 backdrop-blur shadow hover:shadow-xl transition"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4">
                  <button className="px-4 py-2 rounded-full bg-black text-white hover:opacity-90">Lihat Detail</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
