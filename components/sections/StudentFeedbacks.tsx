import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const StudentFeedbacks: React.FC = () => {
    const feedbacks = [
      {
        text: "This platform has completely transformed my learning experience. The courses are in-depth, easy to understand, and the instructors are very supportive. I feel more confident in my skills than ever before!",
        name: "Noe Skeoch",
        role: "Student"
      },
      {
        text: "The interactive modules and real-world examples made every lesson engaging. I landed my first tech job after completing a course here—truly a life-changing experience!",
        name: "Jasmin Patel",
        role: "Graduate"
      },
      {
        text: "Amazing platform! The support team is responsive and the course material is always up-to-date. I wouldn&apos;t be where I am today without these lessons.",
        name: "Thomas Nguyen",
        role: "Web Developer"
      },
      {
        text: "I loved how flexible and accessible the classes were. I could learn at my own pace, whenever I wanted. Highly recommended for anyone looking to upskill.",
        name: "Emilia Rossi",
        role: "Designer"
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Student Feedbacks</h2>
            <p className="text-gray-600 dark:text-gray-300">What Students Say About Courses</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feedbacks.map((feedback, index) => (
              <div key={index} className="bg-card border border-border p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed line-clamp-4">{feedback.text}</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                      src="/student.png"
                      alt={feedback.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">{feedback.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feedback.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default StudentFeedbacks;
  
