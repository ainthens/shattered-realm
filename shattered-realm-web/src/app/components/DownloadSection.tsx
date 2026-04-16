import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Smartphone, Download } from "lucide-react";
import { useIsAndroid } from "./useIsAndroid";
import { useIsMobile } from "./useIsMobile";

const LAUNCH_TIME_PHT = Date.UTC(2026, 3, 16, 16, 0, 0);
const APK_DOWNLOAD_URL = "https://www.mediafire.com/file/tqbprhw8p7ooxqr/ShatteredRealmv_Beta_Release.apk/file4";

function getTimeRemaining() {
  const difference = Math.max(0, LAUNCH_TIME_PHT - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: difference === 0,
  };
}

export function DownloadSection() {
  const isAndroid = useIsAndroid();
  const isMobile = useIsMobile();
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining((currentValue) => {
        if (currentValue.isExpired) {
          window.clearInterval(intervalId);
          return currentValue;
        }

        const nextValue = getTimeRemaining();

        if (nextValue.isExpired) {
          window.clearInterval(intervalId);
        }

        return nextValue;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="download"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020a14 0%, #061528 50%, #020a14 100%)" }}
    >
      {/* Background glows - only on desktop */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.25, 0.85, 1],
              opacity: [0.08, 0.15, 0.04, 0.08],
              x: ["-50%", "-45%", "-55%", "-50%"],
              y: ["-50%", "-55%", "-45%", "-50%"],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-[120px]"
            animate={{
              x: [0, -50, 30, 0],
              y: [0, 40, -30, 0],
              scale: [1, 0.9, 1.2, 1],
              opacity: [0.08, 0.04, 0.12, 0.08],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10">
            <Smartphone size={16} className="text-emerald-400" />
            <span className="text-emerald-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500 }}>
              {isAndroid ? "Available on Android" : "Android Launch Incoming"}
            </span>
          </div>

          <h2
            className="text-white mb-4"
            style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700 }}
          >
            Play{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shattered Realm
            </span>
          </h2>

          <p
            className="text-gray-400 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "16px", lineHeight: 1.7 }}
          >
            {isAndroid
              ? "Enter the fractured realms on the go. Download now on your Android device and begin your quest to restore the CORE."
              : "Shattered Realm is launching first on Android. Explore the game now and get ready to download when the release goes live."}
          </p>

          <div className="mb-10 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-6 backdrop-blur-sm">
            <p className="mb-2 text-cyan-300" style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 700 }}>
              Countdown To Launch
            </p>
            <p className="mb-6 text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.6 }}>
              April 17, 2026 at 12:00 AM Philippine Standard Time
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { label: "Days", value: timeRemaining.days },
                { label: "Hours", value: timeRemaining.hours },
                { label: "Minutes", value: timeRemaining.minutes },
                { label: "Seconds", value: timeRemaining.seconds },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-[#081626] px-4 py-5 shadow-[0_0_30px_rgba(6,182,212,0.08)]">
                  <div className="text-white" style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700 }}>
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-gray-400 uppercase tracking-[0.2em]" style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-gray-500" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
              {timeRemaining.isExpired ? "The countdown has ended." : "Timer updates every second and stops exactly at launch time."}
            </p>
          </div>

          {isAndroid && (
            <motion.a
              href={APK_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-xl text-white cursor-pointer"
              style={{
                fontFamily: "Cinzel, serif",
                fontSize: "16px",
                fontWeight: 700,
                background: "linear-gradient(135deg, #059669, #0891b2, #2563eb)",
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.3), 0 0 80px rgba(16, 185, 129, 0.15)",
              }}
            >
              <Download size={20} />
              Download for Android
            </motion.a>
          )}

          <p className="text-gray-500 mt-6" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}>
            {isAndroid ? "Requires Android 8.0 or higher" : "Android version requires Android 8.0 or higher"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}