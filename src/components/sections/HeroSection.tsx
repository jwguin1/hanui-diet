import Image from "next/image";
import CTAButtons from "../CTAButtons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-main.jpg"
        alt="일산감비환 메인 비주얼"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
            입소문으로만
            <br />
            매년 8,000명이 처방받는
            <br />
            <span className="text-coral-300">일산감비환</span>
          </h1>
          <p className="text-sage-200 font-semibold text-base md:text-lg mb-3">
            다이어트 한약의 본질만을 담았습니다
          </p>
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            빠지지 않는 나잇살, 이제 일산감비환으로
            <br className="hidden md:block" />
            건강하게 관리하세요
          </p>
          <CTAButtons variant="large" />

          {/* Floating badge */}
          <div className="mt-10 inline-block bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4">
            <p className="text-coral-500 font-bold text-2xl">20,000건 +</p>
            <p className="text-warm-600 text-sm">누적 처방건수</p>
          </div>
        </div>
      </div>
    </section>
  );
}
