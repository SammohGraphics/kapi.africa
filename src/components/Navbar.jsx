import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'CSR', href: '#csr' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F8FAFC]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-12 h-12 bg-[#1A2A3A] flex items-center justify-center">
                <span className="text-[#B5D343] text-3xl font-black">K</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#B5D343]"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#1A2A3A]">KAPI</span>
              <span className="text-xs tracking-widest text-[#475569]">AFRICA</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1A2A3A] hover:text-[#B5D343] transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B5D343] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="btn-primary">
              Connect With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1A2A3A]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#F8FAFC] absolute left-0 right-0 top-24 p-6 shadow-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#1A2A3A] hover:text-[#B5D343] transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="btn-primary w-full">
                Connect With Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;