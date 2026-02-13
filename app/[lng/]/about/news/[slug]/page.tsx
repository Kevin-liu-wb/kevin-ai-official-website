import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

// 生成静态参数
export function generateStaticParams() {
  const slugs = [
    '2024-07-06',
    '2023-08-31',
    '2023-08-22',
    '2023-06-15'
  ];
  const languages = ['zh-CN', 'en'];
  
  return languages.flatMap(lng => 
    slugs.map(slug => ({ lng, slug }))
  );
}

export default function NewsDetailPage({ 
  params: { lng, slug } 
}: { 
  params: { lng: string; slug: string } 
}) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  // Mock data - in real app, this would be fetched based on slug
  const newsData = {
    date: '2024-07-06',
    category: isZh ? '产品发布' : 'Product Release',
    title: isZh 
      ? '易保云中台人工智能解决方案亮相 2024 世界人工智能大会 WAIC 2024' 
      : 'eBaoCloud AI Solutions Debut at WAIC 2024',
    content: isZh ? `
      <p>2024年7月6日，易保网络携最新人工智能解决方案参加了在上海举办的2024世界人工智能大会（WAIC 2024）。</p>
      
      <p>在本次大会上，易保展示了基于大语言模型的保险智能助手、自动化核保系统、智能理赔处理等多项创新应用。这些解决方案充分利用了人工智能技术在自然语言处理、图像识别和数据分析方面的优势，为保险行业带来了全新的数字化体验。</p>
      
      <h3>AI智能助手</h3>
      <p>基于大语言模型技术，易保推出了保险智能助手，能够为用户提供7×24小时的智能咨询服务。无论是产品咨询、保单查询还是理赔指导，智能助手都能快速准确地响应客户需求。</p>
      
      <h3>自动化核保</h3>
      <p>通过机器学习算法，系统能够自动评估投保风险，实现秒级核保决策。这不仅大大提高了核保效率，还能降低人工核保的成本和误差。</p>
      
      <h3>智能理赔</h3>
      <p>利用计算机视觉技术，系统可以自动识别理赔材料，验证理赔信息的真实性。结合规则引擎，能够实现小额理赔的自动审批，将理赔时间从数天缩短至数分钟。</p>
      
      <p>易保网络CTO表示："人工智能正在深刻改变保险行业的运营模式。我们将继续加大在AI领域的投入，为客户提供更智能、更高效的解决方案。"</p>
    ` : `
      <p>On July 6, 2024, eBaoTech showcased its latest AI solutions at the World Artificial Intelligence Conference (WAIC 2024) in Shanghai.</p>
      
      <p>At the conference, eBao demonstrated several innovative applications including LLM-based insurance assistants, automated underwriting systems, and intelligent claims processing. These solutions leverage AI technologies in NLP, image recognition, and data analysis to bring new digital experiences to the insurance industry.</p>
      
      <h3>AI Assistant</h3>
      <p>Based on large language models, eBao launched an insurance intelligent assistant providing 24/7 smart consulting services.</p>
      
      <h3>Automated Underwriting</h3>
      <p>Through machine learning algorithms, the system can automatically assess underwriting risks and achieve second-level decisions.</p>
      
      <h3>Intelligent Claims</h3>
      <p>Using computer vision technology, the system can automatically identify claims materials and verify information authenticity.</p>
    `
  };

  return (
    <div className="pt-20">
      {/* Article */}
      <article className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* Back Link */}
            <Link 
              href={`/${lng}/about/news`}
              className="inline-flex items-center text-stripe-gray hover:text-stripe-dark mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {isZh ? '返回新闻列表' : 'Back to News'}
            </Link>

            {/* Header */}
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-stripe-purple/10 text-stripe-purple rounded-full text-sm font-medium">
                {newsData.category}
              </span>
              <span className="flex items-center gap-1 text-stripe-gray text-sm">
                <Calendar className="w-4 h-4" />
                {newsData.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-stripe-dark mb-8">
              {newsData.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none text-stripe-gray"
              dangerouslySetInnerHTML={{ __html: newsData.content }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t">
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                {isZh ? '分享文章' : 'Share Article'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
