'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/motion/fade-in';
import { StaggerContainer, StaggerItem } from '@/components/motion/stagger-container';
import { Globe, Shield, Layers } from 'lucide-react';
import { features } from '@/lib/constants';

interface FeaturesProps {
  lang: string;
  t: any;
}

const iconMap: { [key: string]: React.ElementType } = {
  Globe,
  Shield,
  Layers
};

export function Features({ lang, t }: FeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stripe-dark mb-4">
            {t.features.title}
          </h2>
          <p className="text-lg text-stripe-gray max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Globe;
            return (
              <StaggerItem key={feature.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-stripe-purple via-stripe-blue to-stripe-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">
                    {lang === 'zh-CN' ? feature.title : feature.titleEn}
                  </h3>
                  
                  <p className="text-stripe-gray">
                    {lang === 'zh-CN' ? feature.description : feature.descriptionEn}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
