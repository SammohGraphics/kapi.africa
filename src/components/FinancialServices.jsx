import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
  CheckCircle,
  Wallet,
  Briefcase,
  Heart
} from 'lucide-react';

const FinancialServices = () => {
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
    { icon: Shield, title: 'Insurance Solutions', description: 'Comprehensive coverage for individuals and businesses', color: '#73BE44' },
    { icon: Wallet, title: 'Financial Inclusion', description: 'Expanding access to essential financial services', color: '#1B194A' },
    { icon: Briefcase, title: 'Business Protection', description: 'Risk management for enterprises', color: '#73BE44' },
    { icon: Heart, title: 'Health Coverage', description: 'Medical insurance for families and groups', color: '#1B194A' },
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
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-6 rounded-full">
              <span className="w-2 h-2 bg-[#73BE44] rounded-full"></span>
              <span>FINANCIAL SERVICES & INSURANCE</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1B194A] mb-6 leading-[1.1]">
              Financial{' '}
              <span className="text-[#73BE44]">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
              Building resilience through essential financial solutions.
            </p>
            
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              KAPI's presence in financial services and insurance is anchored through its strategic 
              investment in AEL Limited, reflecting our commitment to sectors essential to economic 
              inclusion, business resilience, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* AEL Limited Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
                AEL <span className="text-[#73BE44]">Limited</span>
              </h2>
              <div className="w-20 h-1 bg-[#73BE44] mb-6"></div>
              
              <p className="text-lg text-[#475569] leading-relaxed mb-6">
                Through this platform, KAPI participates in solutions that support individuals, 
                businesses, and the wider economy, while contributing to access, protection, 
                and sustainable value creation.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Comprehensive insurance coverage',
                  'Risk management solutions',
                  'Financial protection for families',
                  'Business continuity planning'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#73BE44]" />
                    <span className="text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://www.ael.co.tz" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#1B194A] text-white font-medium hover:bg-[#1B194A]/90 transition-all duration-300 rounded-lg group"
              >
                Visit AEL Website
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#73BE44]/20 to-[#1B194A]/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-[#73BE44]/10 rounded-full mb-4">
                      <Shield size={48} className="text-[#73BE44]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B194A] mb-2">Trusted Partner</h3>
                    <p className="text-[#475569]">Your financial security partner</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                      <div className="text-2xl font-bold text-[#73BE44]">10+</div>
                      <div className="text-xs text-[#475569]">Years of Service</div>
                    </div>
                    <div className="text-center p-4 bg-[#F8FAFC] rounded-lg">
                      <div className="text-2xl font-bold text-[#73BE44]">50K+</div>
                      <div className="text-xs text-[#475569]">Clients Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              Learn More <span className="text-[#73BE44]">About AEL</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 mb-8">
              Visit the official AEL website for detailed information about their products and services.
            </p>
            
            <a 
              href="https://www.ael.co.tz" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#73BE44] text-[#1B194A] font-bold hover:bg-[#73BE44]/90 transition-all duration-300 rounded-lg text-lg group"
            >
              www.ael.co.tz
              <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;