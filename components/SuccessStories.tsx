export default function SuccessStories() {
  const stories = [
    {
      company: 'Bouygues Télécom',
      subtitle: 'Opérateur Majeur (€7Mds CA)',
      focus: 'Accélération B2B',
      role: 'Directeur Marketing Grands Comptes',
      period: '2020 - 2022',
      actions: [
        'Refonte complète de la stratégie marketing B2B & segmentation',
        'Déploiement approche ABM (Account-Based Marketing)',
        'Management d\'une équipe multidisciplinaire de 30 personnes',
        'Optimisation du parcours client digital'
      ],
      impact: {
        metric: 'x2',
        label: 'Part de marché sur le segment B2B'
      },
      color: 'blue'
    },
    {
      company: 'Kyndryl',
      subtitle: 'Infra Services Global (€19Mds)',
      focus: 'Transformation',
      role: 'Partenaire Conseil Transformation',
      period: '2022 - Présent',
      actions: [
        'Conseil stratégique post spin-off IBM',
        'Modernisation des infrastructures critiques (Énergie, Public)',
        'Intégration de la cybersécurité "by design"',
        'Optimisation du parcours client digital'
      ],
      impact: {
        metric: '+20%',
        label: 'Croissance CA liée à la réorganisation'
      },
      color: 'green'
    },
    {
      company: 'OpenCell',
      subtitle: 'Scale-up SaaS (BSS/OSS)',
      focus: 'Développement',
      role: 'VP Partenariats & Alliances',
      period: '2018 - 2020',
      actions: [
        'Création et structuration de l\'écosystème partenaires',
        'Définition de la stratégie Go-to-Market indirecte',
        'Accompagnement C-Level & Change Management',
        'Programmes d\'enablement technique et commercial',
        'Négociation d\'alliances stratégiques européennes'
      ],
      impact: {
        metric: '+25%',
        label: 'Augmentation des revenus partenaires'
      },
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'from-blue-600 to-blue-800',
      green: 'from-green-600 to-green-800',
      purple: 'from-purple-600 to-purple-800'
    }
    return colors[color]
  }

  return (
    <section id="success" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="heading-2 mb-4 text-gray-900">
          Références & Success Stories
        </h2>
        <p className="text-xl text-gray-600">
          Des résultats mesurables dans des contextes complexes
        </p>
      </div>

      <div className="space-y-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className={`bg-gradient-to-r ${getColorClasses(story.color)} text-white p-6 md:p-8`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{story.company}</h3>
                  <p className="text-lg opacity-90 mb-1">{story.subtitle} • {story.focus}</p>
                  <p className="font-semibold">{story.role}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-center">
                  <p className="text-sm font-semibold opacity-90">Période</p>
                  <p className="text-lg font-bold">{story.period}</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  ACTIONS CLÉS
                </h4>
                <ul className="space-y-2">
                  {story.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary text-xl font-bold mt-0.5">•</span>
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-accent">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  IMPACT BUSINESS
                </h4>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-primary">{story.impact.metric}</div>
                  <div className="text-gray-700 font-semibold">{story.impact.label}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
