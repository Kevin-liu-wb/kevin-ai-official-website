import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cloud, Shield, Users, Smartphone, Building, Globe, ArrowRight } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function SaaSPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas;

  const apps = [
    {
      icon: Building,
      title: data.backOffice.title,
      subtitle: data.backOffice.subtitle,
      href: `/${lng}/saas/back-office`,
      description: data.backOffice.description
    },
    {
      icon: Users,
      title: data.frontOffice.title,
      subtitle: data.frontOffice.subtitle,
      href: `/${lng}/saas/front-office`,
      description: data.frontOffice.description
    },
    {
      icon: Globe,
      title: data.external.title,
      subtitle: data.external.subtitle,
      href: `/${lng}/saas/external`,
      description: data.external.description
    },
    {
      icon: Cloud,
      title: data.insuremoIso.title,
      subtitle: data.insuremoIso.subtitle,
      href: `/${lng}/saas/insuremo-iso`,
      description: data.insuremoIso.description
    },
    {
      icon: Shield,
      title: data.mytrucksure.title,
      subtitle: data.mytrucksure.subtitle,
      href: `/${lng}/saas/mytrucksure`,
      description: data.mytrucksure.description
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-stripe-gray mb-4">
              {data.subtitle}
            </p>
            <p className="text-lg text-stripe-gray">
              {data.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={app.href} className="block group">
                  <div className="bg-stripe-light rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mb-6">
                      <app.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-stripe-dark mb-2 group-hover:text-stripe-purple transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-stripe-purple font-medium mb-3">{app.subtitle}</p>
                    <p className="text-stripe-gray text-sm">{app.description}</p>
                    <div className="mt-4 flex items-center text-stripe-purple text-sm font-medium">
                      {isZh ? '了解更多' : 'Learn more'}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '为什么选择我们的SaaS应用？' : 'Why Choose Our SaaS Apps?'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-white rounded-2xl p-6 text-center">
                <Cloud className="w-12 h-12 text-stripe-purple mx-auto mb-4" />
                <h3 className="text-lg font-bold text-stripe-dark mb-2">{isZh ? '云端部署' : 'Cloud Deployment'}</h3>
                <p className="text-stripe-gray text-sm">{isZh ? '无需基础设施，按需使用' : 'No infrastructure needed, pay as you go'}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-stripe-blue mx-auto mb-4" />
                <h3 className="text-lg font-bold text-stripe-dark mb-2">{isZh ? '安全可靠' : 'Secure & Reliable'}</h3>
                <p className="text-stripe-gray text-sm">{isZh ? '企业级安全认证' : 'Enterprise-grade security'}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-6 text-center">
                <Smartphone className="w-12 h-12 text-stripe-pink mx-auto mb-4" />
                <h3 className="text-lg font-bold text-stripe-dark mb-2">{isZh ? '移动优先' : 'Mobile-First'}</h3>
                <p className="text-stripe-gray text-sm">{isZh ? '随时随地访问' : 'Access anywhere'}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '准备好开始了吗？' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们，了解更多关于SaaS应用的详细信息'
              : 'Contact us to learn more about our SaaS applications'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
