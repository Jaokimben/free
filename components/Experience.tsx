'use client'

import { motion } from 'framer-motion'
import { Smartphone, Code, Zap, Building } from 'lucide-react'

export default function Experience() {
  const sectors = [
    {
      icon: Smartphone,
      title: 'Télécoms & 5G',
      companies: 'Bouygues Télécom, Inwi, SFR',
      points: [
        'Transformation opérateurs & Monétisation 5G B2B',
        'Marketing Grands Comptes & Stratégies ABM',
        'Architecture réseaux & Edge Computing'
      ],
      metric: 'x2',
      metricLabel: 'Part de Marché',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Code,
      title: 'Tech & SaaS',
      companies: 'OpenCell, Digitalis',
      points: [
        'Scale-up de solutions SaaS & Cloud Native',
        'Développement de partenariats stratégiques',
        'Go-to-Market & Industrialisation DevOps'
      ],
      metric: '+25%',
      metricLabel: 'Revenus',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Zap,
      title: 'Énergie & Utilities',
      companies: 'Kyndryl (Secteur Énergie)',
      points: [
        'Digitalisation Smart Grids & IoT industriel',
        'Cybersécurité OT/IT & Conformité critique',
        'Modernisation des infrastructures legacy'
      ],
      metric: '+20%',
      metricLabel: 'Croissance CA',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Building,
      title: 'Secteur Public',
      companies: 'Kyndryl (Administration)',
      points: [
        'Transformation digitale des administrations',
        'Conformité réglementaire (RGPD, NIS2)',
        'Sécurité des données souveraines & sensibles'
      ],
      metric: '🔒',
      metricLabel: 'Transformation Sécurisée',
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-50 to-blue-50'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="section-container bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Expérience Multisectorielle
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Expertise croisée validée par des résultats tangibles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500 blur-xl`}></div>
                
                <div className="relative card-glass p-8 h-full">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 bg-gradient-to-br ${sector.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent`}>
                        {sector.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-600">{sector.companies}</p>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3 mb-6">
                    {sector.points.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${sector.gradient} flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Metric */}
                  <div className={`relative overflow-hidden bg-gradient-to-br ${sector.bgGradient} rounded-2xl p-6 border border-white/50`}>
                    <div className="relative z-10 text-center">
                      <div className={`text-5xl font-black mb-2 bg-gradient-to-r ${sector.gradient} bg-clip-text text-transparent`}>
                        {sector.metric}
                      </div>
                      <div className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                        {sector.metricLabel}
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${sector.gradient} opacity-5`}></div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
