'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Lightbulb, Globe } from 'lucide-react';

export default function Hero() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    const saved = localStorage.getItem('site-language') as 'en' | 'fr';
    if (saved) setLanguage(saved);
  }, []);

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    localStorage.setItem('site-language', lang);
  };

  const content = {
    en: {
      subtitle: 'Transformation Advisory Director',
      description: 'Executive leader specialising in digital transformation, business development, and strategic innovation across telecommunications, technology, utilities, and public sectors.',
      pillars: [
        { icon: TrendingUp, text: 'Digital Transformation' },
        { icon: Users, text: 'Strategic Leadership' },
        { icon: Lightbulb, text: 'Innovation & AI' }
      ],
      ctaPrimary: 'Schedule Meeting',
      ctaSecondary: 'View Experience',
      metrics: [
        { value: '25+', label: 'Years Experience' },
        { value: '9', label: 'Leadership Roles' },
        { value: '€M+', label: 'Revenue Generated' }
      ],
      valueProposition: {
        title: 'Structured Approach & Measurable Results',
        items: [
          'Strategic diagnosis & framing',
          'Architecture & implementation',
          'Change management & adoption',
          'Performance measurement & optimization'
        ]
      },
      certifications: {
        title: 'Elite Certifications',
        items: [
          '• GenAI / Stanford, AWS & Azure Certified',
          '• Executive Coach ICC & Leadership Certified'
        ]
      }
    },
    fr: {
      subtitle: 'Directeur Conseil en Transformation',
      description: 'Cadre hautement qualifié, spécialisé dans la transformation numérique, le développement des affaires et l\'innovation stratégique dans les secteurs des télécommunications, de la technologie, des services publics et du secteur public.',
      pillars: [
        { icon: TrendingUp, text: 'Transformation Digitale' },
        { icon: Users, text: 'Leadership Stratégique' },
        { icon: Lightbulb, text: 'Innovation & IA' }
      ],
      ctaPrimary: 'Prendre Rendez-vous',
      ctaSecondary: 'Découvrir l\'Expertise',
      metrics: [
        { value: '25+', label: 'Années d\'Expérience' },
        { value: '9', label: 'Rôles de Leadership' },
        { value: '€M+', label: 'Revenus Générés' }
      ],
      valueProposition: {
        title: 'Approche Structurée & Résultats Mesurables',
        items: [
          'Diagnostic & cadrage stratégique',
          'Architecture & implémentation',
          'Conduite du changement & adoption',
          'Mesure de performance & optimisation'
        ]
      },
      certifications: {
        title: 'Certifications Elite',
        items: [
          '• GenAI / Stanford, AWS & Azure Certifié',
          '• Executive Coach ICC & Leadership Certifié'
        ]
      }
    }
  };

  const current = content[language];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Language Selector - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <div className="inline-flex items-center gap-2 p-1 bg-white border border-gray-200 shadow-sm">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
              language === 'en'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <Globe className="w-3 h-3 inline mr-1" />
            EN
          </button>
          <button
            onClick={() => handleLanguageChange('fr')}
            className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
              language === 'fr'
                ? 'bg-primary text-white'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <Globe className="w-3 h-3 inline mr-1" />
            FR
          </button>
        </div>
      </div>

      {/* MBB-Style Header Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            key={language}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Subtitle */}
            <div className="inline-block">
              <div className="text-sm font-bold tracking-widest uppercase text-accent mb-2">
                {current.subtitle}
              </div>
              <div className="h-1 w-20 bg-accent" />
            </div>

            {/* Main Title */}
            <h1 className="heading-1">
              Jalil Halim
            </h1>
            
            <div className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              {current.description}
            </div>

            {/* Key Pillars */}
            <div className="flex flex-wrap gap-4 pt-4">
              {current.pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 hover:border-accent transition-colors"
                >
                  <pillar.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-gray-700">{pillar.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className="btn-primary group">
                {current.ctaPrimary}
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="btn-secondary">
                {current.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            key={`metrics-${language}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6">
              {current.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-metric text-center"
                >
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label mt-2">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Value Proposition Box */}
            <div className="border-l-4 border-accent bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {current.valueProposition.title}
              </h3>
              <ul className="space-y-3">
                {current.valueProposition.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Signals */}
            <div className="bg-primary text-white p-6">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">
                {current.certifications.title}
              </div>
              <div className="text-xs space-y-1 text-gray-300">
                {current.certifications.items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
