import React from 'react';

const WordPressThemeBanner: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="text-center relative z-10">
            <span className="text-blue-500 font-semibold mb-2 block text-sm sm:text-base">
              READY TO TRANSFORM YOUR BUSINESS?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Your Digital Growth Partner
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              With over 9 years of experience, we deliver innovative solutions across software development, web & mobile apps, graphic design, and digital marketing to help your business thrive.
            </p>
            <button className="bg-lama hover:bg-pink-300 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-lg text-sm sm:text-base">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressThemeBanner;
