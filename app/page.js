'use client';

import Link from 'next/link';
import { FaLink, FaPalette, FaMobile, FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Arsena<span className="text-red-500">Bio</span>
          </div>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-6 py-2 text-white hover:text-red-400 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-500 hover:to-pink-500 transition glow-red"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6 animate-float">
            Your Links, Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              Style
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Create a stunning link bio page with custom backgrounds, themes, and automatic icon detection. 
            Perfect for creators, businesses, and anyone who wants to stand out.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-red-500 hover:to-pink-500 transition glow-red"
          >
            Create Your Bio Link
          </Link>
        </div>

        {/* Demo Preview */}
        <div className="mt-20 max-w-md mx-auto">
          <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 glow-red">
            <div className="text-center mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-500 to-pink-500 mx-auto mb-4 glow-red"></div>
              <h3 className="text-2xl font-bold text-white">@yourname</h3>
              <p className="text-gray-400 mt-2">Your awesome bio here</p>
            </div>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-red-600 to-pink-600 rounded-lg p-4 text-white text-center hover:from-red-500 hover:to-pink-500 transition cursor-pointer"
                >
                  Link {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Why Choose Arsena<span className="text-red-500">Bio</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FaLink />}
            title="Auto Icon Detection"
            description="Automatically detects platform icons for YouTube, Instagram, TikTok, and 15+ more"
          />
          <FeatureCard
            icon={<FaPalette />}
            title="Custom Themes"
            description="Choose from Dark Neon, Clean Minimal, or Gold Luxury themes"
          />
          <FeatureCard
            icon={<FaMobile />}
            title="Custom Backgrounds"
            description="Upload your own background images for a truly unique look"
          />
          <FeatureCard
            icon={<FaDownload />}
            title="Download HTML"
            description="Export your bio link as a standalone HTML file"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 border border-red-500/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators using ArsenaBio
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:from-red-500 hover:to-pink-500 transition glow-red"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/20 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2026 ArsenaBio. Built with 🗿 by Arsena</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition group">
      <div className="text-4xl text-red-500 mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
