import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  Building2, 
  Layers, 
  TrendingUp, 
  ClipboardList, 
  LineChart,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Ruler,
  Trees,
  Sparkles,
  Shield,
  Clock,
  Award
} from 'lucide-react';

const KapiAfrica = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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
      setActiveProject((prev) => (prev + 1) % 2);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const focusAreas = [
    { icon: Home, title: 'Residential Development', description: 'Creating homes designed for comfort, quality, and lasting appeal.', color: '#73BE44' },
    { icon: Building2, title: 'Commercial Development', description: 'Delivering spaces that support business activity, convenience, and growth.', color: '#1B194A' },
    { icon: Layers, title: 'Mixed-Use Projects', description: 'Developing integrated spaces that combine utility, accessibility, and investment value.', color: '#73BE44' },
    { icon: TrendingUp, title: 'Property Investment', description: 'Building and holding assets with strong long-term potential.', color: '#1B194A' },
    { icon: ClipboardList, title: 'Project Planning & Development Oversight', description: 'Managing projects with discipline from concept to completion.', color: '#73BE44' },
    { icon: LineChart, title: 'Asset Positioning & Value Creation', description: 'Shaping developments to maximize relevance, performance, and enduring value.', color: '#1B194A' },
  ];

  const projects = [
    {
      name: "Mama's Villaz",
      tagline: "Premium Residential Development",
      description: "A premium residential development designed to offer privacy, comfort, and quality living in a well-planned gated environment. Mama's Villaz reflects our commitment to creating homes that combine lifestyle, functionality, and enduring appeal.",
      features: ['24/7 Security', 'Landscaped Gardens', 'Modern Amenities', 'Prime Location'],
      image: "/api/placeholder/600/400",
      color: "#73BE44"
    },
    {
      name: "KAPI Tower",
      tagline: "Modern Mixed-Use Development",
      description: "A modern mixed-use development that reflects our vision for future-focused urban spaces. KAPI Tower is designed to bring together business, convenience, and long-term investment value in a strategic location.",
      features: ['Commercial Spaces', 'Premium Offices', 'Retail Outlets', 'Strategic Location'],
      image: "/api/placeholder/600/400",
      color: "#1B194A"
    }
  ];

  const whyChoose = [
    { icon: Award, title: 'Quality First', description: 'Uncompromising standards in every development', color: '#73BE44' },
    { icon: Clock, title: 'Long-Term Value', description: 'Assets designed for enduring appreciation', color: '#1B194A' },
    { icon: Shield, title: 'Market Relevance', description: 'Responsive to modern market needs', color: '#73BE44' },
    { icon: Trees, title: 'Sustainable Design', description: 'Environmentally conscious development', color: '#1B194A' },
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 mx-auto px-6 pt-32 pb-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-6">
              <span className="w-2 h-2 bg-[#73BE44] rounded-full"></span>
              <span>REAL ESTATE ARM OF KAPI GROUP</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1B194A] mb-6 leading-[1.1]">
              KAPI{' '}
              <span className="text-[#73BE44]">Africa</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed mb-8">
              We build structures with enduring value and the potential to become timeless.
            </p>
            
            {/* Description */}
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              The foundation on which KAPI Group was built. We develop quality properties with a 
              focus on strong design, practical function, and long-term value.
            </p>
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
              KAPI Africa develops and invests in real estate opportunities that respond to 
              modern market needs and long-term demand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#73BE44]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-gradient-to-br from-[#1B194A]/5 to-transparent relative">
        <div className="container-custom mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-4">
              Featured <span className="text-[#73BE44]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto">
              Showcasing our commitment to excellence in real estate development
            </p>
          </div>

          <div className="relative">
            {projects.map((project, index) => {
              const isActive = activeProject === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isActive ? 'block' : 'hidden'
                  }`}
                >
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#73BE44]/20 to-[#1B194A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative bg-[#1B194A] rounded-2xl overflow-hidden aspect-video">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B194A]/50 to-transparent"></div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                        <span 
                          className="inline-block px-4 py-1 text-sm font-semibold rounded-full mb-4"
                          style={{ backgroundColor: `${project.color}15`, color: project.color }}
                        >
                          {project.tagline}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold text-[#1B194A] mb-4">
                          {project.name}
                        </h3>
                        <p className="text-[#475569] leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#73BE44]"></div>
                            <span className="text-sm text-[#475569]">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button className="group inline-flex items-center px-6 py-3 bg-[#1B194A] text-[#F8FAFC] font-medium hover:bg-[#1B194A]/90 transition-all duration-300 rounded-lg">
                        View Project Details
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Project Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`transition-all duration-300 ${
                    activeProject === index
                      ? 'w-12 h-2 bg-[#73BE44] rounded-full'
                      : 'w-2 h-2 bg-[#1B194A]/30 rounded-full hover:bg-[#1B194A]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why KAPI Africa Section */}
      <section className="py-24 relative">
        <div className="container-custom mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1B194A] mb-6">
                Why <span className="text-[#73BE44]">KAPI Africa</span>
              </h2>
              <div className="w-20 h-1 bg-[#73BE44] mb-6"></div>
              
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                We do more than develop property. We create assets with long-term purpose.
                Our focus is on quality, durability, and market relevance.
              </p>
              
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                Every project is approached with a clear goal: to deliver lasting value 
                for clients, investors, and communities.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyChoose.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <Icon size={20} style={{ color: item.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1B194A] mb-1">{item.title}</h4>
                        <p className="text-sm text-[#475569]">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#73BE44]/20 to-[#1B194A]/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-[#73BE44]/10 rounded-full mb-4">
                      <Award size={40} className="text-[#73BE44]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1B194A] mb-2">Our Commitment</h3>
                    <p className="text-[#475569]">Building lasting value for generations to come</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                      <span className="text-[#1B194A] font-medium">Projects Completed</span>
                      <span className="text-2xl font-bold text-[#73BE44]">5+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                      <span className="text-[#1B194A] font-medium">Years of Excellence</span>
                      <span className="text-2xl font-bold text-[#73BE44]">3+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg">
                      <span className="text-[#1B194A] font-medium">Client Satisfaction</span>
                      <span className="text-2xl font-bold text-[#73BE44]">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-24 bg-[#1B194A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
        
        <div className="container-custom mx-auto px-6 relative z-10">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connect With <span className="text-[#73BE44]">Us</span>
            </h2>
            <div className="w-20 h-1 bg-[#73BE44] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 mb-12">
              Follow KAPI Africa for project updates, property highlights, and company news.
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
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110">
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
                For inquiries about our properties and investment opportunities
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center mt-4 text-[#73BE44] hover:text-[#73BE44]/80 transition-colors group"
              >
                Contact our team
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block z-50">
        <div className="flex flex-col items-center space-y-4">
          {['Hero', 'What We Do', 'Projects', 'Why Us', 'Connect'].map((item, index) => (
            <button
              key={index}
              className="group relative"
              onClick={() => {
                const sections = ['hero', 'what-we-do', 'projects', 'why-us', 'connect'];
                const element = document.getElementById(sections[index]);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="w-2 h-2 bg-[#1B194A]/30 rounded-full group-hover:bg-[#73BE44] transition-all group-hover:scale-150"></div>
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-[#475569] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {item}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KapiAfrica;