"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// ============================================
// DIZIONARIO TRADUZIONI (Content Dictionary)
// ============================================

const translations = {
  en: {
    nav: {
      howItWorks: "How it works",
      pricing: "Pricing",
      cta: "Start Screening",
    },
    hero: {
      headline: "The Global Intelligence Layer for M&A",
      subheadline: "One platform, two distinct markets. Select your deal sourcing focus to identify off-market SMEs with precision.",
      cardItaly: {
        title: "Find My Synergy Italy",
        desc: "Sourcing Italian SMEs for International Buyers.",
        badge: "Available"
      },
      cardUK: {
        title: "Find My Synergy UK",
        desc: "Sourcing UK Targets for Cross-Border Deals.",
        badge: "Beta"
      },
      trust: "Trusted by M&A professionals across Europe" // Modificato: rimosso "500+"
    },
    pricing: {
      title: "Choose your Intelligence Level",
      subtitle: "From simple lists to deep synergy analysis.",
      tiers: {
        minimal: {
          name: "Minimal",
          desc: "Essential data for initial scouting.",
          features: ["Validated Company Shortlist", "Key Financials (Revenue/EBITDA)", "Sector Classification", "No Contact Details"]
        },
        medium: {
          name: "Medium",
          desc: "Dynamic filtering for deeper analysis.",
          features: ["Everything in Minimal", "Company Presentation Deck", "Dynamic PowerBI-style Filters", "Interactive Dashboard", "Growth Metrics"]
        },
        premium: {
          name: "Premium",
          desc: "Full due diligence & synergy reporting.",
          features: ["Everything in Medium", "Synergy Score Report", "Full Financial Statements (Bilanci)", "Synergy Graphs & Projections", "Direct Intro Capabilities"]
        }
      }
    },
    engine: {
      label: "The Engine",
      title: "From Parameters to Shortlist",
      steps: [
        { title: "Sourcing", desc: "Continuous scanning of UK & Italian registries." },
        { title: "Filter", desc: "AI screening based on your specific criteria." },
        { title: "Analyze", desc: "Financial normalization & synergy detection." },
        { title: "Report", desc: "Final Shortlist generation." },
      ],
      mock: {
        title: "Generated Shortlist Preview",
        col1: "Company",
        col2: "Sector",
        col3: "Revenue",
        col4: "Fit Score"
      }
    },
    modal: {
      title: "Join the Waitlist",
      subtitle: "Select your market of interest to receive early access.",
      optionIt: "I'm interested in Italian Targets",
      optionUk: "I'm interested in UK Targets",
      emailPlace: "name@company.com",
      submit: "Confirm & Subscribe",
      success: "Welcome aboard! Check your inbox for confirmation."
    },
    footer: {
      rights: "All rights reserved.",
      disclaimer: "Data sources include Companies House (UK) and European Business Registers."
    }
  },
  it: {
    nav: {
      howItWorks: "Come funziona",
      pricing: "Piani",
      cta: "Inizia Screening",
    },
    hero: {
      headline: "L'Intelligence Globale per l'M&A",
      subheadline: "Una piattaforma, due mercati distinti. Seleziona il tuo focus per identificare PMI off-market con precisione.",
      cardItaly: {
        title: "Find My Synergy Italy",
        desc: "Sourcing di PMI Italiane per Compratori Internazionali.",
        badge: "Disponibile"
      },
      cardUK: {
        title: "Find My Synergy UK",
        desc: "Sourcing di Target UK per Deal Cross-Border.",
        badge: "Beta"
      },
      trust: "Scelto da professionisti M&A in tutta Europa"
    },
    pricing: {
      title: "Scegli il Livello di Intelligence",
      subtitle: "Dalle liste semplici all'analisi profonda delle sinergie.",
      tiers: {
        minimal: {
          name: "Minimal",
          desc: "Dati essenziali per scouting iniziale.",
          features: ["Shortlist Aziende Validate", "Financials Chiave (Fatturato/EBITDA)", "Classificazione Settoriale", "No Dati Contatto"]
        },
        medium: {
          name: "Medio",
          desc: "Filtri dinamici per analisi approfondite.",
          features: ["Tutto inclusio nel Minimal", "Presentazione Aziendale", "Filtri Dinamici (Stile PowerBI)", "Dashboard Interattiva", "Metriche di Crescita"]
        },
        premium: {
          name: "Premium",
          desc: "Due diligence completa e report sinergie.",
          features: ["Tutto incluso nel Medio", "Report Sinergie Completo", "Bilanci Completi Scaricabili", "Grafici & Proiezioni", "Supporto Intro"]
        }
      }
    },
    engine: {
      label: "Il Motore",
      title: "Dai Parametri alla Shortlist",
      steps: [
        { title: "Sourcing", desc: "Scansione continua registri UK & Italia." },
        { title: "Filtro", desc: "Screening AI basato sui tuoi criteri." },
        { title: "Analisi", desc: "Normalizzazione finanziaria e sinergie." },
        { title: "Report", desc: "Generazione Shortlist finale." },
      ],
      mock: {
        title: "Anteprima Shortlist Generata",
        col1: "Azienda",
        col2: "Settore",
        col3: "Fatturato",
        col4: "Fit Score"
      }
    },
    modal: {
      title: "Entra in Lista d'Attesa",
      subtitle: "Seleziona il mercato di interesse per ricevere accesso anticipato.",
      optionIt: "Sono interessato a Target Italiani",
      optionUk: "Sono interessato a Target UK",
      emailPlace: "nome@azienda.com",
      submit: "Conferma e Iscriviti",
      success: "Benvenuto a bordo! Controlla la posta per la conferma."
    },
    footer: {
      rights: "Tutti i diritti riservati.",
      disclaimer: "Le fonti dati includono Companies House (UK) e Registri Imprese Europei."
    }
  }
}

