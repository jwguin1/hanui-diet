import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import { naverReviews } from "@/components/sections/ReviewSection";

export const metadata: Metadata = {
  title: "후기 | 일산감비환 - 일산한의원 다이어트",
  description:
    "일산감비환 복용 후기. 네이버 플레이스에 등록된 실제 후기를 확인하세요.",
};

export default function ReviewsPage() {
  return (
    <main className="pt-16">
      <section className="py-16 md:py-24 bg-warm-50">
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
              네이버 플레이스에서 더 많은 후기 보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
