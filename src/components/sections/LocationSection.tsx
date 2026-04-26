import SectionTitle from "../SectionTitle";

export default function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle subtitle="오시는 길" title="일산한의원 위치 안내" />

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Naver Map Embed */}
          <a
            href="https://naver.me/IItclnGB"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[16/9] md:aspect-[2/1] relative bg-warm-200 group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.5!2d126.7435!3d37.6783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7J2867CcIO2SieywtOygiA!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="일산한의원 위치"
            />
            {/* Overlay for click-through */}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-end justify-center pb-4 z-10">
              <span className="bg-[#03C75A] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                네이버 플레이스에서 길찾기
              </span>
            </div>
          </a>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* 주소 및 교통 */}
              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-warm-800 mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    주소
                  </h3>
                  <p className="text-warm-600 text-sm leading-relaxed">
                    경기 고양시 일산동구 무궁화로 237
                    <br />
                    이마트 풍산점 3층
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-warm-800 mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    전화
                  </h3>
                  <a href="tel:031-976-7706" className="text-coral-500 font-bold text-lg hover:text-coral-600 transition-colors">
                    031-976-7706
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-warm-800 mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500">
                      <rect x="2" y="6" width="20" height="12" rx="2" />
                      <path d="M12 6V2M7 6V4M17 6V4" />
                    </svg>
                    교통
                  </h3>
                  <p className="text-warm-600 text-sm">
                    경의중앙선 풍산역 2번 출구 도보 1분
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-warm-800 mb-2 flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                    주차
                  </h3>
                  <p className="text-warm-600 text-sm">
                    이마트 4·5·6·7층 주차장 · 무료주차 3시간
                  </p>
                </div>
              </div>

              {/* 진료 시간 */}
              <div>
                <h3 className="font-bold text-warm-800 mb-4 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral-500">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  진료 시간
                </h3>
                <div className="bg-warm-50 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-warm-700 font-semibold">월 ~ 금</span>
                    <span className="text-warm-600">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-warm-700 font-semibold">토 · 일</span>
                    <span className="text-warm-600">10:00 - 16:00</span>
                  </div>
                  <div className="border-t border-warm-200 pt-3 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-warm-500">점심시간 (평일)</span>
                      <span className="text-warm-500">13:00 - 14:00</span>
                    </div>
                    <p className="text-sage-600 text-xs font-semibold">
                      주말·공휴일은 점심시간 없이 진료
                    </p>
                  </div>
                  <div className="border-t border-warm-200 pt-3">
                    <p className="text-coral-500 text-xs font-semibold">
                      매달 2·4번째 수요일 휴무 (이마트 풍산점 휴업일)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://naver.me/IItclnGB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <span className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <span className="text-[#03C75A] font-bold text-[10px]">N</span>
                </span>
                네이버 플레이스에서 길찾기
              </a>
              <a
                href="https://pf.kakao.com/_eXXun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#F5DC00] transition-colors"
              >
                카카오톡 상담
              </a>
              <a
                href="tel:031-976-7706"
                className="inline-flex items-center gap-2 bg-warm-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-warm-900 transition-colors"
              >
                전화: 031-976-7706
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
