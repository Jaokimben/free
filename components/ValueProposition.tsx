export default function ValueProposition() {
  const challenges = [
    {
      title: 'Disruption permanente',
      description: 'Nécessité d\'innover face à une concurrence agile et agressive.'
    },
    {
      title: 'Pression opérationnelle',
      description: 'Transformer rapidement l\'organisation tout en maintenant le business as usual.'
    },
    {
      title: 'Complexité & Risques',
      description: 'Dette technique, cybermenaces et conformité réglementaire croissante.'
    },
    {
      title: 'Incertitude du ROI',
      description: 'Difficulté à mesurer l\'impact réel des investissements digitaux.'
    }
  ]

  const solutions = [
    {
      title: 'Vision Stratégique & Exécution',
      description: 'Alignement parfait entre objectifs business C-level et réalité technologique terrain.'
    },
    {
      title: 'Expertise Tech de Pointe',
      description: 'Maîtrise éprouvée de l\'IA, du Cloud Native et de la Cybersécurité pour une architecture robuste.'
    },
    {
      title: 'Leadership & Humain',
      description: 'Accompagnement du changement, upskilling des équipes et culture de l\'agilité.'
    },
    {
      title: 'Approche ROI-Centric',
      description: 'Pilotage par la valeur et les métriques de performance tangibles.'
    }
  ]

  const benefits = [
    {
      icon: '📈',
      title: 'Croissance Accélérée',
      description: 'Augmentation CA et parts de marché'
    },
    {
      icon: '💰',
      title: 'ROI Mesurable',
      description: 'Optimisation des coûts (FinOps)'
    },
    {
      icon: '⚡',
      title: 'Time-to-Market Réduit',
      description: 'Agilité et déploiement rapide'
    },
    {
      icon: '🛡️',
      title: 'Risques Maîtrisés',
      description: 'Sécurité "by design" & conformité'
    },
    {
      icon: '👥',
      title: 'Équipes Engagées',
      description: 'Montée en compétences durable'
    }
  ]

  return (
    <section id="value" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4 text-gray-900">
          Accélérateur de Transformation Digitale
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Une approche structurée pour passer des défis aux résultats
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Challenges */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚠️</span> VOTRE DÉFI
          </h3>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-1">{challenge.title}</h4>
                <p className="text-gray-700 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
            <span className="text-3xl">✅</span> MA PROPOSITION
          </h3>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-1">{solution.title}</h4>
                <p className="text-gray-700 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          BÉNÉFICES CONCRETS
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-3">{benefit.icon}</div>
              <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-blue-100 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
