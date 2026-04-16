import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./useIsMobile";
import loreSectionImage from "../../assets/lore-section.jpg";

export function StorySection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="story"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#020a14" }}
    >
      {/* Background glow - static on mobile */}
      {!isMobile ? (
        <>
          <motion.div
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]"
            animate={{
              x: [0, -60, 30, 0],
              y: [0, 50, -20, 0],
              scale: [1, 1.25, 0.85, 1],
              opacity: [0.05, 0.1, 0.03, 0.05],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px]"
            animate={{
              x: [0, 50, -40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 0.9, 1.2, 1],
              opacity: [0.05, 0.03, 0.1, 0.05],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      ) : (
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700 }}>
            Understand the Narrative
          </span>
          <h2 className="text-white mb-4" style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.2 }}>
            A World{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Shattered</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}>
            Six Prime Guardians once kept the realms in balance. But corruption spread. Now reality itself fractures. Uncover the truth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {!isMobile && (
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-xl blur-xl"
                  animate={{
                    opacity: [0.2, 0.35, 0.15, 0.2],
                    scale: [1, 1.05, 0.97, 1],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <ImageWithFallback
                src={loreSectionImage}
                alt="The Shattered World"
                className="relative w-full rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-emerald-300" style={{ fontFamily: "Cinzel, serif", fontSize: "20px", fontWeight: 600 }}>
                The Six Prime Guardians
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.8 }}>
                The world of Shattered Realm was once governed by Six Prime Guardians — cosmic entities 
                responsible for maintaining the universal constants: Wind, Fire, Ice, Water, Poison, and Dark Magic
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-blue-300" style={{ fontFamily: "Cinzel, serif", fontSize: "20px", fontWeight: 600 }}>
                The CORE System
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.8 }}>
                At the center of reality was <span className="text-cyan-400">CORE</span> (Central 
                Operational Reality Engine) — an ancient AI system responsible for maintaining stability 
                across all dimensions and realms.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-teal-300" style={{ fontFamily: "Cinzel, serif", fontSize: "20px", fontWeight: 600 }}>
                The Corruption
              </h3>
              <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.8 }}>
                A recursive anomaly called "The Corruption" infected the Guardians and began rewriting 
                reality itself. Nature mutated uncontrollably, Ice froze time, Fire consumed energy endlessly, 
                Water drowned memory, and Life created decay.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
              <h3 className="text-cyan-400" style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 600 }}>
                The Hero Protocol
              </h3>
              <p className="text-gray-400 mt-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7 }}>
                You have been activated. Cleanse the corrupted sectors. Restore the CORE system. 
                Save what remains of reality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}