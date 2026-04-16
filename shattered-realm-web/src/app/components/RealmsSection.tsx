import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./useIsMobile";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import verdantWastesImage from "../../assets/verdant-wastes.jpg";
import frozenAbyssImage from "../../assets/frozen-abyss.jpg";
import scorchedCitadelImage from "../../assets/scorched-citadel.jpg";
import plagueGardensImage from "../../assets/plague-gardens.jpg";
import voidThroneImage from "../../assets/void-throne.jpg";

type RealmEnemy = {
  name: string;
  description: string;
};

type Realm = {
  name: string;
  guardian: string;
  description: string;
  image: string;
  color: string;
  element: string;
  enemies: RealmEnemy[];
};

const realms: Realm[] = [
  {
    name: "Verdant Wastes",
    guardian: "Sylthara, The Overgrown",
    description: "Once lush forests now twist with mutated vegetation, consuming all life in an endless cycle of uncontrolled growth.",
    image: verdantWastesImage,
    color: "#10b981",
    element: "Nature",
    enemies: [
      {
        name: "Briarhowl Stalker",
        description: "A vine-bound predator that erupts from moss walls and drags prey into living thorns.",
      },
      {
        name: "Sporebound Warden",
        description: "An armored husk that releases toxic growth clouds, mutating nearby creatures mid-fight.",
      },
      {
        name: "Rootmaw Devourer",
        description: "A colossal root-serpent that tunnels under the soil and snaps up anything standing still.",
      },
    ],
  },
  {
    name: "Frozen Abyss",
    guardian: "Cryovex, The Stillborn",
    description: "Time itself has frozen in this glacial wasteland. Crystallized moments hang in the air like shattered memories.",
    image: frozenAbyssImage,
    color: "#67e8f9",
    element: "Ice",
    enemies: [
      {
        name: "Shardveil Revenant",
        description: "A fractured spirit that blinks between frozen moments and strikes before sound can travel.",
      },
      {
        name: "Rimefang Marauder",
        description: "A frostbitten beast whose claws leave slowing ice trails that trap targets in place.",
      },
      {
        name: "Chrono Glacier",
        description: "An ancient ice colossus that rewinds its own wounds and crushes intruders with tidal avalanches.",
      },
    ],
  },
  {
    name: "Scorched Citadel",
    guardian: "Pyrrathos, The Unbound Flame",
    description: "An inferno of eternal combustion. Energy is consumed endlessly, leaving only ash and molten destruction.",
    image: scorchedCitadelImage,
    color: "#ef4444",
    element: "Fire",
    enemies: [
      {
        name: "Cinderforged Sentinel",
        description: "A molten knight that absorbs ranged attacks and vents them back in explosive arcs.",
      },
      {
        name: "Ashen Harrier",
        description: "Winged embers that swarm in flocks, blinding opponents with cinders and smoke.",
      },
      {
        name: "Magma Vicar",
        description: "A zealot of the flame that channels volatile sigils, igniting the ground beneath each step.",
      },
    ],
  },
  {
    name: "Plague Gardens",
    guardian: "Morvaelis, The Rotmother",
    description: "Life and death intertwine in grotesque harmony. What grows here feeds on decay, and what decays feeds new horrors.",
    image: plagueGardensImage,
    color: "#84cc16",
    element: "Life",
    enemies: [
      {
        name: "Blightthorn Cultivator",
        description: "A twisted gardener that plants parasitic blooms which burst into flesh-eating larvae.",
      },
      {
        name: "Mireborn Mycelite",
        description: "A fungal brute linked to the hive-root, regenerating rapidly while standing in rot pools.",
      },
      {
        name: "Carrion Bloom",
        description: "A deceptively still flower-pod that snaps open to release corrosive spores and bone hooks.",
      },
    ],
  },
  {
    name: "Void Throne",
    guardian: "Nex'Tharos, Harbinger of Collapse",
    description: "The final realm. Where reality ends and nothingness begins. The source of The Corruption awaits.",
    image: voidThroneImage,
    color: "#a855f7",
    element: "Void",
    enemies: [
      {
        name: "Null Apostle",
        description: "A faceless herald that erases projectiles from existence and silences nearby abilities.",
      },
      {
        name: "Riftborn Executor",
        description: "A towering void construct that fractures space, forcing enemies through unstable portals.",
      },
      {
        name: "Oblivion Choir",
        description: "A chorus of shadow entities whose synchronized pulse drains willpower and max health.",
      },
    ],
  },
];

