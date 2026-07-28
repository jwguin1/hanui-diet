import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PRODUCT_IMAGE_SRC = "/images/product-gambihwan.png";

// 제품 누끼 PNG가 아직 없을 수 있으므로 빌드 시점에 존재 여부를 확인한다.
// public/images/product-gambihwan.png 를 넣으면 플레이스홀더가 자동으로 교체된다.
const hasProductImage = fs.existsSync(
  path.join(process.cwd(), "public", "images", "product-gambihwan.png")
);

const METRICS = [
  { value: "40,000+", label: "누적 처방" },
  { value: "6명", label: "의료진" },
  { value: "비대면", label: "진료 가능" },
];

export default function HeroSection() {
  return (
    <section className="bg-white pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* 제품 이미지 — 모바일에서는 최상단, 데스크톱에서는 우측 */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#F7F7F5]">
            {hasProductImage ? (
              <Image
                src={PRODUCT_IMAGE_SRC}
                alt="일산감비환 제품 이미지"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="text-sm text-[#8A8A8A]">제품 이미지</span>
              </div>
            )}
          </div>
        </div>

        {/* 텍스트 블록 */}
        <div className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-[#E1F5EE] px-3 py-1 text-xs text-[#0F6E56]">
            일산 · 고양 · 파주 처방 다수
          </span>

          <h1 className="mt-5 text-[28px] font-semibold leading-tight text-[#1A1A1A] lg:text-[40px]">
            빠지지 않는 나잇살,
            <br />
            일산감비환으로.
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
            누적 40,000건의 처방 데이터로 정립한 다이어트 한약
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#0F6E56] px-6 py-[14px] font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              비대면 진료 신청
            </a>
            <a
              href="https://pf.kakao.com/_eXXun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg border border-[#D4D4D4] px-6 py-[14px] font-semibold text-[#3A3A3A] transition-colors hover:border-[#0F6E56] hover:text-[#0F6E56] sm:w-auto"
            >
              카카오톡 상담
            </a>
          </div>

          <dl className="mt-8 flex gap-8 border-t border-[#EEEEEE] pt-5">
            {METRICS.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xl font-semibold text-[#1A1A1A]">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[13px] text-[#8A8A8A]">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
