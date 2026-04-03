import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaSpotify,
  FaTwitch,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
  FaLink,
  FaGlobe,
  FaSoundcloud,
  FaBehance,
  FaDribbble,
  FaMedium,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export function detectPlatform(url) {
  const urlLower = url.toLowerCase();

  const platforms = [
    { name: 'youtube', keywords: ['youtube.com', 'youtu.be'], icon: FaYoutube, color: '#FF0000' },
    { name: 'instagram', keywords: ['instagram.com'], icon: FaInstagram, color: '#E4405F' },
    { name: 'tiktok', keywords: ['tiktok.com'], icon: SiTiktok, color: '#000000' },
    { name: 'twitter', keywords: ['twitter.com', 'x.com'], icon: FaTwitter, color: '#1DA1F2' },
    { name: 'facebook', keywords: ['facebook.com', 'fb.com'], icon: FaFacebook, color: '#1877F2' },
    { name: 'linkedin', keywords: ['linkedin.com'], icon: FaLinkedin, color: '#0A66C2' },
    { name: 'github', keywords: ['github.com'], icon: FaGithub, color: '#181717' },
    { name: 'spotify', keywords: ['spotify.com'], icon: FaSpotify, color: '#1DB954' },
    { name: 'twitch', keywords: ['twitch.tv'], icon: FaTwitch, color: '#9146FF' },
    { name: 'discord', keywords: ['discord.com', 'discord.gg'], icon: FaDiscord, color: '#5865F2' },
    { name: 'telegram', keywords: ['t.me', 'telegram.me'], icon: FaTelegram, color: '#26A5E4' },
    { name: 'whatsapp', keywords: ['wa.me', 'whatsapp.com'], icon: FaWhatsapp, color: '#25D366' },
    { name: 'soundcloud', keywords: ['soundcloud.com'], icon: FaSoundcloud, color: '#FF5500' },
    { name: 'behance', keywords: ['behance.net'], icon: FaBehance, color: '#1769FF' },
    { name: 'dribbble', keywords: ['dribbble.com'], icon: FaDribbble, color: '#EA4C89' },
    { name: 'medium', keywords: ['medium.com'], icon: FaMedium, color: '#000000' },
  ];

  for (const platform of platforms) {
    if (platform.keywords.some((keyword) => urlLower.includes(keyword))) {
      return platform;
    }
  }

  return { name: 'link', icon: FaLink, color: '#888888' };
}
