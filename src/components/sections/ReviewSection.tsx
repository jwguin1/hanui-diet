import SectionTitle from "../SectionTitle";

const naverReviews = [
  {
    nickname: "김**",
    date: "2025.03 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
  },
  {
    nickname: "이**",
    date: "2025.02 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
  },
  {
    nickname: "박**",
    date: "2025.01 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
  },
  {
    nickname: "최**",
    date: "2024.12 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
  },
  {
    nickname: "정**",
    date: "2024.11 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
  },
  {
    nickname: "한**",
    date: "2024.10 방문",
    text: "후기 내용이 들어갑니다. 실제 네이버 플레이스에 등록된 후기로 교체 예정입니다.",
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
              className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-warm-100"
            >
              {/* Naver header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#03C75A]/10 flex items-center justify-center">
                    <span className="text-[#03C75A] font-bold text-xs">N</span>
                  </div>
                  <div>
                    <p className="font-semibold text-warm-800 text-sm">{review.nickname}</p>
                    <p className="text-xs text-warm-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-[#03C75A]/5 px-2 py-1 rounded">
                  <span className="text-[#03C75A] text-xs font-bold">네이버</span>
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
              <p className="text-warm-700 text-sm leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Naver Place CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://naver.me/IItclnGB"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            <span className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-[#03C75A] font-bold text-xs">N</span>
            </span>
            네이버 플레이스에서 더 많은 후기 보기
          </a>
        </div>
      </div>
    </section>
  );
}
