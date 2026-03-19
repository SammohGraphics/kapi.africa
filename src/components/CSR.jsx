import React from 'react';
import { Leaf, Heart, Users, TreePine, GraduationCap, Recycle } from 'lucide-react';

const CSR = () => {
  const initiatives = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Environmental Stewardship',
      description: 'Sustainable building materials, renewable energy transition, and climate-smart agriculture.',
      items: [
        'Carbon conscious development',
        'Clean power solutions',
        'Regenerative farming',
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Empowerment',
      description: 'Investing in people through education, inclusion, and local partnerships.',
      items: [
        'Financial literacy workshops',
        'Digital literacy programs',
        'Local-first sourcing',
      ],
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Sustainable Impact',
      description: 'Building a circular economy through responsible business practices.',
      items: [
        'Sisal as plastic alternative',
        'Waste reduction initiatives',
        'Green material innovation',
      ],
    },
  ];

  return (
    <section id="csr" className="py-24 bg-ghost-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("/pattern.svg")',
        backgroundSize: '100px 100px',
      }}></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-lime-green font-semibold mb-4 block">THE KAPI HEARTBEAT</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            Corporate Social
            <span className="block gradient-text">Responsibility</span>
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            True corporate leadership is measured by the legacy we leave in the 
            communities we serve. Impact is the silent engine behind everything we do.
          </p>
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto mb-20 p-12 bg-midnight-indigo text-ghost-white relative">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-lime-green flex items-center justify-center">
            <span className="text-3xl text-midnight-indigo font-black">"</span>
          </div>
          <p className="text-2xl italic mb-6">
            Wealth is only meaningful when it creates wellbeing. At KAPI, our 'Soul' 
            is found in the thriving farms, the powered homes, and the secure futures 
            of the people we serve.
          </p>
          <p className="font-semibold text-lime-green">
            — The KAPI Leadership Team
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-lime-green opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="text-lime-green mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {initiative.icon}
              </div>
              
              <h3 className="text-2xl font-black mb-4">{initiative.title}</h3>
              <p className="text-slate mb-6">{initiative.description}</p>
              
              {/* Items */}
              <ul className="space-y-2">
                {initiative.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Leaf size={14} className="text-lime-green flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '100%', label: 'Local Sourcing' },
            { value: '5+', label: 'Community Programs' },
            { value: '1000+', label: 'Lives Impacted' },
            { value: '100%', label: 'Sustainable Focus' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black text-lime-green mb-2">{stat.value}</div>
              <div className="text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSR;