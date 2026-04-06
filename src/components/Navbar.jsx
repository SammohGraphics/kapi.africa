import { 
  ArrowRight, 
  Menu, 
  X, 
  Zap, 
  ChevronDown, 
  Building2,
  Cpu,
  Shield,
  Sprout
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/MainLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoError, setLogoError] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on a group company page
  const isGroupPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only update active section if we're on the homepage
      if (!isGroupPage) {
        const sections = ['home', 'about', 'portfolio', 'csr', 'contact'];
        
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
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isGroupPage]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', path: '/' },
    { name: 'About', href: '#about', id: 'about', path: '/' },
    { name: 'Portfolio', href: '#portfolio', id: 'portfolio', path: '/' },
    { name: 'CSR', href: '#csr', id: 'csr', path: '/' },
    { name: 'Contact', href: '#contact', id: 'contact', path: '/' },
  ];

  const services = [
    { name: 'KAPI Africa', href: '/kapi-africa', id: 'kapi-africa', description: 'Premium Real Estate', icon: Building2 },
    { name: 'KAPI Energies', href: '/kapi-energy', id: 'kapi-energy', description: 'Petroleum Trading & Supply', icon: Zap },
    { name: 'KAPI Tech', href: '/kapi-tech', id: 'kapi-tech', description: 'Digital Transformation', icon: Cpu },
    { name: 'Financial Services', href: '/financial', id: 'financial', description: 'Insurance & AEL Limited', icon: Shield },
    { name: 'Agribusiness', href: '/agribusiness', id: 'agribusiness', description: 'Sustainable Farming', icon: Sprout },
  ];

  const handleNavClick = (e, id, path) => {
    e.preventDefault();
    
    if (path === '/' && location.pathname !== '/') {
      // Navigate to homepage first
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(id);
        }
      }, 100);
    } else if (location.pathname === '/') {
      // Already on homepage, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
    
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleServiceClick = (e, service) => {
    e.preventDefault();
    navigate(service.href);
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection('home');
      }
    }
    setIsOpen(false);
  };

  // Determine if a nav link is active
  const isNavActive = (link) => {
    if (location.pathname !== '/') return false;
    return activeSection === link.id;
  };

  // Determine if a service is active
  const isServiceActive = (serviceHref) => {
    return location.pathname === serviceHref;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#F8FAFC]/98 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      
      <div className="container-custom mx-auto px-6">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <a 
            href="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              {!logoError ? (
                <img 
                  src={logo}
                  alt="KAPI Logo"
                  className="h-14 w-auto object-contain relative z-10"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-14 w-14 bg-[#1B194A] flex items-center justify-center relative z-10">
                  <span className="text-[#73BE44] text-3xl font-black">K</span>
                </div>
              )}
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home */}
            <a
              href="/"
              onClick={handleHomeClick}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                location.pathname === '/' && activeSection === 'home' 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Home
              {location.pathname === '/' && activeSection === 'home' && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* About */}
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about', '/')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isNavActive({ id: 'about' }) 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              About
              {isNavActive({ id: 'about' }) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1 group ${
                  servicesOpen || isGroupPage ? 'text-[#73BE44]' : 'text-[#1B194A] hover:text-[#73BE44]'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                
                <span className={`absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#73BE44] rounded-full transition-opacity duration-300 ${
                  servicesOpen || isGroupPage ? 'opacity-100' : 'opacity-0'
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
                  servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="h-1 bg-gradient-to-r from-[#1B194A] via-[#73BE44] to-[#1B194A]"></div>
                
                <div className="py-2">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={index}
                        href={service.href}
                        onClick={(e) => handleServiceClick(e, service)}
                        className={`flex items-center justify-between px-4 py-3 text-sm transition-all duration-300 group ${
                          isServiceActive(service.href)
                            ? 'bg-[#73BE44]/10 text-[#73BE44]'
                            : 'text-[#1B194A] hover:bg-[#73BE44]/5 hover:text-[#73BE44]'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon size={16} className={isServiceActive(service.href) ? 'text-[#73BE44]' : 'text-[#94A3B8]'} />
                          <div className="flex flex-col">
                            <span className="font-medium">{service.name}</span>
                            <span className="text-xs text-[#94A3B8]">{service.description}</span>
                          </div>
                        </div>
                        <ArrowRight size={12} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${
                          isServiceActive(service.href) ? 'opacity-100 translate-x-0' : ''
                        }`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <a
              href="/#portfolio"
              onClick={(e) => handleNavClick(e, 'portfolio', '/')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isNavActive({ id: 'portfolio' }) 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Portfolio
              {isNavActive({ id: 'portfolio' }) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* CSR */}
            <a
              href="/#csr"
              onClick={(e) => handleNavClick(e, 'csr', '/')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isNavActive({ id: 'csr' }) 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              CSR
              {isNavActive({ id: 'csr' }) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>

            {/* Contact */}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact', '/')}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                isNavActive({ id: 'contact' }) 
                  ? 'text-[#73BE44]' 
                  : 'text-[#1B194A] hover:text-[#73BE44]'
              }`}
            >
              Contact
              {isNavActive({ id: 'contact' }) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#73BE44]"></span>
              )}
            </a>
            
            {/* CTA Button */}
            <button 
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="ml-4 px-5 py-2 bg-[#1B194A] text-[#F8FAFC] text-sm font-medium hover:bg-[#1B194A]/90 transition-all duration-300 rounded-none"
            >
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
          <div className="bg-white shadow-xl mx-4 rounded-lg overflow-hidden max-h-[80vh] overflow-y-auto">
            <div className="py-2">
              {/* Home */}
              <a
                href="/"
                onClick={handleHomeClick}
                className={`block px-6 py-3 text-sm transition-colors ${
                  location.pathname === '/' && activeSection === 'home' 
                    ? 'text-[#73BE44] bg-[#73BE44]/5' 
                    : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Home
              </a>

              {/* About */}
              <a
                href="/#about"
                onClick={(e) => handleNavClick(e, 'about', '/')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'about' && location.pathname === '/'
                    ? 'text-[#73BE44] bg-[#73BE44]/5' 
                    : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                About
              </a>

              {/* Mobile Services */}
              <div className="px-6 py-3">
                <div className="text-sm font-medium text-[#1B194A] mb-3 pb-2 border-b border-gray-100">
                  Our Services
                </div>
                <div className="space-y-3">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={index}
                        href={service.href}
                        onClick={(e) => handleServiceClick(e, service)}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
                          isServiceActive(service.href)
                            ? 'bg-[#73BE44]/10 text-[#73BE44]'
                            : 'text-[#64748B] hover:bg-[#73BE44]/5 hover:text-[#73BE44]'
                        }`}
                      >
                        <Icon size={16} />
                        <div>
                          <div className="font-medium text-sm">{service.name}</div>
                          <div className="text-xs text-[#94A3B8]">{service.description}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Portfolio */}
              <a
                href="/#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio', '/')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'portfolio' && location.pathname === '/'
                    ? 'text-[#73BE44] bg-[#73BE44]/5' 
                    : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Portfolio
              </a>

              {/* CSR */}
              <a
                href="/#csr"
                onClick={(e) => handleNavClick(e, 'csr', '/')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'csr' && location.pathname === '/'
                    ? 'text-[#73BE44] bg-[#73BE44]/5' 
                    : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                CSR
              </a>

              {/* Contact */}
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, 'contact', '/')}
                className={`block px-6 py-3 text-sm transition-colors ${
                  activeSection === 'contact' && location.pathname === '/'
                    ? 'text-[#73BE44] bg-[#73BE44]/5' 
                    : 'text-[#1B194A] hover:bg-[#73BE44]/5'
                }`}
              >
                Contact
              </a>

              {/* Mobile CTA */}
              <div className="px-6 py-4 border-t border-gray-100 mt-2">
                <button 
                  onClick={() => {
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => {
                        const contactElement = document.getElementById('contact');
                        if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else {
                      const contactElement = document.getElementById('contact');
                      if (contactElement) contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  className="w-full px-5 py-3 bg-[#1B194A] text-[#F8FAFC] text-sm font-medium hover:bg-[#1B194A]/90 transition-colors rounded-none"
                >
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