import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import KakaoFloating from "@/components/KakaoFloating";

export const metadata: Metadata = {
  metadataBase: new URL("https://diet.ilsanhan.com"),
  title: {
    default: "일산감비환 | 일산한의원 다이어트 전문",
    template: "%s | 일산한의원",
  },
  description:
    "일산, 고양, 파주에서 가장 많이 처방되는 다이어트 한약. 30-40대 엄마들의 출산 후 다이어트, 일산감비환으로 시작하세요.",
  keywords: [
    "일산감비환",
    "일산한의원",
    "다이어트한약",
    "일산다이어트",
    "고양다이어트",
    "파주다이어트",
    "출산후다이어트",
    "감비환",
    "한약다이어트",
    "산후다이어트",
  ],
  openGraph: {
    title: "일산감비환 | 다이어트 한약의 정수",
    description:
      "일산, 고양, 파주에서 가장 많이 처방되는 다이어트 한약. 30-40대 엄마들의 출산 후 다이어트, 일산감비환으로 시작하세요.",
    url: "https://diet.ilsanhan.com",
    siteName: "일산한의원 다이어트",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "일산감비환 - 다이어트 한약의 정수",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "일산감비환 | 다이어트 한약의 정수",
    description:
      "일산, 고양, 파주에서 가장 많이 처방되는 다이어트 한약.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://diet.ilsanhan.com",
  },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "naver-site-verification": "naver-site-verification-placeholder",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <meta property="kakao:title" content="일산감비환 | 다이어트 한약의 정수" />
      </head>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
        <Footer />
        <KakaoFloating />
      </body>
    </html>
  );
}
