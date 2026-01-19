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
      headline: "The Intelligence Layer for UK & Italy M&A",
      subheadline: "One platform, two markets. Start with our UK Live Beta or join the waitlist for the Italian rollout.",
      cardItaly: {
        title: "Find My Synergy Italy",
        desc: "Sourcing Italian SMEs for International Buyers.",
        badge: "Waitlist", // Italy is coming soon
        status: "Coming Soon"
      },
      cardUK: {
        title: "Find My Synergy UK",
        desc: "Live connection to Companies House API.",
        badge: "Live Beta", // UK is the focus
        status: "Enter Platform"
      },
      trust: "Professional-grade data directly from official registers"
    },
    pricing: {
      title: "Choose your Intelligence Level",
      subtitle: "Scalable solutions for Analysts, PE Funds, and Corporate M&A.",
      tiers: {
        minimal: {
          name: "Minimal",
          desc: "Essential data for initial scouting.",
          features: ["Validated Company Shortlist", "Key Financials (Revenue/EBITDA)", "Standard Sector Filters", "Export to CSV"]
        },
        medium: {
          name: "Medium",
          desc: "Dynamic filtering & Presentation Mode.",
          features: ["Everything in Minimal", "Company Presentation Deck (Auto-generated)", "Dynamic PowerBI-style Filters", "Interactive Dashboard", "Growth Metrics (3Y CAGR)"]
        },
        premium: {
          name: "Premium",
          desc: "Full Due Diligence & Synergy Reporting.",
          features: ["Everything in Medium", "Synergy Score Report", "Full Financial Statements (PDF)", "Synergy Graphs & Projections", "Direct Intro Capabilities"]
        }
      }
    },
    engine: {
      label: "The Engine",
      title: "From Parameters to Shortlist",
      steps: [
        { title: "Sourcing", desc: "Live API connection to Companies House & local registers." },
        { title: "Filter", desc: "AI screening based on turnover, EBITDA, and sector." },
        { title: "Analyze", desc: "Financial normalization & synergy detection." },
        { title: "Report", desc: "Final Shortlist generation ready for export." },
      ],
      mock: {
        title: "Live Shortlist Preview",
        col1: "Company Name",
        col2: "Sector",
        col3: "Revenue",
        col4: "Fit Score"
      }
    },
    modal: {
      title: "Select Market Access",
      subtitle: "Choose which platform you want to access.",
      optionIt: "Italy Module (Waitlist)",
      optionUk: "UK Module (Apply for Beta)",
      emailPlace: "name@company.com",
      submit: "Request Access",
      success: "Request received! We will contact you shortly."
    },
    footer: {
      rights: "All rights reserved.",
      disclaimer: "Data powered by Companies House API (UK) and European Business Registers."
    }
  },
  it: {
    nav: {
      howItWorks: "Come funziona",
      pricing: "Piani",
      cta: "Inizia Screening",
    },
    hero: {
      headline: "L'Intelligence per M&A UK & Italia",
      subheadline: "Una piattaforma, due mercati. Inizia con la Beta UK o iscriviti per il lancio Italia.",
      cardItaly: {
        title: "Find My Synergy Italy",
        desc: "Sourcing di PMI Italiane per Compratori.",
        badge: "Lista d'attesa",
        status: "In Arrivo"
      },
      cardUK: {
        title: "Find My Synergy UK",
        desc: "Connessione live API Companies House.",
        badge: "Live Beta",
        status: "Accedi"
      },
      trust: "Dati professionali dai registri ufficiali"
    },
    pricing: {
      title: "Scegli il Livello di Intelligence",
      subtitle: "Soluzioni scalabili per Analisti, Fondi PE e Corporate M&A.",
      tiers: {
        minimal: {
          name: "Minimal",
          desc: "Dati essenziali per scouting iniziale.",
          features: ["Shortlist Aziende Validate", "Financials Chiave (Fatturato/EBITDA)", "Filtri Settoriali Standard", "Export in CSV"]
        },
        medium: {
          name: "Medio",
          desc: "Filtri dinamici e Modalità Presentazione.",
          features: ["Tutto inclusio nel Minimal", "Presentazione Aziendale (Auto-generata)", "Filtri Dinamici (Stile PowerBI)", "Dashboard Interattiva", "Metriche di Crescita (CAGR 3Y)"]
        },
        premium: {
          name: "Premium",
          desc: "Due diligence completa e report sinergie.",
          features: ["Tutto incluso nel Medio", "Report Sinergie Completo", "Bilanci Completi (PDF)", "Grafici & Proiezioni Sinergie", "Supporto Intro"]
        }
      }
    },
    engine: {
      label: "Il Motore",
      title: "Dai Parametri alla Shortlist",
      steps: [
        { title: "Sourcing", desc: "Connessione API live a Companies House & registri locali." },
        { title: "Filtro", desc: "Screening AI basato su fatturato, EBITDA e settore." },
        { title: "Analisi", desc: "Normalizzazione finanziaria e rilevamento sinergie." },
        { title: "Report", desc: "Generazione Shortlist finale pronta per l'export." },
      ],
      mock: {
        title: "Anteprima Shortlist Live",
        col1: "Nome Azienda",
        col2: "Settore",
        col3: "Fatturato",
        col4: "Fit Score"
      }
    },
    modal: {
      title: "Seleziona Accesso Mercato",
      subtitle: "Scegli a quale piattaforma vuoi accedere.",
      optionIt: "Modulo Italia (Lista d'attesa)",
      optionUk: "Modulo UK (Richiedi Beta)",
      emailPlace: "nome@azienda.com",
      submit: "Richiedi Accesso",
      success: "Richiesta ricevuta! Ti contatteremo a breve."
    },
    footer: {
      rights: "Tutti i diritti riservati.",
      disclaimer: "Dati forniti da Companies House API (UK) e Registri Imprese Europei."
    }
  }
}

