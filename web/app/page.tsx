import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full overflow-y-auto bg-olive-950 text-white flex flex-col items-center px-6 pt-4 pb-28 scrollbar-none">
      <div className="max-w-sm w-full text-center space-y-6 my-auto">
        {/* Logo & Icon */}
        <div className="space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-lime-500 to-yellow-500 flex items-center justify-center text-3xl shadow-xl shadow-lime-950/60 ring-1 ring-white/20">
            🛡️
          </div>
          <div>
            <h1 className="text-4xl font-black bg-gradient-to-r from-lime-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent tracking-tight">
              Lumina
            </h1>
            <p className="text-olive-400 text-sm mt-1 font-medium">
              Inteligentny i Bezpieczny Powrót do Domu
            </p>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-1">
          {['Bezpieczny Routing', 'Dead Man’s Switch', 'Safe Havens', 'Alarm SOS'].map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-lime-950/80 border border-lime-700/50 rounded-full text-xs font-semibold text-lime-300 shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Description Box */}
        <div className="bg-olive-900/80 border border-olive-800 rounded-2xl p-4 text-xs text-olive-300 leading-relaxed shadow-lg text-left space-y-1.5">
          <div className="font-bold text-lime-400 flex items-center gap-1.5 text-xs">
            <span>⚡ Proaktywny System Ochrony</span>
          </div>
          <p>
            Omijanie niebezpiecznych stref i nieoświetlonych alej, automatyczna detekcja anomalii ruchu w tle oraz łączność awaryjna z bliskimi.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/map"
          className="block w-full py-3.5 bg-gradient-to-r from-lime-400 via-yellow-400 to-lime-400 rounded-2xl text-olive-950 font-black text-base shadow-xl shadow-lime-950/80 hover:opacity-95 active:scale-95 transition-all"
        >
          Otwórz Mapę Bezpieczeństwa ➔
        </Link>

        <p className="text-olive-500 text-[11px] font-medium pt-1">
          HackYeah 2026 · Kategoria Defense
        </p>
      </div>
    </main>
  );
}
