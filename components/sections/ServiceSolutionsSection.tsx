'use client'
import React, { useState } from 'react';

type Card = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const servicesList = [
  'mobile-app',
  'web-development',
  'graphic-design',
  'software-development',
  'ecommerce',
  'video-editing',
  'branding',
  'uiux-design'
];

const serviceCards: Record<string, Card[]> = {
  'mobile-app': [
    { id: 'android-ios', icon: '📱', title: 'Android & iOS Apps', description: 'We develop Android, iOS and hybrid applications that work seamlessly on all devices.' },
    { id: 'user-experience', icon: '✨', title: 'User-Friendly Interfaces', description: 'Convenient interfaces, easy navigation, and strong security for the best user experience.' },
    { id: 'maintenance', icon: '🔧', title: 'Maintenance & Updates', description: 'Maintenance and updates keep your app current with evolving technology.' }
  ],
  'web-development': [
    { id: 'responsive', icon: '💻', title: 'Responsive Design', description: 'Responsive, fast and optimized websites that guarantee an excellent user experience.' },
    { id: 'custom-solutions', icon: '🎯', title: 'Custom Solutions', description: 'From corporate to e-commerce sites, tailored to your brand.' },
    { id: 'secure-scalable', icon: '🔒', title: 'Security & Scalability', description: 'Built with security and scalability in mind for long-term readiness.' }
  ],
  'graphic-design': [
    { id: 'visual-identity', icon: '🎨', title: 'Visual Communication', description: 'Logos, social posts, brochures, and branding kits that communicate clearly.' },
    { id: 'brand-consistency', icon: '🎭', title: 'Brand Consistency', description: 'Designs aligned to your brand for cross-platform consistency.' },
    { id: 'modern-trends', icon: '✨', title: 'Modern Design Trends', description: 'Color psychology and typography aligned with current trends.' }
  ],
  'software-development': [
    { id: 'custom-software', icon: '⚙️', title: 'Custom Software', description: 'Enterprise software, management systems and automation tailored to workflows.' },
    { id: 'efficiency', icon: '📈', title: 'Increased Efficiency', description: 'Solutions that reduce cost and increase accuracy.' },
    { id: 'scalable-secure', icon: '🛡️', title: 'Scalable & Secure', description: 'Architected for scale and secure long-term usage.' }
  ],
  'ecommerce': [
    { id: 'online-stores', icon: '🛍️', title: 'Custom Online Stores', description: 'Tailored shops with product control and secure payments.' },
    { id: 'mobile-optimized', icon: '📱', title: 'Mobile-Optimized', description: 'Conversion-oriented, mobile-first storefronts.' },
    { id: 'features', icon: '✅', title: 'Complete Features', description: 'Inventory, customer accounts, shipping, and promotions.' }
  ],
  'video-editing': [
    { id: 'professional-editing', icon: '🎬', title: 'Professional Editing', description: 'Ads, social media, presentations and event editing.' },
    { id: 'modern-tools', icon: '🔨', title: 'Modern Tools', description: 'Editors use modern toolchains for effects and narration.' },
    { id: 'platform-optimized', icon: '📺', title: 'Platform Optimization', description: 'Streamlined to YouTube, TikTok, Instagram, etc.' }
  ],
  'branding': [
    { id: 'brand-identity', icon: '🎯', title: 'Complete Brand Identity', description: 'Logos, color schemes, typography and brand specs.' },
    { id: 'consistency', icon: '🔄', title: 'Cross-Platform Unity', description: 'Consistent presence to build trust and recognition.' },
    { id: 'brand-personality', icon: '💼', title: 'Brand Personality', description: 'Tone of voice, values and personality design.' }
  ],
  'uiux-design': [
    { id: 'user-experience', icon: '👥', title: 'User Experience', description: 'Interfaces that are usable, accessible and attractive.' },
    { id: 'research-testing', icon: '🔍', title: 'Research & Testing', description: 'Wireframes, prototypes and usability testing.' },
    { id: 'modern-design', icon: '🎨', title: 'Modern Design', description: 'User-behavior-led, accessible and trend-aware design.' }
  ]
};

const ServiceSolutionsSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(servicesList[0]);
  const activeServiceData = serviceCards[activeService] ?? [];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800 dark:text-white">
            Our <span className="text-lama">Services</span>
          </h2>
        </div>

        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our goal is to propel your business forward with world-class IT cybersecurity and technology. We provide the expert solutions your business needs to thrive in today&apos;s digital landscape.
          </p>
        </div>

        {/* Service Navigation Tabs (fixed, clean JSX) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {servicesList.map((service) => {
            const label = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            const isActive = activeService === service;

            return (
              <button
                key={service}
                type="button"
                onClick={() => setActiveService(service)}
                className={
                  `px-6 py-3 rounded-full font-semibold transition-all text-sm sm:text-base shadow-md focus:outline-none ` +
                  (isActive
                    ? 'bg-pink-300 hover:bg-lama text-black shadow-lg'
                    : 'bg-lama- text-gray-800 dark:text-white hover:opacity-95 border border-gray-200 dark:border-gray-600')
                }
                aria-pressed={isActive}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeServiceData.map((card) => (
            <article
              key={card.id}
              className="bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 flex flex-col items-start space-y-4 transition shadow-lg hover:shadow-2xl"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-full text-3xl text-white shadow-lg">
                {card.icon}
              </div>

              <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
                {card.title}
              </h4>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServiceSolutionsSection;
