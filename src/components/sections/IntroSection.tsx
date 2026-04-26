import SectionTitle from "../SectionTitle";

const productImages = [
  { src: "/images/gambihwan-yellow.jpg", alt: "일산감비환 노랑 패키지" },
  { src: "/images/gambihwan-pink.jpg", alt: "일산감비환 핑크 패키지" },
  { src: "/images/gambihwan-package.jpg", alt: "일산감비환 전체 박스" },
  { src: "/images/gambihwan-detail-1.jpg", alt: "일산감비환 상세 1" },
  { src: "/images/gambihwan-detail-2.jpg", alt: "일산감비환 상세 2" },
];

export default function IntroSection() {
  return (
    <section id="gambi" className="py-20 md:py-28 bg-warm-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="일산감비환이란?"
          title="일산감비환은 어떻게 만들어졌나요?"
        />

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-warm-800 mb-2">연간 8,000건 이상의 처방 데이터 축적</h3>
                <p className="text-warm-600 leading-relaxed">
                  일산한의원은 오랜 기간 다이어트 한약을 처방하며 방대한 양의 임상 데이터를 축적해왔습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-warm-800 mb-2">임상 데이터 기반 최적의 비방 정립</h3>
                <p className="text-warm-600 leading-relaxed">
                  수많은 임상 데이터를 분석하여 다이어트에 가장 효율적인 비방을 정립했습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-warm-800 mb-2">그 결과, 일산감비환 탄생</h3>
                <p className="text-warm-600 leading-relaxed">
                  축적된 노하우와 데이터가 만들어낸 특효 처방, 일산감비환이 탄생했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 제품 이미지 갤러리 */}
        <div className="mt-10">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {productImages.map((img, i) => (
              <div key={i} className="aspect-square relative bg-gradient-to-br from-beige-100 to-sage-50 rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center text-warm-400">
                  <div className="text-center p-2">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto mb-1 text-warm-300">
                      <path d="M12 4v16M4 12h16" />
                    </svg>
                    <p className="text-[10px] leading-tight">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-warm-400 text-xs mt-3">
            * 제품 이미지는 실제 제품과 다를 수 있습니다
          </p>
        </div>

        <div className="mt-10 bg-sage-50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sage-700 font-bold text-xl md:text-2xl mb-2">
            일산, 고양시, 파주에서 가장 많이 처방되는 다이어트 한약
          </p>
          <p className="text-warm-600">
            연간 8,000건 이상의 처방이 증명하는 일산감비환의 효과
          </p>
        </div>
      </div>
    </section>
  );
}
