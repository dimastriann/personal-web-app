import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  authors: [{ name: 'Dimastriann' }],
  applicationName: 'Dimas Portfolio Website',
  keywords: [
    'Software Engineer',
    'ODOO ERP',
    'Typescript',
    'Rust',
    'Python',
    'AI Engineer',
    'Claude Code',
    'RAG',
    'MCP',
  ],
  title: 'Dimas Trian Nugraha | Software Engineer | Odoo ERP | AI Systems',
  description:
    'Dimas Trian Nugraha is a Lead Software Engineer and Odoo Technical Consultant specializing in Odoo ERP, full-stack web development, and AI-native workflows (Claude Code, Cursor, RAG, MCP). Explore his portfolio and certifications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/img/my-logo-wo-bg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main id="root" className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