// ============================================
// ICONS
// ============================================
// (Use simplified internal SVGs to avoid dependency errors)
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
)
const XIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
)
const SearchIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
)
const FilterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
)
const TrendingUpIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
)
const FileCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
)
const MapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="6" y2="24"/></svg>
)

// ============================================
// MODAL COMPONENT (WAITLIST)
// ============================================

function WaitlistModal({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) {
  const [step, setStep] = useState(1) // 1 = form, 2 = success
  const [email, setEmail] = useState("")
  const [market, setMarket] = useState("italy")
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // SIMULAZIONE INVIO MAIL (Qui in futuro metteremo Resend/EmailJS)
    console.log("SENDING EMAIL TO:", email)
    console.log("MARKET SELECTED:", market)
    
    // Simula ritardo rete
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(2)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Card */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <XIcon className="h-6 w-6" />
        </button>

        {step === 1 ? (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#433250] mb-2">{t.modal.title}</h3>
            <p className="text-gray-600 mb-6">{t.modal.subtitle}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Market Selection */}
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-[#D4D5D0] rounded-lg cursor-pointer hover:bg-[#EBECE7]/50 transition-colors">
                  <input 
                    type="radio" 
                    name="market" 
                    value="italy" 
                    checked={market === "italy"}
                    onChange={(e) => setMarket(e.target.value)}
                    className="w-4 h-4 text-[#A196C9] focus:ring-[#A196C9]"
                  />
                  <span className="ml-3 font-medium text-[#433250]">{t.modal.optionIt}</span>
                </label>
                <label className="flex items-center p-3 border border-[#D4D5D0] rounded-lg cursor-pointer hover:bg-[#EBECE7]/50 transition-colors">
                  <input 
                    type="radio" 
                    name="market" 
                    value="uk" 
                    checked={market === "uk"}
                    onChange={(e) => setMarket(e.target.value)}
                    className="w-4 h-4 text-[#A196C9] focus:ring-[#A196C9]"
                  />
                  <span className="ml-3 font-medium text-[#433250]">{t.modal.optionUk}</span>
                </label>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  required
                  placeholder={t.modal.emailPlace}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D4D5D0] rounded-lg focus:ring-2 focus:ring-[#A196C9] focus:border-transparent outline-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-[#433250] text-white font-bold rounded-lg hover:bg-[#5a4369] transition-all disabled:opacity-70 disabled:cursor-wait"
              >
                {isSubmitting ? "Processing..." : t.modal.submit}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center bg-[#EBECE7]/30">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#433250] mb-2">Success!</h3>
            <p className="text-gray-600 mb-6">{t.modal.success}</p>
            <button onClick={onClose} className="text-[#433250] font-medium hover:underline">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ============================================
// COMPONENTS
// ============================================

function Header({ lang, setLang, t, onOpenModal }: { lang: string, setLang: (l: string) => void, t: any, onOpenModal: () => void }) {
  const toggleLang = () => setLang(lang === 'en' ? 'it' : 'en')
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EBECE7]/95 backdrop-blur-sm border-b border-[#D4D5D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
            {/* Se non hai il logo, usa questo testo, altrimenti rimetti Image */}
            <span className="text-xl font-bold text-[#433250]">FMS</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#pricing" className="text-sm font-medium text-[#333333] hover:text-[#433250]">{t.nav.pricing}</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#333333] hover:text-[#433250]">{t.nav.howItWorks}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#D4D5D0] text-xs font-bold text-[#433250]">
            <GlobeIcon className="h-3 w-3" /> {lang === 'en' ? 'EN' : 'IT'}
          </button>
          <button onClick={onOpenModal} className="bg-[#A196C9] text-[#433250] hover:bg-[#8B7DB8] font-medium px-4 py-2 rounded-md transition-colors text-sm">
            {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero({ t, onOpenModal }: { t: any, onOpenModal: () => void }) {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-[#433250] mb-6">{t.hero.headline}</h1>
        <p className="text-xl text-[#333333] max-w-2xl mx-auto">{t.hero.subheadline}</p>
        <p className="mt-4 text-sm text-[#666666] font-medium">{t.hero.trust}</p>
      </div>

      {/* The Two Portals */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Italy Card */}
        <div className="group relative bg-white rounded-2xl p-8 border-2 border-transparent hover:border-[#A196C9] shadow-lg hover:shadow-2xl transition-all cursor-pointer" onClick={onOpenModal}>
            <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">{t.hero.cardItaly.badge}</div>
            <div className="w-12 h-12 bg-[#433250] rounded-xl flex items-center justify-center mb-4">
                <MapIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#433250] mb-2">{t.hero.cardItaly.title}</h2>
            <p className="text-[#666666]">{t.hero.cardItaly.desc}</p>
            <div className="mt-6 flex items-center text-[#A196C9] font-bold group-hover:translate-x-2 transition-transform">
                Explore Italy Market &rarr;
            </div>
        </div>

        {/* UK Card */}
        <div className="group relative bg-[#433250] rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all cursor-pointer" onClick={onOpenModal}>
            <div className="absolute top-4 right-4 bg-[#A196C9] text-[#433250] text-xs font-bold px-2 py-1 rounded-full">{t.hero.cardUK.badge}</div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <GlobeIcon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{t.hero.cardUK.title}</h2>
            <p className="text-white/70">{t.hero.cardUK.desc}</p>
            <div className="mt-6 flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                Explore UK Market &rarr;
            </div>
        </div>
      </div>
    </section>
  )
}

function Pricing({ t }: { t: any }) {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#433250]">{t.pricing.title}</h2>
          <p className="text-[#666666] mt-2">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Minimal */}
            <div className="border border-[#D4D5D0] rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-[#433250]">{t.pricing.tiers.minimal.name}</h3>
                <p className="text-sm text-[#666666] mb-6 min-h-[40px]">{t.pricing.tiers.minimal.desc}</p>
                <ul className="space-y-3 mb-8">
                    {t.pricing.tiers.minimal.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#333333]">
                            <CheckIcon className="h-4 w-4 text-[#A196C9] mt-0.5 shrink-0"/> {f}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Medium */}
            <div className="border-2 border-[#A196C9] bg-[#A196C9]/5 rounded-xl p-8 relative shadow-xl scale-105">
                <div className="absolute top-0 right-0 bg-[#A196C9] text-[#433250] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                <h3 className="text-xl font-bold text-[#433250]">{t.pricing.tiers.medium.name}</h3>
                <p className="text-sm text-[#666666] mb-6 min-h-[40px]">{t.pricing.tiers.medium.desc}</p>
                <ul className="space-y-3 mb-8">
                    {t.pricing.tiers.medium.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#333333]">
                            <CheckIcon className="h-4 w-4 text-[#433250] mt-0.5 shrink-0"/> 
                            <span className="font-medium">{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Premium */}
             <div className="bg-[#433250] text-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-white">{t.pricing.tiers.premium.name}</h3>
                <p className="text-sm text-white/60 mb-6 min-h-[40px]">{t.pricing.tiers.premium.desc}</p>
                <ul className="space-y-3 mb-8">
                    {t.pricing.tiers.premium.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/90">
                            <CheckIcon className="h-4 w-4 text-[#A196C9] mt-0.5 shrink-0"/> {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

function Engine({ t }: { t: any }) {
    // Map icons
    const icons = [SearchIcon, FilterIcon, TrendingUpIcon, FileCheckIcon]
    const steps = t.engine.steps.map((step: any, i: number) => ({ ...step, icon: icons[i], number: `0${i + 1}` }))
  
    return (
      <section id="how-it-works" className="py-20 px-4 bg-[#EBECE7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#433250]">{t.engine.title}</h2>
          </div>
  
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {steps.map((step: any) => (
              <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm border border-[#D4D5D0]">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#A196C9]/20 p-2 rounded-md">
                        <step.icon className="h-5 w-5 text-[#433250]" />
                    </div>
                    <span className="font-bold text-[#433250]">{step.title}</span>
                 </div>
                 <p className="text-xs text-[#666666]">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* SIMPLIFIED SHORTLIST MOCKUP */}
          <div className="bg-white rounded-xl shadow-lg border border-[#D4D5D0] overflow-hidden max-w-4xl mx-auto">
            <div className="bg-[#433250] px-6 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="ml-4 text-xs text-white/70 font-mono tracking-wide">{t.engine.mock.title}</span>
            </div>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-[#F5F5F5] border-b border-[#D4D5D0] text-xs font-bold text-[#666666] uppercase">
                <div>{t.engine.mock.col1}</div>
                <div>{t.engine.mock.col2}</div>
                <div>{t.engine.mock.col3}</div>
                <div className="text-right">{t.engine.mock.col4}</div>
            </div>

            {/* Table Rows (Fake Data) */}
            <div className="divide-y divide-[#EBECE7]">
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB]">
                    <div className="font-bold text-[#433250]">Rossi Meccanica Srl</div>
                    <div className="text-sm text-[#666666] bg-gray-100 px-2 py-0.5 rounded w-fit">Manufacturing</div>
                    <div className="text-sm text-[#333333]">€ 12.5M</div>
                    <div className="text-right font-bold text-green-600">98%</div>
                </div>
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB]">
                    <div className="font-bold text-[#433250]">Verde Packaging SpA</div>
                    <div className="text-sm text-[#666666] bg-gray-100 px-2 py-0.5 rounded w-fit">Industrial</div>
                    <div className="text-sm text-[#333333]">€ 28.1M</div>
                    <div className="text-right font-bold text-green-600">94%</div>
                </div>
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB]">
                    <div className="font-bold text-[#433250]">TechFlow Systems</div>
                    <div className="text-sm text-[#666666] bg-gray-100 px-2 py-0.5 rounded w-fit">Automation</div>
                    <div className="text-sm text-[#333333]">€ 8.4M</div>
                    <div className="text-right font-bold text-[#A196C9]">89%</div>
                </div>
            </div>
             <div className="bg-[#F9FAFB] px-6 py-3 text-center border-t border-[#D4D5D0]">
                <span className="text-xs text-[#666666] italic">Displaying top 3 of 142 matches based on selected criteria</span>
             </div>
          </div>
        </div>
      </section>
    )
}

function Footer({ t }: { t: any }) {
    return (
      <footer className="bg-[#433250] py-12 px-4 text-center">
          <p className="text-white font-bold text-xl mb-2">FMS</p>
          <p className="text-white/60 text-sm mb-8">Find My Synergy</p>
          <p className="text-white/40 text-xs">{t.footer.rights} - {t.footer.disclaimer}</p>
      </footer>
    )
}

// ============================================
// MAIN PAGE
// ============================================

export default function Home() {
  const [lang, setLang] = useState('en')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // @ts-ignore
  const t = translations[lang]

  return (
    <main className="min-h-screen bg-[#EBECE7]">
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} t={t} />
      
      <Header lang={lang} setLang={setLang} t={t} onOpenModal={() => setIsModalOpen(true)} />
      <Hero t={t} onOpenModal={() => setIsModalOpen(true)} />
      <Engine t={t} />
      <Pricing t={t} />
      <Footer t={t} />
    </main>
  )
}