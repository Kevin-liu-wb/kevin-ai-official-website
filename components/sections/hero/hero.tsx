'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { LogoWall } from '@/components/logo-wall';

interface HeroProps {
  lang: string;
  t: any;
}

export function Hero({ lang, t }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Stripe-style Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient from top-right */}
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] bg-gradient-to-b from-[#635BFF]/5 to-transparent rounded-full blur-3xl" />
        
        {/* Very subtle grid pattern - Stripe style */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#635BFF]/10 text-sm text-[#635BFF] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#635BFF]" />
              {lang === 'zh-CN' ? '全球 300+ 保险公司信赖之选' : 'Trusted by 300+ Global Insurers'}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0A2540] mb-8 leading-[1.1] tracking-tight"
          >
            <span className="block">{t.hero.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl sm:text-2xl text-[#425466] max-w-2xl mb-10 leading-relaxed"
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
                variant="primary"
                className="bg-[#635BFF] text-white hover:bg-[#5249e0] px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={`/${lang}/contact/`}>
              <Button
                variant="secondary"
                className="bg-transparent border-2 border-[#0A2540]/20 text-[#0A2540] hover:border-[#0A2540]/40 hover:bg-[#0A2540]/5 px-8 py-6 text-lg font-semibold rounded-full transition-all"
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
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl"
          >
            {[
              { value: '300+', label: lang === 'zh-CN' ? '服务保险公司' : 'Insurance Companies' },
              { value: '400+', label: lang === 'zh-CN' ? '全球成功案例' : 'Global Cases' },
              { value: '20+', label: lang === 'zh-CN' ? '年行业经验' : 'Years Experience' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#0A2540]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#425466] mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo Wall Section - Moved up to first screen */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative z-10 mt-20 mb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#425466]/60 text-sm mb-8 uppercase tracking-wider font-medium">
            {lang === 'zh-CN' ? '受到行业领先企业的信赖' : 'Trusted by industry leaders'}
          </p>
          <div className="bg-[#F6F9FC] rounded-2xl py-10 px-8">
            <LogoWall />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
