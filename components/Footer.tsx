'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Proposition de Valeur', href: '#value' },
    { name: 'Services', href: '#services' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Références', href: '#success' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Jalil Halim
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Expert en Transformation Digitale & IA, accompagnant les entreprises dans leur croissance par l'innovation.
            </p>
            <motion.a
              href="https://linkedin.com/in/jalilhalim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:jalilsanad.halim@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">jalilsanad.halim@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33628071012"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">06 28 07 10 12</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Jalil Halim. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Expert en Transformation Digitale & IA
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
