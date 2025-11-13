'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;
    const shouldDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', shouldDark);
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window === 'undefined') return 'system';
        try {
            return (localStorage.getItem('theme') as Theme | null) || 'system';
        } catch {
            return 'system';
        }
    });

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            if (theme === 'system') applyTheme('system');
        };
        mq.addEventListener?.('change', handler);
        return () => mq.removeEventListener?.('change', handler);
    }, [theme]);

    function setAndSave(next: Theme) {
        try {
            localStorage.setItem('theme', next);
        } catch {}
        setTheme(next);
    }

    return (
        <div className="inline-flex items-center gap-1 rounded-full border border-zinc-300/70 bg-white/70 p-1 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            <button
                type="button"
                className={`rounded-full px-2.5 py-1 transition-colors ${theme === 'light' ? 'ring-1 ring-inset ring-zinc-300 dark:ring-white/20' : ''}`}
                onClick={() => setAndSave('light')}
                aria-pressed={theme === 'light'}
                aria-label="Light theme"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <g
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </g>
                </svg>
            </button>
            <button
                type="button"
                className={`rounded-full px-2.5 py-1 transition-colors ${theme === 'dark' ? 'ring-1 ring-inset ring-zinc-300 dark:ring-white/20' : ''}`}
                onClick={() => setAndSave('dark')}
                aria-pressed={theme === 'dark'}
                aria-label="Dark theme"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path
                        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </svg>
            </button>
            <button
                type="button"
                className={`rounded-full px-2.5 py-1 transition-colors ${theme === 'system' ? 'ring-1 ring-inset ring-zinc-300 dark:ring-white/20' : ''}`}
                onClick={() => setAndSave('system')}
                aria-pressed={theme === 'system'}
                aria-label="System theme"
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <g
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M12 17v4M8 21h8" />
                    </g>
                </svg>
            </button>
        </div>
    );
}
