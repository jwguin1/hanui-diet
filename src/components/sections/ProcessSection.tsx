import SectionTitle from "../SectionTitle";

export default function ProcessSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "첫 내원 시 검사",
      details: [
        "1:1 체질 진단",
        "6개월 이내 혈액검사를 한 적이 없다면, 종합 혈액검사 + 자율신경계 검사 진행",
        "객관적인 데이터를 기반으로 안전한 다이어트 시작",
      ],
      duration: "첫 내원 시",
    },
    {
      step: "STEP 2",
      title: "일산감비환 처방",
      details: [
        "진단 결과에 맞는 단계별 처방",
        "노랑 / 핑크 등 단계가 구분되어 있어 체계적으로 관리",
      ],
      duration: "진단 당일",
    },
    {
      step: "STEP 3",
      title: "2개월 집중 관리",
      details: [
        "단계에 맞춰 하루 1회에서 3회 복용",
        "별도의 2주 단위 내원 체크 없이 편하게 복용 가능",
      ],
      duration: "2개월",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="진료 절차"
          title="간편한 3단계로 시작하세요"
          description="복잡한 절차 없이, 편하게 다이어트를 시작할 수 있습니다."
        />

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="text-coral-500 text-xs font-bold mb-1">{s.step}</p>
                <h3 className="text-lg font-bold text-warm-800 mb-3">{s.title}</h3>
                <ul className="space-y-2">
                  {s.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-warm-600 text-sm leading-relaxed">
                      <span className="text-sage-500 mt-0.5 flex-shrink-0">&#10003;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <span className="inline-block bg-sage-50 text-sage-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {s.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
