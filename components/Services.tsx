export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Conseil Stratégique',
      items: [
        'Diagnostic de maturité digitale & roadmap',
        'Business case, ROI & KPI stratégiques',
        'Stratégie Data & IA',
        'Gouvernance & Operating Model'
      ],
      color: 'blue'
    },
    {
      number: '02',
      title: 'Architecture & Technologie',
      items: [
        'Cloud Native & Modernisation Infra',
        'Stratégie Cybersécurité (CISM, Zero Trust)',
        'Solutions IA Générative & Automatisation',
        'FinOps & Optimisation des coûts'
      ],
      color: 'purple'
    },
    {
      number: '03',
      title: 'Conduite du Changement',
      items: [
        'Pilotage de programmes complexes',
        'Méthodologies Agiles (SAFe) à l\'échelle',
        'Upskilling & Formation des équipes',
        'Culture d\'innovation & Adoption'
      ],
      color: 'green'
    },
    {
      number: '04',
      title: 'Développement Business',
      items: [
        'Stratégies Go-to-Market B2B',
        'Marketing ABM (Account Based Marketing)',
        'Développement de partenariats & alliances',
        'Nouveaux modèles économiques'
      ],
      color: 'orange'
    },
    {
      number: '05',
      title: 'Interim Management',
      items: [
        'Direction de la Transformation / CDO',
        'Management de transition critique',
        'Pilotage de projets stratégiques',
        'Advisory Board & Mentoring C-Level'
      ],
      color: 'red'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-600' },
      green: { bg: 'bg-green-500', border: 'border-green-500', text: 'text-green-600' },
      orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-600' },
      red: { bg: 'bg-red-500', border: 'border-red-500', text: 'text-red-600' }
    }
    return colors[color]
  }

  return (
    <section id="services" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4 text-gray-900">
          Offre de Services
        </h2>
        <p className="text-xl text-gray-600">
          Accompagnement 360° pour votre transformation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const colors = getColorClasses(service.color)
          return (
            <div
              key={index}
              className="card border-t-4 hover:border-t-8 transition-all duration-300"
              style={{ borderTopColor: colors.bg.replace('bg-', '#') }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${colors.bg} text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center`}>
                  {service.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 flex-1">
                  {service.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className={`${colors.text} text-lg font-bold mt-0.5`}>✓</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg">
          <p className="text-2xl font-bold">5 Piliers d'Intervention</p>
          <p className="text-blue-100 mt-2">Pour une transformation complète et réussie</p>
        </div>
      </div>
    </section>
  )
}
