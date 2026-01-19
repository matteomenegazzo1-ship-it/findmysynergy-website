"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// ============================================
// ICON COMPONENTS (SVG replacements for lucide-react)
// ============================================

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}

function LandmarkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function PiggyBankIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h.01" />
    </svg>
  )
}

function BarChart3Icon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>
  )
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function FileCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ============================================
// HEADER COMPONENT
// ============================================

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EBECE7]/95 backdrop-blur-sm border-b border-[#D4D5D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://i.postimg.cc/RhD6XQNT/Gemini-Generated-Image-92pb0x92pb0x92pb-removebg-preview.png"
              alt="Find My Synergy"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#how-it-works" 
              className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
            >
              How it works
            </Link>
            <Link 
              href="#coverage" 
              className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
            >
              Coverage
            </Link>
            <Link 
              href="#pricing" 
              className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              type="button"
              className="bg-[#A196C9] text-[#433250] hover:bg-[#8B7DB8] font-medium px-5 py-2 rounded-md transition-colors"
            >
              Request Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-[#433250]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#D4D5D0]">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#how-it-works" 
                className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="#coverage" 
                className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coverage
              </Link>
              <Link 
                href="#pricing" 
                className="text-[#333333] hover:text-[#433250] transition-colors text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <button 
                type="button"
                className="bg-[#A196C9] text-[#433250] hover:bg-[#8B7DB8] font-medium w-full mt-2 py-2 rounded-md transition-colors"
              >
                Request Access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// ============================================
// HERO COMPONENT
// ============================================

function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#A196C9]/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-[#A196C9]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#A196C9]/6 rounded-full blur-[80px]" />
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#433250] leading-tight tracking-tight text-balance">
          The Intelligence Layer for Cross-Border M&A
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-lg md:text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed text-pretty">
          Identify off-market Italian SMEs with precision using Proprietary Data & AI. 
          Designed for International Investors.
        </p>

        {/* Email Form */}
        <form 
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 px-4 bg-white border border-[#D4D5D0] rounded-md focus:border-[#A196C9] focus:ring-2 focus:ring-[#A196C9] focus:outline-none text-[#333333] placeholder:text-[#999999]"
          />
          <button 
            type="submit"
            className="h-12 px-6 bg-[#A196C9] text-[#433250] hover:bg-[#8B7DB8] font-medium rounded-md transition-colors flex items-center justify-center gap-2"
          >
            Join Waitlist
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </form>

        {/* Trust indicator */}
        <p className="mt-4 text-sm text-[#666666]">
          Join 500+ investors already on the waitlist
        </p>
      </div>
    </section>
  )
}

// ============================================
// LOGO STRIP COMPONENT
// ============================================

const logos = [
  { icon: Building2Icon, name: "Global Fund" },
  { icon: LandmarkIcon, name: "Investment Bank" },
  { icon: TrendingUpIcon, name: "PE Partners" },
  { icon: BriefcaseIcon, name: "Capital Advisors" },
  { icon: PiggyBankIcon, name: "Asset Management" },
  { icon: BarChart3Icon, name: "M&A Advisory" },
]

function LogoStrip() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D4D5D0]/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-medium tracking-[0.2em] text-[#666666] mb-10 uppercase">
          Powering Analysts At
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="flex items-center gap-2 text-[#999999] opacity-60 hover:opacity-80 transition-opacity"
            >
              <logo.icon className="h-6 w-6" />
              <span className="text-sm font-medium tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// VALUE PROPOSITION COMPONENT
// ============================================

function ValueProposition() {
  return (
    <section id="coverage" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#433250] text-balance">
            See the Platform in Action
          </h2>
          <p className="mt-4 text-lg text-[#333333] max-w-2xl mx-auto">
            From raw data to actionable intelligence in seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Glassmorphic Data Card */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A196C9]/20 to-[#433250]/10 rounded-2xl blur-xl" />
            
            {/* Main Card */}
            <div className="relative backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl p-6 shadow-xl">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#433250] flex items-center justify-center">
                    <FactoryIcon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#433250]">Rossi Manufacturing S.r.l.</h3>
                    <p className="text-sm text-[#666666]">Industrial Automation</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-[#A196C9]/20 text-[#433250] rounded-full">
                  92% Match
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-white/40">
                  <p className="text-xs text-[#666666] uppercase tracking-wide mb-1">Revenue</p>
                  <p className="text-xl font-bold text-[#433250]">{"€24.5M"}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUpIcon className="h-3 w-3 text-green-600" />
                    <span className="text-xs text-green-600">+12% YoY</span>
                  </div>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-white/40">
                  <p className="text-xs text-[#666666] uppercase tracking-wide mb-1">EBITDA</p>
                  <p className="text-xl font-bold text-[#433250]">{"€4.2M"}</p>
                  <p className="text-xs text-[#666666] mt-1">17.1% margin</p>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-white/40">
                  <p className="text-xs text-[#666666] uppercase tracking-wide mb-1">Employees</p>
                  <p className="text-xl font-bold text-[#433250]">87</p>
                  <p className="text-xs text-[#666666] mt-1">Est. 1998</p>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 border border-white/40">
                  <p className="text-xs text-[#666666] uppercase tracking-wide mb-1">Location</p>
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-4 w-4 text-[#433250]" />
                    <p className="text-sm font-semibold text-[#433250]">Lombardy</p>
                  </div>
                  <p className="text-xs text-[#666666] mt-1">Milan Province</p>
                </div>
              </div>

              {/* Synergy Score */}
              <div className="bg-gradient-to-r from-[#433250] to-[#5a4369] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wide">AI Synergy Analysis</p>
                    <p className="text-white font-medium mt-1">Strong fit for UK industrial acquirers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#A196C9]">A+</p>
                    <p className="text-xs text-white/60">Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#A196C9]/20 flex items-center justify-center shrink-0">
                <DatabaseIcon className="h-6 w-6 text-[#433250]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#433250] mb-1">Deep Data Access</h3>
                <p className="text-[#333333] leading-relaxed">
                  Search through 5M+ companies across UK & Italy with granular filtering by sector, size, and growth metrics.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#A196C9]/20 flex items-center justify-center shrink-0">
                <BrainIcon className="h-6 w-6 text-[#433250]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#433250] mb-1">AI-Powered Analysis</h3>
                <p className="text-[#333333] leading-relaxed">
                  Automated EBITDA normalization, synergy detection, and intelligent matching based on your investment criteria.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#A196C9]/20 flex items-center justify-center shrink-0">
                <FileTextIcon className="h-6 w-6 text-[#433250]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#433250] mb-1">Instant Reporting</h3>
                <p className="text-[#333333] leading-relaxed">
                  Generate comprehensive Investment Teasers and due diligence summaries with a single click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// ENGINE COMPONENT
// ============================================

const steps = [
  {
    number: "01",
    icon: SearchIcon,
    title: "Source",
    description: "Our engine continuously scans proprietary databases across UK & Italy for acquisition targets.",
  },
  {
    number: "02",
    icon: FilterIcon,
    title: "Filter",
    description: "AI-powered screening applies your specific investment criteria to identify the best matches.",
  },
  {
    number: "03",
    icon: TrendingUpIcon,
    title: "Analyze",
    description: "Automated financial analysis normalizes EBITDA and detects potential synergies.",
  },
  {
    number: "04",
    icon: FileCheckIcon,
    title: "Report",
    description: "Generate comprehensive investment teasers ready for your deal committee.",
  },
]

function Engine() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-[#A196C9] uppercase tracking-wider">
            The Engine
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#433250] text-balance">
            UK to Italy M&A Pipeline
          </h2>
          <p className="mt-4 text-lg text-[#333333] max-w-2xl mx-auto">
            A systematic approach to cross-border deal sourcing, powered by proprietary data and AI
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="bg-[#EBECE7] rounded-lg relative overflow-hidden group p-6"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-5xl font-bold text-[#433250]/10 group-hover:text-[#A196C9]/30 transition-colors">
                {step.number}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#433250] flex items-center justify-center mb-5">
                <step.icon className="h-5 w-5 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#433250] mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#333333] leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#A196C9]/50" />
              )}
            </div>
          ))}
        </div>

        {/* Mock Interface Element */}
        <div className="mt-16 bg-[#433250] rounded-xl p-6 md:p-8 overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
            <span className="ml-4 text-sm text-white/60">FMS Deal Finder</span>
          </div>
          <div className="bg-[#EBECE7] rounded-lg p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 bg-white rounded-lg p-3 border border-[#D4D5D0]">
                <span className="text-xs text-[#666666] uppercase tracking-wide">Target Region</span>
                <p className="text-[#433250] font-medium mt-1">Northern Italy</p>
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 border border-[#D4D5D0]">
                <span className="text-xs text-[#666666] uppercase tracking-wide">Industry</span>
                <p className="text-[#433250] font-medium mt-1">Manufacturing</p>
              </div>
              <div className="flex-1 bg-white rounded-lg p-3 border border-[#D4D5D0]">
                <span className="text-xs text-[#666666] uppercase tracking-wide">EBITDA Range</span>
                <p className="text-[#433250] font-medium mt-1">{"€2M - €10M"}</p>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#A196C9]/20 rounded-lg p-3">
              <span className="text-[#433250] font-medium text-sm">142 companies match your criteria</span>
              <span className="text-xs text-[#666666]">Updated 2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER COMPONENT
// ============================================

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#433250] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-white tracking-tight">FMS</span>
            <span className="ml-2 text-white/60 text-sm">Find My Synergy</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="/privacy" 
              className="text-white/70 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center space-y-3">
          <p className="text-white/60 text-sm">
            © {currentYear} Find My Synergy. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Data sources include Companies House (UK) and European Business Registers.
          </p>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBECE7]">
      <Header />
      <Hero />
      <LogoStrip />
      <ValueProposition />
      <Engine />
      <Footer />
    </main>
  )
}
