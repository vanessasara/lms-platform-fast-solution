import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-2 items-stretch gap-4 md:gap-0 min-h-[500px] md:min-h-[600px]">

          {/* Left Content */}
          <div className="px-6 sm:px-10 md:px-14 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              X Fast Group<br />Your Digital Growth Partner
            </h1>

            <p className="text-gray-700 mb-8 text-xs sm:text-sm max-w-md">
              At X Fast Group, we&apos;re more than just an IT company — we&apos;re your digital growth partner.
              With over 9 years of experience, we specialize in delivering innovative and results-driven
              solutions across software development, website and mobile app development, graphic design,
              and digital marketing.
            </p>

            <button className="bg-lama text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-pink-300 transition duration-300 text-base sm:text-lg">
              Learn More
            </button>
          </div>

          {/* Right Image (Hidden on Small Screens) */}
          <div className="relative hidden md:flex items-end justify-end">
            <div className="relative w-full h-full">
              <Image
                src="/girl-image.png"
                alt="Student learning"
                fill
                className="object-contain object-bottom"
                priority
                quality={100}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
