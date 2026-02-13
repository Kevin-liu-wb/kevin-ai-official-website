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
      {/* Stripe Hero Background - White edges, colorful ribbon in middle-right */}
      <div className="absolute inset-0">
        {/* White gradient mask - white on both sides, transparent in middle */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, 
              white 0%, 
              white 30%, 
              transparent 45%, 
              transparent 75%, 
              white 90%, 
              white 100%
            )`,
          }}
        />

        {/* Colored gradient blobs - concentrated in middle-right area */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Purple blob - middle-right, main color */}
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[5%] right-[20%] w-[50%] h-[70%]"
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-[#635BFF] via-[#8B5CF6] to-[#A855F7] rounded-full blur-[100px]"
            />
          </motion.div>

          {/* Blue blob - right side, secondary */}
          <motion.div
            animate={{
              x: [0, -60, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute top-[20%] right-[5%] w-[40%] h-[50%]"
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-[#00D4FF] via-[#06B6D4] to-[#0891B2] rounded-full blur-[80px]"
            />
          </motion.div>

          {/* Pink blob - bottom right */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="absolute bottom-[10%] right-[25%] w-[30%] h-[30%]"
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-[#FF4ECD] via-[#F472B6] to-[#E879F9] rounded-full blur-[60px]"
            />
          </motion.div>

          {/* Yellow blob - bottom right accent */}
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[20%] right-[40%] w-[25%] h-[25%]"
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-[#FFCB57] via-[#FBBF24] to-[#F59E0B] rounded-full blur-[50px]"
            />
          </motion.div>

          {/* Red accent - middle */}
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute top-[40%] right-[30%] w-[20%] h-[20%]"
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-[#FF6B6B] via-[#F87171] to-[#EF4444] rounded-full blur-[40px] opacity-60"
            />
          </motion.div>
        </div>

        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block">{t.hero.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg sm:text-xl text-[#425466] max-w-2xl mb-6 leading-relaxed"
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
                <div className="text-3xl sm:text-4xl font-bold text-[#0A2540]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#425466] mt-2 font-medium">{stat.label}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#425466]"
      >
        <span className="text-xs uppercase tracking-widest">{isZh ? '向下滚动' : 'Scroll'}</span>
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
