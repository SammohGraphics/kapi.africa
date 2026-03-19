import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight-indigo border-t border-ghost-white/10 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-ghost-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} KAPI Africa. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="text-ghost-white/60 hover:text-lime-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-ghost-white/60 hover:text-lime-green transition-colors">
              Terms of Use
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-lime-green text-midnight-indigo hover:bg-ghost-white transition-colors duration-300 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;