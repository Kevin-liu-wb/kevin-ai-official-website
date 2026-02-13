'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { LogoWall } from '@/components/logo-wall';

interface HeroProps {
  lang: string;
  t: any;
}

export function Hero({ lang, t }: HeroProps) {
  const isZh = lang === 'zh-CN';
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Stripe Tilted Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Purple Blob - tilted -15deg */}
        <div 
          className="absolute -top-[15%] -left-[5%] w-[70%] h-[70%] 
          bg-gradient-to-br from-[#635BFF] via-[#7C3AED] to-[#A855F7]
          rounded-full blur-[100px]"
          style={{ transform: 'rotate(-15deg)', opacity: 0.7 }}
        />
        
        {/* Secondary Blue Blob - tilted 20deg */}
        <div 
          className="absolute top-[0%] -right-[15%] w-[55%] h-[55%]
          bg-gradient-to-br from-[#00D4FF] via-[#06B6D4] to-[#0891B2]
          rounded-full blur-[80px]"
          style={{ transform: 'rotate(20deg)', opacity: 0.5 }}
        />
        
        {/* Accent Pink Blob - bottom */}
        <div 
          className="absolute bottom-[10%] left-[20%] w-[45%] h-[45%]
          bg-gradient-to-br from-[#FF4ECD] via-[#F472B6] to-[#E879F9]
          rounded-full blur-[80px]"
          style={{ opacity: 0.35 }}
        />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* White overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg"
          >
            <span className="block">{t.hero.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mb-6 leading-relaxed drop-shadow"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons - Stripe Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href={`/${lang}/ecosystem-platform/`}>
              <Button
                className="bg-[#635BFF] hover:bg-[#5249e0] text-white px-6 py-3 text-base font-semibold rounded-md shadow-md hover:shadow-lg transition-all inline-flex items-center"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href={`/${lang}/contact/`}>
              <Button
                variant="outline"
                className="border-2 border-[#0A2540]/20 text-[#0A2540] hover:bg-[#0A2540]/5 px-6 py-3 text-base font-semibold rounded-md transition-all"
              >
                {t.hero.ctaSecondary}
              </Button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl"
          >
            {[
              { value: '300+', label: isZh ? '服务保险公司' : 'Insurance Companies' },
              { value: '400+', label: isZh ? '全球成功案例' : 'Global Cases' },
              { value: '20+', label: isZh ? '年行业经验' : 'Years Experience' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 mt-2 font-medium drop-shadow">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo Wall Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F6F9FC] rounded-2xl py-6 px-4 sm:px-8">
            <LogoWall />
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Visible on first screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
      >
        <span className="text-xs uppercase tracking-widest drop-shadow">{isZh ? '向下滚动' : 'Scroll'}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
