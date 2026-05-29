"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div style={{ display: "contents" }} aria-hidden="true">
        {children}
      </div>
    )
  }

  // Workaround for React 19 / Next.js 16 script tag error in next-themes
  // See: https://github.com/pacocoursey/next-themes/issues/387
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}