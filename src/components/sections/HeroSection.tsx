import CTAButtons from "../CTAButtons";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-beige-100 via-warm-50 to-warm-100 pt-16">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-warm-900 leading-tight mb-4">
              입소문으로만
              <br />
              매년 8,000명이 처방받는
              <br />
              <span className="text-coral-500">일산감비환</span>
            </h1>
            <p className="text-sage-600 font-semibold text-base md:text-lg mb-3">
              다이어트 한약의 본질만을 담았습니다
            </p>
            <p className="text-warm-600 text-lg md:text-xl mb-8 leading-relaxed">
              빠지지 않는 나잇살, 이제 일산감비환으로
              <br className="hidden md:block" />
              건강하게 관리하세요
            </p>
            <CTAButtons variant="large" />
          </div>

          {/* Hero Visual Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-sage-100 to-beige-200 rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center text-warm-400 p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-warm-200 flex items-center justify-center">
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-400">
                    <path d="M24 8v32M8 24h32" />
                  </svg>
                </div>
                <p className="text-sm">메인 비주얼 이미지</p>
                <p className="text-xs mt-1">권장: 800x1000px</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 max-w-[220px]">
              <p className="text-coral-500 font-bold text-2xl">20,000건 +</p>
              <p className="text-warm-600 text-sm">누적 처방건수</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
