import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Heart, FileCheck, Shield, Users, Database, Workflow } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function GeminiFrameworkPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const modules = [
    {
      icon: Database,
      title: isZh ? '产品工厂' : 'Product Factory',
      description: isZh 
        ? '灵活的产品配置引擎，支持快速产品创新和发布'
        : 'Flexible product configuration engine supporting rapid innovation'
    },
    {
      icon: FileCheck,
      title: isZh ? '保单管理' : 'Policy Management',
      description: isZh
        ? '全生命周期保单管理，从投保到理赔全流程覆盖'
        : 'Full lifecycle policy management from application to claims'
    },
    {
      icon: Heart,
      title: isZh ? '理赔服务' : 'Claims Service',
      description: isZh
        ? '智能理赔处理，提升理赔效率和客户满意度'
        : 'Intelligent claims processing for better efficiency and satisfaction'
    },
    {
      icon: Users,
      title: isZh ? '客户管理' : 'Customer Management',
      description: isZh
        ? '360度客户视图，支持精准营销和服务'
        : '360-degree customer view supporting precise marketing'
    },
    {
      icon: Workflow,
      title: isZh ? '流程引擎' : 'Process Engine',
      description: isZh
        ? '可视化的业务流程编排，灵活适应业务变化'
        : 'Visual business process orchestration for flexibility'
    },
    {
      icon: Shield,
      title: isZh ? '合规管理' : 'Compliance Management',
      description: isZh
        ? '内置合规检查，确保业务符合监管要求'
        : 'Built-in compliance checks ensuring regulatory adherence'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-blue/10 via-stripe-purple/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80" 
            alt="Life Insurance"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '寿险应用开放框架' : 'Life Insurance Open Framework'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '基于云中台的寿险核心系统开放框架，支持产品工厂、保单管理、理赔等全流程，帮助寿险公司快速构建数字化核心系统'
                : 'Life insurance core system framework based on cloud middleware, supporting full process from product factory to claims'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '技术白皮书' : 'Technical Whitepaper'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '预约演示' : 'Schedule Demo'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: isZh ? 'API接口' : 'APIs' },
              { value: '50+', label: isZh ? '微服务' : 'Microservices' },
              { value: '6', label: isZh ? '核心模块' : 'Core Modules' },
              { value: '99.9%', label: isZh ? '可用性' : 'Uptime' }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-stripe-purple mb-2">{stat.value}</div>
                  <div className="text-stripe-gray">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '核心功能模块' : 'Core Function Modules'}
            </h2>
            <p className="text-stripe-gray max-w-2xl mx-auto">
              {isZh 
                ? '覆盖寿险业务全流程的功能模块'
                : 'Functional modules covering the full life insurance business process'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-blue to-stripe-purple rounded-xl flex items-center justify-center mb-6">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{module.title}</h3>
                  <p className="text-stripe-gray">{module.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-gradient-to-br from-stripe-dark to-stripe-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-2xl text-white/90 mb-8 italic">
              {isZh 
                ? '"新系统高效接入保险生态圈，整合线上及线下渠道，为未来提供丰富、灵活、创新的保险产品及服务，奠定稳固的基础。"'
                : '"The new system efficiently connects to the insurance ecosystem, integrating online and offline channels..."'}
            </p>
            <div className="text-white">
              <div className="font-semibold">{isZh ? '郑达钊 Daryl' : 'Daryl Cheng'}</div>
              <div className="text-white/70">{isZh ? '万通保险资讯系统部高级副总裁' : 'SVP, IT Department, YF Life Insurance'}</div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
