'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, TrendingUp, DollarSign, Zap, Shield, Users } from 'lucide-react'

export default function ValueProposition() {
  const challenges = [
    {
      title: 'Disruption permanente',
      description: 'Nécessité d\'innover face à une concurrence agile et agressive.',
      icon: AlertCircle
    },
    {
      title: 'Pression opérationnelle',
      description: 'Transformer rapidement l\'organisation tout en maintenant le business as usual.',
      icon: Zap
    },
    {
      title: 'Complexité & Risques',
      description: 'Dette technique, cybermenaces et conformité réglementaire croissante.',
      icon: Shield
    },
    {
      title: 'Incertitude du ROI',
      description: 'Difficulté à mesurer l\'impact réel des investissements digitaux.',
      icon: DollarSign
    }
  ]

  const solutions = [
    {
      title: 'Vision Stratégique & Exécution',
      description: 'Alignement parfait entre objectifs business C-level et réalité technologique terrain.',
      icon: CheckCircle
    },
    {
      title: 'Expertise Tech de Pointe',
      description: 'Maîtrise éprouvée de l\'IA, du Cloud Native et de la Cybersécurité pour une architecture robuste.',
      icon: Shield
    },
    {
      title: 'Leadership & Humain',
      description: 'Accompagnement du changement, upskilling des équipes et culture de l\'agilité.',
      icon: Users
    },
    {
      title: 'Approche ROI-Centric',
      description: 'Pilotage par la valeur et les métriques de performance tangibles.',
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      icon: '📈',
      title: 'Croissance Accélérée',
      description: 'Augmentation CA et parts de marché',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: '💰',
      title: 'ROI Mesurable',
      description: 'Optimisation des coûts (FinOps)',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: '⚡',
      title: 'Time-to-Market Réduit',
      description: 'Agilité et déploiement rapide',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: '🛡️',
      title: 'Risques Maîtrisés',
      description: 'Sécurité "by design" & conformité',
      color: 'from-purple-400 to-fuchsia-600'
    },
    {
      icon: '👥',
      title: 'Équipes Engagées',
      description: 'Montée en compétences durable',
      color: 'from-fuchsia-400 to-purple-600'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="value" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">
            Accélérateur de Transformation Digitale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Une approche structurée pour passer des défis aux résultats
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Challenges */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">VOTRE DÉFI</h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="card-glass border-l-4 border-red-500 p-6 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-red-100 rounded-lg">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{challenge.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">MA PROPOSITION</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="card-glass border-l-4 border-green-500 p-6 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">{solution.title}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-fuchsia-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl font-bold text-white text-center mb-12">
              BÉNÉFICES CONCRETS
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-6xl mb-4 floating">{benefit.icon}</div>
                  <h4 className="font-bold text-white text-lg mb-3">{benefit.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
