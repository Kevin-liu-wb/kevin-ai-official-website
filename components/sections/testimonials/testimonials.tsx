'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/motion/fade-in';
import { testimonials } from '@/lib/constants';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  lang: string;
  t: any;
}

export function Testimonials({ lang, t }: TestimonialsProps) {
  return (
    <section className="py-24 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-stripe-dark mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-stripe-gray max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-stripe-purple/20" />
                
                <p className="text-stripe-gray text-lg mb-6 leading-relaxed">
                  "{lang === 'zh-CN' ? testimonial.quote : testimonial.quoteEn}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-stripe-dark">{testimonial.author}</div>
                    <div className="text-sm text-stripe-gray">
                      {lang === 'zh-CN' ? testimonial.role : testimonial.roleEn}
                    </div>
                    <div className="text-sm text-stripe-purple font-medium">
                      {lang === 'zh-CN' ? testimonial.company : testimonial.companyEn}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
