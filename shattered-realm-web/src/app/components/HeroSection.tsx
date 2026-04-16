import { motion } from "motion/react";
import { useIsAndroid } from "./useIsAndroid";
import { useIsMobile } from "./useIsMobile";
import heroBackgroundVideo from "../../assets/shattered-realm-vid-hero.mp4";
import gameLogoImage from "../../assets/game-logo.png";

const APK_DOWNLOAD_URL = "https://www.mediafire.com/file/tqbprhw8p7ooxqr/ShatteredRealmv_Beta_Release.apk/file4";

export function HeroSection() {
  const isAndroid = useIsAndroid();
  const isMobile = useIsMobile();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#020a14" }}
    >
      {/* Background video at 30% opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          style={{ opacity: 0.3 }}
          src={heroBackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          disableRemotePlayback
        />
      </div>

      {/* Animated background particles - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 6 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["#10b981", "#3b82f6", "#06b6d4", "#14b8a6"][i % 4],
              opacity: 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glow effects - static on mobile, animated on desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.1, 0.18, 0.08, 0.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 25, -35, 0],
              scale: [1, 0.85, 1.15, 1],
              opacity: [0.1, 0.06, 0.16, 0.1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[180px]"
            animate={{
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.05, 0.12, 0.03, 0.05],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {isMobile && (
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-600/8 rounded-full blur-[80px] pointer-events-none" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10"
            >
              <span className="text-cyan-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500 }}>
                Coming Soon - 2026
              </span>
            </motion.div>

            <h1
              className="text-white mb-4"
              style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1 }}
            >
              Shattered{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Realm
              </span>
            </h1>

            <p
              className="text-emerald-300/90 mb-6"
              style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 600, letterSpacing: "0.05em" }}
            >
              Restore Reality. Defeat the Corrupted Guardians.
            </p>

            <p className="text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0" style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#d1d5db" }}>
              The world fractures under the weight of corrupted Guardians. Reality bends, realms collapse. 
              You are humanity's last protocol — activated to cleanse the corruption and restore the CORE.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
              {isAndroid ? (
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 60px rgba(6, 182, 212, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg text-white cursor-pointer text-center transition-all"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #06b6d4 0%, #2563eb 50%, #7c3aed 100%)",
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Download for Android
                </motion.a>
              ) : (
                <motion.a
                  href={APK_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 60px rgba(6, 182, 212, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-lg text-white cursor-pointer text-center transition-all"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #06b6d4 0%, #2563eb 50%, #7c3aed 100%)",
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                    letterSpacing: "0.05em",
                  }}
                >
                  Download Game
                </motion.a>
              )}
              <motion.a
                href="#trailer"
                whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all cursor-pointer text-center"
                style={{ fontFamily: "Cinzel, serif", fontSize: "17px", fontWeight: 700, letterSpacing: "0.05em" }}
              >
                Watch Trailer
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Game Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {!isMobile && (
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-emerald-500/15 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.15, 0.95, 1],
                    opacity: [0.15, 0.25, 0.1, 0.15],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <motion.img
                src={gameLogoImage}
                alt="Shattered Realm Logo"
                className="relative w-full max-w-sm md:max-w-md lg:max-w-lg drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                animate={isMobile ? {} : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#020a14]/70 to-transparent pointer-events-none" />
    </section>
  );
}