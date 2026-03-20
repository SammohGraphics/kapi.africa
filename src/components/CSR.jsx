import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Heart, Users, TreePine, GraduationCap, Recycle, Sprout, Award, Globe, ArrowRight, Quote } from 'lucide-react';

const CSR = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInitiative, setHoveredInitiative] = useState(null);
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

  const initiatives = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Environmental Stewardship',
      description: 'Sustainable building materials, renewable energy transition, and climate-smart agriculture.',
      items: [
        'Carbon conscious development',
        'Clean power solutions',
        'Regenerative farming',
      ],
      color: '#73BE44',
      stats: [
        { value: '30%', label: 'Carbon Reduction' },
        { value: '100%', label: 'Renewable Goal' },
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Empowerment',
      description: 'Investing in people through education, inclusion, and local partnerships.',
      items: [
        'Financial literacy workshops',
        'Digital literacy programs',
        'Local-first sourcing',
      ],
      color: '#73BE44',
      stats: [
        { value: '500+', label: 'Workshop Attendees' },
        { value: '100%', label: 'Local Sourcing' },
      ],
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'Building a circular economy through responsible business practices and innovation.',
      items: [
        'Sisal as plastic alternative',
        'Waste reduction initiatives',
        'Green material innovation',
      ],
      color: '#73BE44',
      stats: [
        { value: '50%', label: 'Waste Reduction' },
        { value: '2025', label: 'Zero Waste Target' },
      ],
    },
  ];

  const impactStats = [
    { value: '100%', label: 'Local Sourcing', icon: Leaf },
    { value: '5+', label: 'Community Programs', icon: Users },
    { value: '1000+', label: 'Lives Impacted', icon: Heart },
    { value: '100%', label: 'Sustainable Focus', icon: Globe },
  ];

  return (
    <section 
      id="csr" 
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

      {/* Floating Leaves Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Sprout 
            key={i}
            className="absolute text-[#73BE44]/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${40 + Math.random() * 40}px`,
              height: `${40 + Math.random() * 40}px`,
              animation: `float-leaf ${10 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
            <span>THE KAPI HEARTBEAT</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1B194A] mb-4 leading-tight">
            Corporate Social
            <span className="block text-[#73BE44]">Responsibility</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto px-4">
            True corporate leadership is measured by the legacy we leave in the 
            communities we serve. Impact is the silent engine behind everything we do.
          </p>
          
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
            <div className="w-10 h-1 bg-[#73BE44]"></div>
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
          </div>
        </div>

        {/* Quote - Enhanced Glass Card */}
        <div className={`max-w-4xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative group">
            {/* Background decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#73BE44]/10 rounded-full blur-2xl group-hover:bg-[#73BE44]/20 transition-all duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#1B194A]/5 rounded-full blur-2xl"></div>
            
            {/* Quote Card */}
            <div className="relative bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden">
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Quote Mark */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#73BE44]/10 rounded-full flex items-center justify-center">
                <Quote size={40} className="text-[#73BE44]/30" />
              </div>
              
              <div className="relative z-10">
                <p className="text-xl sm:text-2xl italic text-[#1B194A] mb-6 leading-relaxed">
                  "Wealth is only meaningful when it creates wellbeing. At KAPI, our 'Soul' 
                  is found in the thriving farms, the powered homes, and the secure futures 
                  of the people we serve."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#73BE44] rounded-full flex items-center justify-center">
                    <Users size={24} className="text-[#1B194A]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1B194A]">The KAPI Leadership Team</p>
                    <p className="text-sm text-[#475569]">Driving Sustainable Impact</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#73BE44] via-transparent to-[#73BE44]"></div>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className={`grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {initiatives.map((initiative, index) => {
            const isHovered = hoveredInitiative === index;
            
            return (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredInitiative(index)}
                onMouseLeave={() => setHoveredInitiative(null)}
                style={{
                  boxShadow: isHovered ? '0 30px 50px -20px rgba(181, 211, 67, 0.4)' : 'none'
                }}
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#73BE44]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-[#73BE44] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'bg-[#73BE44]' : 'bg-[#73BE44]/10'
                  }`}>
                    <div className={isHovered ? 'text-[#1B194A]' : 'text-[#73BE44]'}>
                      {initiative.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className={`text-xl lg:text-2xl font-black mb-3 transition-colors duration-500 ${
                  isHovered ? 'text-[#73BE44]' : 'text-[#1B194A]'
                }`}>
                  {initiative.title}
                </h3>
                
                <p className="text-sm text-[#475569] mb-6 leading-relaxed">
                  {initiative.description}
                </p>
                
                {/* Items */}
                <ul className="space-y-3 mb-6">
                  {initiative.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm group/item">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isHovered ? 'bg-[#73BE44]/20' : 'bg-[#73BE44]/10'
                      }`}>
                        <Leaf size={10} className="text-[#73BE44]" />
                      </span>
                      <span className="text-[#475569] group-hover/item:text-[#1B194A] transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/50">
                  {initiative.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-black text-[#73BE44]">{stat.value}</div>
                      <div className="text-[10px] text-[#475569]">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Hover Indicator Line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-[#73BE44] transition-all duration-500 ${
                  isHovered ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Impact Stats - Glass Cards */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm border border-white/50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#73BE44]/10 rounded-full flex items-center justify-center group-hover:bg-[#73BE44] transition-colors duration-300">
                    <Icon size={20} className="text-[#73BE44] group-hover:text-[#1B194A] transition-colors" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-[#1B194A] group-hover:text-[#73BE44] transition-colors mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#475569]">{stat.label}</div>
                </div>
                
                {/* Decorative dot */}
                <span className="absolute top-2 right-2 w-1 h-1 bg-[#73BE44] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#1B194A] text-[#F8FAFC] font-medium hover:bg-[#1B194A]/90 transition-all duration-300 overflow-hidden relative">
            <span className="absolute inset-0 bg-gradient-to-r from-[#73BE44] to-transparent opacity-0 group-hover:opacity-20 transition-opacity"></span>
            <span className="relative z-10">Discover Our Impact</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-leaf {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.3;
          }
          80% {
            opacity: 0.3;
          }
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CSR;