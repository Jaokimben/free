'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export default function WhyWorkTogether() {
  const reasons = [
    {
      icon: Target,
      title: 'Double Compétence Unique',
      description: 'Expertise technique approfondie (Cloud, IA, Architecture) couplée à une vision business stratégique. Cette combinaison rare garantit des solutions technologiques alignées sur vos objectifs business.',
      impact: 'Réduction de 30% des risques projets'
    },
    {
      icon: TrendingUp,
      title: 'Track Record Éprouvé',
      description: '15+ années d\'expérience avec 50+ projets de transformation digitale réussis chez des leaders du marché (Bouygues, Kyndryl, OpenCell). Résultats mesurables et références vérifiables.',
      impact: 'x2 croissance moyenne clients'
    },
    {
      icon: Shield,
      title: 'Approche Structurée & Méthodique',
      description: 'Méthodologies éprouvées (PMP, TOGAF, ITIL) garantissant qualité, conformité et maîtrise des délais. Chaque projet suit un cadre rigoureux avec jalons clairs et livrables définis.',
      impact: '100% respect des engagements'
    },
    {
      icon: Users,
      title: 'Leadership & Conduite du Changement',
      description: 'Coach exécutif certifié ICC avec expertise en transformation culturelle. Capacité à mobiliser les équipes, gérer les résistances et garantir l\'adoption des solutions déployées.',
      impact: '+40% engagement des équipes'
    },
    {
      icon: Zap,
      title: 'Expertise Multisectorielle',
      description: 'Expérience transverse dans 4 secteurs clés (Télécoms, Tech/SaaS, Énergie, Public). Cette diversité apporte des best practices innovantes et une vision 360° des enjeux business.',
      impact: 'Innovation cross-sectorielle'
    },
    {
      icon: Award,
      title: 'Certifications Elite',
      description: 'Portefeuille complet de certifications internationales (AWS, Azure, PMP, TOGAF, ITIL). Garantie d\'expertise à jour sur les technologies et méthodologies de référence du marché.',
      impact: 'Excellence technique garantie'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnostic Stratégique',
      description: 'Analyse approfondie de votre contexte, enjeux et objectifs business',
      duration: '1-2 semaines'
    },
    {
      step: '02',
      title: 'Cadrage & Roadmap',
      description: 'Définition de la vision cible, architecture et plan de transformation',
      duration: '2-3 semaines'
    },
    {
      step: '03',
      title: 'Implémentation Agile',
      description: 'Déploiement itératif avec quick wins et ajustements continus',
      duration: '3-12 mois'
    },
    {
      step: '04',
      title: 'Adoption & Optimisation',
      description: 'Conduite du changement, formation et mesure de la performance',
      duration: 'Continu'
    }
  ];

  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-bold tracking-widest uppercase text-accent mb-4">
              Pourquoi Collaborer
            </div>
            <h2 className="heading-2 mb-6">
              6 Raisons de Choisir une Expertise Différenciante
            </h2>
            <div className="h-1 w-20 bg-accent mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Une combinaison unique de compétences techniques, d'expérience stratégique 
              et de capacités de leadership pour garantir le succès de vos projets.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-mbb group hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-4 bg-gray-50 group-hover:bg-accent/10 transition-colors">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3 h-3" />
                    {reason.impact}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-20">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t-4 border-accent pt-16"
        >
          <div className="mb-12">
            <div className="text-sm font-bold tracking-widest uppercase text-accent mb-4">
              Processus d'Engagement
            </div>
            <h2 className="heading-2 mb-4">
              Une Approche en 4 Phases pour Maximiser Vos Chances de Succès
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Méthodologie structurée et éprouvée garantissant visibilité, maîtrise des risques 
              et alignement continu avec vos objectifs business.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 -ml-3" />
                )}

                {/* Step Card */}
                <div className="relative bg-light border-l-4 border-accent p-6 h-full">
                  <div className="text-4xl font-bold text-accent/20 mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-xs font-semibold text-gray-700">
                    {step.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-primary text-white p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Transformons Ensemble Votre Vision en Réalité
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Réservez un premier échange de 30 minutes pour discuter de vos enjeux 
              et identifier les opportunités de transformation pour votre organisation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 font-bold hover:bg-gray-100 transition-colors group"
              >
                Planifier un Échange
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jalilhalim" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 font-bold hover:bg-white/10 transition-colors"
              >
                Voir le Profil LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
