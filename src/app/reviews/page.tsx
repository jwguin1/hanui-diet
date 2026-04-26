import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "후기 | 일산감비환 - 일산한의원 다이어트 전문",
  description:
    "일산감비환 복용 후기. 일산, 고양, 파주 엄마들의 실제 다이어트 후기를 확인하세요.",
};

const beforeAfterCases = [
  { name: "30대 A님", period: "2개월", result: "-8kg", desc: "출산 후 체중 관리", tag: "출산 후" },
  { name: "40대 B님", period: "3개월", result: "-12kg", desc: "중년 체중 증가", tag: "40대" },
  { name: "30대 C님", period: "2개월", result: "-7kg", desc: "육아맘 다이어트", tag: "육아맘" },
  { name: "30대 D님", period: "2개월", result: "-9kg", desc: "산후 부종 + 체중", tag: "산후 부종" },
  { name: "40대 E님", period: "3개월", result: "-11kg", desc: "갱년기 전 체중 관리", tag: "40대" },
  { name: "30대 F님", period: "2개월", result: "-6kg", desc: "직장맘 다이어트", tag: "직장맘" },
  { name: "30대 G님", period: "2개월", result: "-8kg", desc: "둘째 출산 후", tag: "출산 후" },
  { name: "40대 H님", period: "3개월", result: "-10kg", desc: "오랜 비만 탈출", tag: "장기 비만" },
];

const textReviews = [
  {
    name: "고양시 30대 엄마",
    text: "출산 후 10kg이 안 빠져서 너무 스트레스였는데, 감비환 2개월 먹고 8kg 빠졌어요! 식욕이 자연스럽게 줄어서 편했어요.",
    date: "2024.11",
  },
  {
    name: "일산 40대 직장맘",
    text: "식욕억제제 부작용 때문에 고민하다가 한약으로 바꿨어요. 심장 두근거림 없이 살이 빠져서 정말 좋아요.",
    date: "2024.10",
  },
  {
    name: "파주 30대 둘째맘",
    text: "첫째 때는 자연스럽게 빠졌는데 둘째 낳고 도저히 안 빠져서 시작했어요. 2개월에 7kg 감량! 부종도 많이 빠졌어요.",
    date: "2024.09",
  },
  {
    name: "일산 30대 워킹맘",
    text: "운동할 시간이 없어서 한약만 먹었는데도 체중이 줄었어요. 무엇보다 부기가 빠지니까 얼굴이 달라졌다고 주변에서 난리에요.",
    date: "2024.08",
  },
  {
    name: "고양시 40대",
    text: "한약이라 부작용 걱정 없이 먹을 수 있어서 좋았어요. 속도 편하고 잠도 잘 자고, 건강해지면서 살이 빠지는 느낌이에요.",
    date: "2024.07",
  },
  {
    name: "일산 30대",
    text: "아이 둘 키우면서 나를 위한 시간이 없었는데, 감비환 먹으면서 제 몸에 투자하는 기분이 들었어요. 결과도 만족합니다!",
    date: "2024.06",
  },
  {
    name: "파주 40대",
    text: "다이어트 식품 몇 번 시도했다가 요요만 왔는데, 감비환은 요요가 거의 없어요. 체질이 바뀐 느낌이에요.",
    date: "2024.05",
  },
  {
    name: "고양시 30대",
    text: "원장님이 2주마다 체크해주시고 약도 조절해주셔서 안심이 됐어요. 혼자 다이어트하는 것보다 훨씬 마음이 편해요.",
    date: "2024.04",
  },
];

export default function ReviewsPage() {
  return (
    <main className="pt-16">
      {/* Before & After */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionTitle
            subtitle="Before & After"
            title="일산감비환 다이어트 결과"
            description="실제 일산한의원에서 감비환을 복용하신 분들의 변화입니다."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beforeAfterCases.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[3/4] bg-gradient-to-br from-beige-100 to-sage-50 flex items-center justify-center">
                  <div className="text-center text-warm-400 p-4">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-warm-200 flex items-center justify-center">
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-400">
                        <path d="M10 3v14M3 10h14" />
                      </svg>
                    </div>
                    <p className="text-xs">B/A 사진</p>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-warm-500">{c.name}</span>
                    <span className="text-coral-500 font-bold">{c.result}</span>
                  </div>
                  <p className="text-xs text-warm-400">{c.desc} · {c.period}</p>
                  <span className="inline-block mt-2 bg-sage-50 text-sage-600 text-xs px-2 py-0.5 rounded-full">
                    #{c.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-warm-400 text-xs mt-6">
            * 개인 차에 따라 결과가 다를 수 있습니다.
          </p>
        </div>
      </section>

      {/* Text Reviews */}
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            subtitle="실제 후기"
            title="직접 경험하신 분들의 이야기"
          />

          <div className="space-y-4">
            {textReviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 md:p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-500 text-sm font-bold">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-warm-800 text-sm">{r.name}</p>
                      <p className="text-xs text-warm-400">{r.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="#FFB06B">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-warm-700 text-sm md:text-base leading-relaxed">
                  {r.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-warm-600 mb-6">더 많은 후기가 궁금하시면 상담해주세요!</p>
            <CTAButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
