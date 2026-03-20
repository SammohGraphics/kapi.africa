import { ArrowRight, Menu, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoError, setLogoError] = useState(false);

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

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false);
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
        ? 'bg-[#F8FAFC]/98 backdrop-blur-xl shadow-[0_8px_32px_rgba(26,42,58,0.1)]' 
        : 'bg-transparent'
    }`}>
      {/* Top accent line with pattern inspiration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B194A] via-[#73BE44] to-[#1B194A]"></div>
      
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
              
              {/* Decorative elements inspired by the pattern */}
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#73BE44] transform rotate-12 group-hover:rotate-45 transition-transform duration-300"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#1B194A] opacity-50"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-[#1B194A] tracking-tight">KAPI</span>
                <Zap size={16} className="text-[#73BE44] ml-1" />
              </div>
              <span className="text-xs tracking-[0.3em] text-[#475569] font-medium">AFRICA</span>
              {/* Underline effect */}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#73BE44] to-transparent transition-all duration-500 mt-1"></div>
            </div>
          </a>

          {/* Desktop Menu with enhanced styling and active state */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative px-4 py-2 transition-all duration-300 font-medium group overflow-hidden ${
                  activeSection === link.id 
                    ? 'text-[#73BE44]' 
                    : 'text-[#1B194A] hover:text-[#73BE44]'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Animated background with pattern inspiration */}
                <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(181,211,67,0.1)_30%,rgba(181,211,67,0.1)_40%,transparent_40%,transparent_70%,rgba(181,211,67,0.1)_70%,rgba(181,211,67,0.1)_80%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {/* Active/Animated underline */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#73BE44] transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            
            {/* Enhanced CTA Button */}
            <button className="relative ml-4 px-6 py-3 bg-[#1B194A] text-[#F8FAFC] overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Pattern overlay on hover */}
              <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,#73BE44_30%,#73BE44_40%,transparent_40%,transparent_70%,#73BE44_70%,#73BE44_80%,transparent_80%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center space-x-2">
                <span>Connect With Us</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Animated corner accents */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#73BE44] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#73BE44] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button with enhanced animation */}
          <button
            className="md:hidden relative w-12 h-12 bg-[#1B194A] text-[#F8FAFC] flex items-center justify-center group overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="absolute inset-0 bg-[#73BE44] scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
            <span className="relative z-10">
              {isOpen ? <X size={24} className="transform rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
            </span>
          </button>
        </div>

        {/* Mobile Menu with pattern-inspired design and active state */}
        <div className={`md:hidden fixed inset-x-0 top-[73px] transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}>
          <div className="bg-[#F8FAFC] shadow-2xl border-t-2 border-[#73BE44]">
            {/* Pattern decoration */}
            <div className="h-2 bg-[linear-gradient(90deg,#1B194A_0%,#1B194A_20%,#73BE44_20%,#73BE44_40%,#F8FAFC_40%,#F8FAFC_60%,#73BE44_60%,#73BE44_80%,#1B194A_80%,#1B194A_100%)]"></div>
            
            <div className="p-6 space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`flex items-center justify-between group py-3 px-4 transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'bg-[#1B194A]/5 text-[#73BE44] border-l-4 border-[#73BE44]' 
                      : 'hover:bg-[#1B194A]/5 text-[#1B194A]'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={`font-medium group-hover:translate-x-2 transition-transform duration-300 ${
                    activeSection === link.id ? 'font-bold' : ''
                  }`}>
                    {link.name}
                  </span>
                  <span className={`w-6 h-6 border rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'border-[#73BE44] bg-[#73BE44] text-[#1B194A]' 
                      : 'border-[#1B194A]/20 group-hover:border-[#73BE44] group-hover:bg-[#73BE44] group-hover:text-[#1B194A]'
                  }`}>
                    <ArrowRight size={14} />
                  </span>
                </a>
              ))}
              
              <button className="w-full mt-6 px-6 py-4 bg-[#1B194A] text-[#F8FAFC] flex items-center justify-between group hover:bg-[#1B194A]/90 transition-all duration-300 relative overflow-hidden">
                <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(181,211,67,0.2)_30%,rgba(181,211,67,0.2)_40%,transparent_40%,transparent_70%,rgba(181,211,67,0.2)_70%,rgba(181,211,67,0.2)_80%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 font-medium">Connect With Us</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
            
            {/* Bottom pattern accent */}
            <div className="h-2 bg-[linear-gradient(90deg,#73BE44_0%,#73BE44_20%,#1B194A_20%,#1B194A_40%,#F8FAFC_40%,#F8FAFC_60%,#1B194A_60%,#1B194A_80%,#73BE44_80%,#73BE44_100%)]"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;