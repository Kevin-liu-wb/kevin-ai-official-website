import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ContactPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const contactInfo = [
    {
      icon: MapPin,
      title: isZh ? '地址' : 'Address',
      content: isZh 
        ? '上海市浦东新区张江高科技园区'
        : 'Zhangjiang Hi-Tech Park, Pudong, Shanghai'
    },
    {
      icon: Phone,
      title: isZh ? '电话' : 'Phone',
      content: '+86 21 6163 5888'
    },
    {
      icon: Mail,
      title: isZh ? '邮箱' : 'Email',
      content: 'contact@ebaocloud.com'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '联系我们' : 'Contact Us'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh
                ? '如果您有任何问题或需求，请随时与我们联系'
                : 'If you have any questions or needs, please feel free to contact us'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{info.title}</h3>
                  <p className="text-stripe-gray">{info.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
