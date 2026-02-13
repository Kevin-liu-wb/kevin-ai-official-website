'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeaderProps {
  lang: string;
  t: any;
}

export function Header({ lang, t }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isZh = lang === 'zh-CN';

  // 导航菜单配置 - 按原网站结构
  const navItems = [
    {
      label: isZh ? '保险生态平台' : 'Ecosystem Platform',
      href: `/${lang}/ecosystem-platform/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '保险生态平台' : 'Ecosystem Platform', 
          href: `/${lang}/ecosystem-platform/`,
          description: isZh ? '保险产品、连接' : 'Insurance products & connectivity'
        },
        { 
          title: isZh ? '车商云' : 'Auto Dealer Cloud', 
          href: `/${lang}/ecosystem-platform/autoshop/` 
        },
        { 
          title: isZh ? '移动顾问' : 'Mobile Advisor', 
          href: `/${lang}/ecosystem-platform/mobile-advisor/` 
        },
        { 
          title: isZh ? '泰国保险分销云' : 'Thailand Distribution', 
          href: `/${lang}/ecosystem-platform/distribution/` 
        },
      ]
    },
    {
      label: isZh ? 'SaaS/应用' : 'SaaS/Apps',
      href: `/${lang}/saas/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '核心系统现代化开放框架' : 'Core Modernization Framework',
          href: `/${lang}/core-modernization/`,
          subItems: [
            { label: isZh ? '寿险应用开放框架' : 'Life Insurance Framework', href: `/${lang}/core-modernization/gemini-framework/` },
            { label: isZh ? '产险应用开放框架' : 'General Insurance Framework', href: `/${lang}/core-modernization/sample-apps/` },
          ]
        },
        { 
          title: isZh ? '后台用户应用' : 'Back-office Apps', 
          href: `/${lang}/saas/back-office/` 
        },
        { 
          title: isZh ? '前端用户应用' : 'Front-office Apps', 
          href: `/${lang}/saas/front-office/` 
        },
        { 
          title: isZh ? '外部用户应用' : 'External User Apps',
          href: `/${lang}/saas/external/`,
          subItems: [
            { label: 'InsureMO ISO Middle Office', href: `/${lang}/saas/insuremo-iso/` },
            { label: 'MyTruckSure SaaS', href: `/${lang}/saas/mytrucksure/` },
          ]
        },
      ]
    },
    {
      label: isZh ? '核心系统现代化' : 'Core Modernization',
      href: `/${lang}/core-modernization/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '样例应用和源代码库' : 'Sample Apps & Source Code', 
          href: `/${lang}/core-modernization/sample-apps/` 
        },
        { 
          title: isZh ? '寿险应用开放框架' : 'Life Insurance Framework', 
          href: `/${lang}/core-modernization/gemini-framework/` 
        },
      ]
    },
    {
      label: isZh ? '客户及合作伙伴' : 'Clients & Partners',
      href: `/${lang}/clients/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '保险公司' : 'Insurance Companies', 
          href: `/${lang}/clients/insurers/` 
        },
        { 
          title: isZh ? '渠道及金融创新公司' : 'Channels & FinTech', 
          href: `/${lang}/clients/channels/` 
        },
        { 
          title: isZh ? '合作伙伴' : 'Partners', 
          href: `/${lang}/clients/partners/` 
        },
      ]
    },
    {
      label: isZh ? '关于我们' : 'About Us',
      href: `/${lang}/about/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '公司简介' : 'Company Overview', 
          href: `/${lang}/about/company/` 
        },
        { 
          title: isZh ? '资源中心' : 'Resources',
          href: `/${lang}/about/resources/`,
          subItems: [
            { label: isZh ? '宣传册' : 'Brochures', href: `/${lang}/about/resources/` },
            { label: isZh ? '成功案例' : 'Case Studies', href: `/${lang}/about/case-studies/` },
          ]
        },
        { 
          title: isZh ? '新闻与活动' : 'News & Events',
          href: `/${lang}/about/news/`,
          subItems: [
            { label: isZh ? '新闻' : 'News', href: `/${lang}/about/news/` },
            { label: isZh ? '市场活动' : 'Events', href: `/${lang}/about/events/` },
            { label: isZh ? '易保相关报道' : 'In the News', href: `/${lang}/about/news/` },
          ]
        },
        { 
          title: isZh ? '企业社会责任' : 'CSR', 
          href: `/${lang}/about/csr/` 
        },
        { 
          title: isZh ? '工作机会' : 'Careers', 
          href: `/${lang}/about/careers/` 
        },
      ]
    },
    {
      label: isZh ? '联系我们' : 'Contact Us',
      href: `/${lang}/contact/`,
      hasDropdown: true,
      dropdownItems: [
        { 
          title: isZh ? '办公室' : 'Offices', 
          href: `/${lang}/contact/` 
        },
        { 
          title: isZh ? '让易保联系您' : 'Let Us Contact You', 
          href: `/${lang}/contact/enquiry/` 
        },
      ]
    },
  ];

  const toggleLang = () => {
    const newLang = isZh ? 'en' : 'zh-CN';
    window.location.href = window.location.pathname.replace(`/${lang}/`, `/${newLang}/`) || `/${newLang}/`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 flex-shrink-0 mr-8">
            <div className="w-8 h-8 bg-stripe-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">e</span>
            </div>
            <span className="font-bold text-xl text-stripe-dark">
              {isZh ? '易保云' : 'eBaoCloud'}
            </span>
          </Link>

          {/* Desktop Navigation - 靠左排列 */}
          <nav className="hidden lg:flex items-center gap-0 flex-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100 whitespace-nowrap',
                    isScrolled ? 'text-stripe-gray' : 'text-stripe-gray'
                  )}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[280px]">
                        <div className="space-y-1">
                          {item.dropdownItems.map((dropItem) => (
                            <div key={dropItem.title}>
                              <Link
                                href={dropItem.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="font-medium text-stripe-dark text-sm">
                                  {dropItem.title}
                                </div>
                                {dropItem.description && (
                                  <div className="text-xs text-stripe-gray mt-1">
                                    {dropItem.description}
                                  </div>
                                )}
                              </Link>
                              {/* 三级菜单 */}
                              {dropItem.subItems && (
                                <div className="ml-4 space-y-0">
                                  {dropItem.subItems.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      className="block px-3 py-2 text-sm text-stripe-gray hover:text-stripe-purple transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Section - 靠右 */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stripe-gray hover:text-stripe-purple transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{isZh ? 'EN' : '中文'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stripe-dark ml-auto"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-stripe-gray hover:text-stripe-purple font-medium hover:bg-gray-50 rounded-lg"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdownItems.map((dropItem) => (
                        <div key={dropItem.title}>
                          <Link
                            href={dropItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-stripe-gray hover:text-stripe-purple"
                          >
                            {dropItem.title}
                          </Link>
                          {dropItem.subItems && (
                            <div className="ml-4 space-y-0">
                              {dropItem.subItems.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block px-4 py-1.5 text-xs text-stripe-gray hover:text-stripe-purple"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="border-t pt-4 mt-2">
                <button
                  onClick={() => {
                    toggleLang();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-3 text-stripe-gray w-full text-left"
                >
                  <Globe className="w-4 h-4" />
                  <span>{isZh ? 'Switch to English' : '切换到中文'}</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
