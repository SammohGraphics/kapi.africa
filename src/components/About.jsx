import React from 'react';
import { Target, Eye, Heart, Users, Zap, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Knowledge',
      description: 'Informed decisions build strong businesses through expertise and continuous learning.',
      color: 'lime-green',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Agility',
      description: 'Adaptive, responsive, and ready to seize opportunities with speed and purpose.',
      color: 'lime-green',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Partnership',
      description: 'Lasting success built through trust, collaboration, and shared ambition.',
      color: 'lime-green',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Impact',
      description: 'Creating meaningful and lasting value for people and the economy.',
      color: 'lime-green',
    },
  ];

  return (
    <section id="about" className="py-24 bg-midnight-indigo text-ghost-white">
      <div className="container-custom">
        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-lime-green font-semibold mb-4 block">OUR STORY</span>
            <h2 className="text-5xl lg:text-6xl font-black mb-8">
              From Vision to
              <span className="block text-lime-green">Impact</span>
            </h2>
            <div className="space-y-6 text-ghost-white/80">
              <p>
                Founded in 2022 with KAPI Africa Limited, our journey began with a 
                clear focus on real estate and long-term value investments. From that 
                single foundation, we've grown into a diversified platform across five 
                strategic sectors.
              </p>
              <p>
                Between 2024 and 2025, we entered a new phase of expansion, launching 
                KAPI Energies, KAPI Tech, and forming strategic partnerships in 
                financial services and agribusiness.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-lime-green/20 flex items-center justify-center">
                  <span className="text-2xl font-black text-lime-green">2022</span>
                </div>
                <p className="font-semibold">Founded KAPI Africa Limited</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-lime-green/20 flex items-center justify-center">
                  <span className="text-2xl font-black text-lime-green">2023</span>
                </div>
                <p className="font-semibold">Entered Agribusiness</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-lime-green/20 flex items-center justify-center">
                  <span className="text-2xl font-black text-lime-green">2025</span>
                </div>
                <p className="font-semibold">Launched KAPI Energies & Financial Services</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-pattern-kapi opacity-10"></div>
            <div className="relative z-10 bg-ghost-white p-12 text-midnight-indigo">
              <div className="mb-8">
                <Eye className="w-12 h-12 text-lime-green mb-4" />
                <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                <p className="text-slate">
                  To build a leading and trusted African business group that creates 
                  lasting value through innovation, excellence, and sustainable growth.
                </p>
              </div>
              <div>
                <Target className="w-12 h-12 text-lime-green mb-4" />
                <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                <p className="text-slate">
                  To build sustainable and high-impact businesses across strategic sectors 
                  through innovation, disciplined execution, and responsible investment.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              The <span className="text-lime-green">KAPI</span> Values
            </h2>
            <p className="text-ghost-white/60 max-w-2xl mx-auto">
              Our name reflects our identity - Knowledge, Agility, Partnership, and Impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-ghost-white/5 p-8 hover:bg-lime-green group transition-all duration-500 cursor-pointer"
              >
                <div className="text-lime-green group-hover:text-midnight-indigo mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:text-midnight-indigo">
                  {value.title}
                </h3>
                <p className="text-ghost-white/60 group-hover:text-midnight-indigo/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;