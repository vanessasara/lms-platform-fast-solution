import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const GrowYourSkill: React.FC = () => {
  const features = [
    {
      title: 'Expert Industry Training',
      description: 'Courses developed by the best experts in the industry'
    },
    {
      title: 'Hands-On Projects',
      description: 'Real-world projects and interactive learning'
    },
    {
      title: 'Paid Internships',
      description: '15,000 PKR internship included in every course'
    },
    {
      title: 'Job Guarantee',
      description: 'Career placement starting at 50,000 PKR monthly'
    },
    {
      title: 'Flexible Learning',
      description: 'Access recorded lectures, live classes and quizzes anytime'
    },
    {
      title: 'Comprehensive Path',
      description: 'Basic, Intermediate, Advanced levels + Internship'
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[500px]">
              <Image
                src="/grow.png"
                alt="Grow Your Skills with Fast Tech Skills"
                fill
                className="object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-lama text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                27+ Courses
              </div>
              <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg">
                Job Guaranteed
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <span className="text-blue-600 font-semibold mb-2 block text-sm sm:text-base">
              FAST TECH SKILLS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Grow Your Skills<br />
              <span className="text-lama">With Fast Tech Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Fast Tech Skills is a contemporary e-learning solution to the education to employment gap. 
              We don&apos;t only impart a set of skills, we make careers. Upon successful completion, we provide 
              direct career placement to ensure that learning makes a real difference in your earnings.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-800 dark:text-white font-semibold text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-600">27+</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Courses</p>
              </div>
              <div className="text-center border-x border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-green-600">50K</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Starting Salary</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-600">100%</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Job Placement</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href='/all-courses' className="bg-lama hover:bg-pink-300 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-lg">
                Explore Courses
              </Link>
              <p className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white px-6 sm:px-8 py-3 rounded-full font-medium transition shadow-lg border border-gray-300 dark:border-gray-600">
                Enroll Now - Rs. 1,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourSkill;
