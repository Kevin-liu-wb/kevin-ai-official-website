import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function ClientsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const clients = [
    {
      icon: Building,
      title: isZh ? '保险公司' : 'Insurance Companies',
      href: `/${lng}/clients/insurers/`,
      description: isZh ? '服务全球300多家保险公司' : 'Serving 300+ insurance companies globally',
      stats: ['300+', isZh ? '保险公司' : 'Insurers']
    },
    {
      icon: Users,
      title: isZh ? '渠道及金融创新公司' : 'Channels & FinTech',
      href: `/${lng}/clients/channels/`,
      description: isZh ? '赋能保险分销渠道' : 'Empowering insurance distribution channels',
      stats: ['500+', isZh ? '渠道伙伴' : 'Channel Partners']
    },
    {
      icon: Handshake,
      title: isZh ? '合作伙伴' : 'Partners',
      href: `/${lng}/clients/partners/`,
      description: isZh ? '共建保险科技生态' : 'Building insurtech ecosystem together',
      stats: ['50+', isZh ? '战略伙伴' : 'Strategic Partners']
    }
  ];

  const achievements = isZh ? [
    '服务超过300家保险公司',
    '覆盖全球20+国家和地区',
    '处理保单金额超过1000亿',
    '连续5年行业领先'
  ] : [
    'Serving 300+ insurance companies',
    'Coverage across 20+ countries/regions',
    'Policy premium processed over 100B',
    '5 consecutive years industry leader'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '客户及合作伙伴' : 'Clients & Partners'}
            </h1>
            <p className="text-xl text-stripe-gray mb-4">
              {isZh 
                ? '易保服务于300多家保险公司及众多保险代理、经纪公司及其它生态伙伴'
                : 'eBao serves 300+ insurance companies and numerous agents, brokers and ecosystem partners'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={client.href} className="block group">
                  <div className="bg-stripe-light rounded-2xl p-8 h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mb-6">
                      <client.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-stripe-dark mb-2 group-hover:text-stripe-purple transition-colors">
                      {client.title}
                    </h3>
                    <p className="text-stripe-gray mb-4">{client.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-stripe-purple">{client.stats[0]}</span>
                      <span className="text-stripe-gray text-sm">{client.stats[1]}</span>
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '值得信赖的合作伙伴' : 'Trusted Partner'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '从灵活的初创企业到保费收入400多亿的保险公司，易保云中台已有300多个全球成功案例。我们与客户建立了长期稳定的合作关系。'
                  : 'From agile startups to insurers with 40B+ premium, eBaoCloud has 300+ global success cases. We have established long-term stable cooperative relationships with our customers.'}
              </p>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-stripe-purple" />
                    <span className="text-stripe-gray">{achievement}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-purple mb-2">300+</div>
                    <div className="text-stripe-gray">{isZh ? '保险公司' : 'Insurers'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">20+</div>
                    <div className="text-stripe-gray">{isZh ? '国家和地区' : 'Countries'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">100B+</div>
                    <div className="text-stripe-gray">{isZh ? '保额' : 'Premium'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">99%</div>
                    <div className="text-stripe-gray">{isZh ? '客户满意度' : 'Satisfaction'}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '成为我们的合作伙伴' : 'Become Our Partner'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '加入我们的合作伙伴网络，共同推动保险行业的数字化转型'
              : 'Join our partner network to jointly promote digital transformation in the insurance industry'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
