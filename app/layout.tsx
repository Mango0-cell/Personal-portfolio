import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eduardo Meneses — Full Stack Developer',
  description:
    'Personal portfolio of Eduardo Meneses, bilingual Full Stack Developer specializing in React, TypeScript, NestJS, and cloud technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
