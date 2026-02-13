import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function EnquiryPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '让易保联系您' : 'Let eBao Contact You'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '填写表单，我们的专家团队将尽快与您联系。无论您是想了解我们的产品，还是需要技术支持，我们都随时准备为您提供帮助'
                : 'Fill out the form and our expert team will contact you soon. Whether you want to learn about our products or need technical support, we are always ready to help'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <FadeIn>
              <div className="bg-stripe-light rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-stripe-dark mb-6">
                  {isZh ? '联系表单' : 'Contact Form'}
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stripe-dark mb-2">
                        {isZh ? '姓名' : 'Name'} *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                        placeholder={isZh ? '请输入您的姓名' : 'Enter your name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stripe-dark mb-2">
                        {isZh ? '公司' : 'Company'} *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                        placeholder={isZh ? '请输入您的公司名称' : 'Enter your company name'}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stripe-dark mb-2">
                        {isZh ? '邮箱' : 'Email'} *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                        placeholder={isZh ? '请输入您的邮箱' : 'Enter your email'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stripe-dark mb-2">
                        {isZh ? '电话' : 'Phone'}
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                        placeholder={isZh ? '请输入您的电话' : 'Enter your phone number'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stripe-dark mb-2">
                      {isZh ? '咨询类型' : 'Inquiry Type'} *
                    </label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                    >
                      <option value="">{isZh ? '请选择咨询类型' : 'Select inquiry type'}</option>
                      <option value="product">{isZh ? '产品咨询' : 'Product Inquiry'}</option>
                      <option value="demo">{isZh ? '预约演示' : 'Request Demo'}</option>
                      <option value="partnership">{isZh ? '商务合作' : 'Business Partnership'}</option>
                      <option value="support">{isZh ? '技术支持' : 'Technical Support'}</option>
                      <option value="other">{isZh ? '其他' : 'Other'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stripe-dark mb-2">
                      {isZh ? '留言' : 'Message'}
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
                      placeholder={isZh ? '请详细描述您的需求...' : 'Please describe your needs in detail...'}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {isZh ? '提交' : 'Submit'}
                  </Button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-stripe-dark mb-6">
                    {isZh ? '联系方式' : 'Contact Information'}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-stripe-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-stripe-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stripe-dark">{isZh ? '邮箱' : 'Email'}</h3>
                        <p className="text-stripe-gray">contact@ebaocloud.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-stripe-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-stripe-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stripe-dark">{isZh ? '电话' : 'Phone'}</h3>
                        <p className="text-stripe-gray">+86 21 1234 5678</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-stripe-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-stripe-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-stripe-dark">{isZh ? '地址' : 'Address'}</h3>
                        <p className="text-stripe-gray">
                          {isZh 
                            ? '上海市淞沪路270号创智天地广场3号楼' 
                            : 'Building 3, Chuangzhi Tiandi Plaza, 270 Songhu Road, Shanghai'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stripe-light rounded-2xl p-8">
                  <h3 className="font-semibold text-stripe-dark mb-3">
                    {isZh ? '工作时间' : 'Business Hours'}
                  </h3>
                  <p className="text-stripe-gray">
                    {isZh 
                      ? '周一至周五：9:00 - 18:00\n周六周日及法定节假日休息' 
                      : 'Monday - Friday: 9:00 - 18:00\nWeekends and holidays closed'}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
