import { Facebook, Github } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Github, href: "#", label: "GitHub" },
];

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Press Kit", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5" style={{ background: "#010812" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-white" style={{ fontFamily: "Cinzel, serif", fontSize: "16px", fontWeight: 700 }}>
              Shattered Realm
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 hover:text-gray-300 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "13px" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif", fontSize: "12px" }}>
            &copy; 2026 Shattered Realm. All rights reserved. Powered by Unity.
          </p>
        </div>
      </div>
    </footer>
  );
}