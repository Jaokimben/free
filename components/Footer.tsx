'use client';

import React from 'react';
import { Mail, Phone, Linkedin, Award, ExternalLink } from 'lucide-react';

export default function Footer() {
  const certifications = [
    'PMP (Project Management Professional)',
    'ITIL v4 Foundation',
    'TOGAF 9.2 Certified',
    'AWS Solutions Architect',
    'Azure Solutions Architect',
    'Executive Coach ICC Certified'
  ];

  const expertise = [
    'Transformation Digitale',
    'Intelligence Artificielle',
    'Architecture Cloud',
    'Stratégie B2B',
    'Change Management',
    'Leadership Stratégique'
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="section-container border-b border-white/10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1 - Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Jalil Halim</h3>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Expert en Transformation Digitale & IA avec 15+ années d'expérience 
              dans l'accompagnement de grandes entreprises.
            </p>
            
            <div className="space-y-3">
              <a
                href="mailto:jalilsanad.halim@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span className="group-hover:underline">jalilsanad.halim@gmail.com</span>
              </a>
              
              <a
                href="tel:+33628071012"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="group-hover:underline">06 28 07 10 12</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/jalilhalim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="group-hover:underline">linkedin.com/in/jalilhalim</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2 - Expertise */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-8 bg-accent" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Domaines d'Expertise</h4>
            </div>
            <ul className="space-y-2">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <h4 className="text-sm font-bold uppercase tracking-wider">Certifications Elite</h4>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {new Date().getFullYear()} Jalil Halim. Tous droits réservés.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#proposition" className="hover:text-white transition-colors">
                Proposition de Valeur
              </a>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Expérience
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Top Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-accent via-white/20 to-accent" />
    </footer>
  );
}
