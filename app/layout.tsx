import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "易保云 - 让保险变得容易",
  description: "全球保险行业在数字化转型中的技术伙伴。易保云中台为保险公司、经纪公司和保险科技企业提供领先的保险中间件平台。",
  keywords: "保险科技,保险中台,数字化转型,保险API,保险SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
