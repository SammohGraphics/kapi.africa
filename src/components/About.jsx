import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Heart, Users, Zap, Globe, Clock, TrendingUp, Leaf, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
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

  const timeline = [
    { year: '2022', event: 'Founded KAPI Africa Limited', icon: Clock },
    { year: '2023', event: 'Entered Agribusiness', icon: Leaf },
    { year: '2025', event: 'Launched KAPI Energies & Financial Services', icon: TrendingUp },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Knowledge',
      description: 'Informed decisions build strong businesses through expertise and continuous learning.',
      color: '#73BE44',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Agility',
      description: 'Adaptive, responsive, and ready to seize opportunities with speed and purpose.',
      color: '#73BE44',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Lasting success built through trust, collaboration, and shared ambition.',
      color: '#73BE44',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Impact',
      description: 'Creating meaningful and lasting value for people and the economy.',
      color: '#73BE44',
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#1B194A] overflow-hidden"
    >
      {/* Simple Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>
      
      {/* Single Gradient Orb */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-[#73BE44]/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#73BE44]/10 text-[#73BE44] text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#73BE44] rounded-full"></span>
            <span>OUR STORY</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] leading-tight">
            From Vision to
            <span className="block text-[#73BE44]">Impact</span>
          </h2>
        </div>
        
        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* Left Column - Story */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="space-y-4 text-[#F8FAFC]/70 leading-relaxed">
              <p>
                Founded in 2022 with KAPI Africa Limited, our journey began with a 
                clear focus on real estate and long-term value investments. From that 
                single foundation, we've grown into a diversified platform across five 
                strategic sectors.
              </p>
              <p>
                Between 2024 and 2025, we entered a new phase of expansion, launching 
                KAPI Energies, KAPI Tech, and forming strategic partnerships in 
                financial services and agribusiness.
              </p>
            </div>
            
            {/* Simple Timeline */}
            <div className="mt-8 space-y-4">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#73BE44]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#73BE44]" />
                    </div>
                    <div>
                      <span className="text-[#73BE44] font-black mr-3">{item.year}</span>
                      <span className="text-[#F8FAFC] text-sm">{item.event}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column - Vision & Mission Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            {/* Vision Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#73BE44]/10">
                  <Eye className="w-6 h-6 text-[#73BE44]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#F8FAFC] mb-2">Our Vision</h3>
                  <p className="text-[#F8FAFC]/60 text-sm leading-relaxed">
                    To build a leading and trusted African business group that creates 
                    lasting value through innovation, excellence, and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mission Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#73BE44]/10">
                  <Target className="w-6 h-6 text-[#73BE44]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#F8FAFC] mb-2">Our Mission</h3>
                  <p className="text-[#F8FAFC]/60 text-sm leading-relaxed">
                    To build sustainable and high-impact businesses across strategic sectors 
                    through innovation, disciplined execution, and responsible investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] mb-4">
              The <span className="text-[#73BE44]">KAPI</span> Values
            </h2>
            <p className="text-[#F8FAFC]/40 max-w-2xl mx-auto text-sm">
              Knowledge • Agility • Partnership • Impact
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const isHovered = hoveredValue === index;
              
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1"
                  onMouseEnter={() => setHoveredValue(index)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className={`mb-4 transition-colors duration-300 ${
                    isHovered ? 'text-[#73BE44]' : 'text-[#73BE44]'
                  }`}>
                    {value.icon}
                  </div>
                  
                  <h3 className={`text-lg font-black mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-[#73BE44]' : 'text-[#F8FAFC]'
                  }`}>
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-[#F8FAFC]/60">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;