import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const LatestArticles: React.FC = () => {
  const articles = [
    {
      image: '/article1.png',
      category: 'WEB DEVELOPMENT',
      date: 'November 15, 2025',
      title: 'Building Scalable Web Solutions for Modern Businesses',
      excerpt: 'Discover how responsive, secure websites drive business growth and customer engagement.',
    },
    {
      image: '/article2.png',
      category: 'DIGITAL MARKETING',
      date: 'November 12, 2025',
      title: 'Mastering SEO & Social Media for Brand Success',
      excerpt: 'Learn proven strategies to boost your online presence and reach your target audience.',
    },
    {
      image: '/article3.png',
      category: 'MOBILE APPS',
      date: 'November 10, 2025',
      title: 'The Future of Mobile App Development',
      excerpt: 'Explore how Android, iOS, and hybrid apps are transforming user experiences.',
    },
  ];
  
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Latest Articles</h2>
              <p className="text-gray-600 dark:text-gray-300">Explore our Free Articles</p>
            </div>
            <button className="hidden md:flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-2 rounded-full hover:border-blue-500 hover:text-blue-500 transition text-gray-700 dark:text-gray-300">
              All Articles
            </button>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span className="text-blue-500 font-semibold">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 dark:text-white mb-3 text-base sm:text-lg group-hover:text-blue-500 transition line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <button className="text-blue-500 hover:text-blue-600 font-medium flex items-center gap-2 text-sm sm:text-base">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default LatestArticles;
