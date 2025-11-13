'use client';

import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function MobileDropdown({
    whatsappUrl,
}: {
    whatsappUrl?: string;
}) {
    const [open, setOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const onClick = (e: MouseEvent) => {
            if (!open) return;
            const target = e.target as Node;
            if (
                panelRef.current?.contains(target) ||
                btnRef.current?.contains(target)
            )
                return;
            setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onClick);
        };
    }, [open]);

    return (
        <div className="relative md:hidden">
            <button
                ref={btnRef}
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="mobile-nav-dropdown"
                onClick={() => setOpen((v) => !v)}
                className="inline-grid h-9 w-9 place-items-center rounded-full border border-zinc-300/70 bg-white/70 p-0 text-zinc-700 backdrop-blur transition hover:bg-zinc-100 active:scale-95 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200 dark:hover:bg-white/15"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                >
                    <path
                        d="M5 6h14M5 12h14M5 18h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {open && (
                <div
                    ref={panelRef}
                    id="mobile-nav-dropdown"
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-xl border border-zinc-200/70 bg-white/90 p-1 text-sm shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/95"
                >
                    {/* Primary action at top */}
                    <div className="p-2">
                        <a
                            href={whatsappUrl || '#'}
                            aria-disabled={!whatsappUrl}
                            onClick={() => setOpen(false)}
                            className={`block w-full rounded-full px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition active:scale-[.99] ${
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
                    <div
                        className="my-1 h-px bg-zinc-200/80 dark:bg-white/10"
                        aria-hidden
                    />
                    <a
                        role="menuitem"
                        href="#why"
                        className="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        Why Join
                    </a>
                    <a
                        role="menuitem"
                        href="#how"
                        className="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        How It Works
                    </a>
                    <a
                        role="menuitem"
                        href="#faq"
                        className="block rounded-lg px-3 py-2 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10"
                    >
                        FAQ
                    </a>
                    <div
                        className="my-1 h-px bg-zinc-200/80 dark:bg-white/10"
                        aria-hidden
                    />
                    <div className="px-2 py-2">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </div>
    );
}
