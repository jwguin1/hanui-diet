import SectionTitle from "../SectionTitle";

export default function SafetySection() {
  const points = [
    {
      icon: "🔬",
      title: "종합 혈액검사 + 자율신경계 검사",
      desc: "첫 내원 시 객관적인 데이터를 확보하여 안전한 다이어트의 출발점을 만듭니다.",
    },
    {
      icon: "📋",
      title: "검사 결과 기반 안전한 처방 상담",
      desc: "혈액검사 결과를 바탕으로 현재 건강 상태에 맞는 안전한 처방을 상담합니다.",
    },
    {
      icon: "📊",
      title: "1단계부터 시작하는 단계별 시스템",
      desc: "1단계부터 시작하여 본인에게 맞는 단계로 조절할 수 있어 부작용을 최소화합니다.",
    },
    {
      icon: "🛡️",
      title: "부작용 최소화를 위한 처방 시스템",
      desc: "단계별 처방 시스템으로 몸에 무리 없이 안전하게 다이어트를 진행합니다.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="안전성"
          title="안전한 다이어트를 위한 시스템"
          description="일산한의원은 객관적인 검사 데이터를 기반으로 안전한 다이어트를 지향합니다."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <span className="text-3xl mb-4 block">{p.icon}</span>
              <h3 className="text-lg font-bold text-warm-800 mb-2">{p.title}</h3>
              <p className="text-warm-600 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
