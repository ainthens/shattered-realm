import { motion } from "motion/react";

export function TrailerComingPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(circle at top, rgba(6, 182, 212, 0.12), transparent 30%), linear-gradient(180deg, #020a14 0%, #061528 55%, #020a14 100%)",
      }}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#04111f]/80 p-8 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-sm md:p-12">
        <motion.div
          className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"
          animate={{ scale: [1, 1.15, 0.95, 1], opacity: [0.2, 0.35, 0.15, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative">
          <p
            className="mb-4 text-cyan-400"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.3em" }}
          >
            ERROR 404
          </p>
          <h1
            className="mb-4 text-white"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(40px, 9vw, 88px)", fontWeight: 800, lineHeight: 1 }}
          >
            Trailer Missing
          </h1>
          <p
            className="mx-auto mb-8 max-w-xl text-gray-300"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.8 }}
          >
            The trailer is coming up. The signal from the Shattered Realm has not fully stabilized yet, but the reveal is on its way.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="rounded-lg px-8 py-3.5 text-white"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "15px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #059669, #0891b2, #2563eb)",
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.25)",
              }}
            >
              Back to Home
            </a>
            <a
              href="/#download"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-white transition-all hover:border-cyan-400/50 hover:bg-white/5"
              style={{ fontFamily: "Cinzel, serif", fontSize: "15px", fontWeight: 700 }}
            >
              Follow the Launch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}