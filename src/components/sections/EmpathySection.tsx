export default function EmpathySection() {
  const painPoints = [
    {
      emoji: "😩",
      text: "출산 후 10kg이 안 빠져요",
    },
    {
      emoji: "⏰",
      text: "육아하느라 운동할 시간이 없어요",
    },
    {
      emoji: "😫",
      text: "식욕억제제 먹었다가 심장이 두근거렸어요",
    },
    {
      emoji: "😔",
      text: "다이어트 식품은 요요가 너무 심해요",
    },
    {
      emoji: "🤱",
      text: "모유수유 끝나고 살이 더 쪘어요",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-sage-500 font-semibold text-sm mb-4">혹시 이런 고민 중이신가요?</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 mb-12 leading-snug">
          출산 후 빠지지 않는 살,
          <br />
          육아하느라 운동할 시간도 없는데...
        </h2>

        <div className="space-y-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 flex items-center gap-4 text-left shadow-sm"
            >
              <span className="text-2xl flex-shrink-0">{point.emoji}</span>
              <p className="text-warm-700 text-base md:text-lg">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-coral-50 border border-coral-200 rounded-2xl p-6 md:p-8">
          <p className="text-coral-600 font-bold text-xl md:text-2xl mb-2">
            이 중 하나라도 해당되시나요?
          </p>
          <p className="text-warm-600">
            일산감비환이 도움이 될 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
