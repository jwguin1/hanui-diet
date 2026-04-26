import SectionTitle from "../SectionTitle";
import CTAButtons from "../CTAButtons";

export default function BeforeAfterSection() {
  const cases = [
    { name: "30대 A님", period: "2개월", result: "-8kg", desc: "출산 후 체중 관리" },
    { name: "40대 B님", period: "3개월", result: "-12kg", desc: "중년 체중 증가" },
    { name: "30대 C님", period: "2개월", result: "-7kg", desc: "육아맘 다이어트" },
    { name: "30대 D님", period: "2개월", result: "-9kg", desc: "산후 부종 + 체중" },
    { name: "40대 E님", period: "3개월", result: "-11kg", desc: "갱년기 전 체중 관리" },
    { name: "30대 F님", period: "2개월", result: "-6kg", desc: "직장맘 다이어트" },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="Before & After"
          title="일산감비환 복용 후기"
          description="실제 일산한의원에서 감비환을 복용하신 분들의 변화입니다."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Placeholder Image */}
              <div className="aspect-[3/4] bg-gradient-to-br from-beige-100 to-sage-50 flex items-center justify-center">
                <div className="text-center text-warm-400 p-4">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-warm-200 flex items-center justify-center">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-400">
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                  </div>
                  <p className="text-xs">Before / After</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm text-warm-500">{c.name}</span>
                  <span className="text-coral-500 font-bold text-lg">{c.result}</span>
                </div>
                <p className="text-xs text-warm-400">
                  {c.desc} · {c.period}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-warm-500 text-sm mb-6">
            * 개인 차에 따라 결과가 다를 수 있습니다.
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
