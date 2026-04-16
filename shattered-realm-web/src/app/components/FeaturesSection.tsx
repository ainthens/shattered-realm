import { motion } from "motion/react";
import { Swords, Globe, Users, Brain } from "lucide-react";
import { useIsMobile } from "./useIsMobile";

const features = [
  {
    icon: Swords,
    title: "Dynamic Boss Fights",
    description: "Face corrupted Guardians with unique mechanics, phase transitions, and devastating elemental attacks that reshape the battlefield.",
    color: "#ef4444",
  },
  {
    icon: Globe,
    title: "Elemental Realms",
    description: "Explore six distinct realms, each warped by a corrupted element. Every realm has unique environments, enemies, and secrets.",
    color: "#10b981",
  },
  {
    icon: Users,
    title: "Multiplayer Co-op",
    description: "Team up with up to 4 players to tackle corrupted sectors. Combine elemental abilities for devastating combo attacks.",
    color: "#3b82f6",
  },
  {
    icon: Brain,
    title: "Adaptive Enemy AI",
    description: "Enemies learn from your playstyle and adapt their strategies. No two encounters play out the same way.",
    color: "#a855f7",
  },
];

export function FeaturesSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020a14 0%, #061528 50%, #020a14 100%)" }}
    >
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[200px]"
            animate={{
              x: [0, -80, 40, 0],
              y: [0, -50, 60, 0],
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.05, 0.12, 0.03, 0.05],
            }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[150px]"
            animate={{
              x: [0, 60, -50, 0],
              y: [0, 40, -30, 0],
              scale: [1, 0.85, 1.2, 1],
              opacity: [0.05, 0.02, 0.09, 0.05],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700 }}>
            Gameplay System
          </span>
          <h2 className="text-white mb-4" style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.2 }}>
            Core{" "}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}>
            Experience dynamic gameplay mechanics that evolve with your playstyle, creating a unique adventure every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-shadow duration-300"
                  style={{
                    background: `${feature.color}15`,
                    border: `1px solid ${feature.color}30`,
                  }}
                >
                  <Icon size={22} color={feature.color} />
                </div>

                <h3 className="text-white mb-2" style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: 1.7 }}>
                  {feature.description}
                </p>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}