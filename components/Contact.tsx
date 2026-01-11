'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jalilsanad.halim@gmail.com',
      href: 'mailto:jalilsanad.halim@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '06 28 07 10 12',
      href: 'tel:+33628071012'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jalilhalim',
      href: 'https://www.linkedin.com/in/jalilhalim'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Paris, France',
      href: null
    }
  ];

  return (
    <section id="contact" className="bg-white py-20 md:py-28">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm font-bold tracking-widest uppercase text-accent mb-4">
                Prenons Contact
              </div>
              <h2 className="heading-2 mb-6">
                Démarrons Votre Projet
              </h2>
              <div className="h-1 w-20 bg-accent mb-6" />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Que vous ayez un projet défini ou que vous souhaitiez simplement échanger 
                sur vos enjeux de transformation digitale, je suis à votre écoute.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={method.href ? "group cursor-pointer" : ""}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.icon === Linkedin ? '_blank' : undefined}
                      rel={method.icon === Linkedin ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 border border-gray-200 hover:border-accent transition-colors"
                    >
                      <div className="flex-shrink-0 p-3 bg-gray-50 group-hover:bg-accent/10 transition-colors">
                        <method.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                          {method.label}
                        </div>
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-accent transition-colors">
                          {method.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 border border-gray-200">
                      <div className="flex-shrink-0 p-3 bg-gray-50">
                        <method.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                          {method.label}
                        </div>
                        <div className="text-sm font-semibold text-gray-900">
                          {method.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border-l-4 border-accent bg-gray-50 p-6"
            >
              <div className="text-sm font-bold text-gray-900 mb-2">
                Réponse Garantie Sous 24h
              </div>
              <p className="text-xs text-gray-600">
                Tous les messages reçoivent une réponse personnalisée dans les 24 heures ouvrées.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="space-y-6 border-l-4 border-primary bg-light p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Entreprise *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900"
                    placeholder="Votre Entreprise"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900"
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Type de Projet *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900 bg-white"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="conseil">Conseil Stratégique</option>
                  <option value="architecture">Architecture & Technologie</option>
                  <option value="changement">Conduite du Changement</option>
                  <option value="business">Business Development</option>
                  <option value="interim">Interim Management</option>
                  <option value="autre">Autre / À discuter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Description de Votre Projet *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-accent focus:outline-none transition-colors text-gray-900 resize-none"
                  placeholder="Décrivez vos enjeux, objectifs et le contexte de votre projet..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="mt-1 w-4 h-4 text-accent border-gray-300 focus:ring-accent"
                />
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  J'accepte que mes données soient utilisées pour traiter ma demande de contact. *
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary w-full md:w-auto group"
              >
                <span>Envoyer le Message</span>
                <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
