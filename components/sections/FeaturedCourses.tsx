import React from 'react';
import Link from 'next/link';
import { CourseCard } from '@/components/CourseCard';
import { getCourses } from '@/sanity/lib/courses/getCourses';

export const dynamic = "force-static";
export const revalidate = 3600;

const FeaturedCourses: React.FC = async () => {
  const courses = await getCourses();
  // Show only first 6 courses as featured
  const featuredCourses = courses.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Featured Courses</h2>
            <p className="text-gray-600 dark:text-gray-300">Explore our Popular Courses</p>
          </div>
          <Link 
            href="/all-courses"
            className="hidden md:flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-2 rounded-full hover:border-blue-500 hover:text-blue-500 transition text-gray-700 dark:text-gray-300"
          >
            All Courses
          </Link>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              href={`/courses/${course.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
