import SectionTitle from "../SectionTitle";

export default function SafetySection() {
  const points = [
    {
      icon: "🛡️",
      title: "부작용 최소화",
      desc: "천연 한약재를 사용하여 합성 약물 대비 부작용이 현저히 적습니다.",
    },
    {
      icon: "⚖️",
      title: "1알 단위 용량 조절",
      desc: "몸 상태에 따라 1알 단위로 세밀하게 용량을 조절합니다. 불편하면 즉시 조절 가능합니다.",
    },
    {
      icon: "👩‍⚕️",
      title: "2주마다 경과 체크",
      desc: "2주 간격으로 내원하여 체중, 건강 상태를 체크하고 처방을 미세 조정합니다.",
    },
    {
      icon: "💊",
      title: "GMP 인증 한약재",
      desc: "식약처 기준을 충족하는 안전한 한약재만을 사용합니다.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-sage-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="안전성"
          title="안전하게, 건강하게 빼는 것이 원칙입니다"
          description="일산한의원은 무리한 감량보다 안전한 체질 변화를 추구합니다."
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
