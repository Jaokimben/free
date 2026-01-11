export default function Experience() {
  const sectors = [
    {
      icon: '📱',
      title: 'Télécoms & 5G',
      companies: 'Bouygues Télécom, Inwi, SFR',
      points: [
        'Transformation opérateurs & Monétisation 5G B2B',
        'Marketing Grands Comptes & Stratégies ABM',
        'Architecture réseaux & Edge Computing'
      ],
      metric: 'x2',
      metricLabel: 'Part de Marché',
      color: 'blue'
    },
    {
      icon: '💻',
      title: 'Tech & SaaS',
      companies: 'OpenCell, Digitalis',
      points: [
        'Scale-up de solutions SaaS & Cloud Native',
        'Développement de partenariats stratégiques',
        'Go-to-Market & Industrialisation DevOps'
      ],
      metric: '+25%',
      metricLabel: 'Revenus',
      color: 'purple'
    },
    {
      icon: '⚡',
      title: 'Énergie & Utilities',
      companies: 'Kyndryl (Secteur Énergie)',
      points: [
        'Digitalisation Smart Grids & IoT industriel',
        'Cybersécurité OT/IT & Conformité critique',
        'Modernisation des infrastructures legacy'
      ],
      metric: '+20%',
      metricLabel: 'Croissance CA',
      color: 'green'
    },
    {
      icon: '🏛️',
      title: 'Secteur Public',
      companies: 'Kyndryl (Administration)',
      points: [
        'Transformation digitale des administrations',
        'Conformité réglementaire (RGPD, NIS2)',
        'Sécurité des données souveraines & sensibles'
      ],
      metric: '🔒',
      metricLabel: 'Transformation Sécurisée',
      color: 'indigo'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-500 text-blue-900',
      purple: 'bg-purple-50 border-purple-500 text-purple-900',
      green: 'bg-green-50 border-green-500 text-green-900',
      indigo: 'bg-indigo-50 border-indigo-500 text-indigo-900'
    }
    return colors[color]
  }

  return (
    <section id="experience" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4 text-gray-900">
          Expérience Multisectorielle
        </h2>
        <p className="text-xl text-gray-600">
          Expertise croisée validée par des résultats tangibles
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className={`${getColorClasses(sector.color)} border-l-4 p-6 rounded-r-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl">{sector.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                <p className="text-sm font-semibold opacity-80">{sector.companies}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              {sector.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-lg mt-0.5">✓</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/70 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">{sector.metric}</div>
              <div className="text-sm font-semibold uppercase tracking-wide opacity-80">
                {sector.metricLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
