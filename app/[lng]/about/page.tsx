import { FadeIn } from '@/components/motion/fade-in';
import { stats } from '@/lib/constants';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function AboutPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 via-stripe-blue/5 to-stripe-pink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '关于我们' : 'About Us'}
            </h1>
            <p className="text-xl text-stripe-gray mb-12">
              {isZh
                ? '秉承"让保险变得容易"的公司使命，易保为保险行业提供数字化解决方案。'
                : 'With the mission of "Making Insurance Easy", eBao provides digital solutions for the insurance industry.'}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-stripe-purple mb-2">{stat.value}</div>
                    <div className="text-sm text-stripe-gray">
                      {isZh ? stat.label : stat.labelEn}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
