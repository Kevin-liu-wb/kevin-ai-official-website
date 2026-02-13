import { FadeIn } from '@/components/motion/fade-in';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function LegalPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-stripe-dark mb-8">
              {isZh ? '法律条款' : 'Legal Terms'}
            </h1>
            <p className="text-stripe-gray mb-8">
              {isZh ? '最后更新：2026年1月1日' : 'Last Updated: January 1, 2026'}
            </p>

            <div className="prose prose-lg max-w-none text-stripe-gray">
              {isZh ? (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. 法律声明</h2>
                  <p>本网站由易保网络技术（上海）有限公司（以下简称"易保"或"我们"）运营。访问和使用本网站，即表示您同意遵守以下法律条款。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. 知识产权</h2>
                  <p>本网站及其所有内容（包括但不限于文本、图像、标识、商标、软件）均受版权、商标及其他知识产权法律保护。未经易保事先书面许可，任何人不得以任何形式复制、修改、传播、展示或使用本网站的任何内容。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. 免责声明</h2>
                  <p>本网站的内容仅供一般信息参考，不构成任何形式的法律、财务或专业建议。易保不对本网站内容的准确性、完整性或时效性做出任何明示或暗示的保证。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. 责任限制</h2>
                  <p>在任何情况下，易保不对因使用或无法使用本网站而引起的任何直接、间接、附带、特殊或后果性损害承担责任。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. 链接到第三方网站</h2>
                  <p>本网站可能包含指向第三方网站的链接。这些链接仅为方便用户而提供，并不意味着易保认可这些第三方网站的内容。易保对这些第三方网站的内容不承担任何责任。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. 适用法律</h2>
                  <p>本法律条款受中华人民共和国法律管辖，并按照中华人民共和国法律解释。因本法律条款引起的或与本法律条款有关的任何争议，应提交上海国际经济贸易仲裁委员会进行仲裁。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. 条款修改</h2>
                  <p>易保保留随时修改本法律条款的权利。修改后的条款将在本网站上发布，并立即生效。继续使用本网站即表示您接受修改后的条款。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">8. 联系我们</h2>
                  <p>如果您对这些法律条款有任何疑问，请通过以下方式联系我们：</p>
                  <p>邮箱：legal@ebaocloud.com</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. Legal Notice</h2>
                  <p>This website is operated by eBaoTech Network Technology (Shanghai) Co., Ltd. (&quot;eBao&quot; or &quot;we&quot;). By accessing and using this website, you agree to comply with the following legal terms.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. Intellectual Property</h2>
                  <p>This website and all its content (including but not limited to text, images, logos, trademarks, software) are protected by copyright, trademark and other intellectual property laws. No one may copy, modify, distribute, display or use any content of this website in any form without prior written permission from eBao.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. Disclaimer</h2>
                  <p>The content of this website is for general information purposes only and does not constitute any form of legal, financial or professional advice. eBao makes no express or implied warranties regarding the accuracy, completeness or timeliness of the content.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. Limitation of Liability</h2>
                  <p>In no event shall eBao be liable for any direct, indirect, incidental, special or consequential damages arising from the use or inability to use this website.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. Links to Third-Party Websites</h2>
                  <p>This website may contain links to third-party websites. These links are provided for user convenience only and do not imply eBao&apos;s endorsement of the content of these third-party websites. eBao assumes no responsibility for the content of these third-party websites.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. Governing Law</h2>
                  <p>These legal terms are governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any dispute arising out of or in connection with these legal terms shall be submitted to the Shanghai International Economic and Trade Arbitration Commission for arbitration.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. Modification of Terms</h2>
                  <p>eBao reserves the right to modify these legal terms at any time. Modified terms will be posted on this website and take effect immediately. Continued use of this website constitutes acceptance of the modified terms.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">8. Contact Us</h2>
                  <p>If you have any questions about these legal terms, please contact us at:</p>
                  <p>Email: legal@ebaocloud.com</p>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
