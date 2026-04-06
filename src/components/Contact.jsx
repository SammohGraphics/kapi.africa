import {
  Clock,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Target,
  Users,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, error: false });
    setTimeout(() => setFormStatus({ submitted: false, error: false }), 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      content: (
        <>
          418 Toure Drive, Ocean View Building<br />
          Oysterbay Peninsular<br />
          Dar es Salaam, Tanzania
        </>
      ),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Direct Line',
      content: '+255 767 888 833',
      subtext: 'Mon-Fri, 8am-6pm',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@kapi.co.tz',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      content: 'www.kapi.co.tz',
      subtext: 'Explore our portfolio',
    },
  ];

  // SVG Social Icons
  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.222 0 22.225 0z"/>
        </svg>
      ),
      href: '#',
      label: 'LinkedIn',
      bgColor: '#0077B5',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
        </svg>
      ),
      href: '#',
      label: 'Instagram',
      bgColor: '#E4405F',
    },
    {
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      href: '#',
      label: 'Facebook',
      bgColor: '#1877F2',
    },
  ];

  const stats = [
    { icon: <MessageSquare size={16} />, value: '24h', label: 'Response Time' },
    { icon: <Users size={16} />, value: '100+', label: 'Partners' },
    { icon: <Target size={16} />, value: '100%', label: 'Commitment' },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-[#1B194A] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #73BE44 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#73BE44]/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#73BE44]/10 text-[#73BE44] text-sm font-medium tracking-wider mb-4">
            <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
            <span>THE BRIDGE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] mb-4 leading-tight">
            Connect With
            <span className="block text-[#73BE44]">KAPI</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#F8FAFC]/60 max-w-3xl mx-auto px-4">
            Your vision deserves a foundation built on Knowledge, Agility, 
            Partnership, and Impact. Let's build your legacy together.
          </p>
          
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
            <div className="w-10 h-1 bg-[#73BE44]"></div>
            <div className="w-20 h-1 bg-[#73BE44]/20"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="text-[#73BE44] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h4 className="text-[#F8FAFC] font-semibold mb-2 text-sm">{item.title}</h4>
                    <p className="text-[#F8FAFC]/80 text-sm leading-relaxed">{item.content}</p>
                    {item.subtext && (
                      <p className="text-[#73BE44]/60 text-xs mt-2 flex items-center gap-1">
                        <Clock size={12} />
                        {item.subtext}
                      </p>
                    )}
                  </div>
                  
                  {/* Hover Indicator */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#73BE44] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </div>
              ))}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-[#73BE44] mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-lg font-black text-[#F8FAFC]">{stat.value}</div>
                  <div className="text-[10px] text-[#F8FAFC]/40">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-[#F8FAFC] font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-[#73BE44]"></span>
                Connect With Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="relative group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-[#73BE44] blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div 
                      className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 rounded-lg group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${social.bgColor}20`,
                        border: `1px solid ${social.bgColor}40`
                      }}
                    >
                      <span 
                        className="transition-colors duration-300"
                        style={{ color: social.bgColor }}
                      >
                        {social.icon}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-[#73BE44]" />
                <h4 className="text-[#F8FAFC] font-semibold">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#F8FAFC]/60">Monday - Friday</span>
                  <span className="text-[#F8FAFC]">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F8FAFC]/60">Saturday</span>
                  <span className="text-[#F8FAFC]">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#F8FAFC]/60">Sunday</span>
                  <span className="text-[#F8FAFC]">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-[#73BE44]/5 rounded-3xl transform rotate-2"></div>
              
              {/* Form Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-black text-[#F8FAFC] mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-[#F8FAFC]/40 text-sm">
                    We'll get back to you within 24 hours
                  </p>
                  <div className="w-16 h-1 bg-[#73BE44] mt-4"></div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#F8FAFC] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#73BE44] outline-none transition-colors text-[#F8FAFC] placeholder-[#F8FAFC]/30 rounded-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#F8FAFC] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#73BE44] outline-none transition-colors text-[#F8FAFC] placeholder-[#F8FAFC]/30 rounded-lg"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#F8FAFC] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#73BE44] outline-none transition-colors text-[#F8FAFC] placeholder-[#F8FAFC]/30 rounded-lg"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#F8FAFC] mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-[#73BE44] outline-none transition-colors text-[#F8FAFC] placeholder-[#F8FAFC]/30 rounded-lg resize-none"
                      placeholder="Tell us about your vision..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#73BE44] text-[#1B194A] py-4 font-bold hover:bg-[#73BE44]/80 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden rounded-lg"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="relative z-10">Send Message</span>
                    <Send size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                  </button>

                  {/* Form Status Message */}
                  {formStatus.submitted && (
                    <div className="text-center text-[#73BE44] text-sm animate-pulse">
                      Thank you for reaching out! We'll respond shortly.
                    </div>
                  )}
                </form>

                {/* Trust Badge */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-[#F8FAFC]/30">
                    Your information is secure and will not be shared
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className={`mt-16 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="text-[#73BE44]/30 mx-auto mb-2" />
              <p className="text-[#F8FAFC]/30 text-sm">418 Toure Drive, Oysterbay Peninsular, Dar es Salaam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;