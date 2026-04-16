import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./useIsMobile";
import assassinImage from "../../assets/assasin-image.jpg";
import healerImage from "../../assets/healer-image.jpg";
import mageImage from "../../assets/mage-image.jpg";
import sniperImage from "../../assets/sniper-image.jpg";
import tankImage from "../../assets/tank-image.jpg";
import warriorImage from "../../assets/warrior-image.jpg";

const characters = [
  {
    name: "Lunaria",
    role: "Mage",
    description:
      "A wielder of forbidden arcane arts, Lunaria channels raw cosmic energy to devastate foes from afar.",
    image: mageImage,
    color: "#ef4444",
    element: "Arcane",
  },
  {
    name: "Darius",
    role: "Warrior",
    description:
      "A battle-hardened champion of the fallen kingdoms, Darius cleaves through enemies with relentless fury.",
    image: warriorImage,
    color: "#3b82f6",
    element: "Steel",
  },
  {
    name: "Seraphina",
    role: "Healer",
    description:
      "Blessed by the ancient spirits, Seraphina mends shattered souls and shields allies with radiant light.",
    image: healerImage,
    color: "#22c55e",
    element: "Life",
  },
  {
    name: "Gorath",
    role: "Tank",
    description:
      "An immovable colossus forged in the heart of a dying star, Gorath absorbs punishment no mortal could endure.",
    image: tankImage,
    color: "#f97316",
    element: "Shield",
  },
  {
    name: "Nyx",
    role: "Assassin",
    description:
      "Born of shadow and silence, Nyx strikes from the void — unseen, unheard, and utterly lethal.",
    image: assassinImage,
    color: "#a855f7",
    element: "Shadow",
  },
  {
    name: "Therion",
    role: "Sniper",
    description:
      "A lone hunter from the Verdant Wastes, Therion's arrows carry the wrath of the wild itself.",
    image: sniperImage,
    color: "#a16207",
    element: "Storm",
  },
];

export function CharactersSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <section
      id="characters"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#020a14" }}
    >
      {!isMobile && (
        <motion.div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[200px]"
          animate={{
            x: [0, 70, -40, 0],
            y: [0, 40, -50, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.05, 0.1, 0.03, 0.05],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className="text-cyan-400 uppercase tracking-[0.3em] mb-4 block"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            Meet the Champions
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
              Champion
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}>
            Six powerful heroes stand ready. Each with unique abilities, playstyles, and lore. Find your legend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {characters.map((char, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={char.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border backdrop-blur-sm transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: isHovered ? `${char.color}80` : "rgba(255,255,255,0.1)",
                  boxShadow: isHovered ? `0 0 30px ${char.color}30, inset 0 0 20px ${char.color}10` : "0 0 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Character Image */}
                <div className="relative aspect-[9/11] overflow-hidden">
                  <ImageWithFallback
                    src={char.image}
                    alt={char.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020a14] via-transparent to-transparent" />

                  {/* Element badge - enhanced */}
                  <motion.div
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-full backdrop-blur-xl border"
                    animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                    style={{
                      background: `${char.color}30`,
                      borderColor: char.color,
                      boxShadow: `0 0 12px ${char.color}60`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: char.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {char.element}
                    </span>
                  </motion.div>

                  {/* Glow effect on hover - enhanced */}
                  {!isMobile && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                      style={{
                        width: "120px",
                        height: "120px",
                        background: char.color,
                        filter: "blur(70px)",
                      }}
                    />
                  )}

                  {/* Hover description overlay - improved */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className="absolute bottom-0 left-0 right-0 p-4 pt-12"
                        style={{
                          background: `linear-gradient(to top, ${char.color}50 0%, ${char.color}25 40%, transparent 100%)`,
                        }}
                      >
                        <p
                          className="text-gray-100"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "12px",
                            lineHeight: 1.7,
                            fontWeight: 500,
                          }}
                        >
                          {char.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Info - improved */}
                <div className="p-4 relative">
                  <h3
                    className="mb-1 transition-colors duration-300"
                    style={{
                      fontFamily: "Cinzel, serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: isHovered ? char.color : "#ffffff",
                    }}
                  >
                    {char.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isHovered ? char.color : `${char.color}cc`,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                    className="transition-colors duration-300"
                  >
                    {char.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}