'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      company: 'Bouygues Télécom',
      sector: 'Télécoms & 5G',
      role: 'Head of Business Development B2B & 5G',
      challenge: 'Accélérer la monétisation des services 5G B2B et développer le portefeuille entreprise dans un marché ultra-compétitif.',
      solution: [
        'Élaboration d\'une stratégie GTM 5G B2B complète',
        'Mise en place d\'une équipe dédiée Smart Cities & IoT',
        'Création de partenariats stratégiques avec écosystème tech',
        'Développement de business cases sectoriels (industrie, santé, logistique)'
      ],
      results: [
        { metric: 'x2', label: 'Part de marché B2B' },
        { metric: '+40%', label: 'Pipeline commercial' },
        { metric: '15+', label: 'Partenariats stratégiques' }
      ],
      duration: '2019 - 2023'
    },
    {
      company: 'Kyndryl',
      sector: 'Services IT & Cloud',
      role: 'Senior Sales Leader - Secteurs Énergie & Public',
      challenge: 'Transformer l\'approche commerciale post-spin-off IBM et développer de nouvelles offres cloud natives dans les secteurs régulés.',
      solution: [
        'Refonte complète de la stratégie commerciale sectorielle',
        'Modernisation du portefeuille d\'offres (Cloud, IA, Cybersécurité)',
        'Structuration d\'équipes commerciales spécialisées',
        'Implémentation de méthodologies Account-Based Marketing'
      ],
      results: [
        { metric: '+25%', label: 'Croissance revenus' },
        { metric: '20+', label: 'Grands comptes signés' },
        { metric: '100%', label: 'Conformité NIS2' }
      ],
      duration: '2023 - Présent'
    },
    {
      company: 'OpenCell',
      sector: 'SaaS & Cloud Native',
      role: 'Senior Strategic Advisor',
      challenge: 'Accélérer la scale-up d\'une solution SaaS de billing télécoms et pénétrer de nouveaux marchés internationaux.',
      solution: [
        'Définition de la stratégie d\'expansion européenne',
        'Optimisation du modèle commercial et pricing',
        'Structuration des partenariats avec opérateurs et intégrateurs',
        'Mise en place de processus de vente scalables'
      ],
      results: [
        { metric: '+25%', label: 'Revenus annuels' },
        { metric: '5', label: 'Nouveaux pays' },
        { metric: '10+', label: 'Clients stratégiques' }
      ],
      duration: '2021 - 2023'
    }
  ];

  return (
    <section id="success-stories" className="bg-light py-20 md:py-28">
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
              Success Stories
            </div>
            <h2 className="heading-2 mb-6">
              Des Transformations Mesurables chez des Leaders du Marché
            </h2>
            <div className="h-1 w-20 bg-accent mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Retours d'expérience de missions stratégiques ayant généré un impact business significatif 
              et mesurable pour des organisations de premier plan.
            </p>
          </motion.div>
        </div>

        {/* Stories */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card-mbb hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {story.company}
                    </h3>
                    <div className="text-sm text-gray-600 mb-2">{story.sector}</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white text-xs font-semibold">
                      <Award className="w-3 h-3" />
                      {story.role}
                    </div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-accent">
                  {story.duration}
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenge & Solution */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-accent" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                        Contexte & Enjeux
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-1 w-8 bg-accent" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                        Approche & Actions Clés
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {story.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700">
                      Résultats Mesurés
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="card-metric">
                        <div className="text-3xl font-bold text-success mb-1">
                          {result.metric}
                        </div>
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
          <div className="inline-block border-4 border-accent p-8">
            <div className="flex items-center gap-3 justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-gray-900">
                Prêt à Générer des Résultats Similaires?
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Discutons de votre projet et des opportunités de transformation.
            </p>
            <a href="#contact" className="btn-primary">
              Planifier un Échange
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
