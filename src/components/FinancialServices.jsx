import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield,
  Building2,
  TrendingUp,
  Users,
  ArrowRight,
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