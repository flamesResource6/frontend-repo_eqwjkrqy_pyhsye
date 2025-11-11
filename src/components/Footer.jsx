import React from 'react'
import { Mail, Instagram, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold">Khotami Putra</p>
          <p className="text-sm text-gray-600">Programmer • Web & Mobile</p>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:khotamiputra@example.com" className="inline-flex items-center gap-2 hover:opacity-80"><Mail size={18}/> khotamiputra@example.com</a>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <a href="#" aria-label="GitHub" className="hover:text-black"><Github/></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black"><Linkedin/></a>
          <a href="#" aria-label="Instagram" className="hover:text-black"><Instagram/></a>
        </div>
      </div>
    </footer>
  )
}
