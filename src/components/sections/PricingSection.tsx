import SectionTitle from "../SectionTitle";
import CTAButtons from "../CTAButtons";

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle
          subtitle="비용 안내"
          title="합리적인 비용으로 건강한 변화를"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center">
            <p className="text-sage-500 font-semibold text-sm mb-2">1개월 프로그램</p>
            <p className="text-3xl md:text-4xl font-bold text-warm-900 mb-2">
              30~40<span className="text-xl">만원</span>
            </p>
            <p className="text-warm-500 text-sm">체질에 따라 달라질 수 있습니다</p>
          </div>
          <div className="bg-coral-500 rounded-2xl p-6 md:p-8 shadow-sm text-center text-white relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
              BEST
            </div>
            <p className="text-coral-100 font-semibold text-sm mb-2">2개월 집중 프로그램</p>
            <p className="text-3xl md:text-4xl font-bold mb-2">
              55~70<span className="text-xl">만원</span>
            </p>
            <p className="text-coral-200 text-sm">가장 많이 선택하는 프로그램</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-warm-800 mb-3">포함 사항</h3>
          <ul className="space-y-2 text-warm-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-sage-500 mt-0.5">&#10003;</span>
              1:1 체질 진단 및 단계별 처방
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-500 mt-0.5">&#10003;</span>
              복용 기간 중 상담 지원
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-500 mt-0.5">&#10003;</span>
              식이 및 생활습관 가이드
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage-500 mt-0.5">&#10003;</span>
              카카오톡 수시 상담
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-warm-500 text-sm mb-6">
            * 정확한 비용은 체질 진단 후 안내드립니다.
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
