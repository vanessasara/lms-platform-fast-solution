import React from 'react';
import { getCourses } from '@/sanity/lib/courses/getCourses';
import CourseListingClient from './CourseListingClient';

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate at most every hour

// Server component that fetches data
export default async function AllCoursesPage() {
  const courses = await getCourses();

  return <CourseListingClient initialCourses={courses} />;
}

