import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Seasons: 'summer' | 'winter' | 'autumn' | 'rain'
const ThemeContext = createContext({ theme: 'summer', setTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('summer')

  // Smoothly update a data attribute on body for global theming hooks
  useEffect(() => {
    const prev = document.body.getAttribute('data-theme')
    if (prev !== theme) {
      document.body.setAttribute('data-theme', theme)
    }
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
