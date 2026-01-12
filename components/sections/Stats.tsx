import React from 'react';

const StatsSection: React.FC = () => {
    const stats = [
      { number: '250+', label: 'Active Students' },
      { number: '873', label: 'Total Courses' },
      { number: '158', label: 'Instructors' },
      { number: '100%', label: 'Satisfaction Rate' },
    ];
  
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lama mb-2">{stat.number}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default StatsSection;
  
