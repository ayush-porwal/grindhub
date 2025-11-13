'use client';

import { useState } from 'react';

export default function CopyButton({
    text,
    className = '',
}: {
    text: string;
    className?: string;
}) {
    const [copied, setCopied] = useState(false);

    async function onCopy() {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={onCopy}
            className={`inline-flex items-center gap-2 cursor-pointer rounded-full border border-zinc-300/70 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-800 backdrop-blur transition-colors hover:cursor-pointer hover:bg-zinc-100 hover:border-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/15 dark:hover:text-white dark:focus:ring-blue-400/30 dark:focus:ring-offset-zinc-950 ${className}`}
            aria-label="Copy template"
        >
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
            >
                <path
                    d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1z"
                    fill="currentColor"
                />
                <path
                    d="M8 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v12h12V7H8z"
                    fill="currentColor"
                />
            </svg>
            {copied ? 'Copied!' : 'Copy'}
        </button>
    );
}
