import { ArrowRight, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoError, setLogoError] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { name: 'CSR', href: '#csr', id: 'csr' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const services = [
    { name: 'Real Estate', href: '#portfolio', id: 'realestate', description: 'Premium properties' },
    { name: 'Energy', href: '#portfolio', id: 'energy', description: 'Petroleum solutions' },
    { name: 'Tech & Innovation', href: '#portfolio', id: 'tech', description: 'Digital transformation' },
    { name: 'Financial Services', href: '#portfolio', id: 'financial', description: 'Economic inclusion' },
    { name: 'Agribusiness', href: '#portfolio', id: 'agri', description: 'Sustainable farming' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
      setServicesOpen(false);
    }
  };

  const handleServiceClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Also set the active sector in Portfolio component
      const event = new CustomEvent('setActiveSector', { detail: id });
      window.dispatchEvent(event);
      setIsOpen(false);
      setServicesOpen(false);
    }
  };

  // Multiple logo paths to try
  const logoPaths = [
    '/kapi.africa/src/assets/KAPILogo-05.png',
    '/src/assets/KAPILogo-05.png',
    './src/assets/KAPILogo-05.png',
    'kapi.africa/src/assets/KAPILogo-05.png',
    'src/assets/KAPILogo-05.png',
    '/assets/KAPILogo-05.png',
    'assets/KAPILogo-05.png'
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#F8FAFC]/98 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Removed top gradient border - cleaner look */}
      
      <div className="container-custom">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo with actual image and fallback */}
          <a 
            href="#home" 
            className="flex items-center space-x-3 group"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="relative">
              {!logoError ? (
                <img 
                  src={logoPaths[0]}
                  alt="KAPI Logo"
                  className="h-14 w-auto object-contain relative z-10"
                  onError={() => setLogoError(true)}
                />
              ) : (
                // Fallback logo if image fails to load
                <div className="h-14 w-14 bg-[#1B194A] flex items-center justify-center relative z-10">
                  <span className="text-[#73BE44] text-3xl font-black">K</span>
                </div>
              )}
              
              {/* Elegant single decorative element */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#73BE44] opacity-50"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-[#1B194A] tracking-tight">KAPI</span>
                <Zap size={14} className="text-[#73BE44] ml-1" />
              </div>
              <span className="text-xs tracking-[0.2em] text-[#64748B] font-light">AFRICA</span>
            </div>
          </a>

          {/* Desktop Menu - Reordered with Services after About */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === 'home' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* About */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === 'about' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              About
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* Services Dropdown - Now after About */}
            <div className="relative">
              <button
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group ${
                  servicesOpen ? 'text-[#73BE44]' : 'text-[#1B194A] hover:text-[#73BE44]'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                
                {/* Elegant dot indicator */}
                <span className={`absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#73BE44] rounded-full transition-opacity duration-300 ${
                  servicesOpen ? 'opacity-100' : 'opacity-0'
                }`}></span>
              </button>
              
              {/* Elegant Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Simple accent line */}
                <div className="h-1 bg-gradient-to-r from-[#1B194A] via-[#73BE44] to-[#1B194A]"></div>
                
                <div className="py-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={(e) => handleServiceClick(e, service.id)}
                      className="flex items-center justify-between px-4 py-3 text-sm text-[#1B194A] hover:bg-[#73BE44]/5 hover:text-[#73BE44] transition-all duration-300 group"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{service.name}</span>
                        <span className="text-xs text-[#94A3B8]">{service.description}</span>
                      </div>
                      <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === 'portfolio' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Portfolio
              {activeSection === 'portfolio' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* CSR */}
            <a
              href="#csr"
              onClick={(e) => handleNavClick(e, 'csr')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === 'csr' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              CSR
              {activeSection === 'csr' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeSection === 'contact' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>
            
            {/* Elegant CTA Button */}
            <button className="ml-4 px-5 py-2 bg-[#1B194A] text-[#F8FAFC] text-sm font-medium hover:bg-[#1B194A]/90 transition-all duration-300 rounded-none">
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 text-[#1B194A] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[73px] transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}>
          <div className="bg-white shadow-xl mx-4 rounded-lg overflow-hidden">
            <div className="py-2">
              {/* Home */}
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'home' ? 'text-[#73BE44] bg-[#73BE44]/5' : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'about' ? 'text-[#73BE44] bg-[#73BE44]/5' : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                About
              </a>

              {/* Mobile Services */}
              <div className="px-6 py-3">
                <div className="text-sm font-medium text-[#1B194A] mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={service.href}
                      onClick={(e) => handleServiceClick(e, service.id)}
                      className="block text-sm text-[#64748B] hover:text-[#73BE44] transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'portfolio' ? 'text-[#73BE44] bg-[#73BE44]/5' : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Portfolio
              </a>

              {/* CSR */}
              <a
                href="#csr"
                onClick={(e) => handleNavClick(e, 'csr')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'csr' ? 'text-[#73BE44] bg-[#73BE44]/5' : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                CSR
              </a>

              {/* Contact */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'contact' ? 'text-[#73BE44] bg-[#73BE44]/5' : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Contact
              </a>

              {/* Mobile CTA */}
              <div className="px-6 py-4">
                <button className="w-full px-5 py-3 bg-[#1B194A] text-[#F8FAFC] text-sm font-medium hover:bg-[#1B194A]/90 transition-colors">
                  Connect With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;