'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function MobileMenu({ whatsappUrl }: { whatsappUrl?: string }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        // lock scroll when open
        const root = document.documentElement;
        if (open) root.style.overflow = 'hidden';
        else root.style.overflow = '';
        return () => {
            document.removeEventListener('keydown', onKey);
            root.style.overflow = '';
        };
    }, [open]);

    const close = () => setOpen(false);

    return (
        <>
            <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="md:hidden inline-flex items-center justify-center rounded-full border border-zinc-300/70 bg-white/70 p-2 text-zinc-700 backdrop-blur transition hover:bg-zinc-100 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-white/15"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                >
                    <path
                        d="M4 6h16M4 12h16M4 18h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {open && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
                        onClick={close}
                        aria-hidden
                    />
                    {/* Panel */}
                    <div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        className="fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-sm translate-x-0 overflow-y-auto border-l border-white/10 bg-zinc-950/95 p-5 text-zinc-100 backdrop-blur transition-transform dark:bg-zinc-950/95"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/logo.png"
                                    alt="GrindHub"
                                    width={28}
                                    height={28}
                                    className="h-7 w-7 rounded"
                                />
                                <span className="text-sm font-semibold">
                                    GrindHub
                                </span>
                            </div>
                            <button
                                type="button"
                                aria-label="Close menu"
                                onClick={close}
                                className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden
                                >
                                    <path
                                        d="M6 6l12 12M18 6L6 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-4">
                            <a
                                href={whatsappUrl || '#'}
                                aria-disabled={!whatsappUrl}
                                onClick={close}
                                className={`block rounded-xl px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition active:scale-[.99] ${
                                    whatsappUrl
                                        ? 'bg-emerald-600 hover:bg-emerald-500'
                                        : 'bg-zinc-600/50 cursor-not-allowed'
                                }`}
                            >
                                {whatsappUrl
                                    ? 'Join WhatsApp'
                                    : 'WhatsApp Link Coming Soon'}
                            </a>
                        </div>

                        <nav
                            className="mt-6 space-y-1 text-sm"
                            aria-label="Mobile"
                        >
                            <a
                                href="#why"
                                onClick={close}
                                className="block rounded-lg px-3 py-2 hover:bg-white/10"
                            >
                                Why Join
                            </a>
                            <a
                                href="#how"
                                onClick={close}
                                className="block rounded-lg px-3 py-2 hover:bg-white/10"
                            >
                                How It Works
                            </a>
                            <a
                                href="#faq"
                                onClick={close}
                                className="block rounded-lg px-3 py-2 hover:bg-white/10"
                            >
                                FAQ
                            </a>
                        </nav>

                        <div className="mt-6 border-t border-white/10 pt-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-zinc-400">
                                    Theme
                                </span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
