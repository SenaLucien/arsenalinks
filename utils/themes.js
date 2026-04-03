export const themes = {
  'dark-neon': {
    name: 'Dark Neon',
    background: 'bg-gradient-to-br from-black via-gray-900 to-red-950',
    cardBg: 'bg-black/40 backdrop-blur-sm',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    buttonBg: 'bg-gradient-to-r from-red-600 to-pink-600',
    buttonHover: 'hover:from-red-500 hover:to-pink-500',
    border: 'border-red-500/30',
    glow: 'shadow-[0_0_15px_rgba(255,0,85,0.5)]',
    accentColor: '#ff0055',
  },
  'clean-minimal': {
    name: 'Clean Minimal',
    background: 'bg-gradient-to-br from-white to-gray-100',
    cardBg: 'bg-white/90 backdrop-blur-sm',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    buttonBg: 'bg-gray-800',
    buttonHover: 'hover:bg-gray-700',
    border: 'border-gray-300',
    glow: 'shadow-lg',
    accentColor: '#1f2937',
  },
  'gold-luxury': {
    name: 'Gold Luxury',
    background: 'bg-gradient-to-br from-black via-gray-900 to-yellow-900',
    cardBg: 'bg-black/50 backdrop-blur-sm',
    text: 'text-yellow-50',
    textSecondary: 'text-yellow-100',
    buttonBg: 'bg-gradient-to-r from-yellow-600 to-yellow-500',
    buttonHover: 'hover:from-yellow-500 hover:to-yellow-400',
    border: 'border-yellow-600/30',
    glow: 'shadow-[0_0_15px_rgba(255,215,0,0.5)]',
    accentColor: '#ffd700',
  },
};

export function getTheme(themeName) {
  return themes[themeName] || themes['dark-neon'];
}
