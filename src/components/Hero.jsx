import React from 'react';
import { ArrowRight, Building2, Zap, Sprout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("/pattern.svg")',
        backgroundSize: '100px 100px',
      }}></div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left Column */}
          <div>
            <div className="inline-block mb-6">
              <span className="bg-[#B5D343]/20 text-[#1A2A3A] px-4 py-2 text-sm font-semibold">
                EST. 2022 • TANZANIA
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-8">
              Building
              <span className="block gradient-text">Tomorrow,</span>
              <span className="block">Today</span>
            </h1>
            
            <p className="text-xl text-[#475569] mb-8 max-w-lg">
              A diversified Tanzanian business group building sustainable, 
              high-impact businesses across real estate, energy, technology, 
              financial services, and agribusiness.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary group">
                Explore Our Portfolio
                <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="btn-secondary">
                The KAPI Story
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#1A2A3A]/10">
              <div>
                <div className="text-3xl font-black text-[#B5D343]">10K+</div>
                <div className="text-sm text-[#475569]">SQM Developed</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#B5D343]">4M+</div>
                <div className="text-sm text-[#475569]">Litres Traded</div>
              </div>
              <div>
                <div className="text-3xl font-black text-[#B5D343]">5</div>
                <div className="text-sm text-[#475569]">Sectors</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Floating Elements */}
            <div className="relative h-[600px]">
              {/* Main Shape */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                <div className="relative w-full h-full">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 border-2 border-[#B5D343]/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 border-2 border-[#1A2A3A]/10 rounded-full"></div>
                  
                  {/* Icon Circles */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#B5D343] rounded-full flex items-center justify-center animate-float">
                    <Building2 size={40} className="text-[#1A2A3A]" />
                  </div>
                  
                  <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-24 bg-[#1A2A3A] rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                    <Zap size={40} className="text-[#B5D343]" />
                  </div>
                  
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#B5D343] rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                    <Sprout size={40} className="text-[#1A2A3A]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* K Logo Overlay */}
            <div className="absolute bottom-0 right-0 opacity-10">
              <span className="text-[300px] font-black text-[#1A2A3A]">K</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#1A2A3A] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#B5D343] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;