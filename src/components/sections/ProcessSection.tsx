import SectionTitle from "../SectionTitle";

export default function ProcessSection() {
  const steps = [
    {
      step: "STEP 1",
      title: "1:1 체질 진단",
      desc: "체질, 건강 상태, 생활습관을 종합 진단합니다.",
      duration: "첫 내원 시",
    },
    {
      step: "STEP 2",
      title: "맞춤 감비환 처방",
      desc: "진단 결과에 맞춰 개인별 약재를 조합합니다.",
      duration: "진단 당일",
    },
    {
      step: "STEP 3",
      title: "2개월 집중 복용",
      desc: "하루 3회, 식전 30분에 복용합니다. 2주 간격으로 경과를 체크합니다.",
      duration: "2개월",
    },
    {
      step: "STEP 4",
      title: "요요 관리 프로그램",
      desc: "감량 후 요요를 방지하기 위한 유지 관리 프로그램을 진행합니다.",
      duration: "1~2개월",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="복용 방법"
          title="2개월 집중 + 요요 관리"
          description="단기간 무리한 감량이 아닌, 건강한 체질 변화를 목표로 합니다."
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
                <h3 className="text-lg font-bold text-warm-800 mb-1">{s.title}</h3>
                <p className="text-warm-600 text-sm leading-relaxed">{s.desc}</p>
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
