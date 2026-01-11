'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-20">
      <div className="section-container text-center">
        <div className="animate-fade-in-up">
          <h1 className="heading-1 mb-6">
            Jalil Halim
          </h1>
          <div className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100">
            EXPERT EN TRANSFORMATION DIGITALE & IA
          </div>
          <p className="text-xl md:text-2xl text-blue-200 italic mb-8 max-w-3xl mx-auto">
            "Votre Partenaire pour Accélérer la Croissance par l'Innovation"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="mailto:jalilsanad.halim@gmail.com" 
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jalilsanad.halim@gmail.com
            </a>
            <a 
              href="tel:+33628071012" 
              className="flex items-center gap-2 text-lg hover:text-accent transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 28 07 10 12
            </a>
          </div>

          <div className="flex justify-center mb-12">
            <a
              href="https://linkedin.com/in/jalilhalim"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              linkedin.com/in/jalilhalim
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary bg-accent hover:bg-yellow-600">
              Diagnostic Gratuit
            </a>
            <a href="#services" className="btn-secondary border-white text-white hover:bg-white/10">
              Découvrir mes services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#value">
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