// ============================================
// ICONS (Internal)
// ============================================
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
const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
)

// ============================================
// MODAL COMPONENT (WAITLIST / GATEWAY)
// ============================================

function WaitlistModal({ isOpen, onClose, t }: { isOpen: boolean, onClose: () => void, t: any }) {
  const [step, setStep] = useState(1) 
  const [email, setEmail] = useState("")
  const [market, setMarket] = useState("uk") // Default to UK as per strategy
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // SIMULAZIONE INVIO MAIL
    // Qui collegheremo Resend.com
    console.log(`NEW LEAD: ${email} for market: ${market}`)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(2)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#433250]/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <XIcon className="h-6 w-6" />
        </button>

        {step === 1 ? (
          <div className="p-8">
            <h3 className="text-2xl font-bold text-[#433250] mb-2">{t.modal.title}</h3>
            <p className="text-gray-600 mb-6">{t.modal.subtitle}</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Market Selection Cards */}
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${market === 'uk' ? 'border-[#A196C9] bg-[#A196C9]/10 ring-1 ring-[#A196C9]' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                        type="radio" 
                        name="market" 
                        value="uk" 
                        checked={market === "uk"}
                        onChange={(e) => setMarket(e.target.value)}
                        className="w-4 h-4 text-[#A196C9] focus:ring-[#A196C9]"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-[#433250]">{t.modal.optionUk.split('(')[0]}</span>
                        <span className="text-xs text-[#A196C9] font-bold uppercase tracking-wider">{t.modal.optionUk.split('(')[1]?.replace(')', '')}</span>
                    </div>
                  </div>
                  <GlobeIcon className="h-5 w-5 text-[#433250]/40" />
                </label>

                <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${market === 'italy' ? 'border-[#A196C9] bg-[#A196C9]/10 ring-1 ring-[#A196C9]' : 'border-gray-200 hover:border-gray-300'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                        type="radio" 
                        name="market" 
                        value="italy" 
                        checked={market === "italy"}
                        onChange={(e) => setMarket(e.target.value)}
                        className="w-4 h-4 text-[#A196C9] focus:ring-[#A196C9]"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-[#433250]">{t.modal.optionIt.split('(')[0]}</span>
                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t.modal.optionIt.split('(')[1]?.replace(')', '')}</span>
                    </div>
                  </div>
                  <MapIcon className="h-5 w-5 text-[#433250]/40" />
                </label>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-[#666666] uppercase tracking-wide mb-1.5">Business Email</label>
                <input
                  type="email"
                  required
                  placeholder={t.modal.emailPlace}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 border border-[#D4D5D0] rounded-lg focus:ring-2 focus:ring-[#A196C9] focus:border-transparent outline-none bg-gray-50"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 bg-[#433250] text-white font-bold rounded-lg hover:bg-[#5a4369] transition-all disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Connecting..." : t.modal.submit}
                {!isSubmitting && <ChevronRightIcon className="h-4 w-4" />}
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center bg-white">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in">
              <CheckIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#433250] mb-2">Request Received</h3>
            <p className="text-gray-600 mb-6">{t.modal.success}</p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-500 mb-6 border border-gray-100">
                You will receive an email confirmation at <strong>{email}</strong>
            </div>
            <button onClick={onClose} className="text-[#433250] font-bold hover:underline">
              Close Window
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EBECE7]/90 backdrop-blur-md border-b border-[#D4D5D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
            {/* LOGO */}
            <div className="w-8 h-8 bg-[#433250] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">FMS</span>
            </div>
            <span className="text-lg font-bold text-[#433250] hidden sm:block">Find My Synergy</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#pricing" className="text-sm font-medium text-[#333333] hover:text-[#433250]">{t.nav.pricing}</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-[#333333] hover:text-[#433250]">{t.nav.howItWorks}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#D4D5D0] hover:border-[#A196C9] transition-colors text-xs font-bold text-[#433250]">
            <GlobeIcon className="h-3 w-3" /> {lang === 'en' ? 'EN' : 'IT'}
          </button>
          <button onClick={onOpenModal} className="bg-[#A196C9] text-[#433250] hover:bg-[#8B7DB8] font-bold px-4 py-2 rounded-md transition-colors text-sm shadow-sm hover:shadow">
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
        <div className="inline-block px-3 py-1 rounded-full bg-[#A196C9]/10 text-[#433250] text-xs font-bold uppercase tracking-widest mb-6 border border-[#A196C9]/20">
            M&A Intelligence Platform
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#433250] mb-6 leading-tight text-balance">{t.hero.headline}</h1>
        <p className="text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">{t.hero.subheadline}</p>
        <p className="mt-6 text-sm text-[#666666] font-medium flex items-center justify-center gap-2">
            <CheckIcon className="h-4 w-4 text-green-600" />
            {t.hero.trust}
        </p>
      </div>

      {/* The Two Portals */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-4">
        {/* UK Card (Highlighted) */}
        <div className="group relative bg-[#433250] rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden" onClick={onOpenModal}>
            <div className="absolute top-0 right-0 p-3">
                 <div className="bg-[#A196C9] text-[#433250] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {t.hero.cardUK.badge}
                 </div>
            </div>
            
            <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <GlobeIcon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{t.hero.cardUK.title}</h2>
                <p className="text-white/70 mb-8 h-12">{t.hero.cardUK.desc}</p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                        {t.hero.cardUK.status} <ChevronRightIcon className="h-4 w-4" />
                    </span>
                    <span className="text-xs text-white/40 uppercase tracking-widest">API Connected</span>
                </div>
            </div>
            
            {/* Decorative BG */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#A196C9] rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
        </div>

        {/* Italy Card (Secondary) */}
        <div className="group relative bg-white rounded-2xl p-8 border border-[#D4D5D0] hover:border-[#A196C9] shadow-sm hover:shadow-xl transition-all cursor-pointer" onClick={onOpenModal}>
            <div className="absolute top-0 right-0 p-3">
                 <div className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full">
                    {t.hero.cardItaly.badge}
                 </div>
            </div>

            <div className="w-14 h-14 bg-[#F5F5F5] rounded-2xl flex items-center justify-center mb-6">
                <MapIcon className="h-7 w-7 text-[#433250]" />
            </div>
            <h2 className="text-2xl font-bold text-[#433250] mb-2">{t.hero.cardItaly.title}</h2>
            <p className="text-[#666666] mb-8 h-12">{t.hero.cardItaly.desc}</p>
            
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-[#433250] font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    {t.hero.cardItaly.status} &rarr;
                </span>
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
      <section id="how-it-works" className="py-24 px-4 bg-[#F8F9FA] border-y border-[#D4D5D0]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#433250]">{t.engine.title}</h2>
          </div>
  
          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step: any) => (
              <div key={step.number} className="bg-white p-6 rounded-xl shadow-sm border border-[#D4D5D0] hover:border-[#A196C9]/50 transition-colors">
                 <div className="flex items-center justify-between mb-4">
                    <div className="bg-[#433250]/5 p-2.5 rounded-lg">
                        <step.icon className="h-5 w-5 text-[#433250]" />
                    </div>
                    <span className="text-xs font-bold text-[#A196C9] opacity-50">{step.number}</span>
                 </div>
                 <h3 className="font-bold text-[#433250] mb-2 text-lg">{step.title}</h3>
                 <p className="text-xs text-[#666666] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* SIMPLIFIED SHORTLIST MOCKUP */}
          <div className="bg-white rounded-xl shadow-xl border border-[#D4D5D0] overflow-hidden max-w-4xl mx-auto">
            <div className="bg-[#433250] px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    </div>
                    <span className="ml-4 text-xs text-white/70 font-mono tracking-wide border-l border-white/20 pl-4">FMS_Shortlist_v2.csv</span>
                </div>
                <div className="text-xs text-white/50 font-mono">142 Matches</div>
            </div>
            
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 px-6 py-3 bg-gray-50 border-b border-[#D4D5D0] text-xs font-bold text-[#666666] uppercase tracking-wider">
                <div>{t.engine.mock.col1}</div>
                <div>{t.engine.mock.col2}</div>
                <div>{t.engine.mock.col3}</div>
                <div className="text-right">{t.engine.mock.col4}</div>
            </div>

            {/* Table Rows (Fake Data) */}
            <div className="divide-y divide-gray-100">
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB] transition-colors group">
                    <div className="font-bold text-[#433250] group-hover:text-[#A196C9] transition-colors">Oxford Precision Ltd</div>
                    <div className="text-[10px] font-bold text-[#666666] bg-gray-100 px-2 py-1 rounded w-fit uppercase tracking-wide">Manufacturing</div>
                    <div className="text-sm text-[#333333] font-mono">£ 12.5M</div>
                    <div className="text-right font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md w-fit justify-self-end">98%</div>
                </div>
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB] transition-colors group">
                    <div className="font-bold text-[#433250] group-hover:text-[#A196C9] transition-colors">Cambridge Dynamics</div>
                    <div className="text-[10px] font-bold text-[#666666] bg-gray-100 px-2 py-1 rounded w-fit uppercase tracking-wide">R&D / Tech</div>
                    <div className="text-sm text-[#333333] font-mono">£ 28.1M</div>
                    <div className="text-right font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md w-fit justify-self-end">94%</div>
                </div>
                <div className="grid grid-cols-4 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB] transition-colors group">
                    <div className="font-bold text-[#433250] group-hover:text-[#A196C9] transition-colors">Northern Steelworks</div>
                    <div className="text-[10px] font-bold text-[#666666] bg-gray-100 px-2 py-1 rounded w-fit uppercase tracking-wide">Industrial</div>
                    <div className="text-sm text-[#333333] font-mono">£ 8.4M</div>
                    <div className="text-right font-bold text-[#A196C9] bg-[#A196C9]/10 px-2 py-1 rounded-md w-fit justify-self-end">89%</div>
                </div>
            </div>
             <div className="bg-gray-50 px-6 py-3 text-center border-t border-[#D4D5D0]">
                <span className="text-xs text-[#666666] italic flex items-center justify-center gap-2">
                    <CheckIcon className="h-3 w-3" /> Filtered by Revenue {'>'} £5M & EBITDA Margin {'>'} 15%
                </span>
             </div>
          </div>
        </div>
      </section>
    )
}

function Pricing({ t }: { t: any }) {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#433250]">{t.pricing.title}</h2>
          <p className="text-[#666666] mt-4 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Minimal */}
            <div className="border border-[#D4D5D0] rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#433250]">{t.pricing.tiers.minimal.name}</h3>
                    <div className="mt-2 text-3xl font-bold text-[#433250]">Start</div>
                </div>
                <p className="text-sm text-[#666666] mb-8 min-h-[40px] leading-relaxed">{t.pricing.tiers.minimal.desc}</p>
                <div className="w-full h-px bg-gray-100 mb-8"></div>
                <ul className="space-y-4">
                    {t.pricing.tiers.minimal.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#333333]">
                            <div className="mt-0.5 p-0.5 rounded-full bg-gray-100">
                                <CheckIcon className="h-3 w-3 text-[#666666] shrink-0"/> 
                            </div>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Medium */}
            <div className="border-2 border-[#A196C9] bg-[#FAFAFC] rounded-2xl p-8 relative shadow-xl scale-105 z-10">
                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <span className="bg-[#A196C9] text-[#433250] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm">Most Popular</span>
                </div>
                <div className="mb-6 mt-2">
                    <h3 className="text-xl font-bold text-[#433250]">{t.pricing.tiers.medium.name}</h3>
                    <div className="mt-2 text-3xl font-bold text-[#433250]">Growth</div>
                </div>
                <p className="text-sm text-[#666666] mb-8 min-h-[40px] leading-relaxed">{t.pricing.tiers.medium.desc}</p>
                <div className="w-full h-px bg-[#A196C9]/20 mb-8"></div>
                <ul className="space-y-4">
                    {t.pricing.tiers.medium.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#333333]">
                            <div className="mt-0.5 p-0.5 rounded-full bg-[#A196C9]">
                                <CheckIcon className="h-3 w-3 text-[#433250] shrink-0"/> 
                            </div>
                            <span className="font-medium">{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Premium */}
             <div className="bg-[#433250] text-white rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">{t.pricing.tiers.premium.name}</h3>
                    <div className="mt-2 text-3xl font-bold text-white">Pro</div>
                </div>
                <p className="text-sm text-white/60 mb-8 min-h-[40px] leading-relaxed">{t.pricing.tiers.premium.desc}</p>
                <div className="w-full h-px bg-white/10 mb-8"></div>
                <ul className="space-y-4">
                    {t.pricing.tiers.premium.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                            <div className="mt-0.5 p-0.5 rounded-full bg-[#A196C9]">
                                <CheckIcon className="h-3 w-3 text-[#433250] shrink-0"/> 
                            </div>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ t }: { t: any }) {
    return (
      <footer className="bg-[#433250] py-16 px-4 text-center border-t border-white/5">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold">FMS</span>
          </div>
          <p className="text-white font-bold text-2xl mb-2">Find My Synergy</p>
          <p className="text-white/60 text-sm mb-8">London • Milan</p>
          <div className="flex justify-center gap-6 mb-12">
             <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">Privacy</Link>
             <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">Terms</Link>
             <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm">Contact</Link>
          </div>
          <p className="text-white/20 text-xs max-w-md mx-auto leading-relaxed">{t.footer.rights} <br/> {t.footer.disclaimer}</p>
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
    <main className="min-h-screen bg-[#EBECE7] selection:bg-[#A196C9] selection:text-[#433250]">
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} t={t} />
      
      <Header lang={lang} setLang={setLang} t={t} onOpenModal={() => setIsModalOpen(true)} />
      <Hero t={t} onOpenModal={() => setIsModalOpen(true)} />
      <Engine t={t} />
      <Pricing t={t} />
      <Footer t={t} />
    </main>
  )
}