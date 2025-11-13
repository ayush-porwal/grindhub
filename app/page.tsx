import CopyButton from "./components/CopyButton";
import ThemeToggle from "./components/ThemeToggle";
export const dynamic = "force-static";

export default function Home() {
  const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL || "";

  return (
    <div className="relative min-h-dvh overflow-clip bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] aspect-[4/3] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.blue.400/.25),transparent)] blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] aspect-square w-[40rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.indigo.500/.15),transparent)] blur-3xl" />
        <div className="absolute left-[-10%] bottom-[-5%] aspect-square w-[30rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.fuchsia.500/.1),transparent)] blur-3xl" />
      </div>

      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="GrindHub logo"
            width="36"
            height="36"
            className="h-9 w-9 rounded-lg shadow-lg shadow-blue-600/10"
            decoding="async"
          />
          <span className="text-lg font-semibold tracking-tight">GrindHub</span>
        </div>
        <nav className="hidden items-center gap-4 text-sm md:flex" aria-label="Primary">
          <a className="opacity-80 hover:opacity-100" href="#why">
            Why Join
          </a>
          <a className="opacity-80 hover:opacity-100" href="#how">
            How It Works
          </a>
          <a className="opacity-80 hover:opacity-100" href="#faq">
            FAQ
          </a>
          <div className="ml-2 hidden md:block">
            <ThemeToggle />
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL || "#"}
            aria-disabled={!WHATSAPP_URL}
            className={`rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm transition active:scale-[.99] ${
              WHATSAPP_URL
                ? "bg-emerald-600 hover:bg-emerald-500"
                : "bg-zinc-500/50 cursor-not-allowed"
            }`}
            aria-label={
              WHATSAPP_URL ? "Join WhatsApp group" : "WhatsApp link coming soon"
            }
          >
            {WHATSAPP_URL ? "Join WhatsApp" : "WhatsApp Link Coming Soon"}
          </a>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main
        id="content"
        className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:pt-16 md:pt-24"
      >
        <section className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white/70 px-3 py-1 text-xs text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Applications open now
              </div>
              <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Build consistency. Find your tribe. Ship your dreams.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                We are a small community of aspiring competitive programmers
                pushing each other to stay consistent and improve every day. The
                goal is simple: share your progress, create healthy FOMO,
                motivate and help everyone level up together.
              </p>

              {/* CTA removed per request; QR on right */}

              {!WHATSAPP_URL && (
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  We will add the group link soon. You can still explore what
                  GrindHub is about below.
                </p>
              )}
            </div>
            {/* Right column: QR card */}
            <div className="justify-self-center lg:justify-self-end">
              <div className="grid place-items-center rounded-2xl border border-zinc-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5">
                <img
                  src="/code.png"
                  width="256"
                  height="256"
                  alt="WhatsApp group QR code for GrindHub"
                  className="h-64 w-64 rounded-md border border-zinc-200/60 object-contain dark:border-white/10 sm:h-72 sm:w-72"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Posting format */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between gap-4 border-b border-zinc-200/70 px-6 py-4 dark:border-white/10">
              <h2 className="text-lg font-semibold tracking-tight">
                How to post your updates
              </h2>
              <CopyButton
                text={`Short Message: Hey, here is the question I solved today.\nQuestion: [Short description or link]\nSolution: [Main idea or insight in one or two lines]`}
              />
            </div>

            <div className="px-6 py-5">
              <p className="text-zinc-700 dark:text-zinc-300">
                Use this concise template. It helps others learn patterns and
                reinforces your understanding through recall.
              </p>
              <div className="relative mt-4 rounded-xl border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white p-[1px] shadow-sm dark:border-white/10 dark:from-zinc-900 dark:to-zinc-900/60">
                <div className="rounded-[11px] bg-zinc-50 p-4 dark:bg-zinc-950">
                  <div className="grid gap-2 font-mono text-sm leading-relaxed">
                    <div>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">Short Message:</span>
                      <span className="ml-1 text-zinc-800 dark:text-zinc-200">Hey, here is the question I solved today.</span>
                    </div>
                    <div>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">Question:</span>
                      <span className="ml-1 text-zinc-700 dark:text-zinc-300">[Short description or link]</span>
                    </div>
                    <div>
                      <span className="font-medium text-zinc-900 dark:text-zinc-100">Solution:</span>
                      <span className="ml-1 text-zinc-700 dark:text-zinc-300">[Main idea or insight in one or two lines]</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-zinc-700 dark:text-zinc-300">
                Stay accountable. Keep your progress consistent. Let’s grind
                smarter 💪
              </p>
            </div>
          </div>
        </section>

        {/* Why join */}
        <section id="why" className="mt-24">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            Why join GrindHub?
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Supportive, competition‑friendly, and judgment‑free. Show up
            consistently, learn faster, and keep your momentum with a little
            healthy FOMO. I started GrindHub to give working professionals and
            tier‑2/3 students the focused environment many don&apos;t have.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Beginner‑friendly",
                body: "You can start from zero. Just show up.",
              },
              {
                title: "Daily accountability",
                body: "Share your progress and stay consistent together.",
              },
              {
                title: "Healthy FOMO",
                body: "Daily progress from peers creates gentle pressure to show up.",
              },
              {
                title: "Friendly competition",
                body: "Opt‑in challenges and mini‑leaderboards make progress fun—not toxic.",
              },
              {
                title: "Learn faster",
                body: "Others’ concise solutions keep you sharp on concepts you aren’t practicing.",
              },
              {
                title: "Small, supportive community",
                body: "A small community that actually notices your wins.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[radial-gradient(closest-side,theme(colors.blue.500/.08),transparent)] transition group-hover:scale-125" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mt-24">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Join the WhatsApp group" },
              { n: "02", t: "Solve problems and practice daily" },
              { n: "03", t: "Post your update in the format" },
              { n: "04", t: "Learn patterns and stay consistent" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-xl border border-zinc-200/70 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <div className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  {s.n}
                </div>
                <div className="mt-2 text-base font-medium">{s.t}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment policy */}
        <section className="mt-24" aria-labelledby="commitment-policy">
          <h2
            id="commitment-policy"
            className="text-balance text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Commitment policy
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-700 dark:text-zinc-300">
            Inconsistency gets you kicked out. If you go inactive, you’ll be
            removed. You can reapply, but acceptance won’t be easy.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-24">
          <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            FAQ
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h4 className="font-semibold">Is this for beginners?</h4>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                Yes, this is a beginner‑friendly group. The only rule is: show
                up daily.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h4 className="font-semibold">Where do I get updates?</h4>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                All updates are in the WhatsApp group. Check pinned messages for
                announcements and weekly challenges.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h4 className="font-semibold">What tracks can I pick?</h4>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                DSA/CP are most active, any deep‑work focus is welcome, though
                FOMO hits hardest there.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <h4 className="font-semibold">Any fees?</h4>
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                No. There are no fees.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="GrindHub logo"
              width="28"
              height="28"
              className="h-7 w-7 rounded-md"
              decoding="async"
            />
            <span>GrindHub</span>
          </div>
          <div className="opacity-70">
            Stay consistent. We’re rooting for you.
          </div>
        </div>
      </footer>
    </div>
  );
}
