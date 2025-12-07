import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: {
    default: 'Odommo Digital | Creative Developer & Digital Agency',
    template: '%s | Odommo Digital'
  },
  description: 'Hybrid portfolio and digital agency offering creative frontend development, web design, and digital solutions.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
      url: 'https://www.odommodigital.dev/',
      siteName: 'Odommo Digital',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} bg-background text-foreground font-sans antialiased flex flex-col min-h-screen transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}