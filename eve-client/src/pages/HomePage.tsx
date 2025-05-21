import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import PromotionSection from '../components/home/PromotionSection';
import PopularRoutesSection from '../components/home/PopularRoutesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewFeaturesSection from '../components/home/NewFeaturesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PromotionSection title="Ưu đãi nổi bật" />
      <PopularRoutesSection />
      <PromotionSection title="Ưu đãi thanh toán online" />
      <NewFeaturesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
