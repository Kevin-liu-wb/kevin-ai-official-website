import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

const newsSlugs = [
  'ebaocloud-digital-transformation',
  'insurtech-innovation-award',
  'partnership-announcement'
];

export function generateStaticParams() {
  const languages = ['zh-CN', 'en'];
  const params = [];
  
  for (const lng of languages) {
    for (const slug of newsSlugs) {
      params.push({ lng, slug });
    }
  }
  
  return params;
}

export default function Page({ params: { lng, slug } }: { params: { lng: string; slug: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const title = t.about?.news?.title ?? 'News';
  
  const newsTitles: Record<string, { zh: string; en: string }> = {
    'ebaocloud-digital-transformation': {
      zh: '易保云数字化转型解决方案荣获行业创新奖',
      en: 'eBaoCloud Digital Transformation Solution Wins Industry Innovation Award'
    },
    'insurtech-innovation-award': {
      zh: '易保科技荣获年度保险科技创新奖',
      en: 'eBaoTech Wins Insurtech Innovation Award of the Year'
    },
    'partnership-announcement': {
      zh: '易保与多家保险公司达成战略合作',
      en: 'eBao Announces Strategic Partnership with Multiple Insurers'
    }
  };
  
  const newsTitle = newsTitles[slug]?.[isZh ? 'zh' : 'en'] ?? slug;

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-stripe-purple/10 text-stripe-purple rounded-full text-sm font-medium mb-4">
              {isZh ? '新闻动态' : 'News'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-stripe-dark mb-4">
              {newsTitle}
            </h1>
            <p className="text-stripe-gray">
              {isZh ? '2026年2月' : 'February 2026'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-stripe-gray mb-6">
              {isZh 
                ? '易保网络技术（上海）有限公司今日宣布，其数字化转型解决方案荣获行业创新奖。这一奖项肯定了易保在保险科技领域的创新能力和技术实力。'
                : 'eBaoTech Network Technology (Shanghai) Co., Ltd. today announced that its digital transformation solution has won the Industry Innovation Award. This award recognizes eBao\'s innovative capabilities and technological strength in the insurtech field.'}
            </p>
            <p className="text-stripe-gray mb-6">
              {isZh 
                ? '易保云平台凭借其开放、灵活、可扩展的架构，已经服务全球300多家保险公司，帮助他们实现数字化转型。'
                : 'With its open, flexible, and scalable architecture, eBaoCloud has served over 300 insurance companies globally, helping them achieve digital transformation.'}
            </p>
            <p className="text-stripe-gray mb-6">
              {isZh 
                ? '未来，易保将继续投入技术创新，为保险行业提供更多优质的数字化解决方案。'
                : 'In the future, eBao will continue to invest in technological innovation to provide more high-quality digital solutions for the insurance industry.'}
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <a 
              href={`/${lng}/about/news/`}
              className="inline-flex items-center text-stripe-purple hover:text-stripe-purple/80 font-medium"
            >
              ← {isZh ? '返回新闻列表' : 'Back to News'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
