'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#proposition', label: 'Proposition de Valeur' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Expérience' },
    { href: '#success-stories', label: 'Références' },
    { href: '#why', label: 'Pourquoi Collaborer' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Accent Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50" />
      
      <nav
        className={`fixed top-1 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo / Brand */}
            <a
              href="#"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">JH</span>
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900 group-hover:text-accent transition-colors">
                  Jalil Halim
                </div>
                <div className="text-xs text-gray-600 tracking-wide">
                  Digital Transformation Expert
                </div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-bold hover:bg-secondary transition-colors"
              >
                CONTACT
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-21 right-0 w-full max-w-sm bg-white shadow-2xl">
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 border-l-4 border-transparent hover:border-accent transition-all"
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block mt-4 px-4 py-3 bg-primary text-white text-sm font-bold text-center hover:bg-secondary transition-colors"
              >
                PRENDRE CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
