import CTAButtons from "../CTAButtons";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-coral-50 to-warm-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sage-500 font-semibold text-sm mb-4">지금 시작하세요</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-4 leading-snug">
          건강한 다이어트,
          <br />
          일산감비환으로 시작하세요
        </h2>
        <p className="text-warm-600 text-base md:text-lg mb-10 leading-relaxed">
          카카오톡으로 편하게 상담받으세요.
          <br />
          체질에 맞는 맞춤 상담을 무료로 해드립니다.
        </p>
        <div className="flex justify-center">
          <CTAButtons variant="large" />
        </div>
      </div>
    </section>
  );
}
