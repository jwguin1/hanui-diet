import SectionTitle from "../SectionTitle";

export default function ReviewSection() {
  const reviews = [
    {
      name: "고양시 30대 엄마",
      text: "출산 후 10kg이 안 빠져서 너무 스트레스였는데, 감비환 2개월 먹고 8kg 빠졌어요! 식욕이 자연스럽게 줄어서 편했어요.",
    },
    {
      name: "일산 40대 직장맘",
      text: "식욕억제제 부작용 때문에 고민하다가 한약으로 바꿨어요. 심장 두근거림 없이 살이 빠져서 정말 좋아요.",
    },
    {
      name: "파주 30대 둘째맘",
      text: "첫째 때는 자연스럽게 빠졌는데 둘째 낳고 도저히 안 빠져서 시작했어요. 2개월에 7kg 감량! 부종도 많이 빠졌어요.",
    },
    {
      name: "일산 30대 워킹맘",
      text: "운동할 시간이 없어서 한약만 먹었는데도 체중이 줄었어요. 무엇보다 부기가 빠지니까 얼굴이 달라졌다고 주변에서 난리에요.",
    },
    {
      name: "고양시 40대",
      text: "한약이라 부작용 걱정 없이 먹을 수 있어서 좋았어요. 속도 편하고 잠도 잘 자고, 건강해지면서 살이 빠지는 느낌이에요.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle
          subtitle="실제 후기"
          title="직접 경험하신 분들의 이야기"
        />

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="flex gap-3">
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-500 text-sm font-bold">
                {r.name[0]}
              </div>
              <div className="flex-1">
                <p className="text-xs text-warm-500 mb-1">{r.name}</p>
                <div className="kakao-bubble">
                  <p className="text-warm-800 text-sm md:text-base leading-relaxed">
                    {r.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-warm-400 text-xs mt-8">
          * 실제 상담 내용을 바탕으로 재구성한 후기입니다.
        </p>
      </div>
    </section>
  );
}
