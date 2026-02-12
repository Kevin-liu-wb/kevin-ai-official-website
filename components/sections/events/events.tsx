'use client';

import Link from 'next/link';
import { FadeIn } from '@/components/motion/fade-in';
import { events } from '@/lib/constants';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface EventsProps {
  lang: string;
  t: any;
}

export function Events({ lang, t }: EventsProps) {
  return (
    <section className="py-24 bg-stripe-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stripe-dark mb-2">
              {t.events.title}
            </h2>
            <p className="text-stripe-gray">{t.events.subtitle}</p>
          </div>
          <Link 
            href={`/${lang}/events`}
            className="flex items-center gap-2 text-stripe-purple hover:text-stripe-blue transition-colors font-medium"
          >
            {t.events.readMore}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <FadeIn key={event.id} delay={index * 0.1}>
              <Link href={`/${lang}/events/${event.id}`}>
                <div className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex flex-col items-center justify-center text-white">
                    <span className="text-2xl font-bold">{event.date.split('-')[2]}</span>
                    <span className="text-xs">
                      {new Date(event.date).toLocaleDateString(lang === 'zh-CN' ? 'zh-CN' : 'en', { month: 'short' })}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-stripe-dark mb-2 group-hover:text-stripe-purple transition-colors">
                      {lang === 'zh-CN' ? event.title : event.titleEn}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-stripe-gray">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {lang === 'zh-CN' ? event.location : event.locationEn}
                      </span>
                    </div>
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
