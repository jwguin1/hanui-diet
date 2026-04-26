import SectionTitle from "../SectionTitle";

export default function WhyAffordableSection() {
  const reasons = [
    {
      icon: "📦",
      title: "대량 매입으로 원가 절감",
      desc: "다이어트 한약 처방량이 많아 약재를 대량으로 매입하여 원가를 낮췄습니다.",
    },
    {
      icon: "🎯",
      title: "핵심 노하우 약재만 선별",
      desc: "불필요한 약재를 배제하고, 핵심 노하우 약재만 선별하여 정제된 비방으로 제조합니다.",
    },
    {
      icon: "✨",
      title: "합리적인 가격, 더 좋은 효과",
      desc: "그 결과 다른 다이어트 한약 대비 합리적인 가격으로 더 좋은 효과를 제공합니다.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="합리적인 가격의 비결"
          title="왜 이렇게 합리적인 가격일까요?"
        />

        <div className="space-y-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex items-start gap-5"
            >
              <span className="text-3xl flex-shrink-0">{r.icon}</span>
              <div>
                <h3 className="text-lg font-bold text-warm-800 mb-1">{r.title}</h3>
                <p className="text-warm-600 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
