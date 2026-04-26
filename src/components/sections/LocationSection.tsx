import SectionTitle from "../SectionTitle";

export default function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle subtitle="오시는 길" title="일산한의원 위치" />

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Map Placeholder */}
          <div className="aspect-[16/9] md:aspect-[2/1] bg-warm-200 flex items-center justify-center">
            <div className="text-center text-warm-400 p-8">
              <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-3 text-warm-400">
                <path d="M24 4C16 4 10 10 10 17c0 10 14 27 14 27s14-17 14-27c0-7-6-13-14-13z" />
                <circle cx="24" cy="17" r="5" />
              </svg>
              <p className="text-sm">네이버 지도 또는 카카오맵 임베드 영역</p>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-warm-800 mb-3">주소</h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  경기도 고양시 일산서구 (상세주소)
                  <br />
                  OO빌딩 O층
                </p>
              </div>
              <div>
                <h3 className="font-bold text-warm-800 mb-3">진료 시간</h3>
                <div className="text-warm-600 text-sm space-y-1">
                  <p>평일: 09:30 - 19:00</p>
                  <p>토요일: 09:30 - 14:00</p>
                  <p>일요일/공휴일: 휴진</p>
                  <p className="text-coral-500 font-semibold mt-2">점심: 13:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://naver.me/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                네이버 플레이스
              </a>
              <a
                href="tel:031-000-0000"
                className="inline-flex items-center gap-2 bg-warm-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-warm-900 transition-colors"
              >
                전화: 031-000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
