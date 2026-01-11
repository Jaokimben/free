'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Lightbulb } from 'lucide-react';

export default function Hero() {
  const metrics = [
    { value: '15+', label: 'Années d\'Expérience' },
    { value: '50+', label: 'Projets Réalisés' },
    { value: 'x2', label: 'Croissance Moyenne' }
  ];

  const pillars = [
    { icon: TrendingUp, text: 'Transformation Digitale' },
    { icon: Users, text: 'Leadership Stratégique' },
    { icon: Lightbulb, text: 'Innovation & IA' }
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* MBB-Style Header Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Subtitle */}
            <div className="inline-block">
              <div className="text-sm font-bold tracking-widest uppercase text-accent mb-2">
                Expert en Transformation Digitale & IA
              </div>
              <div className="h-1 w-20 bg-accent" />
            </div>

            {/* Main Title */}
            <h1 className="heading-1">
              Jalil Halim
            </h1>
            
            <div className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              Accélérez votre transformation digitale avec une expertise 
              <span className="font-semibold text-primary"> éprouvée en stratégie, IA et innovation</span>
            </div>

            {/* Key Pillars */}
            <div className="flex flex-wrap gap-4 pt-4">
              {pillars.map((pillar, index) => (
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
                Prendre Rendez-vous
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#experience" className="btn-secondary">
                Découvrir l'Expertise
              </a>
            </div>
          </motion.div>

          {/* Right Column - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
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
                Approche Structurée & Résultats Mesurables
              </h3>
              <ul className="space-y-3">
                {[
                  'Diagnostic & cadrage stratégique',
                  'Architecture & implémentation',
                  'Conduite du changement & adoption',
                  'Mesure de performance & optimisation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Signals */}
            <div className="bg-primary text-white p-6">
              <div className="text-sm font-bold uppercase tracking-wider mb-2">Certifications Elite</div>
              <div className="text-xs space-y-1 text-gray-300">
                <div>• PMP, ITIL, TOGAF, AWS & Azure Certified</div>
                <div>• Executive Coach ICC & Leadership Certifié</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
