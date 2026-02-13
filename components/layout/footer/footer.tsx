import Link from 'next/link';

interface FooterProps {
  lang: string;
  t: any;
}

export function Footer({ lang, t }: FooterProps) {
  const footerLinks = [
    {
      title: lang === 'zh-CN' ? '产品' : 'Products',
      links: [
        { label: lang === 'zh-CN' ? '保险生态平台' : 'Ecosystem Platform', href: `/${lang}/ecosystem-platform/` },
        { label: lang === 'zh-CN' ? '核心系统现代化' : 'Core Modernization', href: `/${lang}/core-modernization/` },
        { label: lang === 'zh-CN' ? '客户及合作伙伴' : 'Clients & Partners', href: `/${lang}/clients/` },
      ]
    },
    {
      title: lang === 'zh-CN' ? '公司' : 'Company',
      links: [
        { label: lang === 'zh-CN' ? '关于我们' : 'About Us', href: `/${lang}/about/company/` },
        { label: lang === 'zh-CN' ? '工作机会' : 'Careers', href: `/${lang}/about/careers/` },
        { label: lang === 'zh-CN' ? '联系我们' : 'Contact', href: `/${lang}/contact/` },
      ]
    },
    {
      title: lang === 'zh-CN' ? '资源' : 'Resources',
      links: [
        { label: lang === 'zh-CN' ? '资源中心' : 'Resources', href: `/${lang}/about/resources/` },
        { label: lang === 'zh-CN' ? '新闻' : 'News', href: `/${lang}/about/news/` },
        { label: lang === 'zh-CN' ? '活动' : 'Events', href: `/${lang}/about/events/` },
      ]
    }
  ];

  return (
    <footer className="bg-stripe-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-stripe-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">e</span>
              </div>
              <span className="font-bold text-xl">易保云</span>
            </div>
            <p className="text-gray-400 text-sm">
              {lang === 'zh-CN' 
                ? '让保险变得容易' 
                : 'Making Insurance Easy'}
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
          <div className="flex gap-6 text-sm">
            <Link href={`/${lang}/legal/`} className="text-gray-400 hover:text-white transition-colors">
              {t.footer.legal}
            </Link>
            <Link href={`/${lang}/privacy/`} className="text-gray-400 hover:text-white transition-colors">
              {t.footer.privacy}
            </Link>
            <Link href={`/${lang}/terms/`} className="text-gray-400 hover:text-white transition-colors">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
