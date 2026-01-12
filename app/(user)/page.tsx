import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/Categories';
import FeaturedCourses from '@/components/sections/FeaturedCourses';
import LearnPressAddOns from '@/components/sections/LearnPress';
import StatsSection from '@/components/sections/Stats';
import GrowYourSkill from '@/components/sections/GrowYourSkill';
import WordPressThemeBanner from '@/components/sections/WordPressThemeBanner';
import StudentFeedbacks from '@/components/sections/StudentFeedbacks';
import Newsletter from '@/components/sections/Newsletter';
import LatestArticles from '@/components/sections/LatestArticles';
import Footer from '@/components/sections/Footer';
import LogoTicker from '@/components/sections/LogoTicker';
import ServiceSolutionsSection from '@/components/sections/ServiceSolutionsSection';

export const dynamic = "force-static";
export const revalidate = 3600;

const App = async () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <HeroSection />
      <LogoTicker/>
      <ServiceSolutionsSection/>
      <CategoriesSection />
      <LearnPressAddOns />
      <FeaturedCourses />
      <StatsSection />
      <GrowYourSkill />
      <StudentFeedbacks />
      <Newsletter />
      <LatestArticles />
      <WordPressThemeBanner />
      <Footer />
    </div>
  );
};

export default App;
