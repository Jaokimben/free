'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      {/* Floating Orbs */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
        className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-purple-200/50">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio 2025
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={itemVariants} className="heading-1 mb-4 text-glow">
            Jalil Halim
          </motion.h1>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              EXPERT EN TRANSFORMATION DIGITALE & IA
            </div>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl text-gray-700 italic mb-8 max-w-4xl mx-auto font-light">
            "Votre Partenaire pour Accélérer la Croissance par l'Innovation"
          </motion.p>
          
          {/* Contact Info with Icons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 flex-wrap">
            <motion.a 
              href="mailto:jalilsanad.halim@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 hover:border-blue-300/50"
            >
              <Mail className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors" />
              <span className="font-medium text-gray-700 group-hover:text-gray-900">jalilsanad.halim@gmail.com</span>
            </motion.a>
            
            <motion.a 
              href="tel:+33628071012"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200/50 hover:border-blue-300/50"
            >
              <Phone className="w-5 h-5 text-blue-600 group-hover:text-purple-600 transition-colors" />
              <span className="font-medium text-gray-700 group-hover:text-gray-900">06 28 07 10 12</span>
            </motion.a>
          </motion.div>

          {/* LinkedIn Button */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10">
            <motion.a
              href="https://linkedin.com/in/jalilhalim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-bold text-lg">linkedin.com/in/jalilhalim</span>
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary group relative"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                <Sparkles className="w-5 h-5" />
                Diagnostic Gratuit
              </span>
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Découvrir mes services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#value"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
