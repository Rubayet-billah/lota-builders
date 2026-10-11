"use client";

import React, { useState } from "react";
import {
  Building2,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  UploadCloud,
  FileText,
  Clock,
  Ruler,
  Compass,
  HardHat,
  Landmark,
  Layers,
  ChevronDown,
  X,
  Menu,
  Check,
  FileCheck,
} from "lucide-react";
import {
  COMPANY_IDENTITY,
  KEY_METRICS,
  CORE_SERVICES,
  FEATURED_PROJECTS,
  PROCESS_STAGES,
  FAQ_ITEMS,
} from "@/data/lota-data";

export default function LotaBuildersHomePage() {
  // Navigation & Drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Project filtering state
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<string | null>("faq-01");

  // Interactive Tender Funnel Form state
  const [formCategory, setFormCategory] = useState("Commercial Developments");
  const [budgetTier, setBudgetTier] = useState("£150k – £500k");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<{
    reference: string;
    timestamp: string;
    name: string;
    category: string;
  } | null>(null);

  // Handle simulated blueprint file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setUploadedFile({
        name: file.name,
        size: `${sizeMb === "0.0" ? "0.8" : sizeMb} MB`,
      });
    }
  };

  const handleTenderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone || !clientEmail) {
      alert("Please provide your Name, Phone Number, and Email for the tender dossier.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedReceipt({
        reference: `LOTA-TDR-${Math.floor(1000 + Math.random() * 9000)}-B14`,
        timestamp: "10:30 AM",
        name: clientName,
        category: formCategory,
      });
    }, 800);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-950">
      {/* ------------------------------------------------------------------- */}
      {/* TOP TECHNICAL TICKER (Matching PDF page 1 status header)            */}
      {/* ------------------------------------------------------------------- */}
      <div className="border-b border-zinc-200 bg-white text-[11px] font-mono tracking-wider text-zinc-600 py-2 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-zinc-800 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            OPERATIONAL STATUS: SITE TEAMS ACTIVE // Q1-Q2 TENDERS OPEN
          </span>
          <span className="hidden md:inline text-zinc-300">|</span>
          <span className="hidden md:inline text-zinc-500">
            HEADQUARTERS: 114 SILVER ST, KINGS HEATH, B14 7QT
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">JCT DESIGN &amp; BUILD ADHERENT</span>
          <span className="text-zinc-300">|</span>
          <a
            href="tel:01214498200"
            className="hover:text-zinc-950 transition-colors flex items-center gap-1 text-zinc-800 font-medium"
          >
            <Phone className="w-3 h-3 text-amber-600" />
            0121 449 8200
          </a>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* 1. HEADER / NAVBAR (Clean White Editorial Style)                    */}
      {/* ------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Architectural Monogram Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="h-10 w-10 border border-zinc-900 bg-zinc-950 flex items-center justify-center text-amber-400 group-hover:bg-zinc-800 transition-colors">
              <Building2 className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.16em] text-sm text-zinc-950 uppercase group-hover:text-amber-700 transition-colors">
                LOTA BUILDERS
              </span>
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                EST. 2000 | BIRMINGHAM, UK
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Architron editorial style) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-zinc-600">
            <a href="#services" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">01</span> Services
            </a>
            <a href="#model" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">02</span> Operating Model
            </a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">03</span> Case Studies
            </a>
            <a href="#process" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">04</span> Methodology
            </a>
            <a href="#credentials" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">05</span> Compliance
            </a>
            <a href="#faq" className="hover:text-zinc-950 transition-colors py-2 flex items-center gap-1.5">
              <span className="text-zinc-400">06</span> FAQ
            </a>
          </nav>

          {/* Direct Action CTAs (Matching PDF) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:01214498200"
              className="px-3.5 py-2 text-xs font-mono tracking-wider text-zinc-700 border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-600" />
              <span>0121 449 8200</span>
            </a>
            <a
              href="#tender"
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 font-medium transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Request Tender Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4 shadow-lg">
            <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-zinc-800">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>01 // Core Services</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
              <a
                href="#model"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>02 // Operating Model</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>03 // Selected Schemes</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>04 // Delivery Methodology</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
              <a
                href="#credentials"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>05 // Trust &amp; Certifications</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-zinc-100 flex justify-between"
              >
                <span>06 // Common Questions</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-zinc-400" />
              </a>
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:01214498200"
                className="w-full text-center py-2.5 text-xs font-mono border border-zinc-200 text-zinc-800 bg-zinc-50"
              >
                Direct Estimator: 0121 449 8200
              </a>
              <a
                href="#tender"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-mono uppercase bg-zinc-950 text-white font-medium"
              >
                Submit Blueprints / Plans
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ------------------------------------------------------------------- */}
      {/* 2. HERO SECTION (Light Architectural Theme - PDF Page 1)            */}
      {/* ------------------------------------------------------------------- */}
      <section className="relative border-b border-zinc-200 bg-zinc-50/50 bg-arch-grid pt-14 pb-20 sm:pt-20 sm:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left Column: Architectural Editorial Typography */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Pill (matching PDF Page 1) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-200 bg-white font-mono text-[11px] text-zinc-700 tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="uppercase">OPERATIONAL STATUS: ACTIVE ON SITE</span>
              </div>

              {/* Primary Architectural Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-zinc-950 leading-[1.14]">
                Turnkey Commercial, Community &amp; Residential Builders Across the West Midlands.
              </h1>

              {/* Subtext */}
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Established 2000 in Kings Heath &amp; Moseley. 25+ years delivering heavy structural
                engineering, places of worship, commercial schemes, and high-end residential extensions
                with in-house NICEIC, Gas Safe, and full planning-to-handover management.
              </p>

              {/* Dual Action Buttons (matching PDF black primary + light secondary) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#tender"
                  className="px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-sm group"
                >
                  <span>Submit Blueprints / Plans</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3.5 bg-white hover:bg-zinc-50 text-zinc-800 border border-zinc-300 font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore Schemes</span>
                </a>
              </div>

              {/* Tag Strip (matching PDF page 1 bullet points) */}
              <div className="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-600 font-bold">•</span> CLOUD &amp; CAD ARCHITECTURE
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-600 font-bold">•</span> PLACES OF WORSHIP
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-600 font-bold">•</span> COMMERCIAL BUILD
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-amber-600 font-bold">•</span> JCT FIXED CERTAINTY
                </span>
              </div>
            </div>

            {/* Right Column: Hero Spec Card (matching PDF page 1 hero card) */}
            <div className="lg:col-span-5">
              <div className="border border-zinc-200 bg-white p-6 sm:p-7 shadow-xl relative">
                {/* Header Strip inside Card */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 text-xs font-mono text-zinc-500 uppercase">
                  <span className="flex items-center gap-2 text-zinc-800 font-medium">
                    <span className="h-2 w-2 bg-amber-500 inline-block" />
                    SAMPLE INFRASTRUCTURE MONITOR
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    LIVE
                  </span>
                </div>

                {/* 3 Metric Pills inside hero card (100%, 25 Yrs, £0 Surprise) */}
                <div className="grid grid-cols-3 divide-x divide-zinc-100 py-4 border-b border-zinc-100 text-center font-mono">
                  <div>
                    <div className="text-2xl font-semibold text-zinc-950">100%</div>
                    <div className="text-[10px] text-zinc-400 uppercase mt-0.5">Council Sign-Off</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-zinc-950">25+</div>
                    <div className="text-[10px] text-zinc-400 uppercase mt-0.5">Years Track Record</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-zinc-950">£0</div>
                    <div className="text-[10px] text-zinc-400 uppercase mt-0.5">Surprise Variations</div>
                  </div>
                </div>

                {/* Architectural Blueprint Signal / Curve Visualization (matching PDF) */}
                <div className="py-4">
                  <div className="relative h-32 w-full bg-zinc-50 border border-zinc-200/80 flex flex-col justify-between p-3 overflow-hidden font-mono text-[10px]">
                    <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                      <line x1="20" y1="90" x2="360" y2="90" stroke="#d4d4d8" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="70" y1="20" x2="70" y2="105" stroke="#e4e4e7" strokeWidth="1" />
                      <line x1="190" y1="20" x2="190" y2="105" stroke="#e4e4e7" strokeWidth="1" />
                      <line x1="310" y1="20" x2="310" y2="105" stroke="#e4e4e7" strokeWidth="1" />
                      {/* Curved line representing structural load distribution (like PDF curve) */}
                      <path
                        d="M 20 80 Q 90 20, 190 65 T 360 40"
                        fill="none"
                        stroke="#d97706"
                        strokeWidth="2"
                      />
                      <circle cx="190" cy="65" r="4" fill="#d97706" />
                      <circle cx="280" cy="46" r="3" fill="#18181b" />
                    </svg>
                    <div className="relative z-10 flex justify-between text-zinc-500 font-mono text-[10px]">
                      <span>PORTAL FRAME STRESS PROFILE</span>
                      <span className="text-amber-700">TOLERANCE: &plusmn;1.0MM</span>
                    </div>
                    <div className="relative z-10 self-center text-center">
                      <span className="text-zinc-800 font-mono text-[11px] bg-white/90 px-3 py-1 border border-zinc-200 shadow-xs">
                        22.0M CLEAR-SPAN FABRICATED STEEL FRAME
                      </span>
                    </div>
                    <div className="relative z-10 flex justify-between text-zinc-400 text-[9px]">
                      <span>KINGS HEATH BASE // MOSELEY DEPOT</span>
                      <span>BS 5950 / EUROCODE 3</span>
                    </div>
                  </div>
                </div>

                {/* Dark Code/Terminal Box at Card Base (matching PDF page 1 dark box) */}
                <div className="bg-zinc-950 text-zinc-300 p-4 font-mono text-xs space-y-1.5 shadow-inner">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-1.5">
                    <span>LOTA // STRUCTURAL INTEGRITY LOG</span>
                    <span className="text-emerald-400">PASSED</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-300 pt-1 font-light">
                    Identity, steel sizing, padstones, and local building control sign-offs correlated with zero contractor disputes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* COMPLIANCE LOGO STRIP (Matching PDF Page 1 Bottom)                   */}
      {/* ------------------------------------------------------------------- */}
      <section className="border-b border-zinc-200 bg-white py-4 px-4 sm:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 text-[11px] font-mono uppercase tracking-wider text-zinc-500 whitespace-nowrap">
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <span className="text-amber-600 font-bold">•</span> NICEIC APPROVED CONTRACTOR
          </span>
          <span className="text-zinc-300">|</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <span className="text-amber-600 font-bold">•</span> GAS SAFE REGISTERED
          </span>
          <span className="text-zinc-300">|</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <span className="text-amber-600 font-bold">•</span> BIRMINGHAM COUNCIL BUILDING CONTROL
          </span>
          <span className="text-zinc-300">|</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <span className="text-amber-600 font-bold">•</span> JCT CONTRACT STANDARDS
          </span>
          <span className="text-zinc-300">|</span>
          <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
            <span className="text-amber-600 font-bold">•</span> CDM 2015 ALIGNED
          </span>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 01 // OPERATING MODEL (Matching PDF Page 1 Bottom)                  */}
      {/* ------------------------------------------------------------------- */}
      <section id="model" className="py-20 sm:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="font-mono text-xs text-amber-700 uppercase tracking-widest">
                01 // OPERATING MODEL
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Construction should reduce risk, not create friction.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                We combine architectural design, structural engineering, and in-house trade supervision into one accountable delivery model — so client teams can move faster without budget drift.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <div className="h-8 w-8 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-800 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950">Security &amp; Structural Rigor by Design</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                      Load-bearing calculations, padstone designs, and statutory approvals are handled in-house.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="h-8 w-8 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-800 flex-shrink-0 mt-0.5">
                    <Ruler className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-950">Continuous Operational Clarity</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed mt-1">
                      Fixed JCT contracts with itemized Schedule of Works keep commercial syndicates and committees informed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Reference Architecture Card (Matching PDF page 1 right) */}
            <div className="lg:col-span-6">
              <div className="bg-zinc-950 text-white p-7 sm:p-9 border border-zinc-900 shadow-2xl relative font-mono">
                <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-zinc-800 pb-3 uppercase">
                  <span>REFERENCE TOPOLOGY</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    PROJECT PROTOCOL
                  </span>
                </div>

                {/* Central architectural topology nodes */}
                <div className="py-8 relative flex items-center justify-center">
                  <div className="relative w-64 h-48 border border-zinc-800 rounded-lg flex items-center justify-center bg-zinc-900/50">
                    {/* Radial lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                      <line x1="128" y1="96" x2="30" y2="30" stroke="#f59e0b" strokeWidth="1" />
                      <line x1="128" y1="96" x2="226" y2="30" stroke="#f59e0b" strokeWidth="1" />
                      <line x1="128" y1="96" x2="30" y2="160" stroke="#f59e0b" strokeWidth="1" />
                      <line x1="128" y1="96" x2="226" y2="160" stroke="#f59e0b" strokeWidth="1" />
                    </svg>

                    <div className="relative z-10 text-center p-3 border border-amber-500/40 bg-zinc-950 rounded">
                      <span className="text-[10px] text-amber-400 block">PRINCIPAL CONTRACTOR</span>
                      <span className="text-xs font-semibold text-white">LOTA BUILDERS</span>
                    </div>

                    {/* Surrounding nodes */}
                    <div className="absolute top-2 left-2 text-[9px] bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-zinc-400">
                      STEELWORK
                    </div>
                    <div className="absolute top-2 right-2 text-[9px] bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-zinc-400">
                      PLANNING PORTAL
                    </div>
                    <div className="absolute bottom-2 left-2 text-[9px] bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-zinc-400">
                      NICEIC ELEC
                    </div>
                    <div className="absolute bottom-2 right-2 text-[9px] bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-zinc-400">
                      GAS SAFE MEP
                    </div>
                  </div>
                </div>

                {/* 3 Metrics at base */}
                <div className="grid grid-cols-3 divide-x divide-zinc-800 pt-4 border-t border-zinc-800 text-center">
                  <div>
                    <div className="text-xs font-bold text-white">24/7</div>
                    <div className="text-[9px] text-zinc-400 uppercase mt-0.5">Site Oversight</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Turnkey</div>
                    <div className="text-[9px] text-zinc-400 uppercase mt-0.5">Design &amp; Build</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Zero-Risk</div>
                    <div className="text-[9px] text-zinc-400 uppercase mt-0.5">Fixed JCT First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 02 // CORE SERVICES (Matching PDF Page 1 Bottom & Page 2 Top)       */}
      {/* ------------------------------------------------------------------- */}
      <section id="services" className="py-20 sm:py-24 border-b border-zinc-200 bg-zinc-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-amber-700 uppercase tracking-widest mb-2">
              02 // CORE SERVICES
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 mb-3">
              One engineering partner across the infrastructure lifecycle.
            </h2>
            <p className="text-zinc-600 text-sm">
              Focused capabilities for modernizing, expanding, and operating business-critical building developments.
            </p>
          </div>

          {/* 4 Clean White Cards (Architron Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-zinc-200 hover:border-zinc-300 p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-6">
                    <span className="font-semibold text-zinc-900">{service.index}</span>
                    <Building2 className="w-4 h-4 text-zinc-400 group-hover:text-amber-600 transition-colors" />
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-950 mb-2 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Bullet Points with Checkmarks (matching PDF page 2) */}
                  <ul className="space-y-2 mb-8 text-xs text-zinc-700 font-mono">
                    {service.technicalScope.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-semibold mt-0.5">✓</span>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href="#tender"
                    onClick={() => setFormCategory(service.title)}
                    className="text-xs font-mono text-zinc-950 hover:text-amber-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Discuss this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* STATS STRIP / ILLUSTRATIVE OUTCOMES (Matching PDF Page 2 Middle)    */}
      {/* ------------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side text copy */}
            <div className="lg:col-span-4 space-y-3">
              <div className="font-mono text-[10px] uppercase text-zinc-400 tracking-widest">
                ILLUSTRATIVE OUTCOMES
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">
                Make the value of infrastructure visible.
              </h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Authentic delivery figures from 25+ years of continuous contracting across Birmingham and the West Midlands.
              </p>
            </div>

            {/* Right side 3 large stat boxes (matching PDF: 42%, 31%, 99.99%) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200">
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-mono mb-2">
                  25+
                </div>
                <div className="text-xs font-medium text-zinc-600 mt-2 font-mono">
                  Years Serving the West Midlands
                </div>
              </div>
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-mono mb-2">
                  150+
                </div>
                <div className="text-xs font-medium text-zinc-600 mt-2 font-mono">
                  Commercial &amp; Faith Schemes Handled
                </div>
              </div>
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 font-mono mb-2">
                  100%
                </div>
                <div className="text-xs font-medium text-zinc-600 mt-2 font-mono">
                  In-House Building Control Sign-Off
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 03 // SPECIFICATION MATRIX (Matching PDF Page 2 Bottom)             */}
      {/* ------------------------------------------------------------------- */}
      <section className="py-20 sm:py-24 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left copy */}
            <div className="lg:col-span-5 space-y-5">
              <div className="font-mono text-xs text-amber-700 uppercase tracking-widest">
                03 // TECHNICAL SPECIFICATION MATRIX
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Modern platforms, selected for resilience and control.
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Construction choices are mapped to statutory operating requirements — not trends. The built asset stays durable, energy-efficient, and practical for the teams who own it.
              </p>
              <div className="pt-2">
                <a
                  href="#tender"
                  className="px-5 py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Plan a Custom Scheme</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right dark matrix container (matching PDF page 2 dark container) */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-950 text-white p-6 sm:p-8 border border-zinc-900 shadow-2xl space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-4 bg-zinc-900/70 border border-zinc-850">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">#1</span>
                    <div>
                      <div className="text-white font-semibold">Structural Steel &amp; Foundations</div>
                      <div className="text-[11px] text-zinc-400">S355 Fabricated Steel &bull; Portal Frames &bull; Reinforced Padstones</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-zinc-950 px-2 py-0.5 border border-zinc-800 uppercase">
                    BS 5950 / EUROCODE
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-zinc-900/70 border border-zinc-850">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">#2</span>
                    <div>
                      <div className="text-white font-semibold">Places of Worship &amp; Stonework</div>
                      <div className="text-[11px] text-zinc-400">Hand-Carved Ashlar Stone &bull; Clear-Span Trusses &bull; High Occupancy MVHR</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-zinc-950 px-2 py-0.5 border border-zinc-800 uppercase">
                    CIVIC COMPLIANT
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-zinc-900/70 border border-zinc-850">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">#3</span>
                    <div>
                      <div className="text-white font-semibold">MEP Building Services</div>
                      <div className="text-[11px] text-zinc-400">NICEIC 3-Phase Commercial &bull; Gas Safe Commercial Plant &bull; Underfloor Manifolds</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-zinc-950 px-2 py-0.5 border border-zinc-800 uppercase">
                    NICEIC / GAS SAFE
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 bg-zinc-900/70 border border-zinc-850">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-400">#4</span>
                    <div>
                      <div className="text-white font-semibold">Statutory Compliance &amp; Contracts</div>
                      <div className="text-[11px] text-zinc-400">Birmingham City Council Approvals &bull; JCT Fixed Price Form &bull; CDM 2015</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-zinc-950 px-2 py-0.5 border border-zinc-800 uppercase">
                    100% SIGN-OFF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 04 // SAMPLE CASE STUDIES (Matching PDF Page 2 Bottom - Page 3)     */}
      {/* ------------------------------------------------------------------- */}
      <section id="projects" className="py-20 sm:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 gap-6">
            <div>
              <div className="font-mono text-xs text-amber-700 uppercase tracking-widest mb-2">
                04 // SAMPLE CASE STUDIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                Clear challenges. Practical engineering. Measurable delivery.
              </h2>
            </div>

            {/* Filter Tabs (matching PDF filter aesthetic) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 border border-zinc-200">
              {["All", "Faith & Public", "Commercial Build", "Residential"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-zinc-950 font-semibold shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid (matching PDF Page 3 cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-lg group"
              >
                <div>
                  {/* Dark Visual Blueprint Container at top of card (as in PDF) */}
                  <div className="relative h-48 w-full bg-zinc-950 border-b border-zinc-900 p-4 flex flex-col justify-between overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 200 120" fill="none">
                      <line x1="20" y1="90" x2="180" y2="90" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                      <path d="M 20 85 Q 70 30, 100 65 T 180 40" fill="none" stroke="#fafafa" strokeWidth="1.5" />
                      <circle cx="100" cy="65" r="4" fill="#f59e0b" />
                    </svg>

                    <div className="relative z-10 flex justify-between font-mono text-[10px] text-zinc-400">
                      <span className="bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-amber-400 font-semibold">
                        {project.code}
                      </span>
                      <span className="bg-zinc-900 px-2 py-0.5 border border-zinc-800 text-zinc-300">
                        {project.yearCompleted}
                      </span>
                    </div>

                    <div className="relative z-10 font-mono text-[11px] text-zinc-200 bg-zinc-900/90 p-2 border border-zinc-800 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>

                  {/* Metrics Strip directly beneath visual container (as in PDF: 42% FASTER RELEASES...) */}
                  <div className="px-6 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-700">
                    <span className="font-semibold text-zinc-950">
                      {project.specifications[0]?.value}
                    </span>
                    <span className="text-zinc-300">|</span>
                    <span className="text-zinc-600">
                      {project.specifications[1]?.value}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-amber-700 mb-1">
                      {project.category}
                    </div>

                    <h3 className="text-xl font-semibold text-zinc-950 mb-3 group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Problem & Solution block (matching PDF Page 3) */}
                    <div className="space-y-3 mb-6 text-xs font-sans">
                      <div>
                        <span className="font-mono text-[10px] uppercase text-zinc-400 font-bold block mb-0.5">
                          STRUCTURAL SCOPE //
                        </span>
                        <p className="text-zinc-600 leading-relaxed font-light">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Scope Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.scopeSummary.map((scope, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-zinc-100 text-zinc-700 border border-zinc-200 text-[10px] font-mono"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>

                    {/* Specifications List */}
                    <div className="border-t border-zinc-100 pt-3 space-y-1 font-mono text-[11px]">
                      {project.specifications.slice(2, 4).map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-zinc-600">
                          <span className="text-zinc-400 text-[10px] uppercase">{spec.key}:</span>
                          <span className="font-medium text-zinc-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 border-t border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase">
                    {project.clientType}
                  </span>
                  <a
                    href="#tender"
                    onClick={() => {
                      setFormCategory(project.category);
                      setProjectBrief(`Inquiry regarding specifications similar to ${project.title} (${project.code}).`);
                    }}
                    className="text-xs font-mono text-zinc-950 hover:text-amber-700 font-medium flex items-center gap-1"
                  >
                    <span>Discuss this scheme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 05 // ENGAGEMENT PROCESS (Matching PDF Page 3 Middle)               */}
      {/* ------------------------------------------------------------------- */}
      <section id="process" className="py-20 sm:py-24 border-b border-zinc-200 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="font-mono text-xs text-amber-700 uppercase tracking-widest mb-2">
              05 // ENGAGEMENT PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 mb-3">
              A clear path from risk to operational confidence.
            </h2>
            <p className="text-zinc-600 text-sm">
              Structured stages ensuring statutory sign-offs, transparent milestone tracking, and flawless completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="bg-white border border-zinc-200 p-7 flex flex-col justify-between shadow-xs hover:border-zinc-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100 mb-4 font-mono text-xs">
                    <span className="text-zinc-950 font-bold">{stage.step}</span>
                    <span className="text-zinc-400">{stage.timeframe}</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-950 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed mb-6 font-light">
                    {stage.description}
                  </p>
                </div>

                <div className="border-t border-zinc-100 pt-4">
                  <div className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mb-2">
                    Key Protocols:
                  </div>
                  <ul className="space-y-1.5 font-mono text-[11px] text-zinc-700">
                    {stage.protocols.slice(0, 2).map((proto, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold mt-0.5">•</span>
                        <span className="leading-tight">{proto}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 06 // COMMON QUESTIONS (Matching PDF Page 3 Bottom)                 */}
      {/* ------------------------------------------------------------------- */}
      <section id="faq" className="py-20 sm:py-24 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-xs text-amber-700 uppercase tracking-widest">
                06 // COMMON QUESTIONS
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                What teams usually ask before getting started.
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Use this section to address questions about statutory permissions, faith committee procedures, and JCT fixed-price guarantees.
              </p>
            </div>

            {/* Right Column: Clean Accordion (matching PDF + / - layout) */}
            <div className="lg:col-span-7 divide-y divide-zinc-200 border-y border-zinc-200">
              {FAQ_ITEMS.map((item) => (
                <div key={item.id} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-base font-semibold text-zinc-900 group-hover:text-amber-700 transition-colors pr-4">
                      {item.question}
                    </span>
                    <span className="h-6 w-6 rounded border border-zinc-300 flex items-center justify-center text-zinc-500 group-hover:text-zinc-950 font-mono text-sm transition-colors">
                      {openFaq === item.id ? "-" : "+"}
                    </span>
                  </button>
                  {openFaq === item.id && (
                    <div className="mt-3 text-sm text-zinc-600 leading-relaxed font-light pr-6">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 07 // START A CONVERSATION / TENDER INTAKE (Matching PDF Pages 3-4)  */}
      {/* ------------------------------------------------------------------- */}
      <section id="tender" className="py-20 sm:py-28 border-b border-zinc-200 bg-zinc-50/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Context Column (matching PDF layout) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="font-mono text-xs text-amber-700 uppercase tracking-widest">
                07 // START A CONVERSATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Let&apos;s make your next infrastructure decision clearer.
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Share the current challenge, timeline, and target outcome. A strong first conversation should leave you with a clearer next step — even before a project begins.
              </p>

              <div className="space-y-4 pt-4 border-t border-zinc-200 text-xs font-mono">
                <div>
                  <span className="text-zinc-400 block uppercase text-[10px]">DIRECT TENDER EMAIL</span>
                  <a href="mailto:info@lotabuilders.co.uk" className="text-zinc-900 font-semibold hover:text-amber-700 text-sm">
                    info@lotabuilders.co.uk
                  </a>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase text-[10px]">RESPONSE WINDOW</span>
                  <span className="text-zinc-900 font-semibold text-sm">Within one business day</span>
                </div>
                <div>
                  <span className="text-zinc-400 block uppercase text-[10px]">REGIONAL DESK</span>
                  <span className="text-zinc-700">114 Silver Street, Kings Heath, Birmingham B14 7QT</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form Card (matching PDF Page 4 form) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-zinc-200 p-8 sm:p-10 shadow-lg">
                {submittedReceipt ? (
                  /* Success Receipt State */
                  <div className="space-y-6 py-4">
                    <div className="flex items-center gap-3 text-emerald-700 font-mono text-xs uppercase tracking-wider pb-4 border-b border-zinc-200">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Tender Submission Received &amp; Registered</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-zinc-950">
                        Thank You, {submittedReceipt.name}.
                      </h3>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        Your tender specification for <strong>{submittedReceipt.category}</strong> has been logged. Our lead estimating engineer will review your drawings and contact you within 24 hours.
                      </p>
                    </div>

                    <div className="p-5 bg-zinc-50 border border-zinc-200 font-mono text-xs space-y-3">
                      <div className="flex justify-between border-b border-zinc-200 pb-2">
                        <span className="text-zinc-500 uppercase">Tender Reference</span>
                        <span className="text-zinc-950 font-bold">{submittedReceipt.reference}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-200 pb-2">
                        <span className="text-zinc-500 uppercase">Registered Time</span>
                        <span className="text-zinc-900">{submittedReceipt.timestamp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500 uppercase">Attached Drawings</span>
                        <span className="text-emerald-700 font-medium">
                          {uploadedFile ? uploadedFile.name : "Will provide during consultation"}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSubmittedReceipt(null);
                        setClientName("");
                        setClientPhone("");
                        setClientEmail("");
                        setUploadedFile(null);
                        setProjectBrief("");
                      }}
                      className="px-5 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-xs font-mono uppercase text-white font-medium transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleTenderSubmit} className="space-y-5">
                    {/* Full Name & Work Email (matching PDF input fields) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Full Name <span className="text-amber-700">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="e.g. Balvinder Singh"
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Work / Tender Email <span className="text-amber-700">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Phone Number <span className="text-amber-700">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="0121 449 8200"
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Site Location / Postcode
                        </label>
                        <input
                          type="text"
                          value={projectLocation}
                          onChange={(e) => setProjectLocation(e.target.value)}
                          placeholder="Kings Heath / Moseley (B14)"
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Category Dropdown (matching PDF "Select a service") */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Primary Requirement
                        </label>
                        <select
                          value={formCategory}
                          onChange={(e) => setFormCategory(e.target.value)}
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors cursor-pointer"
                        >
                          <option value="Design & Build Schemes">Design &amp; Build Schemes</option>
                          <option value="Places of Worship & Community Halls">Places of Worship &amp; Community Halls</option>
                          <option value="Commercial Developments">Commercial Developments</option>
                          <option value="High-End Residential Extensions">High-End Residential Extensions</option>
                          <option value="Structural Steel & Knock-Through">Structural Steel &amp; Knock-Through</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                          Estimated Budget Tier
                        </label>
                        <select
                          value={budgetTier}
                          onChange={(e) => setBudgetTier(e.target.value)}
                          className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-zinc-950 transition-colors cursor-pointer"
                        >
                          <option value="£50k – £150k">£50,000 – £150,000 (Residential)</option>
                          <option value="£150k – £500k">£150,000 – £500,000 (Commercial Fit-Out)</option>
                          <option value="£500k – £1.5M+">£500,000 – £1.5M+ (Multi-Unit / Faith)</option>
                          <option value="Committee / Public Tender">Committee / Public Tender</option>
                        </select>
                      </div>
                    </div>

                    {/* Blueprint File Upload Box */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                        Architectural Drawings &amp; Planning PDFs (Optional)
                      </label>
                      <div className="border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center hover:bg-zinc-100/70 hover:border-zinc-400 transition-colors relative cursor-pointer">
                        <input
                          type="file"
                          accept=".pdf,.dwg,.dxf,.rvt,.zip"
                          onChange={handleFileUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {uploadedFile ? (
                          <div className="flex items-center justify-center gap-3 text-emerald-700 font-mono text-xs">
                            <FileCheck className="w-5 h-5 flex-shrink-0" />
                            <div className="text-left">
                              <span className="font-semibold block text-zinc-900">
                                {uploadedFile.name}
                              </span>
                              <span className="text-zinc-500 text-[10px]">
                                {uploadedFile.size} &bull; Attached for Estimator Review
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setUploadedFile(null);
                              }}
                              className="ml-2 text-zinc-400 hover:text-red-500 p-1"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-1">
                            <UploadCloud className="w-5 h-5 text-zinc-400" />
                            <span className="text-xs text-zinc-700 font-mono">
                              Attach CAD (.dwg) or PDF drawing files
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono">
                              Max 50MB &bull; Handled under strict NDA
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-700 mb-1.5">
                        Project Details
                      </label>
                      <textarea
                        rows={3}
                        value={projectBrief}
                        onChange={(e) => setProjectBrief(e.target.value)}
                        placeholder="Current challenge, target outcome, and timeline..."
                        className="w-full bg-white border border-zinc-200 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                      />
                    </div>

                    {/* Black Submit Button (matching PDF "Send Inquiry →") */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="text-[11px] font-mono text-zinc-400 text-center pt-1">
                      Direct estimator line: 0121 449 8200 &bull; JCT Compliant Delivery
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------- */}
      {/* 8. FOOTER (Matching PDF Page 4 Sleek Dark Footer)                    */}
      {/* ------------------------------------------------------------------- */}
      <footer className="bg-[#11161d] text-zinc-400 font-mono text-xs border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Identity Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 border border-zinc-700 bg-zinc-900 flex items-center justify-center text-amber-400">
                  <Building2 className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold tracking-[0.16em] text-sm text-white uppercase">
                    LOTA BUILDERS
                  </span>
                  <span className="text-[10px] text-zinc-500">
                    EST. 2000 | BIRMINGHAM, UK
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 font-sans text-xs leading-relaxed max-w-sm font-light">
                Enterprise design &amp; build, heavy structural engineering, places of worship, and managed commercial operations delivered through a premium editorial interface.
              </p>
              <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
                <div>NICEIC Approved Contractor &bull; Gas Safe Registered</div>
                <div>Birmingham City Council Building Control Partner</div>
              </div>
            </div>

            {/* NAVIGATE (Matching PDF) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-semibold">
                NAVIGATE
              </div>
              <ul className="space-y-2 text-zinc-400 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#model" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>

            {/* CAPABILITIES (Matching PDF) */}
            <div className="lg:col-span-2 space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-semibold">
                CAPABILITIES
              </div>
              <ul className="space-y-2 text-zinc-400 text-xs">
                <li><span className="hover:text-white">Design &amp; Build</span></li>
                <li><span className="hover:text-white">Faith Structures</span></li>
                <li><span className="hover:text-white">Commercial</span></li>
                <li><span className="hover:text-white">Heritage Renovation</span></li>
              </ul>
            </div>

            {/* DIRECT BRIEFING (Matching PDF) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="text-white uppercase tracking-widest text-[11px] font-semibold">
                TENDER BRIEFING
              </div>
              <p className="text-zinc-400 text-xs font-sans">
                Direct estimating inquiries &amp; site consultations:
              </p>
              <div className="space-y-1 text-xs">
                <div className="text-white font-semibold">0121 449 8200</div>
                <div className="text-zinc-400">info@lotabuilders.co.uk</div>
                <div className="text-zinc-500 text-[10px] pt-1">
                  114 Silver St, Kings Heath, B14 7QT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-zinc-900 bg-zinc-950 py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
            <div>
              &copy; 2026 Lota Builders &amp; Co Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Kings Heath &bull; Moseley &bull; Edgbaston &bull; Solihull</span>
              <a href="#" className="text-amber-400 hover:underline">
                Back to Top &uarr;
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
