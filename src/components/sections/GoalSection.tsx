import SectionTitle from "../SectionTitle";

export default function GoalSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="감량 목표"
          title="현실적인 목표를 알려드립니다"
          description="무리한 단기간 다이어트가 아닌, 건강하고 지속 가능한 감량을 지향합니다."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* 과체중 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-coral-100 flex items-center justify-center">
                <span className="text-coral-500 font-bold text-lg">A</span>
              </div>
              <h3 className="text-lg font-bold text-warm-800">과체중인 경우</h3>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-coral-500 mb-2">
              ~10% <span className="text-lg text-warm-500 font-normal">감량</span>
            </p>
            <p className="text-warm-600 text-sm leading-relaxed">
              2개월 기준 체중의 평균 10% 전후 감량을 목표로 합니다. 과체중인 경우 비교적 잘 빠지는 편입니다.
            </p>
          </div>

          {/* 정상체중 → 마른체중 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                <span className="text-sage-600 font-bold text-lg">B</span>
              </div>
              <h3 className="text-lg font-bold text-warm-800">정상 → 마른체중</h3>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-sage-600 mb-2">
              ~7% <span className="text-lg text-warm-500 font-normal">감량</span>
            </p>
            <p className="text-warm-600 text-sm leading-relaxed">
              정상체중에서 마른체중으로 가는 경우, 2개월 기준 7% 감량을 목표로 합니다.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-sage-50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sage-700 font-semibold text-lg mb-2">
            건강하고 지속 가능한 감량
          </p>
          <p className="text-warm-600 text-sm leading-relaxed">
            무리한 단기간 다이어트가 아닌, 요요 없이 유지할 수 있는
            <br className="hidden md:block" />
            건강한 감량을 목표로 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
