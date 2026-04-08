import React, { useState, useEffect, useRef } from 'react';

// Import director images
import abdallahKadori from '../assets/directors/abdallah-kadori.jpeg';
import abdulKondo from '../assets/directors/abdul-kondo.jpeg';
import mohammedMsingi from '../assets/directors/mohammed-msingi.jpeg';
import yonahNkurlu from '../assets/directors/yonah-nkurlu.jpeg';

const Directors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDirector, setActiveDirector] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedDirector, setExpandedDirector] = useState(null);
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

  const directors = [
    {
      id: 1,
      name: 'Abdallah Kadori',
      position: 'Chairman & Group CEO',
      bio: 'Visionary leader with extensive experience in real estate, energy, and business development across East Africa. Spearheading KAPI Group\'s strategic expansion and diversification initiatives.',
      fullBio: 'Abdallah Kadori is the founder and driving force behind KAPI Group. With over 20 years of experience in business leadership, he has successfully built a diversified portfolio spanning real estate, energy, technology, and agribusiness. His vision focuses on creating sustainable value while contributing to economic growth across Africa.',
      expertise: ['Strategic Planning', 'Investment Management', 'Business Development'],
      education: 'MBA - International Business',
      experience: '20+ years in leadership',
      image: abdallahKadori,
      email: 'abdallah.kadori@kapi.co.tz',
      linkedin: '#',
      achievements: [
        'Founded KAPI Group in 2022',
        'Led expansion into 5 business sectors',
        'Established strategic partnerships across Africa'
      ]
    },
    {
      id: 2,
      name: 'Abdul Kondo',
      position: 'Director - Operations',
      bio: 'Operations expert driving efficiency and excellence across KAPI Group\'s diverse portfolio. Focused on optimizing processes and delivering operational excellence.',
      fullBio: 'Abdul Kondo brings extensive operational expertise to KAPI Group. His systematic approach to process optimization has significantly improved efficiency across all business units. He is committed to building robust operational frameworks that support sustainable growth.',
      expertise: ['Operations Management', 'Supply Chain', 'Process Optimization'],
      education: 'MSc - Operations Management',
      experience: '15+ years in operations',
      image: abdulKondo,
      email: 'abdul.kondo@kapi.co.tz',
      linkedin: '#',
      achievements: [
        'Streamlined group operations',
        'Implemented quality management systems',
        'Enhanced supply chain efficiency'
      ]
    },
    {
      id: 3,
      name: 'Mohammed Msingi',
      position: 'Director - Finance & Investment',
      bio: 'Financial strategist overseeing investment portfolios and capital allocation. Committed to sustainable growth and maximizing shareholder value.',
      fullBio: 'Mohammed Msingi is a seasoned finance professional with deep expertise in investment strategy and capital markets. He has been instrumental in securing strategic partnerships and optimizing KAPI Group\'s financial structure for long-term growth.',
      expertise: ['Financial Planning', 'Investment Strategy', 'Risk Management'],
      education: 'CFA, MSc Finance',
      experience: '18+ years in finance',
      image: mohammedMsingi,
      email: 'mohammed.msingi@kapi.co.tz',
      linkedin: '#',
      achievements: [
        'Secured major investment partnerships',
        'Optimized capital structure',
        'Drove 40% portfolio growth'
      ]
    },
    {
      id: 4,
      name: 'Yonah Nkurlu',
      position: 'Director - Strategy & Innovation',
      bio: 'Innovation leader driving digital transformation and strategic initiatives. Passionate about leveraging technology for business growth.',
      fullBio: 'Yonah Nkurlu leads KAPI Group\'s strategic initiatives and innovation agenda. With a strong background in technology and business strategy, he is driving the group\'s digital transformation and future-ready capabilities.',
      expertise: ['Strategic Planning', 'Innovation Management', 'Digital Transformation'],
      education: 'MSc - Strategic Management',
      experience: '12+ years in strategy',
      image: yonahNkurlu,
      email: 'yonah.nkurlu@kapi.co.tz',
      linkedin: '#',
      achievements: [
        'Launched KAPI Tech division',
        'Implemented digital transformation roadmap',
        'Developed innovation framework'
      ]
    }
  ];

  const nextDirector = () => {
    setActiveDirector((prev) => (prev + 1) % directors.length);
  };

  const prevDirector = () => {
    setActiveDirector((prev) => (prev - 1 + directors.length) % directors.length);
  };

  // SVG Icons
  const LinkedInIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.222 0 22.225 0z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2z"/>
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 0h-4V4h4v2z"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z"/>
    </svg>
  );

  const QuoteIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
    </svg>
  );

  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );

  const EducationIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 11-6-11-6zm0 11.5L3.5 10.5 2 11.5l10 6 10-6-1.5-1-8.5 5z"/>
    </svg>
  );

  const ExperienceIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );

  return (
    <section 
      id="directors" 
      ref={sectionRef}
      className="relative py-24 bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #1B194A 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-[#73BE44]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#1B194A]/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 mx-auto px-6">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-3 px-4 py-2 bg-[#1B194A]/5 text-[#1B194A] text-sm font-medium tracking-wider mb-4 rounded-full">
            <span className="w-2 h-2 bg-[#73BE44] rounded-full animate-pulse"></span>
            <span>LEADERSHIP TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B194A] mb-4 leading-tight">
            Meet Our{' '}
            <span className="text-[#73BE44] relative inline-block">
              Directors
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                <line x1="0" y1="2" x2="200" y2="2" stroke="#73BE44" strokeWidth="3" strokeDasharray="6 6">
                  <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" repeatCount="indefinite" />
                </line>
              </svg>
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#475569] max-w-3xl mx-auto">
            A team of visionary leaders driving KAPI Group's mission to build sustainable, 
            high-impact businesses across Africa.
          </p>
          
          <div className="flex justify-center mt-6">
            <div className="w-20 h-1 bg-[#73BE44]/20 rounded-full"></div>
            <div className="w-10 h-1 bg-[#73BE44] rounded-full"></div>
            <div className="w-20 h-1 bg-[#73BE44]/20 rounded-full"></div>
          </div>
        </div>

        {/* Desktop Grid View - 4 Cards */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setExpandedDirector(expandedDirector === director.id ? null : director.id)}
              >
                
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#1B194A] to-[#1B194A]/90">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B194A] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <a 
                      href={director.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[#1B194A] group-hover:text-white">
                        <LinkedInIcon />
                      </span>
                    </a>
                    <a 
                      href={`mailto:${director.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300 transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-[#1B194A] group-hover:text-white">
                        <MailIcon />
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1B194A] mb-1">{director.name}</h3>
                  <p className="text-[#73BE44] text-sm font-semibold mb-3">{director.position}</p>
                  <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-3">
                    {expandedDirector === director.id ? director.fullBio : director.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {director.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-[#1B194A]/5 text-[#1B194A] rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More/Read Less Button */}
                  <button 
                    className="text-sm text-[#73BE44] font-medium hover:text-[#1B194A] transition-colors flex items-center gap-1 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedDirector(expandedDirector === director.id ? null : director.id);
                    }}
                  >
                    {expandedDirector === director.id ? 'Show Less' : 'View Profile'}
                    <span className={`transition-transform duration-300 ${expandedDirector === director.id ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                      <ChevronRightIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeDirector * 100}%)` }}
            >
              {directors.map((director) => (
                <div key={director.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    {/* Image */}
                    <div className="relative h-96 bg-gradient-to-br from-[#1B194A] to-[#1B194A]/90">
                      <img 
                        src={director.image} 
                        alt={director.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-[#1B194A] mb-2">{director.name}</h3>
                      <p className="text-[#73BE44] font-semibold mb-4">{director.position}</p>
                      <p className="text-[#475569] leading-relaxed mb-6">{director.bio}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#1B194A] mb-3">Core Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {director.expertise.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-3 py-1.5 bg-[#1B194A]/5 text-[#1B194A] rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Education & Experience */}
                      <div className="mb-6 space-y-2">
                        <div className="flex items-center gap-2 text-sm text-[#475569]">
                          <EducationIcon />
                          <span>{director.education}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#475569]">
                          <ExperienceIcon />
                          <span>{director.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                        <a 
                          href={director.linkedin}
                          className="w-12 h-12 bg-[#1B194A]/5 rounded-full flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300"
                        >
                          <span className="text-[#1B194A] hover:text-white">
                            <LinkedInIcon />
                          </span>
                        </a>
                        <a 
                          href={`mailto:${director.email}`}
                          className="w-12 h-12 bg-[#1B194A]/5 rounded-full flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300"
                        >
                          <span className="text-[#1B194A] hover:text-white">
                            <MailIcon />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevDirector}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300"
          >
            <span className="text-[#1B194A] group-hover:text-white">
              <ChevronLeftIcon />
            </span>
          </button>
          
          <button
            onClick={nextDirector}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#73BE44] transition-all duration-300"
          >
            <span className="text-[#1B194A] group-hover:text-white">
              <ChevronRightIcon />
            </span>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {directors.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveDirector(index)}
                className={`transition-all duration-300 ${
                  activeDirector === index
                    ? 'w-8 h-2 bg-[#73BE44] rounded-full'
                    : 'w-2 h-2 bg-[#1B194A]/30 rounded-full hover:bg-[#1B194A]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-3xl mx-auto">
            <div className="text-[#73BE44]/20 mx-auto mb-4">
              <QuoteIcon />
            </div>
            <p className="text-xl md:text-2xl text-[#1B194A] font-light italic leading-relaxed">
              "Together, we are building a legacy of sustainable growth, 
              creating lasting value for our stakeholders and communities across Africa."
            </p>
            <p className="text-[#73BE44] font-semibold mt-4">
              — Board of Directors, KAPI Group
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-[#73BE44] mx-auto mb-3">
              <AwardIcon />
            </div>
            <div className="text-2xl font-bold text-[#1B194A]">5+</div>
            <div className="text-xs text-[#475569]">Combined Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-[#73BE44] mx-auto mb-3">
              <BriefcaseIcon />
            </div>
            <div className="text-2xl font-bold text-[#1B194A]">5</div>
            <div className="text-xs text-[#475569]">Business Sectors</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-[#73BE44] mx-auto mb-3">
              <MapPinIcon />
            </div>
            <div className="text-2xl font-bold text-[#1B194A]">4</div>
            <div className="text-xs text-[#475569]">Countries</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-[#73BE44] mx-auto mb-3">
              <CalendarIcon />
            </div>
            <div className="text-2xl font-bold text-[#1B194A]">2022</div>
            <div className="text-xs text-[#475569]">Year Founded</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directors;