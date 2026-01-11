'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const sectors = [
    {
      title: 'Télécoms & 5G',
      companies: 'Bouygues Télécom, Inwi, SFR',
      focus: 'Transformation opérateurs & Monétisation 5G B2B',
      metric: 'x2',
      metricLabel: 'Part de Marché'
    },
    {
      title: 'Tech & SaaS',
      companies: 'OpenCell, Digitalis',
      focus: 'Scale-up solutions SaaS & Cloud Native',
      metric: '+25%',
      metricLabel: 'Revenus'
    },
    {
      title: 'Énergie & Utilities',
      companies: 'Kyndryl (Secteur Énergie)',
      focus: 'Digitalisation Smart Grids & IoT industriel',
      metric: '+20%',
      metricLabel: 'Croissance CA'
    },
    {
      title: 'Secteur Public',
      companies: 'Kyndryl (Administration)',
      focus: 'Transformation digitale & Conformité RGPD/NIS2',
      metric: '100%',
      metricLabel: 'Conformité'
    }
  ]

  return (
    <section id="experience" className="section-container bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block mb-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Track Record
            </p>
            <div className="h-0.5 w-16 bg-primary mt-2"></div>
          </div>
          <h2 className="heading-2 mb-6">
            Expérience Multisectorielle
          </h2>
          <p className="text-lg text-gray-600">
            Expertise validée par des résultats mesurables
          </p>
        </motion.div>

        <div className="space-y-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-mbb"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {sector.companies}
                  </p>
                  <p className="text-gray-700">
                    {sector.focus}
                  </p>
                </div>
                <div className="md:text-right">
                  <div className="text-4xl font-bold text-primary">
                    {sector.metric}
                  </div>
                  <div className="metric-label mt-2">
                    {sector.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
