'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, DollarSign, Shield, Zap } from 'lucide-react';

export default function ValueProposition() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Croissance Accélérée',
      description: 'Augmentation de 2x de part de marché en moyenne',
      metric: '+25%',
      label: 'Revenus'
    },
    {
      icon: Clock,
      title: 'Time-to-Market Réduit',
      description: 'Accélération des cycles de déploiement',
      metric: '-40%',
      label: 'Délais'
    },
    {
      icon: DollarSign,
      title: 'ROI Mesurable',
      description: 'Retour sur investissement documenté et trackable',
      metric: '3-6 mois',
      label: 'ROI'
    },
    {
      icon: Shield,
      title: 'Risques Maîtrisés',
      description: 'Approche éprouvée sur 50+ projets stratégiques',
      metric: '100%',
      label: 'Conformité'
    },
    {
      icon: Zap,
      title: 'Transformation Rapide',
      description: 'Méthodologies agiles et déploiement progressif',
      metric: '6-12 mois',
      label: 'Déploiement'
    },
    {
      icon: Target,
      title: 'Excellence Opérationnelle',
      description: 'Optimisation continue des processus et KPIs',
      metric: '+30%',
      label: 'Efficacité'
    }
  ];

  return (
    <section id="proposition" className="bg-light py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-bold tracking-widest uppercase text-accent mb-4">
              Proposition de Valeur
            </div>
            <h2 className="heading-2 mb-6">
              Une Approche Structurée pour des Résultats Mesurables
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed">
              Méthodologie éprouvée combinant stratégie, technologie et conduite du changement 
              pour garantir le succès de vos transformations digitales.
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-mbb group hover:shadow-lg"
            >
              {/* Icon & Metric */}
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-gray-50 group-hover:bg-accent/10 transition-colors">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-success">{benefit.metric}</div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {benefit.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-t-2 border-b-2 border-accent py-6 px-12">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Prêt à accélérer votre transformation digitale?
            </p>
            <a href="#contact" className="text-accent font-bold hover:underline">
              Discutons de votre projet →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
