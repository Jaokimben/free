export default function WhyWorkTogether() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Double Compétence Rare',
      description: 'Vision business C-Level alliée à une expertise technique profonde (Architecte & Dev).'
    },
    {
      icon: '🏆',
      title: 'Track Record Prouvé',
      description: '20+ ans d\'expérience avec des résultats mesurables chez Grands Comptes & Scale-ups.'
    },
    {
      icon: '🎓',
      title: 'Certifications d\'Élite',
      description: 'Validé par les standards du marché : MBA Sorbonne, CISM, SAFe, IA Générative.'
    },
    {
      icon: '🌍',
      title: 'Dimension Européenne',
      description: 'Profil trilingue (FR/EN/AR) avec maîtrise des enjeux réglementaires EU.'
    },
    {
      icon: '💡',
      title: 'Approche "Coach Digital"',
      description: 'Transformation centrée sur l\'humain pour garantir l\'adoption et la pérennité.'
    },
    {
      icon: '🚀',
      title: 'Philosophie Innovation',
      description: '"Disrupt or be disrupted" : Agilité, pragmatisme et résultats rapides.'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Diagnostic Initial',
      badge: 'Gratuit',
      description: 'Évaluation de maturité digitale & identification des quick wins immédiats.',
      color: 'blue'
    },
    {
      number: '2',
      title: 'Proposition Personnalisée',
      description: 'Roadmap de transformation détaillée, Business Case et plan d\'action.',
      color: 'purple'
    },
    {
      number: '3',
      title: 'Engagement & Résultats',
      description: 'Démarrage du pilotage avec focus sur la livraison de valeur mesurable.',
      color: 'green'
    }
  ]

  const getStepColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      green: 'bg-green-500'
    }
    return colors[color]
  }

  return (
    <section id="why" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4 text-gray-900">
          Pourquoi Travailler Ensemble ?
        </h2>
        <p className="text-xl text-gray-600">
          Une combinaison unique d'expertises pour sécuriser votre futur
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="card text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Prochaines Étapes
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-white/30 -z-0" style={{ width: 'calc(100% - 3rem)' }} />
              )}

              <div className="relative bg-white rounded-xl p-6 h-full flex flex-col">
                <div className={`${getStepColor(step.color)} text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {step.number}
                </div>

                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {step.title}
                </h4>

                {step.badge && (
                  <div className="text-center mb-3">
                    <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                )}

                <p className="text-gray-600 text-sm text-center flex-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary bg-accent hover:bg-yellow-600 inline-block">
            Commencer le Diagnostic Gratuit
          </a>
        </div>
      </div>
    </section>
  )
}
