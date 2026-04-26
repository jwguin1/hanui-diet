import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "상담신청 | 일산감비환 - 일산한의원 다이어트 전문",
  description:
    "일산감비환 무료 상담을 신청하세요. 카카오톡, 전화, 온라인 폼으로 편하게 상담받으실 수 있습니다.",
};

export default function ConsultPage() {
  return (
    <main className="pt-16">
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle
            subtitle="상담신청"
            title="편한 방법으로 상담받으세요"
            description="체질에 맞는 맞춤 상담을 무료로 해드립니다."
          />

          {/* Quick Contact */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <a
              href="https://pf.kakao.com/_placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FEE500] rounded-2xl p-6 md:p-8 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-[#3C1E1E] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FEE500">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.83 3.06-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.74.1 1.51.16 2.29.16 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#3C1E1E] text-lg">카카오톡 상담</p>
                <p className="text-[#3C1E1E]/70 text-sm">가장 빠르게 답변드려요</p>
              </div>
            </a>

            <a
              href="tel:031-000-0000"
              className="bg-coral-500 rounded-2xl p-6 md:p-8 flex items-center gap-4 text-white hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg">전화 상담</p>
                <p className="text-white/80 text-sm">031-000-0000</p>
              </div>
            </a>
          </div>

          {/* Online Form */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <h3 className="text-xl font-bold text-warm-800 mb-6">온라인 상담 신청</h3>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-warm-700 mb-2">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="이름을 입력해주세요"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all text-warm-800 placeholder:text-warm-300"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-warm-700 mb-2">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="010-0000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all text-warm-800 placeholder:text-warm-300"
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-warm-700 mb-2">
                  연령대
                </label>
                <select
                  id="age"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all text-warm-800"
                  defaultValue=""
                >
                  <option value="" disabled>
                    선택해주세요
                  </option>
                  <option value="20대">20대</option>
                  <option value="30대">30대</option>
                  <option value="40대">40대</option>
                  <option value="50대 이상">50대 이상</option>
                </select>
              </div>

              <div>
                <label htmlFor="concern" className="block text-sm font-semibold text-warm-700 mb-2">
                  고민 사항
                </label>
                <textarea
                  id="concern"
                  rows={4}
                  placeholder="현재 고민하시는 점을 자유롭게 적어주세요. (예: 출산 후 체중 증가, 부종, 식욕 조절 등)"
                  className="w-full px-4 py-3 rounded-xl border border-warm-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none transition-all text-warm-800 placeholder:text-warm-300 resize-none"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="mt-1 w-4 h-4 rounded border-warm-300 text-coral-500 focus:ring-coral-400"
                />
                <label htmlFor="privacy" className="text-xs text-warm-500 leading-relaxed">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만
                  사용되며, 상담 완료 후 즉시 파기됩니다.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-coral-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-coral-600 transition-colors"
              >
                무료 상담 신청하기
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="mt-8 bg-sage-50 rounded-2xl p-6 text-center">
            <p className="text-sage-700 font-semibold mb-2">상담 안내</p>
            <p className="text-warm-600 text-sm leading-relaxed">
              상담 신청 후 영업일 기준 1일 이내에 연락드립니다.
              <br />
              빠른 상담을 원하시면 카카오톡 또는 전화를 이용해주세요.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
