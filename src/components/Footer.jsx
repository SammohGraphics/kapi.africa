import { ArrowUp, Mail, MapPin, Phone, Send } from 'lucide-react';
import logo from '../assets/MainLogo.png';

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
    { icon: <Phone size={16} />, text: '+255 767 888 833' },
    { icon: <Mail size={16} />, text: 'info@kapi.co.tz' },
  ];

  // SVG Social Icons
  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.222 0 22.225 0z"/>
        </svg>
      ),
      href: '#',
      label: 'LinkedIn',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.683-12.056c0-.21 0-.423-.015-.634A10.04 10.04 0 0024 4.59c-.748.33-1.553.552-2.396.653a4.176 4.176 0 001.83-2.309 8.344 8.344 0 01-2.637 1.008 4.912 4.912 0 00-8.365 4.479 13.94 13.94 0 01-10.12-5.13 4.84 4.84 0 00-.488 2.464c0 1.7.86 3.202 2.172 4.083a4.827 4.827 0 01-2.212-.608v.061c0 2.388 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.228.085 4.937 4.937 0 004.604 3.417 9.895 9.895 0 01-6.102 2.105c-.39 0-.78-.023-1.17-.067a13.955 13.955 0 0021.683-12.056c0-.21-.015-.423-.015-.634A9.984 9.984 0 0024 4.59c-.748.33-1.553.552-2.396.653a4.176 4.176 0 001.83-2.309 8.344 8.344 0 01-2.637 1.008 4.912 4.912 0 00-8.365 4.479 13.94 13.94 0 01-10.12-5.13 4.84 4.84 0 00-.488 2.464c0 1.7.86 3.202 2.172 4.083a4.827 4.827 0 01-2.212-.608v.061c0 2.388 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.228.085 4.937 4.937 0 004.604 3.417 9.895 9.895 0 01-6.102 2.105c-.39 0-.78-.023-1.17-.067a13.955 13.955 0 0021.683-12.056c0-.21-.015-.423-.015-.634A9.984 9.984 0 0024 4.59c-.748.33-1.553.552-2.396.653a4.176 4.176 0 001.83-2.309 8.344 8.344 0 01-2.637 1.008 4.912 4.912 0 00-8.365 4.479 13.94 13.94 0 01-10.12-5.13 4.84 4.84 0 00-.488 2.464c0 1.7.86 3.202 2.172 4.083a4.827 4.827 0 01-2.212-.608v.061c0 2.388 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.228.085 4.937 4.937 0 004.604 3.417 9.895 9.895 0 01-6.102 2.105c-.39 0-.78-.023-1.17-.067a13.955 13.955 0 0021.683-12.056c0-.21-.015-.423-.015-.634A9.984 9.984 0 0024 4.59c-.748.33-1.553.552-2.396.653a4.176 4.176 0 001.83-2.309 8.344 8.344 0 01-2.637 1.008 4.912 4.912 0 00-8.365 4.479 13.94 13.94 0 01-10.12-5.13 4.84 4.84 0 00-.488 2.464c0 1.7.86 3.202 2.172 4.083a4.827 4.827 0 01-2.212-.608v.061c0 2.388 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.228.085 4.937 4.937 0 004.604 3.417 9.895 9.895 0 01-6.102 2.105c-.39 0-.78-.023-1.17-.067a13.955 13.955 0 0021.683-12.056c0-.21-.015-.423-.015-.634A9.984 9.984 0 0024 4.59c-.748.33-1.553.552-2.396.653a4.176 4.176 0 001.83-2.309z"/>
        </svg>
      ),
      href: '#',
      label: 'X (Twitter)',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#',
      label: 'Facebook',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      href: '#',
      label: 'Instagram',
    },
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
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-14 h-14 bg-[#73BE44] flex items-center justify-center overflow-hidden">
                  <img 
                    src={logo} 
                    alt="KAPI Group Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
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