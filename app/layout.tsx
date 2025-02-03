import './globals.css';
import type { Metadata } from 'next';
import { Lexend_Deca } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lexend-deca',
});

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Enterprise Solutions',
  description:
    'Leading software development company specializing in custom enterprise solutions, digital transformation, and innovative technology services.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} font-lexend`}>
        <React.Suspense>
          <Header />
          {children}
          <Footer />
        </React.Suspense>
      </body>
    </html>
  );
}
