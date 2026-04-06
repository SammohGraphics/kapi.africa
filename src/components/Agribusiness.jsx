import React, { useState, useEffect, useRef } from 'react';
import { 
  Sprout,
  Trees,
  Droplets,
  Leaf,
  TrendingUp,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Sun,
  Recycle
} from 'lucide-react';

const Agribusiness = () => {
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

  const focusAreas = [
    { icon: Trees, title: 'Sustainable Farming', description: 'Environmentally conscious agricultural practices', color: '#73BE44' },
    { icon: Droplets, title: 'Irrigation Solutions', description: 'Efficient water management systems', color: '#1B194A' },
    { icon: Leaf, title: 'Crop Production', description: 'High-yield farming techniques', color: '#73BE44' },
    { icon: Recycle, title: 'Value Addition', description: 'Processing and packaging solutions', color: '#1B194A' },
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: Facebook, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
          
          {/* Leaf pattern overlay */}
          <svg className="absolute bottom-0 left-0 w-full opacity-5" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="#73BE44" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
        
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-6 rounded-full">
              <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
              <span>AGRIBUSINESS ARM</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1B194A] mb-6 leading-[1.1]">
              KAPI{' '}
              <span className="text-[#73BE44]">Agribusiness</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
              Cultivating sustainable growth from the ground up.
            </p>
            
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              KAPI's presence in agribusiness is driven through its partnership with Infinity Star (T) Limited, 
              reflecting our commitment to investing in productive sectors that combine commercial potential 
              with long-term economic relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Infinity Star Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#73BE44]/20 to-[#1B194A]/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-[#73BE44]/10 rounded-full mb-4">
                      <Sprout size={48} className="text-[#73BE44]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B194A] mb-2">Infinity Star (T) Limited</h3>
                    <p className="text-[#475569]">Your agribusiness partner</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                      <div className="text-2xl font-bold text-[#73BE44]">5+</div>
                      <div className="text-xs text-[#475569]">Projects Active</div>
                    </div>
                    <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                      <div className="text-2xl font-bold text-[#73BE44]">100%</div>
                      <div className="text-xs text-[#475569]">Sustainable Practices</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
                Infinity <span className="text-[#73BE44]">Star</span>
              </h2>
              <div className="w-20 h-1 bg-[#73BE44] mb-6"></div>
              
              <p className="text-lg text-[#475569] leading-relaxed mb-6">
                Through this platform, KAPI participates in sustainable agribusiness opportunities 
                with a focus on value creation, responsible growth, and contribution to sectors 
                that are important to both industry and the wider economy.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Sustainable farming practices',
                  'Value-added processing',
                  'Market access solutions',
                  'Community engagement'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#73BE44]" />
                    <span className="text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://www.infinitystar.co.tz" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#1B194A] text-white font-medium hover:bg-[#1B194A]/90 transition-all duration-300 rounded-lg group"
              >
                Visit Infinity Star Website
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-gradient-to-br from-[#73BE44]/5 to-transparent">
        <div className="container-custom mx-auto px-6">
          <div className={`text-center mb-16 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
              Our <span className="text-[#73BE44]">Focus</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Committed to sustainable agriculture and value creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${area.color}15` }}
                  >
                    <Icon size={32} style={{ color: area.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1B194A] mb-2">{area.title}</h3>
                  <p className="text-sm text-[#475569]">{area.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 bg-[#1B194A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className={`text-center max-w-3xl mx-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Learn More <span className="text-[#73BE44]">About Infinity Star</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Visit the official Infinity Star website to learn more about their agribusiness solutions.
            </p>
            
            <a 
              href="https://www.infinitystar.co.tz" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#73BE44] text-[#1B194A] font-bold hover:bg-[#73BE44]/90 transition-all duration-300 rounded-lg text-lg group"
            >
              www.infinitystar.co.tz
              <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agribusiness;