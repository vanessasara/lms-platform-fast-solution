import React from 'react';
import Link from 'next/link';

const LearnPressAddOns: React.FC = () => {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-blue-600 font-semibold mb-2 block text-sm sm:text-base">
                TRANSFORM YOUR FUTURE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Fast Tech Skills - Learn, Develop & Secure Your Future
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                Fast Tech Skills is a contemporary e-learning solution to the education to employment gap. 
                We don&apos;t only impart a set of skills, we make careers. Upon completion, we provide direct 
                career placement with jobs starting at 50,000 PKR per month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-lama rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    Personalized Learning with Unique Student ID
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    Paid Internships (25,000 PKR)
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    Job Guarantee (50,000 PKR Starting Salary)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    27 Industry-Demand Courses
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href='/all-courses' className="bg-lama hover:bg-pink-300 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-lg text-sm sm:text-base">
                  Explore Courses
                </Link>
                <p className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-lg border border-gray-300 dark:border-gray-600 text-sm sm:text-base">
                  Enrollment: Rs. 1,000 | Course: Rs. 14,000
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 hidden lg:flex gap-4 items-center opacity-80">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl transform rotate-12 flex items-center justify-center text-white font-bold shadow-lg">
                💻
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl transform -rotate-12 flex items-center justify-center text-white font-bold shadow-lg">
                🎓
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform rotate-6 flex items-center justify-center text-white font-bold shadow-lg">
                💼
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl transform -rotate-6 flex items-center justify-center text-white font-bold shadow-lg">
                🚀
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default LearnPressAddOns;
