import { FadeIn } from '@/components/motion/fade-in';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function TermsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-4xl font-bold text-stripe-dark mb-8">
              {isZh ? '网站条款' : 'Terms of Use'}
            </h1>
            <p className="text-stripe-gray mb-8">
              {isZh ? '最后更新：2026年1月1日' : 'Last Updated: January 1, 2026'}
            </p>

            <div className="prose prose-lg max-w-none text-stripe-gray">
              {isZh ? (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. 接受条款</h2>
                  <p>欢迎访问易保网络技术（上海）有限公司网站（以下简称"本网站"）。通过访问和使用本网站，您表示同意遵守这些网站条款。如果您不同意这些条款，请不要使用本网站。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. 网站使用</h2>
                  <p>您同意仅将本网站用于合法目的，并且以不侵犯、限制或禁止任何第三方使用和享受本网站的方式使用。禁止的行为包括骚扰或给任何人造成困扰或不便，传输淫秽或冒犯性内容，或破坏本网站的正常对话流程。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. 用户账户</h2>
                  <p>如果本网站提供用户注册功能，您负责维护您的账户和密码的机密性，并限制对您计算机的访问。您同意对在您的账户或密码下发生的所有活动承担责任。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. 内容准确性</h2>
                  <p>我们努力确保本网站上的信息准确和最新，但不保证所有信息的准确性、完整性或及时性。本网站上的信息可能随时更改，恕不另行通知。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. 知识产权</h2>
                  <p>本网站的所有内容，包括但不限于文本、图形、徽标、图标、图像、音频剪辑、数字下载、数据汇编和软件，均为易保网络技术（上海）有限公司或其内容供应商的财产，受中国和国际版权法保护。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. 禁止行为</h2>
                  <p>您同意不使用本网站：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>用于任何非法目的</li>
                    <li>唆使他人实施或参与任何非法行为</li>
                    <li>违反任何国际、联邦、省或州的法规、规则、法律或地方条例</li>
                    <li>侵犯我们的知识产权或他人的知识产权</li>
                    <li>骚扰、辱骂、侮辱、伤害、诽谤、贬低、恐吓或基于性别、性取向、宗教、种族、年龄、国籍或残疾歧视他人</li>
                    <li>提交虚假或误导性信息</li>
                    <li>上传或传输病毒或任何其他类型的恶意代码</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. 服务终止</h2>
                  <p>我们保留随时以任何理由终止您使用本网站的权利，恕不另行通知。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">8. 条款变更</h2>
                  <p>我们保留随时更新或修改这些条款的权利。更改将在发布到本网站后立即生效。您在条款更改后继续使用本网站，即表示您接受修改后的条款。</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">9. 联系我们</h2>
                  <p>如果您对这些网站条款有任何疑问，请通过以下方式联系我们：</p>
                  <p>邮箱：contact@ebaocloud.com</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">1. Acceptance of Terms</h2>
                  <p>Welcome to the eBaoTech Network Technology (Shanghai) Co., Ltd. website (&quot;this Website&quot;). By accessing and using this Website, you indicate your agreement to comply with these Terms of Use. If you do not agree to these terms, please do not use this Website.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">2. Website Use</h2>
                  <p>You agree to use this Website only for lawful purposes and in a way that does not infringe, restrict or inhibit any third party&apos;s use and enjoyment of this Website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue on this Website.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">3. User Accounts</h2>
                  <p>If this Website provides user registration functionality, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">4. Content Accuracy</h2>
                  <p>We strive to ensure that information on this Website is accurate and up-to-date, but we do not guarantee the accuracy, completeness or timeliness of all information. Information on this Website may be changed at any time without notice.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">5. Intellectual Property</h2>
                  <p>All content on this Website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations and software, is the property of eBaoTech Network Technology (Shanghai) Co., Ltd. or its content suppliers and is protected by Chinese and international copyright laws.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">6. Prohibited Conduct</h2>
                  <p>You agree not to use this Website:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>For any unlawful purpose</li>
                    <li>To solicit others to perform or participate in any unlawful acts</li>
                    <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">7. Termination of Service</h2>
                  <p>We reserve the right to terminate your access to this Website at any time for any reason without notice.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">8. Changes to Terms</h2>
                  <p>We reserve the right to update or modify these terms at any time. Changes will take effect immediately upon posting to this Website. Your continued use of this Website after changes constitutes your acceptance of the modified terms.</p>

                  <h2 className="text-2xl font-bold text-stripe-dark mt-8 mb-4">9. Contact Us</h2>
                  <p>If you have any questions about these Terms of Use, please contact us at:</p>
                  <p>Email: contact@ebaocloud.com</p>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
