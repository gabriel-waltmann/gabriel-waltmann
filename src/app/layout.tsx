import LayoutHead from '@/components/layout/head'
import LayoutHeader from '@/components/layout/header';
import TabPanels, { TabPanelProps } from '@/components/tab-panels';
import theme from "@/mui/theme";
import { Container, ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })
 
export default function RootLayout(props: { readonly children: React.ReactNode}) {
  const tabs: TabPanelProps[] = [
    { label: 'About', href: '/' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Jobs', href: '/jobs' },
  ]

  return (
    <html lang="en">
      <LayoutHead />

      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              <Container maxWidth="md" sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <LayoutHeader />

                <TabPanels tabs={tabs}  />

                <main className={jost.className}>
                  {props.children}
                </main>
              </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}