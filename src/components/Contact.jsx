import React from 'react';
import { MapPin, Phone, Mail, Globe, Linkedin, Instagram, Facebook, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-midnight-indigo text-ghost-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-lime-green font-semibold mb-4 block">THE BRIDGE</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Connect With
              <span className="block text-lime-green">KAPI</span>
            </h2>
            
            <p className="text-xl text-ghost-white/80 mb-12">
              Your vision deserves a foundation built on Knowledge, Agility, 
              Partnership, and Impact. Let's build your legacy together.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-lime-green flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Headquarters</h4>
                  <p className="text-ghost-white/60">
                    418 Toure Drive, Ocean View Building<br />
                    Oysterbay Peninsular<br />
                    Dar es Salaam, Tanzania
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-lime-green flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Direct Line</h4>
                  <p className="text-ghost-white/60">+255 767 888 833</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-lime-green flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-ghost-white/60">info@kapi.co.tz</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-lime-green flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Website</h4>
                  <p className="text-ghost-white/60">www.kapi.co.tz</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
                  { icon: <Instagram />, href: '#', label: 'Instagram' },
                  { icon: <Facebook />, href: '#', label: 'Facebook' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-ghost-white/10 hover:bg-lime-green transition-colors duration-300 flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <span className="text-ghost-white group-hover:text-midnight-indigo">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-ghost-white p-12">
            <h3 className="text-3xl font-black text-midnight-indigo mb-8">
              Send Us a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-midnight-indigo mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-midnight-indigo/10 focus:border-lime-green outline-none transition-colors bg-transparent text-midnight-indigo"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-midnight-indigo mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-midnight-indigo/10 focus:border-lime-green outline-none transition-colors bg-transparent text-midnight-indigo"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-midnight-indigo mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-midnight-indigo/10 focus:border-lime-green outline-none transition-colors bg-transparent text-midnight-indigo"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-midnight-indigo mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-midnight-indigo/10 focus:border-lime-green outline-none transition-colors bg-transparent text-midnight-indigo resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-midnight-indigo text-ghost-white py-4 font-semibold hover:bg-lime-green hover:text-midnight-indigo transition-colors duration-300 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;