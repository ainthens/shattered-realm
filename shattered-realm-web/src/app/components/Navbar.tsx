import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useIsAndroid } from "./useIsAndroid";
import { useIsMobile } from "./useIsMobile";

const navLinks = [
  { label: "Home", href: "#home", icon: "🏠" },
  { label: "Features", href: "#features", icon: "⚙️" },
  { label: "Realms", href: "#realms", icon: "🌍" },
  { label: "Characters", href: "#characters", icon: "👥" },
  { label: "Trailer", href: "#trailer", icon: "🎬" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAndroid = useIsAndroid();
  const isMobile = useIsMobile();

  const allLinks = isAndroid
    ? [...navLinks, { label: "Download", href: "#download", icon: "📥" }]
    : navLinks;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-b from-[#020a14]/95 via-[#061528]/90 to-[#020a14]/85 backdrop-blur-xl shadow-2xl shadow-cyan-900/30 border-b border-cyan-500/10" 
          : "bg-gradient-to-b from-[#020a14]/50 via-transparent to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3 relative group">
            {/* Enhanced dynamic light glow around logo */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute -inset-4 rounded-xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, rgba(6,182,212,0.2) 40%, transparent 70%)",
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: [0.5, 0.9, 0.4, 0.8, 0.5],
                    scale: [1, 1.2, 0.9, 1.15, 1],
                    rotate: [0, 5, -3, 2, 0],
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-lg pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 60%)",
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: [0.4, 0.7, 0.2, 0.6, 0.4],
                    scale: [1, 1.1, 1.15, 0.95, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </>
            )}
            <span className="relative text-white font-bold group-hover:text-cyan-300 transition-colors duration-300" style={{ fontFamily: "Cinzel, serif", fontSize: "18px", fontWeight: 700, letterSpacing: "0.05em" }}>
              Shattered Realm
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {allLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <span className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 font-medium text-sm tracking-wide flex items-center gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  {link.label}
                </span>
                
                {/* Hover underline effect */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button 
            className="md:hidden text-white relative z-10" 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-gradient-to-b from-[#020a14]/95 via-[#061528]/90 to-[#020a14]/95 backdrop-blur-xl border-t border-cyan-500/20">
          <div className="px-4 py-6 flex flex-col gap-3">
            {allLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative group px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-300 transition-colors font-medium text-sm tracking-wide overflow-hidden"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Mobile link background hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 -z-10 rounded-lg"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="flex items-center gap-3">
                  <span>{link.icon}</span>
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}