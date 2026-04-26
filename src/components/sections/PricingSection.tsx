import SectionTitle from "../SectionTitle";
import CTAButtons from "../CTAButtons";

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="비용 안내"
          title="투명한 비용 안내"
        />

        {/* 가격표 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center border-2 border-[#F5DC00]">
            <div className="inline-block bg-[#FEF9C3] text-[#A16207] px-3 py-1 rounded-full text-xs font-bold mb-4">
              노랑
            </div>
            <h3 className="text-lg font-bold text-warm-800 mb-1">일산감비환 (노랑)</h3>
            <p className="text-warm-500 text-sm mb-4">1상자 100포</p>
            <p className="text-3xl md:text-4xl font-bold text-warm-900">
              90,000<span className="text-lg">원</span>
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center border-2 border-pink-300">
            <div className="inline-block bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-xs font-bold mb-4">
              핑크
            </div>
            <h3 className="text-lg font-bold text-warm-800 mb-1">일산감비환 (핑크)</h3>
            <p className="text-warm-500 text-sm mb-4">1상자 100포</p>
            <p className="text-3xl md:text-4xl font-bold text-warm-900">
              110,000<span className="text-lg">원</span>
            </p>
          </div>
        </div>

        {/* 복용 기준 안내 */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h3 className="font-bold text-warm-800 mb-4 text-center text-lg">복용 기준 안내</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-warm-50 rounded-xl p-4 text-center">
              <p className="text-warm-500 text-sm mb-1">하루 1포 복용 시</p>
              <p className="text-2xl font-bold text-warm-800">100일 분량</p>
            </div>
            <div className="bg-warm-50 rounded-xl p-4 text-center">
              <p className="text-warm-500 text-sm mb-1">하루 2포 복용 시</p>
              <p className="text-2xl font-bold text-warm-800">50일 분량</p>
            </div>
            <div className="bg-coral-50 rounded-xl p-4 text-center">
              <p className="text-warm-500 text-sm mb-1">1개월 비용 (하루 2회 기준)</p>
              <p className="text-2xl font-bold text-coral-500">약 30,000원</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
