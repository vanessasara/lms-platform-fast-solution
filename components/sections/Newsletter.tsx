import React from 'react';
import { User } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <User size={24} className="sm:w-8 sm:h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">Let&apos;s Start With X Fast Group</h3>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="border-2 border-blue-500 text-blue-500 px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-pink30 dark:hover:bg-lama transition text-sm sm:text-base">
                  I&apos;m A Student
                </button>
                <button className="bg-lama text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-pink-300 transition text-sm sm:text-base">
                  Become Instructor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Newsletter;
