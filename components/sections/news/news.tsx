'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/motion/fade-in';
import { newsItems } from '@/lib/constants';
import { ArrowRight, Calendar } from 'lucide-react';

interface NewsProps {
  lang: string;
  t: any;
}

export function News({ lang, t }: NewsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stripe-dark mb-2">
              {t.news.title}
            </h2>
            <p className="text-stripe-gray">{t.news.subtitle}</p>
          </div>
          <Link 
            href={`/${lang}/news`}
            className="flex items-center gap-2 text-stripe-purple hover:text-stripe-blue transition-colors font-medium"
          >
            {t.news.readMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <Link href={`/${lang}/news/${item.id}`}>
                <div className="group bg-stripe-light rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-stripe-purple mb-3">
                    <span className="bg-stripe-purple/10 px-3 py-1 rounded-full">
                      {lang === 'zh-CN' ? item.category : item.categoryEn}
                    </span>
                  </div>
                  <h3 className="font-semibold text-stripe-dark mb-3 group-hover:text-stripe-purple transition-colors line-clamp-2">
                    {lang === 'zh-CN' ? item.title : item.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-stripe-gray">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
