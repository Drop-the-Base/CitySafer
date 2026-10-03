import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-olive-950 text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Logo */}
        <div className="space-y-2">
          <div className="text-6xl">🛡️</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-lime-400 to-yellow-400 bg-clip-text text-transparent">
            Defense
          </h1>
          <p className="text-olive-400 text-lg">
            Safe routes. Proactive protection. Community-powered.
          </p>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {['Safe routing', 'SOS alerts', 'Community reports', 'Shadow trust'].map((f) => (
            <span key={f} className="px-3 py-1 bg-lime-900/40 border border-lime-700/50 rounded-full text-sm text-lime-300">
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/map"
          className="block w-full py-4 bg-gradient-to-r from-lime-500 to-yellow-600 rounded-2xl text-white font-bold text-lg hover:opacity-90 transition-opacity"
        >
          Open Safety Map
        </Link>

        <p className="text-olive-600 text-sm">
          HackYeah 2026 · Defense Category
        </p>
      </div>
    </main>
  );
}
