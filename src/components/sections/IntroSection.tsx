import SectionTitle from "../SectionTitle";

export default function IntroSection() {
  const features = [
    {
      icon: "🌿",
      title: "100% 한약재",
      desc: "마황, 의이인, 산사 등 천연 한약재로 구성",
    },
    {
      icon: "🔥",
      title: "체지방 분해 촉진",
      desc: "기초대사량을 높여 체지방을 효과적으로 분해",
    },
    {
      icon: "💧",
      title: "부종 개선",
      desc: "출산 후 부종과 수독을 해소하여 붓기 감소",
    },
    {
      icon: "🍽️",
      title: "자연스러운 식욕 조절",
      desc: "억지로 참는 것이 아닌 자연스러운 식욕 감소",
    },
  ];

  return (
    <section id="gambi" className="py-20 md:py-28 bg-warm-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="일산감비환이란?"
          title="일산, 고양, 파주에서 가장 많이 처방되는 다이어트 한약"
          description="감비환(減肥丸)은 살을 줄인다는 뜻의 한약입니다. 일산한의원에서는 개인별 체질과 건강 상태를 진단하여 맞춤 처방합니다."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="text-lg font-bold text-warm-800 mb-2">{f.title}</h3>
              <p className="text-warm-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-sage-50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sage-600 font-semibold text-lg mb-2">
            &ldquo;같은 감비환이라도 처방이 다릅니다&rdquo;
          </p>
          <p className="text-warm-600">
            일산한의원은 1:1 체질 진단 후 개인별 맞춤 처방을 합니다.
            <br />
            같은 증상이라도 체질에 따라 약재 구성이 달라집니다.
          </p>
        </div>
      </div>
    </section>
  );
}
