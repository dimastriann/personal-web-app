import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dimas Trian Nugraha',
  description:
    'Get in touch with Dimas Trian Nugraha via email, LinkedIn, or Telegram. Open to new opportunities and collaborations.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
