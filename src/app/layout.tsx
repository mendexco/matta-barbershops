import ThemeProvider from '@providers/ThemeProvider'
import { montserrat } from '@utils/fonts'
import '@utils/globals.scss'
import clsx from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Barbearia's Matta`,
  description: `Página inicial das Barbearia's Matta`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={clsx(montserrat.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
