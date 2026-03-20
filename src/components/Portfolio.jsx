import React, { useState, useEffect, useRef } from 'react';
import { Building2, Zap, Cpu, Landmark, Sprout, ArrowRight, ChevronRight, TrendingUp, Users, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [activeSector, setActiveSector] = useState('realestate');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectors = [
    {
      id: 'realestate',
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Real Estate',
      company: 'KAPI Africa Limited',
      description: 'End-to-end development of quality residential and commercial projects that shape communities and create lasting value.',
      stats: [
        { label: 'Developed Area', value: '10K+ m²', icon: Building2 },
        { label: 'Current Project', value: 'KAPI Tower', icon: TrendingUp },
        { label: 'Completion', value: 'Dec 2026', icon: Calendar },
      ],
      highlights: [
        "Mama's Villaz - 11 villas in Oysterbay",
        'KAPI Tower - 8-floor commercial',
        'End-to-end project delivery',
      ],
      color: '#73BE44',
      bgImage: 'linear-gradient(135deg, rgba(181,211,67,0.1) 0%, rgba(26,42,58,0.05) 100%)',
    },
    {
      id: 'energy',
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Energy',
      company: 'KAPI Energies Limited',
      description: 'Modern, reliable energy solutions across the petroleum value chain, driving progress through sustainable power.',
      stats: [
        { label: 'Traded (Q1 2026)', value: '4M+ Litres', icon: TrendingUp },
        { label: 'Products', value: 'PMS, AGO, LPG', icon: Zap },
        { label: 'Expanding to', value: 'Bulk Trading', icon: Users },
      ],
      highlights: [
        'Retail fuel trading since 2025',
        'Bulk trading permits secured',
        'Regional expansion strategy',
      ],
      color: '#1B194A',
      bgImage: 'linear-gradient(135deg, rgba(26,42,58,0.1) 0%, rgba(181,211,67,0.05) 100%)',
    },
    {
      id: 'tech',
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Tech & Innovation',
      company: 'KAPI Tech',
      description: 'Driving digital transformation and operational efficiency through cutting-edge technology solutions.',
      stats: [
        { label: 'Founded', value: '2026', icon: Calendar },
        { label: 'Focus', value: 'Digital Solutions', icon: Cpu },
        { label: 'Mission', value: 'Innovation', icon: TrendingUp },
      ],
      highlights: [
        'Process automation',
        'Data-driven tools',
        'Digital platforms',
      ],
      color: '#73BE44',
      bgImage: 'linear-gradient(135deg, rgba(181,211,67,0.1) 0%, rgba(26,42,58,0.05) 100%)',
    },
    {
      id: 'financial',
      icon: <Landmark className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Financial Services',
      company: 'AEL Limited',
      description: 'Microfinance and insurance solutions that empower communities and drive economic inclusion.',
      stats: [
        { label: 'Partnership', value: '2025', icon: Calendar },
        { label: 'Focus', value: 'Inclusion', icon: Users },
        { label: 'Impact', value: 'Communities', icon: TrendingUp },
      ],
      highlights: [
        'Microfinance services',
        'Insurance solutions',
        'Financial literacy',
      ],
      color: '#1B194A',
      bgImage: 'linear-gradient(135deg, rgba(26,42,58,0.1) 0%, rgba(181,211,67,0.05) 100%)',
    },
    {
      id: 'agri',
      icon: <Sprout className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Agribusiness',
      company: 'Infinity Star Partnership',
      description: 'Sustainable sisal cultivation and natural fibre production for a greener tomorrow.',
      stats: [
        { label: 'Partnership', value: '2023', icon: Calendar },
        { label: 'Focus', value: 'Sisal', icon: Sprout },
        { label: 'Impact', value: 'Sustainability', icon: TrendingUp },
      ],
      highlights: [
        'Sisal estates',
        'Natural fibre production',
        'Sustainable alternatives',
      ],
      color: '#73BE44',
      bgImage: 'linear-gradient(135deg, rgba(181,211,67,0.1) 0%, rgba(26,42,58,0.05) 100%)',
    },
  ];

  const activeData = sectors.find(s => s.id === activeSector);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
            <span>OUR PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B194A] mb-4 leading-tight">
            Building Across
            <span className="block text-[#73BE44]">Five Strategic Sectors</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto px-4">
            Deliberate investments in sectors with strong market relevance, 
            scalable potential, and lasting impact.
          </p>
          
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
            <div className="w-10 h-1 bg-[#73BE44]"></div>
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
          </div>
        </div>

        {/* Sector Navigation - Responsive */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 lg:mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveSector(sector.id)}
              className={`relative px-4 sm:px-6 py-2 sm:py-3 font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base overflow-hidden group ${
                activeSector === sector.id
                  ? 'text-[#F8FAFC]'
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              {/* Background with animation */}
              <span className={`absolute inset-0 transition-all duration-500 ${
                activeSector === sector.id
                  ? 'bg-[#1B194A]'
                  : 'bg-transparent group-hover:bg-[#73BE44]/10'
              }`}></span>
              
              {/* Active indicator line */}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[#73BE44] transition-all duration-300 ${
                activeSector === sector.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
              
              <span className="relative z-10">{sector.icon}</span>
              <span className="relative z-10">{sector.title}</span>
            </button>
          ))}
        </div>

        {/* Active Sector Display */}
        {activeData && (
          <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            
            {/* Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Title with Icon */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#73BE44] blur-lg opacity-20"></div>
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#1B194A] flex items-center justify-center">
                    <div className="text-[#73BE44]">
                      {activeData.icon}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1B194A]">{activeData.title}</h3>
                  <p className="text-sm sm:text-base text-[#475569]">{activeData.company}</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-[#73BE44] to-transparent"></div>
                <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                  {activeData.description}
                </p>
              </div>
              
              {/* Stats Grid - Glass Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {activeData.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className="relative bg-white/50 backdrop-blur-sm border border-white/50 p-3 sm:p-4 text-center group hover:shadow-lg transition-all duration-300"
                    >
                      <Icon size={16} className="text-[#73BE44] mx-auto mb-2" />
                      <div className="text-lg sm:text-xl font-black text-[#1B194A] group-hover:text-[#73BE44] transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#475569]">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Highlights */}
              <div className="bg-white/30 backdrop-blur-sm border border-white/50 p-6 sm:p-8">
                <h4 className="text-lg sm:text-xl font-bold text-[#1B194A] mb-4">Key Highlights</h4>
                <ul className="space-y-3">
                  {activeData.highlights.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <span className="w-5 h-5 bg-[#73BE44]/10 flex items-center justify-center group-hover:bg-[#73BE44] transition-colors">
                        <ChevronRight size={12} className="text-[#73BE44] group-hover:text-[#1B194A]" />
                      </span>
                      <span className="text-sm sm:text-base text-[#475569]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA Button */}
              <button className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#1B194A] text-[#F8FAFC] font-medium hover:bg-[#1B194A]/90 transition-all duration-300 overflow-hidden relative">
                <span className="absolute inset-0 bg-gradient-to-r from-[#73BE44] to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="relative z-10">Learn More About {activeData.title}</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            {/* Visual Element - Glass Card Display */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Animated Rings */}
                <div className="relative w-[350px] sm:w-[400px] h-[350px] sm:h-[400px]">
                  <div className="absolute inset-0 border border-[#1B194A]/10 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-12 border border-[#73BE44]/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                  <div className="absolute inset-24 border border-[#1B194A]/5 rounded-full"></div>
                  
                  {/* Central Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-[#73BE44] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white/80 backdrop-blur-sm border border-white/50 flex items-center justify-center shadow-2xl">
                        <div className="text-[#1B194A] transform group-hover:scale-110 transition-transform duration-500">
                          {activeData.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  {[0, 1, 2].map((i) => {
                    const angle = (i * 120) * (Math.PI / 180);
                    const radius = 140;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <div
                        key={i}
                        className="absolute group cursor-pointer"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          animation: `float-${i} 6s ease-in-out infinite`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      >
                        <div className="relative w-24 h-24 bg-white/70 backdrop-blur-sm border border-white/50 rounded-lg flex flex-col items-center justify-center p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110">
                          <div className="text-[#73BE44] font-black text-xl">{activeData.stats[i].value}</div>
                          <div className="text-[8px] text-[#475569] text-center mt-1">{activeData.stats[i].label}</div>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#73BE44] rounded-full"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        ${[0, 1, 2].map((i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(-50%, -50%) translateY(0); }
            50% { transform: translate(-50%, -50%) translateY(-10px); }
          }
        `).join('')}
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;