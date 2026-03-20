import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Building2, Zap, Sprout, Droplets, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [activeStat, setActiveStat] = useState(0);
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3);
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);

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

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: '10K+', label: 'SQM Developed', icon: Building2, description: 'Premium real estate' },
    { value: '4M+', label: 'Litres Traded', icon: Droplets, description: 'Petroleum products' },
    { value: '5', label: 'Sectors', icon: TrendingUp, description: 'Diversified portfolio' },
  ];

  const glassCards = [
    { 
      icon: Building2, 
      title: 'KAPI Real Estate', 
      value: '10K+ SQM', 
      trend: '+25%', 
      color: '#73BE44',
      description: 'Premium commercial & residential properties',
      progress: 75
    },
    { 
      icon: Zap, 
      title: 'KAPI Energy', 
      value: '4M Litres', 
      trend: '+40%', 
      color: '#1B194A',
      description: 'Petroleum trading & distribution',
      progress: 85
    },
    { 
      icon: Sprout, 
      title: 'KAPI Agribusiness', 
      value: '5 Projects', 
      trend: '+15%', 
      color: '#73BE44',
      description: 'Sustainable farming & processing',
      progress: 60
    },
  ];

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#F8FAFC] overflow-hidden"
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>
      
      {/* Single Gradient Orb */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-24">
          
          {/* Left Column */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Simple Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider">
              <span className="w-2 h-2 bg-[#73BE44] rounded-full"></span>
              <span>EST. 2022 — TANZANIA</span>
            </div>

            {/* Clean Typography */}
            <div className="space-y-2">
              <h1 className="overflow-hidden">
                <span className="block text-6xl lg:text-7xl font-light text-[#1B194A] leading-[1.1] animate-slide-up">
                  Building
                </span>
              </h1>
              <h1 className="overflow-hidden">
                <span className="block text-7xl lg:text-8xl font-black text-[#1B194A] leading-[1.1] animate-slide-up animation-delay-150">
                  Tomorrow,
                </span>
              </h1>
              <h1 className="overflow-hidden">
                <span className="block text-7xl lg:text-8xl font-black text-[#73BE44] leading-[1.1] animate-slide-up animation-delay-300">
                  Today.
                </span>
              </h1>
            </div>

            {/* Simple Description */}
            <div className="max-w-lg">
              <p className="text-lg text-[#475569] leading-relaxed">
                A diversified Tanzanian business group building sustainable, 
                high-impact businesses across real estate, energy, technology, 
                and agribusiness.
              </p>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="group px-8 py-4 bg-[#1B194A] text-[#F8FAFC] font-medium hover:bg-[#1B194A]/90 transition-all duration-300 flex items-center rounded-none">
                Explore Portfolio
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group px-8 py-4 text-[#1B194A] font-medium relative">
                The KAPI Story
                <span className="absolute bottom-3 left-8 right-8 h-px bg-[#1B194A]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </button>
            </div>

            {/* Simple Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = activeStat === index;
                
                return (
                  <div 
                    key={index} 
                    className={`relative transition-all duration-500 ${
                      isActive ? 'transform -translate-y-1' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon 
                        size={24} 
                        className={isActive ? 'text-[#73BE44]' : 'text-[#1B194A]/40'} 
                      />
                      <div>
                        <div className={`text-2xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-[#1B194A]' : 'text-[#1B194A]/60'
                        }`}>{stat.value}</div>
                        <div className="text-xs text-[#475569]">{stat.label}</div>
                      </div>
                    </div>
                    {isActive && (
                      <span className="absolute -bottom-2 left-9 w-6 h-0.5 bg-[#73BE44]"></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Three Glass Cards in Orbit */}
          <div className={`relative h-[600px] hidden lg:block transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Orbital Rings */}
              <div className="relative w-[500px] h-[500px]">
                {/* Subtle orbital path */}
                <div className="absolute inset-0 border border-[#1B194A]/10 rounded-full"></div>
                <div className="absolute inset-16 border border-[#73BE44]/10 rounded-full"></div>
                
                {/* Central K */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 bg-[#1B194A] flex items-center justify-center">
                      <span className="text-[#73BE44] text-5xl font-black">K</span>
                    </div>
                    {/* Small decorative dots */}
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#73BE44]"></span>
                    <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#1B194A]"></span>
                  </div>
                </div>

                {/* Three Orbiting Glass Cards */}
                {glassCards.map((card, index) => {
                  const Icon = card.icon;
                  const angle = (index * 120) * (Math.PI / 180); // 120 degrees apart
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const isActive = activeCard === index;

                  return (
                    <div
                      key={index}
                      className={`absolute transition-all duration-700 ${
                        isActive ? 'z-20 scale-105' : 'z-10 scale-100'
                      }`}
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animation: `gentle-float 4s ease-in-out infinite`,
                        animationDelay: `${index * 0.3}s`,
                      }}
                      onMouseEnter={() => setActiveCard(index)}
                    >
                      {/* Glass Card */}
                      <div className={`relative w-56 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-500 ${
                        isActive ? 'shadow-2xl' : 'shadow-lg'
                      }`}
                      style={{
                        background: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                      }}>
                        {/* Subtle Shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Card Content */}
                        <div className="relative p-5">
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2.5 rounded-lg" style={{ background: `${card.color}15` }}>
                              <Icon size={22} style={{ color: card.color }} />
                            </div>
                            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/50" style={{ color: card.color }}>
                              {card.trend}
                            </span>
                          </div>
                          
                          <h3 className="text-base font-bold text-[#1B194A] mb-1">{card.title}</h3>
                          <p className="text-2xl font-black mb-3" style={{ color: card.color }}>{card.value}</p>
                          
                          {/* Progress Bar */}
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span className="text-[#475569]">Progress</span>
                              <span className="font-medium text-[#1B194A]">{card.progress}%</span>
                            </div>
                            <div className="h-1 bg-white/50 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-700"
                                style={{ 
                                  width: `${card.progress}%`,
                                  background: card.color
                                }}
                              ></div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-[#475569] mt-3 line-clamp-2">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Subtle Glow on Active */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 blur-xl -z-10 opacity-30 transition-opacity"
                          style={{ background: card.color }}
                        ></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-[#1B194A]/20 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-[#73BE44] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gentle-float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;