'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

type ThemeProviderType = React.FC<ThemeProviderProps>

const ThemeProvider: ThemeProviderType = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
