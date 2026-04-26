import SectionTitle from "../SectionTitle";

export default function DoctorSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle subtitle="의료진 소개" title="신뢰할 수 있는 전문 한의사" />

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          {/* Photo Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-40 h-48 bg-gradient-to-br from-sage-100 to-beige-100 rounded-2xl flex items-center justify-center">
              <div className="text-center text-warm-400">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-warm-200 flex items-center justify-center">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-400">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <p className="text-xs">원장 사진</p>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-warm-900 mb-1">홍길동 원장</h3>
            <p className="text-coral-500 text-sm font-semibold mb-4">일산한의원 대표원장</p>
            <ul className="space-y-2 text-warm-600 text-sm leading-relaxed">
              <li>· OO한의과대학 졸업</li>
              <li>· 한방 비만학회 정회원</li>
              <li>· 다이어트 한약 처방 경력 10년 이상</li>
              <li>· 누적 처방 2,000건 이상</li>
              <li>· 대한한의사협회 정회원</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
