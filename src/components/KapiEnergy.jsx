import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame,
  Truck,
  Droplets,
  Zap,
  Handshake,
  TrendingUp,
  Globe,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  BarChart3,
  Fuel,
  Factory,
  Home
} from 'lucide-react';

const KapiEnergy = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    { icon: Fuel, title: 'Petroleum Trading', description: 'Supplying fuel products that support transport, business operations, and industrial activity.', color: '#73BE44' },
    { icon: Truck, title: 'Bulk Supply', description: 'Large-scale participation in fuel sourcing and distribution.', color: '#1B194A' },
    { icon: Droplets, title: 'Lubricants Supply', description: 'Delivering quality lubricant solutions for automotive, industrial, and commercial use.', color: '#73BE44' },
    { icon: Flame, title: 'LPG Trading & Supply', description: 'Providing reliable LPG solutions for domestic, commercial, and business customers.', color: '#1B194A' },
    { icon: Handshake, title: 'Commercial Energy Partnerships', description: 'Developing strategic relationships that strengthen market access, supply reliability, and growth.', color: '#73BE44' },
    { icon: BarChart3, title: 'Energy Platform Development', description: 'Building the systems, capabilities, and structure required for sustainable expansion.', color: '#1B194A' },
    { icon: Globe, title: 'Market Expansion', description: 'Positioning the business for growth in sectors where energy remains essential to economic activity.', color: '#73BE44' },
  ];

  const stats = [
    { value: '4M+', label: 'Litres Traded', icon: Droplets, description: 'Petroleum products' },
    { value: '24/7', label: 'Supply Reliability', icon: Clock, description: 'Round-the-clock service' },
    { value: '100%', label: 'Quality Assurance', icon: Shield, description: 'Premium standards' },
  ];

  const values = [
    { icon: Shield, title: 'Reliability', description: 'Consistency in supply and execution', color: '#73BE44' },
    { icon: TrendingUp, title: 'Commercial Discipline', description: 'Strong business fundamentals', color: '#1B194A' },
    { icon: Clock, title: 'Long-Term Relevance', description: 'Sustainable market positioning', color: '#73BE44' },
    { icon: Handshake, title: 'Strategic Partnerships', description: 'Collaborative growth approach', color: '#1B194A' },
    { icon: BarChart3, title: 'Scalable Model', description: 'Practical business structure', color: '#73BE44' },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: Facebook, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Animated Energy Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
          
          {/* Animated energy waves */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 120">
              <path d="M0,64 C240,96 480,32 720,32 C960,32 1200,96 1440,64 L1440,120 L0,120 Z" fill="#73BE44" opacity="0.05">
                <animate attributeName="d" dur="10s" repeatCount="indefinite"
                  values="M0,64 C240,96 480,32 720,32 C960,32 1200,96 1440,64 L1440,120 L0,120 Z;
                          M0,32 C240,64 480,96 720,96 C960,96 1200,64 1440,32 L1440,120 L0,120 Z;
                          M0,64 C240,96 480,32 720,32 C960,32 1200,96 1440,64 L1440,120 L0,120 Z"/>
              </path>
            </svg>
          </div>
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#73BE44]/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-6 rounded-full">
              <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
              <span>ENERGY ARM OF KAPI GROUP</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1B194A] mb-6 leading-[1.1]">
              KAPI{' '}
              <span className="text-[#73BE44] relative inline-block">
                Energies
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0,2 L200,2" stroke="#73BE44" strokeWidth="3" strokeDasharray="6 6">
                    <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
                  </path>
                </svg>
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
              We power movement, industry, and growth through reliable energy solutions.
            </p>
            
            {/* Description */}
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Building a reliable and growth-oriented business in one of the economy's most essential sectors. 
              Through trading, supply, and strategic expansion, we support movement, industry, and long-term value.
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
              KAPI Energies participates in the energy sector through trading, supply, 
              and growth opportunities that respond to market demand and long-term economic needs.
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
                  {/* Animated energy line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#73BE44] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${area.color}15` }}
                    >
                      <Icon size={28} style={{ color: area.color }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#1B194A] mb-3">{area.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{area.description}</p>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={20} style={{ color: area.color }} className="inline" />
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
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #73BE44 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}></div>
        
        {/* Animated energy rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 border border-[#73BE44]/10 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-8 border border-[#73BE44]/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>
            <div className="absolute inset-16 border border-[#73BE44]/5 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
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
                  KAPI Energies is built around the understanding that <span className="text-[#73BE44] font-semibold">energy is central to growth</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    'It powers transport',
                    'It supports industry',
                    'It enables trade',
                    'It keeps economies moving'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#73BE44] rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-lg leading-relaxed pt-4">
                  Our ambition is to build a trusted energy business that combines 
                  <span className="text-[#73BE44] font-semibold"> commercial discipline</span> with 
                  <span className="text-[#73BE44] font-semibold"> operational reliability</span> and 
                  <span className="text-[#73BE44] font-semibold"> long-term relevance</span>.
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
                      <Zap size={40} className="text-[#73BE44]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Energy for Growth</h3>
                    <p className="text-gray-300">Powering Tanzania's economic future</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300 font-medium">Supply Capacity</span>
                      <span className="text-2xl font-bold text-[#73BE44]">4M+ Litres</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300 font-medium">Operational Coverage</span>
                      <span className="text-2xl font-bold text-[#73BE44]">Nationwide</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-gray-300 font-medium">Partner Network</span>
                      <span className="text-2xl font-bold text-[#73BE44]">Growing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why KAPI Energies Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
              Why <span className="text-[#73BE44]">KAPI Energies</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Guided by a clear business philosophy that drives sustainable success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon size={36} style={{ color: value.color }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B194A] mb-3">{value.title}</h3>
                  <p className="text-[#475569]">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Philosophy Statement */}
          <div className={`mt-16 p-8 bg-gradient-to-r from-[#73BE44]/5 to-transparent rounded-xl border-l-4 border-[#73BE44] transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-[#1B194A] leading-relaxed text-center">
              We believe sustainable success in the energy sector comes from 
              <span className="font-semibold text-[#73BE44]"> consistency, trust, </span> 
              and the ability to 
              <span className="font-semibold text-[#73BE44]"> execute well </span> 
              in a dynamic market.
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
        
        {/* Animated energy bolts */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
              <path d="M50,20 L30,55 L45,55 L40,80 L70,45 L55,45 L60,20 Z" fill="#73BE44">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-32 h-32 transform rotate-180">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
              <path d="M50,20 L30,55 L45,55 L40,80 L70,45 L55,45 L60,20 Z" fill="#73BE44">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
              </path>
            </svg>
          </div>
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
              Follow KAPI Energies for updates, announcements, and business highlights.
            </p>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="group relative"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110 group-hover:shadow-lg">
                      <Icon 
                        size={28} 
                        className="text-white transition-colors duration-300 group-hover:text-[#1B194A]"
                      />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm">
                For inquiries about our energy solutions and partnership opportunities
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center mt-4 text-[#73BE44] hover:text-[#73BE44]/80 transition-colors group"
              >
                Contact our energy team
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      {/* <style jsx>{`
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-gentle-float {
          animation: gentle-float 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default KapiEnergy;