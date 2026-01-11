'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Cpu, 
  Users, 
  TrendingUp, 
  Briefcase,
  ArrowRight 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Compass,
      title: 'Conseil Stratégique',
      description: 'Élaboration de stratégies digitales alignées sur les objectifs business',
      deliverables: [
        'Diagnostic & audit digital',
        'Roadmap de transformation',
        'Business case & ROI',
        'Gouvernance & KPIs'
      ]
    },
    {
      icon: Cpu,
      title: 'Architecture & Technologie',
      description: 'Conception et mise en œuvre de solutions technologiques robustes',
      deliverables: [
        'Architecture d\'entreprise',
        'Solutions Cloud & IA',
        'Intégration de systèmes',
        'Modernisation legacy'
      ]
    },
    {
      icon: Users,
      title: 'Conduite du Changement',
      description: 'Accompagnement des équipes pour l\'adoption et la montée en compétence',
      deliverables: [
        'Plan de communication',
        'Formation & coaching',
        'Gestion des résistances',
        'Mesure de l\'adoption'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Development',
      description: 'Développement commercial et croissance accélérée des revenus',
      deliverables: [
        'Stratégies GTM',
        'Partenariats stratégiques',
        'Marketing B2B',
        'Expansion de marché'
      ]
    },
    {
      icon: Briefcase,
      title: 'Interim Management',
      description: 'Leadership opérationnel pour gérer les phases critiques',
      deliverables: [
        'Direction de programmes',
        'Management de transition',
        'Pilotage PMO',
        'Delivery & qualité'
      ]
    }
  ];

  return (
    <section id="services" className="bg-white py-20 md:py-28">
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
              Offre de Services
            </div>
            <h2 className="heading-2 mb-6">
              5 Piliers pour Votre Transformation Digitale
            </h2>
            <div className="h-1 w-20 bg-accent mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Une expertise complète couvrant tous les aspects de la transformation digitale, 
              de la stratégie à l'exécution.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-mbb group hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-4 bg-gray-50 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div className="space-y-2 pl-20">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  Livrables Clés
                </div>
                {service.deliverables.map((deliverable, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-t-4 border-accent pt-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Une Approche Personnalisée pour Chaque Client
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Chaque mission est unique. Je combine ces 5 piliers de manière flexible 
                pour répondre précisément à vos enjeux et garantir le succès de votre projet.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="card-metric flex-1 min-w-[150px]">
                  <div className="metric-value">50+</div>
                  <div className="metric-label">Projets Livrés</div>
                </div>
                <div className="card-metric flex-1 min-w-[150px]">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Satisfaction Client</div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-10">
              <h4 className="text-2xl font-bold mb-4">
                Discutons de Votre Projet
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Réservez un premier échange pour analyser vos besoins et définir 
                la meilleure approche pour votre transformation digitale.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-bold hover:bg-gray-100 transition-colors group"
              >
                Prendre Contact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
