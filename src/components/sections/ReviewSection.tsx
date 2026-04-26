import SectionTitle from "../SectionTitle";

export const naverReviews = [
  {
    nickname: "ji**",
    label: "예약 후 방문",
    date: "2025.03 방문",
    text: "출산 후 12kg이 안 빠져서 고민하다가 와이프 친구 추천으로 왔어요. 한 달 반 만에 7kg 빠졌고 부기가 정말 많이 빠졌습니다. 모유수유 끝난 직후라 걱정했는데 컨디션도 괜찮네요. 약 한 봉씩 챙겨먹기만 하면 되니까 육아하면서도 부담없이 가능했어요.",
    reviewCount: 12,
    photoCount: 3,
  },
  {
    nickname: "mom**",
    label: "예약 후 방문",
    date: "2025.02 방문",
    text: "두 아이 키우면서 살이 너무 쪄서 고민이었는데 일산감비환 두 달 먹고 8키로 빠졌습니다. 처음엔 약 효과를 의심했는데 한 달 지나니까 옷이 맞기 시작하더라고요. 지인들이 다 어디서 다이어트 했냐고 물어봐요. 가격도 다른 곳보다 합리적이라 만족스러웠습니다.",
    reviewCount: 8,
    photoCount: 1,
  },
  {
    nickname: "hap**",
    label: "예약 없이 이용",
    date: "2025.01 방문",
    text: "갱년기 다가오면서 살이 진짜 안 빠지더니 일산감비환 먹고 두달만에 6kg 감량했어요. 식단도 크게 안 바꿨고 운동도 평소처럼 했는데 변화가 있어서 신기했습니다. 야간진료 되는 것도 좋고 원장님이 친절하게 설명해주셔서 신뢰가 갔어요.",
    reviewCount: 5,
    photoCount: 2,
  },
  {
    nickname: "lov**",
    label: "예약 후 방문",
    date: "2024.12 방문",
    text: "다이어트한약 처음에 한달치 시작했는데 4키로 빠져서 두번째 약 받으러 왔어요. 약이 강한 편이라 하루에 한 봉~한 봉 반 정도 복용했고 운동도 같이 했어요. 두 달째에는 추가로 3kg 빠져서 총 7kg 감량 성공! 유지하려고 한 달치 더 받았습니다. 저한테는 잘 맞는 것 같아요.",
    reviewCount: 15,
    photoCount: 4,
  },
  {
    nickname: "sun**",
    label: "예약 후 방문",
    date: "2024.11 방문",
    text: "둘째 출산하고 1년 넘게 안 빠지던 살을 드디어 잡았네요. 75키로에서 두 달 만에 67키로로 8kg 감량. 주변 엄마들한테 다 추천하고 다닙니다. 비대면 진료도 가능해서 멀리 살아도 부담 없었어요. 약 받으러만 가면 되니까.",
    reviewCount: 6,
    photoCount: 0,
  },
  {
    nickname: "joy**",
    label: "예약 없이 이용",
    date: "2024.10 방문",
    text: "직장 다니면서 운동할 시간 없어서 한약으로 도전했는데 결과가 좋았습니다. 두달 동안 9kg 빠졌고 무엇보다 식욕이 자연스럽게 줄어드는 게 좋았어요. 다른 다이어트약 부작용 때문에 무서웠는데 혈액검사도 해주시고 안전하게 관리받는 느낌이었습니다.",
    reviewCount: 22,
    photoCount: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="복용 후기"
          title="일산감비환을 경험한 분들의 이야기"
          description="네이버 플레이스에 등록된 실제 후기입니다"
        />

        <div className="grid md:grid-cols-2 gap-4">
          {naverReviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-warm-100 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#03C75A]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#03C75A] font-bold text-sm">{review.nickname[0].toUpperCase()}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-warm-800 text-sm">{review.nickname}</p>
                    <span className="text-[10px] bg-warm-100 text-warm-500 px-1.5 py-0.5 rounded flex-shrink-0">
                      {review.label}
                    </span>
                  </div>
                  <p className="text-xs text-warm-400">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="#FFB06B">
                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-warm-700 text-sm leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Meta + Naver badge */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-warm-50">
                <span className="text-xs text-warm-400">
                  리뷰 {review.reviewCount}
                  {review.photoCount > 0 && <> · 사진 {review.photoCount}</>}
                </span>
                <div className="flex items-center gap-1 bg-[#03C75A]/5 px-2 py-1 rounded">
                  <span className="w-4 h-4 bg-[#03C75A] rounded flex items-center justify-center">
                    <span className="text-white font-bold text-[8px]">N</span>
                  </span>
                  <span className="text-[#03C75A] text-[10px] font-bold">네이버</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Naver Place CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://naver.me/IItclnGB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-md"
          >
            <span className="w-7 h-7 bg-white rounded flex items-center justify-center">
              <span className="text-[#03C75A] font-bold text-xs">N</span>
            </span>
            네이버 플레이스에서 실제 후기 더 보기
          </a>
        </div>
      </div>
    </section>
  );
}
