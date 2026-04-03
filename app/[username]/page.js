'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { detectPlatform } from '@/utils/iconDetector';
import { getTheme } from '@/utils/themes';

export default function UserProfile() {
  const params = useParams();
  const username = params.username;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUser();
  }, [username]);

  const fetchUser = async () => {
    try {
      const res = await fetch(`/api/user/${username}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'User not found');
      }

      setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <a
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-500 hover:to-pink-500 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  const theme = getTheme(user.theme);

  return (
    <div
      className={`min-h-screen ${theme.background} relative overflow-hidden`}
      style={{
        backgroundImage: user.background ? `url(${user.background})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text visibility */}
      {user.background && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Profile Card */}
          <div className={`${theme.cardBg} ${theme.border} border rounded-2xl p-8 ${theme.glow} mb-6`}>
            {/* Avatar */}
            {user.avatar && (
              <div className="flex justify-center mb-6">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4"
                  style={{ borderColor: theme.accentColor }}
                />
              </div>
            )}

            {/* Name & Bio */}
            <div className="text-center mb-8">
              <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>
                {user.name}
              </h1>
              <p className={`${theme.textSecondary} text-sm mb-1`}>
                @{user.username}
              </p>
              {user.bio && (
                <p className={`${theme.textSecondary} mt-4 max-w-lg mx-auto`}>
                  {user.bio}
                </p>
              )}
            </div>

            {/* Links */}
            <div className="space-y-3">
              {user.links && user.links.length > 0 ? (
                user.links.map((link, index) => {
                  const platform = detectPlatform(link.url);
                  const Icon = platform.icon;

                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block ${theme.buttonBg} ${theme.buttonHover} text-white rounded-lg p-4 transition transform hover:scale-105 ${theme.glow} hover:brightness-110`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <Icon className="text-xl" />
                        <span className="font-medium">{link.title}</span>
                      </div>
                    </a>
                  );
                })
              ) : (
                <p className={`text-center ${theme.textSecondary} py-8`}>
                  No links added yet
                </p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <a
              href="/"
              className={`text-sm ${theme.textSecondary} hover:text-white transition`}
            >
              Create your own bio link on ArsenaBio 🗿
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
