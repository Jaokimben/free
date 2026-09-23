'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Experience() {
  const positions = [
    {
      title: 'Advisory Partner',
      company: 'Kyndryl (Ex IBM Services)',
      period: '2022 – Present',
      location: 'Energy, Utilities and Public Sectors',
      description: 'Advising clients on digital transformation strategies, co-creating solutions to improve business agility and technology adoption.',
      achievements: [
        'Developed sales opportunities generating millions of euros',
        'Supported key accounts in their digital transformation',
        'Advised on new technologies: GenAI, Cloud Native, DevOps, FinOps, SRE'
      ],
      metrics: { value: '€M+', label: 'Sales Generated' }
    },
    {
      title: 'Head of Marketing and Sales',
      company: 'Bouygues Telecom',
      period: '2020 – 2022',
      location: 'Key Accounts Department',
      description: 'Led marketing and sales teams of 30 people, launching initiatives to expand enterprise market share and drive technology adoption.',
      achievements: [
        'Increased sales through cross/up selling initiatives',
        'Implemented a new sales and marketing (ABM) approach',
        'Launched advanced technology solutions (Cloud, Cyber, 5G)',
        'Contributed to the operator\'s strategic plan doubling market share'
      ],
      metrics: { value: 'x2', label: 'Market Share' }
    },
    {
      title: 'VP Partnership and Alliances',
      company: 'Opencell Software',
      period: '2018 – 2020',
      location: 'International',
      description: 'Directed partnership and alliance strategy to expand international presence and market reach.',
      achievements: [
        'Built EU-wide strategic partnerships, strengthening competitive positioning',
        'Developed technology alliances with Salesforce to increase addressable market',
        'Implemented a lead generation strategy delivering a 25% uplift'
      ],
      metrics: { value: '+25%', label: 'Revenue Growth' }
    },
    {
      title: 'Transition Manager',
      company: 'Digitalis Consulting',
      period: '2016 – 2018',
      location: 'France',
      description: 'Led organizational transformation and sales/marketing operations for 90-person team.',
      achievements: [
        'Reorganized and managed the sales and marketing team, 90 people',
        'Led an open innovation hub for start-ups and key accounts',
        'Integrated a bank\'s IT infrastructure for better security',
        'Advised on Marketing strategies and increased revenue by 20%'
      ],
      metrics: { value: '+20%', label: 'Revenue Increase' }
    },
    {
      title: 'Key Account Marketing Manager',
      company: 'Inwi',
      period: '2013 – 2016',
      location: 'Morocco',
      description: 'Led B2B marketing department and strategic account development.',
      achievements: [
        'Increased sales with a new pricing approach',
        'Offered innovative technological solutions',
        'Contributed to the three-year strategic plan of key accounts',
        'Led the operator\'s B2B marketing department'
      ],
      metrics: { value: '↑', label: 'Sales Growth' }
    },
    {
      title: 'Business Development and Product Manager',
      company: 'Huawei',
      period: '2006 – 2013',
      location: 'International',
      description: 'Developed new business activities and launched revenue-generating products.',
      achievements: [
        'Developed new business activities with key customers',
        'Launched new products generating millions of euros in revenue',
        'Analysed the market and established specific sales strategies for direct and indirect channels'
      ],
      metrics: { value: '€M+', label: 'Product Revenue' }
    },
    {
      title: 'Architect and Infrastructure Project Manager',
      company: 'SFR',
      period: '2000 – 2006',
      location: 'France',
      description: 'Managed large-scale infrastructure transformation projects.',
      achievements: [
        'Transformed infrastructure to support innovative services (TV/VoD)',
        'Managed large infrastructure transformation projects generating multi-million euro savings'
      ],
      metrics: { value: '€M+', label: 'Cost Savings' }
    }
  ];

  return (
    <section id="experience" className="bg-light py-20 md:py-28">
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
              Professional Experience
            </div>
            <h2 className="heading-2 mb-6">
              24+ Years of Leadership Across Telecommunications, Technology & Consulting
            </h2>
            <div className="h-1 w-20 bg-accent mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Track record of driving digital transformation, business development, and strategic 
              innovation for leading organizations worldwide.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block" />

          {/* Positions */}
          <div className="space-y-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative md:grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg" />

                {/* Content */}
                <div className={index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}>
                  <div className="card-mbb hover:shadow-lg">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.company}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{position.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Metric */}
                      <div className="card-metric text-center flex-shrink-0">
                        <div className="text-2xl font-bold text-success">
                          {position.metrics.value}
                        </div>
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-1">
                          {position.metrics.label}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Key Achievements
                      </div>
                      {position.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <TrendingUp className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
