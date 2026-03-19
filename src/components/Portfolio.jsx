import React, { useState } from 'react';
import { Building2, Zap, Cpu, Landmark, Sprout, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [activeSector, setActiveSector] = useState('realestate');

  const sectors = [
    {
      id: 'realestate',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Real Estate',
      company: 'KAPI Africa Limited',
      description: 'End-to-end development of quality residential and commercial projects.',
      stats: [
        { label: 'Developed Area', value: '10,000+ m²' },
        { label: 'Current Project', value: 'KAPI Tower' },
        { label: 'Completion', value: 'Dec 2026' },
      ],
      highlights: [
        'Mama\'s Villaz - 11 villas in Oysterbay',
        'KAPI Tower - 8-floor commercial',
        'End-to-end project delivery',
      ],
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'energy',
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy',
      company: 'KAPI Energies Limited',
      description: 'Modern, reliable energy solutions across the petroleum value chain.',
      stats: [
        { label: 'Traded (Q1 2026)', value: '4M+ Litres' },
        { label: 'Products', value: 'PMS, AGO, LPG' },
        { label: 'Expanding to', value: 'Bulk Trading' },
      ],
      highlights: [
        'Retail fuel trading since 2025',
        'Bulk trading permits secured',
        'Regional expansion strategy',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 'tech',
      icon: <Cpu className="w-8 h-8" />,
      title: 'Tech & Innovation',
      company: 'KAPI Tech',
      description: 'Driving digital transformation and operational efficiency.',
      stats: [
        { label: 'Founded', value: '2026' },
        { label: 'Focus', value: 'Digital Solutions' },
        { label: 'Mission', value: 'Innovation' },
      ],
      highlights: [
        'Process automation',
        'Data-driven tools',
        'Digital platforms',
      ],
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 'financial',
      icon: <Landmark className="w-8 h-8" />,
      title: 'Financial Services',
      company: 'AEL Limited',
      description: 'Microfinance and insurance solutions for economic empowerment.',
      stats: [
        { label: 'Partnership', value: '2025' },
        { label: 'Focus', value: 'Inclusion' },
        { label: 'Impact', value: 'Communities' },
      ],
      highlights: [
        'Microfinance services',
        'Insurance solutions',
        'Financial literacy',
      ],
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 'agri',
      icon: <Sprout className="w-8 h-8" />,
      title: 'Agribusiness',
      company: 'Infinity Star Partnership',
      description: 'Sustainable sisal cultivation and fibre production.',
      stats: [
        { label: 'Partnership', value: '2023' },
        { label: 'Focus', value: 'Sisal' },
        { label: 'Impact', value: 'Sustainability' },
      ],
      highlights: [
        'Sisal estates',
        'Natural fibre production',
        'Sustainable alternatives',
      ],
      color: 'from-lime-500 to-green-600',
    },
  ];

  const activeData = sectors.find(s => s.id === activeSector);

  return (
    <section id="portfolio" className="py-24 bg-ghost-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-green font-semibold mb-4 block">OUR PORTFOLIO</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Building Across
            <span className="block gradient-text">Five Strategic Sectors</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Deliberate investments in sectors with strong market relevance, 
            scalable potential, and lasting impact.
          </p>
        </div>

        {/* Sector Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`px-6 py-3 font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeSector === sector.id
                  ? 'bg-midnight-indigo text-lime-green'
                  : 'bg-transparent text-midnight-indigo hover:bg-lime-green/20'
              }`}
            >
              {sector.icon}
              {sector.title}
            </button>
          ))}
        </div>

        {/* Active Sector Display */}
        {activeData && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lime-green flex items-center justify-center">
                  <div className="text-midnight-indigo">
                    {activeData.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black">{activeData.title}</h3>
                  <p className="text-slate">{activeData.company}</p>
                </div>
              </div>
              
              <p className="text-xl text-slate mb-8">
                {activeData.description}
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {activeData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-lime-green">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {activeData.highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-lime-green"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn-secondary group">
                Learn More
                <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            {/* Visual Element */}
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-pattern-kapi opacity-20"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-10`}></div>
              
              {/* Animated Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-64 h-64 border-2 border-midnight-indigo/20 animate-pulse"></div>
                  <div className="absolute inset-8 border-2 border-lime-green/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-black text-midnight-indigo/10">
                      {activeData.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;