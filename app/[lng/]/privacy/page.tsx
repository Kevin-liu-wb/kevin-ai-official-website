import { FadeIn } from '@/components/motion/fade-in';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function PrivacyPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-stripe-dark mb-8">
              {isZh ? '隐私政策' : 'Privacy Policy'}
            </h1>
            <p className="text-stripe-gray mb-8">
              {isZh ? '最后更新：2026年1月1日' : 'Last Updated: January 1, 2026'}
            </p>

            <div className="prose prose-lg max-w-none text-stripe-gray">
              {isZh ? (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. 引言</h2>
                  <p>易保网络技术（上海）有限公司（以下简称"我们"）重视您的隐私保护。本隐私政策说明我们如何收集、使用、存储和保护您的个人信息。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. 信息收集</h2>
                  <p>我们可能收集以下类型的信息：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>联系信息</strong>：姓名、公司名称、电子邮箱、电话号码等</li>
                    <li><strong>使用信息</strong>：您如何访问和使用我们的网站</li>
                    <li><strong>技术信息</strong>：IP地址、浏览器类型、设备信息等</li>
                    <li><strong>Cookie和类似技术</strong>：用于改善用户体验</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. 信息使用</h2>
                  <p>我们使用您的信息用于：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>提供和维护我们的服务</li>
                    <li>回应您的询问和请求</li>
                    <li>发送产品更新和营销信息（需您的同意）</li>
                    <li>改进我们的网站和服务</li>
                    <li>遵守法律义务</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. 信息共享</h2>
                  <p>我们不会出售您的个人信息。仅在以下情况下共享信息：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>经您明确同意</li>
                    <li>与服务提供商合作（受保密协议约束）</li>
                    <li>法律要求或保护我们的合法权益</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. 信息安全</h2>
                  <p>我们采用行业标准的安全措施保护您的信息，包括加密、访问控制、安全审计等。但请注意，互联网传输无法保证100%安全。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. 您的权利</h2>
                  <p>根据适用法律，您可能拥有以下权利：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>访问您的个人信息</li>
                    <li>更正不准确的个人信息</li>
                    <li>删除您的个人信息</li>
                    <li>限制或反对处理您的信息</li>
                    <li>数据可携带权</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. 联系我们</h2>
                  <p>如果您对本隐私政策有任何疑问，或希望行使您的权利，请通过以下方式联系我们：</p>
                  <p>邮箱：privacy@ebaocloud.com</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. Introduction</h2>
                  <p>eBaoTech Network Technology (Shanghai) Co., Ltd. (&quot;we&quot;) values your privacy. This Privacy Policy explains how we collect, use, store and protect your personal information.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. Information Collection</h2>
                  <p>We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Contact Information</strong>: Name, company name, email address, phone number, etc.</li>
                    <li><strong>Usage Information</strong>: How you access and use our website</li>
                    <li><strong>Technical Information</strong>: IP address, browser type, device information, etc.</li>
                    <li><strong>Cookies and Similar Technologies</strong>: Used to improve user experience</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. Information Use</h2>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Respond to your inquiries and requests</li>
                    <li>Send product updates and marketing information (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. Information Sharing</h2>
                  <p>We do not sell your personal information. We only share information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>With your explicit consent</li>
                    <li>With service providers (bound by confidentiality agreements)</li>
                    <li>As required by law or to protect our legitimate interests</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. Information Security</h2>
                  <p>We employ industry-standard security measures to protect your information, including encryption, access controls, and security audits. However, please note that Internet transmission cannot be guaranteed to be 100% secure.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. Your Rights</h2>
                  <p>Under applicable law, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate personal information</li>
                    <li>Delete your personal information</li>
                    <li>Restrict or object to processing of your information</li>
                    <li>Data portability</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact us at:</p>
                  <p>Email: privacy@ebaocloud.com</p>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
