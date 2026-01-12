'use client';

import React, { useState, useMemo } from 'react';
import { CourseCard } from '@/components/CourseCard';
import { GetCoursesQueryResult } from '@/sanity.types';

// Client component for course listing with filters
export default function CourseListingClient({ initialCourses }: { initialCourses: GetCoursesQueryResult }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>(['All']);
    initialCourses.forEach(course => {
      if (course.category?.name) {
        cats.add(course.category.name);
      }
    });
    return Array.from(cats);
  }, [initialCourses]);

  // Filter and sort courses
  const filteredAndSortedCourses = useMemo(() => {
    const filtered = initialCourses.filter(course => {
      // Search filter
      const matchesSearch = !searchQuery || 
        course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category?.name?.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'All' || 
        course.category?.name === selectedCategory;

      // Price filter
      const coursePrice = course.price ?? 0;
      let matchesPrice = true;
      if (priceRange === 'Free') {
        matchesPrice = coursePrice === 0;
      } else if (priceRange === 'Paid') {
        matchesPrice = coursePrice > 0;
      } else if (priceRange === 'PKR 0-5,000') {
        matchesPrice = coursePrice > 0 && coursePrice <= 5000;
      } else if (priceRange === 'PKR 5,000-10,000') {
        matchesPrice = coursePrice > 5000 && coursePrice <= 10000;
      } else if (priceRange === 'PKR 10,000+') {
        matchesPrice = coursePrice > 10000;
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return (a.price ?? 0) - (b.price ?? 0);
        case 'price-high':
          return (b.price ?? 0) - (a.price ?? 0);
        case 'newest':
          return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
        case 'oldest':
          return new Date(a._createdAt).getTime() - new Date(b._createdAt).getTime();
        case 'title-asc':
          return (a.title || '').localeCompare(b.title || '');
        case 'title-desc':
          return (b.title || '').localeCompare(a.title || '');
        default: // 'popular'
          return 0; // Keep original order for popular
      }
    });

    return filtered;
  }, [initialCourses, searchQuery, selectedCategory, priceRange, sortBy]);

  const priceRanges = ['All', 'Free', 'Paid', 'PKR 0-5,000', 'PKR 5,000-10,000', 'PKR 10,000+'];
  const sortOptions = [
    { value: 'popular', label: 'Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title-asc', label: 'Title: A-Z' },
    { value: 'title-desc', label: 'Title: Z-A' },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">

      
      {/* Page Header */}
      <div className="bg-lama text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-lg opacity-90">Explore our wide range of courses and start learning today</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24 border border-border">
              <h3 className="font-bold text-lg mb-4 text-foreground">Filters</h3>
              
              {/* Search Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Search</h4>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg bg-secondary/80 px-4 py-2 text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Category</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range}
                        onChange={() => setPriceRange(range)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setPriceRange('All');
                }}
                className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition font-medium"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">
                Showing {filteredAndSortedCourses.length} of {initialCourses.length} courses
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-muted-foreground">Sort by:</label>
                <select 
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-lg px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredAndSortedCourses.length === 0 ? (
              <div className="bg-card rounded-lg p-12 text-center border border-border">
                <p className="text-muted-foreground text-lg">No courses found matching your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange('All');
                  }}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredAndSortedCourses.map((course) => (
                  <CourseCard
                    key={course._id}
                    course={course}
                    href={`/courses/${course.slug}`}
                  />
                ))}
              </div>
            )}

            {/* Pagination - can be added later if needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

