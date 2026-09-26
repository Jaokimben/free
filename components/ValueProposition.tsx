'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Clock, DollarSign, Shield, Zap, Globe } from 'lucide-react';

export default function ValueProposition() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    const saved = localStorage.getItem('site-language') as 'en' | 'fr';
    if (saved) setLanguage(saved);
    
    // Listen for language changes from other components
    const handleStorageChange = () => {
      const saved = localStorage.getItem('site-language') as 'en' | 'fr';
      if (saved) setLanguage(saved);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const content = {
    en: {
      sectionTitle: 'Value Proposition',
      mainTitle: 'A Structured Approach for Measurable Results',
      subtitle: 'Proven methodology combining strategy, technology and change management to ensure the success of your digital transformations.',
      benefits: [
        {
          icon: TrendingUp,
          title: 'Accelerated Growth',
          description: '2x average market share increase',
          metric: '+25%',
          label: 'Revenue'
        },
        {
          icon: Clock,
          title: 'Reduced Time-to-Market',
          description: 'Accelerated deployment cycles',
          metric: '-40%',
          label: 'Time'
        },
        {
          icon: DollarSign,
          title: 'Measurable ROI',
          description: 'Documented and trackable return on investment',
          metric: '3-6 months',
          label: 'ROI'
        },
        {
          icon: Shield,
          title: 'Controlled Risks',
          description: 'Proven approach on 50+ strategic projects',
          metric: '100%',
          label: 'Compliance'
        },
        {
          icon: Zap,
          title: 'Rapid Transformation',
          description: 'Agile methodologies and progressive deployment',
          metric: '6-12 months',
          label: 'Deployment'
        },
        {
          icon: Target,
          title: 'Operational Excellence',
          description: 'Continuous process and KPI optimization',
          metric: '+30%',
          label: 'Efficiency'
        }
      ],
      cta: {
        question: 'Ready to accelerate your digital transformation?',
        link: 'Let\'s discuss your project →'
      }
    },
    fr: {
      sectionTitle: 'Proposition de Valeur',
      mainTitle: 'Une Approche Structurée pour des Résultats Mesurables',
      subtitle: 'Méthodologie éprouvée combinant stratégie, technologie et conduite du changement pour garantir le succès de vos transformations digitales.',
      benefits: [
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
      ],
      cta: {
        question: 'Prêt à accélérer votre transformation digitale?',
        link: 'Discutons de votre projet →'
      }
    }
  };

  const current = content[language];

  return (
    <section id="proposition" className="bg-light py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            key={`value-${language}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-bold tracking-widest uppercase text-accent mb-4">
              {current.sectionTitle}
            </div>
            <h2 className="heading-2 mb-6">
              {current.mainTitle}
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6" />
            <p className="text-lg text-gray-600 leading-relaxed">
              {current.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.benefits.map((benefit, index) => (
            <motion.div
              key={`${language}-${index}`}
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
          key={`cta-${language}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block border-t-2 border-b-2 border-accent py-6 px-12">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              {current.cta.question}
            </p>
            <a href="#contact" className="text-accent font-bold hover:underline">
              {current.cta.link}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
