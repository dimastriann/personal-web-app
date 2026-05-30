import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Dimas Trian Nugraha',
  description:
    'Explore the work experience, client projects, certifications, and open-source projects of Dimas Trian Nugraha — Senior Odoo Developer and Software Engineer.',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
