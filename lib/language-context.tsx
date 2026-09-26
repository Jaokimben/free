'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.proposition': 'Value Proposition',
    'nav.services': 'Services',
    'nav.experience': 'Experience',
    'nav.success': 'Success Stories',
    'nav.why': 'Why Work Together',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Transformation Advisory Director',
    'hero.description': 'Executive leader specialising in digital transformation, business development, and strategic innovation across telecommunications, technology, utilities, and public sectors.',
    'hero.cta.primary': 'Schedule Meeting',
    'hero.cta.secondary': 'View Experience',
    'hero.metrics.years': 'Years Experience',
    'hero.metrics.positions': 'Leadership Positions',
    'hero.metrics.revenue': 'Revenue Generated',
    
    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.contact': 'Contact',
  },
  fr: {
    // Navigation
    'nav.proposition': 'Proposition de Valeur',
    'nav.services': 'Services',
    'nav.experience': 'Expérience',
    'nav.success': 'Success Stories',
    'nav.why': 'Pourquoi Collaborer',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Directeur Conseil en Transformation',
    'hero.description': 'Cadre hautement qualifié, spécialisé dans la transformation numérique, le développement des affaires et l\'innovation stratégique dans les secteurs des télécommunications, de la technologie, des services publics et du secteur public.',
    'hero.cta.primary': 'Prendre Rendez-vous',
    'hero.cta.secondary': 'Voir l\'Expérience',
    'hero.metrics.years': 'Années d\'Expérience',
    'hero.metrics.positions': 'Postes de Leadership',
    'hero.metrics.revenue': 'Revenus Générés',
    
    // Common
    'common.readMore': 'En savoir plus',
    'common.learnMore': 'Découvrir',
    'common.contact': 'Contact',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
