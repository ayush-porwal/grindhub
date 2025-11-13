import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'GrindHub — Consistency. Accountability. Momentum.',
    description:
        'A small community of aspiring competitive programmers pushing each other to stay consistent. Share progress, create healthy FOMO, and level up together.',
    icons: {
        icon: '/icon.png',
    },
    openGraph: {
        title: 'GrindHub — Consistency. Accountability. Momentum.',
        description:
            'A small community of aspiring competitive programmers. Share progress, stay consistent, and learn patterns together.',
        type: 'website',
        images: [
            {
                url: '/og.svg',
                width: 1200,
                height: 630,
                alt: 'GrindHub — Consistency. Accountability. Momentum.',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GrindHub — Consistency. Accountability. Momentum.',
        description:
            'A small community of aspiring competitive programmers pushing consistency and sharing progress.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Script id="theme-init" strategy="beforeInteractive">
                    {`
            try {
              var t = localStorage.getItem('theme');
              var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (t === 'dark' || (!t && d)) document.documentElement.classList.add('dark');
              else document.documentElement.classList.remove('dark');
            } catch {}
          `}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning
            >
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white/60 dark:focus:bg-white dark:focus:text-black"
                >
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
