import LayoutHead from '@/components/layout/head'
import theme from "@/mui/theme";
import { Container, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })

export default function RootLayout({children}: { readonly children: React.ReactNode}) {
  return (
    <html lang="en">
      <LayoutHead />

      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              <Container maxWidth="md" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <header>header</header>

                <nav>nav</nav>

                <main className={jost.className}>
                  {children}
                </main>
              </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
