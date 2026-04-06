import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu,
  Database,
  Settings,
  Lightbulb,
  TrendingUp,
  Cloud,
  Shield,
  ArrowRight,
  Code,
  RefreshCw,
  BarChart3,
  Zap
} from 'lucide-react';

const KapiTech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(0);
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

    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const focusAreas = [
    { icon: RefreshCw, title: 'Digital Transformation', description: 'Supporting businesses and institutions in adopting solutions that improve efficiency, service delivery, and performance.', color: '#73BE44' },
    { icon: Code, title: 'Technology Solutions', description: 'Developing and enabling practical tools and platforms that respond to real business needs.', color: '#1B194A' },
    { icon: Settings, title: 'Process Improvement & Automation', description: 'Using technology to streamline operations, reduce inefficiencies, and strengthen execution.', color: '#73BE44' },
    { icon: Lightbulb, title: 'Innovation Enablement', description: 'Exploring ideas, systems, and models that create value and improve competitiveness.', color: '#1B194A' },
    { icon: BarChart3, title: 'Business Technology Support', description: 'Helping organizations align technology with strategy, operations, and growth ambitions.', color: '#73BE44' },
    { icon: Cloud, title: 'Future-Ready Platforms', description: 'Building scalable digital capabilities that support long-term business resilience and adaptation.', color: '#1B194A' },
  ];

  const stats = [
    { value: '100%', label: 'Client Satisfaction', icon: Shield, description: 'Proven track record' },
    { value: '24/7', label: 'Support Available', icon: Cpu, description: 'Round-the-clock service' },
    { value: '10+', label: 'Solutions Deployed', icon: Database, description: 'Digital platforms' },
  ];

  const guidingPrinciples = [
    { icon: TrendingUp, title: 'Practical & Business-Driven', description: 'Solutions that deliver measurable value', color: '#73BE44' },
    { icon: Zap, title: 'Efficiency & Value Focus', description: 'Streamlined operations and ROI', color: '#1B194A' },
    { icon: Database, title: 'Market-Aligned Technology', description: 'Responding to real business needs', color: '#73BE44' },
    { icon: Cloud, title: 'Scalable & Future-Focused', description: 'Built for long-term growth', color: '#1B194A' },
    { icon: RefreshCw, title: 'Disciplined Innovation', description: 'Strategic execution of ideas', color: '#73BE44' },
  ];

  // SVG Social Icons
  const socialLinks = [
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      name: 'Instagram',
      url: '#',
      brandColor: '#E4405F',
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      name: 'Facebook',
      url: '#',
      brandColor: '#1877F2',
    },
    {
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.222 0 22.225 0z"/>
        </svg>
      ),
      name: 'LinkedIn',
      url: '#',
      brandColor: '#0077B5',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
          
          {/* Animated circuit lines */}
          <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M20,20 L40,20 L40,40 L60,40" stroke="#73BE44" strokeWidth="1" fill="none">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M80,80 L60,80 L60,60 L40,60" stroke="#73BE44" strokeWidth="1" fill="none">
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" begin="1s" />
                </path>
                <circle cx="20" cy="20" r="2" fill="#73BE44">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="80" r="2" fill="#73BE44">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
        
        {/* Digital Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating binary particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#73BE44]/20 font-mono text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${8 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-6 rounded-full">
              <div className="w-2 h-2 bg-[#73BE44] rounded-full animate-ping"></div>
              <span>TECHNOLOGY & INNOVATION ARM</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1B194A] mb-6 leading-[1.1]">
              KAPI{' '}
              <span className="text-[#73BE44] relative inline-block">
                Tech
                <svg className="absolute -bottom-2 left-0 w-full" height="3" viewBox="0 0 200 3">
                  <line x1="0" y1="1.5" x2="200" y2="1.5" stroke="#73BE44" strokeWidth="2" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
                  </line>
                </svg>
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
              We turn technology into practical business value.
            </p>
            
            {/* Description */}
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Focused on digital transformation, practical solutions, and future-ready growth. 
              We use technology to improve business performance, support innovation, and help 
              organizations adapt in a changing world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#1B194A]/10">
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
                    <div className="flex flex-col items-center space-y-2">
                      <Icon 
                        size={28} 
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
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#73BE44] rounded-full"></span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
              What We <span className="text-[#73BE44]">Do</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              KAPI Tech focuses on practical technology solutions that support transformation, 
              efficiency, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Digital pulse line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#73BE44] to-[#1B194A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${area.color}15` }}
                    >
                      <Icon size={28} style={{ color: area.color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#1B194A] mb-3">{area.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{area.description}</p>
                    
                    <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm" style={{ color: area.color }}>Learn more</span>
                      <ArrowRight size={16} style={{ color: area.color }} className="ml-1" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-24 bg-gradient-to-br from-[#1B194A] to-[#1B194A]/95 relative overflow-hidden">
        {/* Digital grid background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#73BE44" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated data streams */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-full h-full">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-[#73BE44] to-transparent"
                style={{
                  top: `${10 + i * 8}%`,
                  left: 0,
                  right: 0,
                  animation: `data-stream ${3 + i * 0.5}s linear infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-[#73BE44]">Focus</span>
              </h2>
              <div className="w-20 h-1 bg-[#73BE44] mb-6"></div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  KAPI Tech is built on the belief that technology should 
                  <span className="text-[#73BE44] font-semibold"> deliver real business value</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    'Solve problems',
                    'Improve execution',
                    'Create efficiency',
                    'Prepare for the future'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#73BE44] rounded-full"></div>
                      <span className="text-gray-300">It should {item.toLowerCase()}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg leading-relaxed pt-4">
                  Our ambition is to build a technology platform that helps organizations become 
                  <span className="text-[#73BE44] font-semibold"> more agile, competitive, and ready</span> 
                  for a changing digital world.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#73BE44]/20 to-transparent rounded-2xl blur-xl animate-pulse-slow"></div>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-[#73BE44]/20 rounded-full mb-4">
                      <Cpu size={40} className="text-[#73BE44]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Digital Transformation</h3>
                    <p className="text-gray-300">Powered by innovation</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="absolute inset-y-0 left-0 w-3/4 bg-[#73BE44] rounded-full animate-pulse-slow"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Innovation Readiness</span>
                      <span>75%</span>
                    </div>
                    
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mt-4">
                      <div className="absolute inset-y-0 left-0 w-4/5 bg-[#73BE44] rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Digital Adoption</span>
                      <span>80%</span>
                    </div>
                    
                    <div className="relative h-2 bg-white/10 rounded-full overflow-hidden mt-4">
                      <div className="absolute inset-y-0 left-0 w-2/3 bg-[#73BE44] rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Efficiency Gains</span>
                      <span>66%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why KAPI Tech Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
              Why <span className="text-[#73BE44]">KAPI Tech</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              We do not see technology as just a support function. It is a strategic driver of growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guidingPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className={`group text-center p-8 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#73BE44]/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: `${principle.color}15` }}
                    >
                      <Icon size={36} style={{ color: principle.color }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B194A] mb-3">{principle.title}</h3>
                  <p className="text-[#475569]">{principle.description}</p>
                </div>
              );
            })}
          </div>

          {/* Philosophy Statement */}
          <div className={`mt-16 p-8 bg-gradient-to-r from-[#73BE44]/5 to-transparent rounded-xl border-l-4 border-[#73BE44] transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-[#1B194A] leading-relaxed text-center">
              We believe the best technology is not the most complex. 
              <span className="font-semibold text-[#73BE44]"> It is the technology that works, adds value, and supports growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-24 bg-[#1B194A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Digital network animation */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <circle cx="20%" cy="30%" r="3" fill="#73BE44">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="80%" cy="50%" r="3" fill="#73BE44">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="50%" cy="80%" r="3" fill="#73BE44">
              <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" begin="1s" />
            </circle>
            <line x1="20%" y1="30%" x2="80%" y2="50%" stroke="#73BE44" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="#73BE44" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" begin="0.5s" />
            </line>
            <line x1="50%" y1="80%" x2="20%" y2="30%" stroke="#73BE44" strokeWidth="0.5" strokeDasharray="4 4">
              <animate attributeName="stroke-dashoffset" from="8" to="0" dur="2s" repeatCount="indefinite" begin="1s" />
            </line>
          </svg>
        </div>
        
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connect With <span className="text-[#73BE44]">Us</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 mb-12">
              Follow KAPI Tech for updates, ideas, and innovation highlights.
            </p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group relative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:shadow-lg">
                    <span className="text-white transition-colors duration-300 group-hover:text-[#1B194A]">
                      {social.icon}
                    </span>
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                Ready to transform your business with technology?
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center mt-4 text-[#73BE44] hover:text-[#73BE44]/80 transition-colors group"
              >
                Talk to our tech team
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes data-stream {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default KapiTech;