export function RealmsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedRealm, setSelectedRealm] = useState<Realm | null>(null);
  const isMobile = useIsMobile();

  return (
    <section
      id="realms"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #020a14 0%, #061528 50%, #020a14 100%)" }}
    >
      {!isMobile && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 rounded-full blur-[200px]"
          animate={{
            scale: [1, 1.2, 0.85, 1.1, 1],
            opacity: [0.05, 0.1, 0.03, 0.08, 0.05],
            x: ["-50%", "-45%", "-55%", "-48%", "-50%"],
            y: ["-50%", "-55%", "-45%", "-52%", "-50%"],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-emerald-400 uppercase tracking-[0.3em] mb-4 block" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700 }}>
            Explore the Worlds
          </span>
          <h2 className="text-white mb-4" style={{ fontFamily: "Cinzel, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.2 }}>
            The Corrupted{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Realms</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: "15px", lineHeight: 1.7 }}>
            Five unique realms await, each corrupted by a different element and ruled by a powerful guardian. Choose your destiny.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {realms.map((realm, index) => (
            <motion.div
              key={realm.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedRealm(realm)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedRealm(realm);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Open ${realm.name} details`}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-lg overflow-hidden cursor-pointer border backdrop-blur-sm transition-all duration-300"
              style={{
                aspectRatio: "3/4",
                borderColor: hoveredIndex === index ? `${realm.color}80` : "rgba(255,255,255,0.1)",
                boxShadow: hoveredIndex === index 
                  ? `0 0 40px ${realm.color}40, inset 0 0 20px ${realm.color}15` 
                  : "0 0 20px rgba(0,0,0,0.4)",
                background: `linear-gradient(135deg, ${realm.color}08 0%, transparent 100%)`,
              }}
            >
              <ImageWithFallback
                src={realm.image}
                alt={realm.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
              />
              {/* Overlay gradient - enhanced */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${realm.color}60 0%, ${realm.color}30 30%, transparent 50%, transparent 70%, ${realm.color}40 100%)`,
                  opacity: hoveredIndex === index ? 1 : 0.7,
                }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />

              {/* Glow border on hover - enhanced */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 rounded-lg"
                  style={{ boxShadow: `inset 0 0 30px ${realm.color}50, 0 0 40px ${realm.color}40` }}
                />
              )}

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Element badge - enhanced */}
                <motion.div
                  className="inline-flex items-center gap-2 mb-2.5"
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                >
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: realm.color,
                      boxShadow: `0 0 12px ${realm.color}`,
                    }}
                    animate={hoveredIndex === index ? { scale: 1.3 } : { scale: 1 }}
                  />
                  <span
                    className="uppercase tracking-wider"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: realm.color,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {realm.element}
                  </span>
                </motion.div>

                {/* Title - improved */}
                <h3
                  className="text-white mb-1 transition-all duration-300"
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    textShadow: `0 2px 8px rgba(0,0,0,0.5)`,
                    letterSpacing: "0.02em",
                  }}
                >
                  {realm.name}
                </h3>

                {/* Guardian - improved */}
                <p
                  className="text-gray-200 mb-2.5 text-xs transition-colors duration-300"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    textShadow: `0 1px 4px rgba(0,0,0,0.5)`,
                  }}
                >
                  {realm.guardian.split(",")[0]}
                </p>

                {/* Description - expanded on hover */}
                <motion.p
                  className="text-gray-300 overflow-hidden"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    lineHeight: 1.6,
                    textShadow: `0 1px 4px rgba(0,0,0,0.5)`,
                  }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={hoveredIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {realm.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={selectedRealm !== null} onOpenChange={(open: boolean) => !open && setSelectedRealm(null)}>
          <DialogContent className="max-w-[90vw] w-full border-white/10 bg-[#071624] p-0 text-white overflow-hidden">
            {selectedRealm && (
              <>
                <div className="relative h-40 sm:h-48">
                  <ImageWithFallback src={selectedRealm.image} alt={selectedRealm.name} className="absolute inset-0 h-full w-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, ${selectedRealm.color}25 0%, rgba(2, 10, 20, 0.92) 70%)` }}
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 pb-4">
                    <span
                      className="uppercase tracking-[0.25em]"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "11px", fontWeight: 600, color: selectedRealm.color }}
                    >
                      {selectedRealm.element} Realm
                    </span>
                    <DialogHeader className="text-left">
                      <DialogTitle style={{ fontFamily: "Cinzel, serif", fontSize: "28px", fontWeight: 700 }}>{selectedRealm.name}</DialogTitle>
                      <DialogDescription className="text-gray-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", fontWeight: 500 }}>
                        Guardian: {selectedRealm.guardian}
                      </DialogDescription>
                    </DialogHeader>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-6">
                  {/* Left Column: Description */}
                  <div className="space-y-6 lg:col-span-1">
                    <div>
                      <h3 className="mb-3" style={{ fontFamily: "Cinzel, serif", fontSize: "16px", fontWeight: 700 }}>
                        About This Realm
                      </h3>
                      <p className="text-gray-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", lineHeight: 1.8 }}>
                        {selectedRealm.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Columns: Enemies Grid */}
                  <div className="lg:col-span-2">
                    <h4 className="mb-4" style={{ fontFamily: "Cinzel, serif", fontSize: "16px", fontWeight: 700 }}>
                      Enemies In This Realm
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedRealm.enemies.map((enemy) => (
                        <div key={enemy.name} className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors duration-200 flex flex-col items-center text-center">
                          {/* Enemy Screenshot Placeholder */}
                          <div className="w-24 h-24 rounded-md bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-3">
                            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#999" }}>Image</span>
                          </div>
                          {/* Enemy Info */}
                          <p className="text-white mb-2" style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 600 }}>
                            {enemy.name}
                          </p>
                          <p className="text-gray-300" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", lineHeight: 1.5 }}>
                            {enemy.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
