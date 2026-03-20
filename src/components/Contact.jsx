import { Clock, Facebook, Globe, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone, Send, Target, Users } from 'lucide-react';
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
    // Handle form submission logic here
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
      color: '#73BE44',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Direct Line',
      content: '+255 767 888 833',
      subtext: 'Mon-Fri, 8am-6pm',
      color: '#73BE44',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@kapi.co.tz',
      subtext: 'We reply within 24 hours',
      color: '#73BE44',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website',
      content: 'www.kapi.co.tz',
      subtext: 'Explore our portfolio',
      color: '#73BE44',
    },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn', color: '#73BE44' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram', color: '#73BE44' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook', color: '#73BE44' },
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
                  >
                    <div className="absolute inset-0 bg-[#73BE44] blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300">
                      <span className="text-[#F8FAFC] group-hover:text-[#1B194A] transition-colors">
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

        {/* Map Placeholder - Optional */}
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