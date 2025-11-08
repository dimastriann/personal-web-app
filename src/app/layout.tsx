import { Metadata } from 'next';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Dimas Trian Nugraha | Software Engineer | Odoo ERP',
  description:
    'Dimas Trian Nugraha is a passionate Software Engineer specializing in Odoo ERP, full-stack web development using React, Node.js, and modern JavaScript frameworks. Explore his portfolio and certifications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/img/my-logo-wo-bg.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
