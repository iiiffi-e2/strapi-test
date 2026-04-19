export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Hospital Group Website
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          Strapi + Next.js starter for a multi-hospital digital presence.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Your CMS and frontend are now scaffolded. Next, define content types in
          Strapi for hospitals, facilities, doctors, specialties, and news.
        </p>

        <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">Connected services</h2>
          <ul className="list-disc space-y-2 pl-6 text-slate-300">
            <li>
              CMS: <code className="rounded bg-slate-800 px-1 py-0.5">apps/cms</code>
            </li>
            <li>
              Frontend:{" "}
              <code className="rounded bg-slate-800 px-1 py-0.5">apps/web</code>
            </li>
            <li>
              Strapi URL:{" "}
              <code className="rounded bg-slate-800 px-1 py-0.5">
                {process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"}
              </code>
            </li>
          </ul>
        </section>

        <section className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold">Immediate next step</h2>
          <p className="text-slate-300">
            Open Strapi Admin, create your first administrator, then model your
            content structure. Once content is published, wire this homepage to
            fetch and render it from Strapi APIs.
          </p>
        </section>
      </main>
    </main>
  );
}
