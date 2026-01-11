'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Settings, Users as UsersIcon, TrendingUp, Briefcase } from 'lucide-react'

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Conseil Stratégique',
      icon: Lightbulb,
      items: [
        'Diagnostic de maturité digitale & roadmap',
        'Business case, ROI & KPI stratégiques',
        'Stratégie Data & IA',
        'Gouvernance & Operating Model'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Architecture & Technologie',
      icon: Settings,
      items: [
        'Cloud Native & Modernisation Infra',
        'Stratégie Cybersécurité (CISM, Zero Trust)',
        'Solutions IA Générative & Automatisation',
        'FinOps & Optimisation des coûts'
      ],
      gradient: 'from-purple-500 to-fuchsia-500'
    },
    {
      number: '03',
      title: 'Conduite du Changement',
      icon: UsersIcon,
      items: [
        'Pilotage de programmes complexes',
        'Méthodologies Agiles (SAFe) à l\'échelle',
        'Upskilling & Formation des équipes',
        'Culture d\'innovation & Adoption'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Développement Business',
      icon: TrendingUp,
      items: [
        'Stratégies Go-to-Market B2B',
        'Marketing ABM (Account Based Marketing)',
        'Développement de partenariats & alliances',
        'Nouveaux modèles économiques'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      number: '05',
      title: 'Interim Management',
      icon: Briefcase,
      items: [
        'Direction de la Transformation / CDO',
        'Management de transition critique',
        'Pilotage de projets stratégiques',
        'Advisory Board & Mentoring C-Level'
      ],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="services" className="section-container relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Offre de Services
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Accompagnement 360° pour votre transformation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-3xl`}></div>
                
                <div className="relative card-glass h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                      <span className="text-2xl font-black text-white">{service.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-4 flex-1">
                    {service.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 group-hover/item:scale-150 transition-transform`}></div>
                        <span className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom decoration */}
                  <div className={`mt-6 h-1 w-full bg-gradient-to-r ${service.gradient} rounded-full opacity-20 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 opacity-20 blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white px-12 py-8 rounded-3xl shadow-2xl">
              <p className="text-3xl font-bold mb-2">5 Piliers d'Intervention</p>
              <p className="text-blue-100 text-lg">Pour une transformation complète et réussie</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
