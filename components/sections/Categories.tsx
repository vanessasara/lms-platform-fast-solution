'use client';
import React, { useState, useRef } from 'react';
import { 
  Shield, 
  Code, 
  Palette, 
  FileText, 
  TrendingUp, 
  Search, 
  Cloud, 
  Database, 
  Smartphone,
  Cpu,
  Globe,
  Bot,
  Lock,
  Blocks,
  Pencil,
  Zap,
  ShoppingCart,
  BarChart3,
  Briefcase,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const categories = [
    { 
      icon: <Shield size={32} />, 
      name: 'Cybersecurity', 
      courses: 2, 
      color: 'bg-red-100 text-red-500' 
    },
    { 
      icon: <Code size={32} />, 
      name: 'Full Stack Development', 
      courses: 1, 
      color: 'bg-blue-100 text-blue-500' 
    },
    { 
      icon: <Palette size={32} />, 
      name: 'Graphic Designing', 
      courses: 1, 
      color: 'bg-purple-100 text-purple-500' 
    },
    { 
      icon: <FileText size={32} />, 
      name: 'Microsoft Office', 
      courses: 1, 
      color: 'bg-green-100 text-green-500' 
    },
    { 
      icon: <TrendingUp size={32} />, 
      name: 'Digital Marketing', 
      courses: 1, 
      color: 'bg-orange-100 text-orange-500' 
    },
    { 
      icon: <Search size={32} />, 
      name: 'Google Ads & SEO', 
      courses: 2, 
      color: 'bg-yellow-100 text-yellow-600' 
    },
    { 
      icon: <Cloud size={32} />, 
      name: 'Cloud Computing', 
      courses: 1, 
      color: 'bg-cyan-100 text-cyan-500' 
    },
    { 
      icon: <Database size={32} />, 
      name: 'Data Science', 
      courses: 1, 
      color: 'bg-indigo-100 text-indigo-500' 
    },
    { 
      icon: <Smartphone size={32} />, 
      name: 'App Development', 
      courses: 2, 
      color: 'bg-blue-100 text-pink-500' 
    },
    { 
      icon: <Cpu size={32} />, 
      name: 'DevOps & Automation', 
      courses: 2, 
      color: 'bg-teal-100 text-teal-500' 
    },
    { 
      icon: <Globe size={32} />, 
      name: 'AR/VR & Metaverse', 
      courses: 2, 
      color: 'bg-violet-100 text-violet-500' 
    },
    { 
      icon: <Bot size={32} />, 
      name: 'AI & Machine Learning', 
      courses: 2, 
      color: 'bg-emerald-100 text-emerald-500' 
    },
    { 
      icon: <Lock size={32} />, 
      name: 'Cryptography', 
      courses: 1, 
      color: 'bg-slate-100 text-slate-500' 
    },
    { 
      icon: <Blocks size={32} />, 
      name: 'Blockchain', 
      courses: 1, 
      color: 'bg-amber-100 text-amber-500' 
    },
    { 
      icon: <Pencil size={32} />, 
      name: 'UI/UX Design', 
      courses: 1, 
      color: 'bg-rose-100 text-rose-500' 
    },
    { 
      icon: <Zap size={32} />, 
      name: 'Prompt Engineering', 
      courses: 1, 
      color: 'bg-lime-100 text-lime-500' 
    },
    { 
      icon: <ShoppingCart size={32} />, 
      name: 'E-commerce (Shopify)', 
      courses: 1, 
      color: 'bg-fuchsia-100 text-fuchsia-500' 
    },
    { 
      icon: <BarChart3 size={32} />, 
      name: 'Project Management', 
      courses: 1, 
      color: 'bg-sky-100 text-sky-500' 
    },
    { 
      icon: <Briefcase size={32} />, 
      name: 'Business Analytics', 
      courses: 1, 
      color: 'bg-gray-100 text-gray-500' 
    },
    { 
      icon: <Users size={32} />, 
      name: 'AI Literacy & Soft Skills', 
      courses: 1, 
      color: 'bg-orange-100 text-orange-400' 
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Top Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore our Popular Categories
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-2 rounded-full hover:border-blue-500 hover:text-blue-500 transition text-gray-700 dark:text-gray-300">
            All Categories
          </button>
        </div>

        {/* Desktop Slider View */}
        <div className="hidden lg:block relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg hover:border-blue-500 transition cursor-pointer group"
              >
                <div className={`${category.color} dark:bg-blue-900/30 dark:text-blue-400 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-base">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.courses} {category.courses === 1 ? 'Course' : 'Courses'}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>
          )}
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg hover:border-blue-500 transition cursor-pointer group"
            >
              <div className={`${category.color} dark:bg-blue-900/30 dark:text-blue-400 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {category.courses} {category.courses === 1 ? 'Course' : 'Courses'}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button for Mobile */}
        <div className="lg:hidden flex justify-center mt-8">
          <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-full hover:border-blue-500 hover:text-blue-500 transition text-gray-700 dark:text-gray-300">
            View All {categories.length} Categories
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CategoriesSection;
