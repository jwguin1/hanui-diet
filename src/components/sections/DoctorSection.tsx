import SectionTitle from "../SectionTitle";

const doctors = [
  { name: "장경진" },
  { name: "남태훈" },
  { name: "박건희" },
  { name: "강민석" },
  { name: "박동석" },
  { name: "이명주" },
];

export default function DoctorSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="의료진 소개"
          title="신뢰할 수 있는 의료진"
          description="일산한의원은 6명의 한의사가 협진하는 시스템입니다. 다이어트, 통증, 자율신경, 피부 등 각 분야의 진료를 협진합니다."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-sage-50 to-beige-100 flex items-center justify-center">
                <div className="text-center text-warm-400">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-warm-200 flex items-center justify-center">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-400">
                      <circle cx="14" cy="10" r="5" />
                      <path d="M4 26c0-5 5-9 10-9s10 4 10 9" />
                    </svg>
                  </div>
                  <p className="text-xs">원장 사진</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-warm-900">{doc.name}</h3>
                <p className="text-warm-500 text-sm">원장</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
