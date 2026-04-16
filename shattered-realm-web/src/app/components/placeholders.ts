function createPlaceholder(label: string, startColor: string, endColor: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${label}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${startColor}" />
          <stop offset="100%" stop-color="${endColor}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.32)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <circle cx="850" cy="180" r="220" fill="url(#glow)" />
      <circle cx="250" cy="720" r="280" fill="url(#glow)" opacity="0.45" />
      <path d="M0 720C180 640 330 640 460 720S760 820 1200 660V900H0Z" fill="rgba(4,9,20,0.55)" />
      <path d="M0 120C260 20 430 60 620 150S970 260 1200 160V0H0Z" fill="rgba(255,255,255,0.08)" />
      <text x="72" y="790" fill="white" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="700" letter-spacing="8">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const placeholderImages = {
  heroBackground: createPlaceholder("Shattered Realm", "#03101c", "#102c43"),
  gameLogo: createPlaceholder("Core Protocol", "#0f172a", "#0f766e"),
  loreArt: createPlaceholder("World Lore", "#08111c", "#164e63"),
  realms: {
    verdantWastes: createPlaceholder("Verdant Wastes", "#0b2d1b", "#15803d"),
    frozenAbyss: createPlaceholder("Frozen Abyss", "#082f49", "#67e8f9"),
    scorchedCitadel: createPlaceholder("Scorched Citadel", "#3f0a0a", "#ef4444"),
    drownedDepths: createPlaceholder("Drowned Depths", "#0b1737", "#2563eb"),
    plagueGardens: createPlaceholder("Plague Gardens", "#1a2e05", "#84cc16"),
    voidThrone: createPlaceholder("Void Throne", "#14091e", "#9333ea"),
  },
  characters: {
    lunaria: createPlaceholder("Lunaria", "#27070d", "#ef4444"),
    darius: createPlaceholder("Darius", "#0b1a3d", "#3b82f6"),
    seraphina: createPlaceholder("Seraphina", "#08241a", "#22c55e"),
    gorath: createPlaceholder("Gorath", "#3a1405", "#f97316"),
    nyx: createPlaceholder("Nyx", "#1e0f38", "#a855f7"),
    therion: createPlaceholder("Therion", "#3b2400", "#a16207"),
  },
};