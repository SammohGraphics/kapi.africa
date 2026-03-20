import { ArrowUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'CSR', href: '#csr' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: 'Dar es Salaam, Tanzania' },
    { icon: <Phone size={16} />, text: '+255 123 456 789' },
    { icon: <Mail size={16} />, text: 'info@kapi.africa' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-[#1B194A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#73BE44] via-[#1B194A] to-[#73BE44]"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container-custom px-4 sm:px-6 lg:px-8 mx-auto pt-16 pb-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-[#73BE44] flex items-center justify-center">
                  <span className="text-[#1B194A] text-xl font-black">K</span>
                </div>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#73BE44]"></span>
              </div>
              <div>
                <span className="text-xl font-black text-[#F8FAFC]">KAPI</span>
                <span className="text-xs tracking-widest text-[#F8FAFC]/40 block">AFRICA</span>
              </div>
            </div>
            
            <p className="text-sm text-[#F8FAFC]/60 leading-relaxed">
              Building sustainable, high-impact businesses across real estate, energy, technology, and agribusiness in Tanzania and beyond.
            </p>
            
            {/* KAPI Philosophy */}
            <div className="pt-4">
              <div className="flex items-center gap-2 text-xs text-[#73BE44]">
                <span className="font-black">K</span>
                <span className="text-[#F8FAFC]/30">—</span>
                <span>Knowledge</span>
                <span className="text-[#F8FAFC]/30">•</span>
                <span>Agility</span>
                <span className="text-[#F8FAFC]/30">•</span>
                <span>Partnership</span>
                <span className="text-[#F8FAFC]/30">•</span>
                <span>Impact</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#73BE44]"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F8FAFC]/60 hover:text-[#73BE44] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-4 bg-[#73BE44]/10 flex items-center justify-center group-hover:bg-[#73BE44] transition-colors">
                      <span className="text-[#73BE44] group-hover:text-[#1B194A] text-xs">›</span>
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#73BE44]"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#73BE44] mt-0.5">{item.icon}</span>
                  <span className="text-sm text-[#F8FAFC]/60">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold text-[#F8FAFC] mb-6 relative inline-block">
              Stay Connected
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#73BE44]"></span>
            </h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm text-[#F8FAFC]/60 mb-3">
                Subscribe to our newsletter for updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-2 text-sm text-[#F8FAFC] placeholder-[#F8FAFC]/30 focus:outline-none focus:border-[#73BE44] transition-colors"
                />
                <button className="bg-[#73BE44] px-4 py-2 hover:bg-[#73BE44]/80 transition-colors">
                  <Send size={16} className="text-[#1B194A]" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-[#F8FAFC]/60 mb-3">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#73BE44] hover:border-[#73BE44] transition-all duration-300 group"
                  >
                    <span className="text-[#F8FAFC] group-hover:text-[#1B194A] transition-colors">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-sm text-[#F8FAFC]/40 order-2 md:order-1">
              © {new Date().getFullYear()} KAPI Africa. All rights reserved.
            </div>
            
            {/* Legal Links & Scroll Top */}
            <div className="flex items-center gap-6 order-1 md:order-2">
              <a href="#" className="text-xs text-[#F8FAFC]/40 hover:text-[#73BE44] transition-colors">
                Privacy Policy
              </a>
              <span className="text-[#F8FAFC]/20">|</span>
              <a href="#" className="text-xs text-[#F8FAFC]/40 hover:text-[#73BE44] transition-colors">
                Terms of Use
              </a>
              <span className="text-[#F8FAFC]/20">|</span>
              <a href="#" className="text-xs text-[#F8FAFC]/40 hover:text-[#73BE44] transition-colors">
                Cookie Policy
              </a>
              
              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="relative group ml-4"
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 bg-[#73BE44] blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative w-10 h-10 bg-[#73BE44] flex items-center justify-center hover:bg-[#F8FAFC] transition-all duration-300">
                  <ArrowUp size={18} className="text-[#1B194A] group-hover:text-[#1B194A] group-hover:scale-110 transition-transform" />
                </div>
              </button>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-6">
            <p className="text-xs text-[#F8FAFC]/20">
              Built with precision and purpose • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#73BE44]/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;