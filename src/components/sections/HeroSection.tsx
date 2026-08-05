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
  { value: "9,000", label: "누적 처방" },
  { value: "6명", label: "의료진" },
  { value: "비대면", label: "진료 가능" },
];

export default function HeroSection() {
  return (
    <section className="bg-cream pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* 제품 이미지 — 모바일에서는 최상단, 데스크톱에서는 우측 */}
        {/* lg 미만에서는 정사각 블록이 화면을 다 차지하지 않도록 폭을 제한한다 */}
        <div className="order-1 mx-auto w-full max-w-[300px] lg:order-2 lg:max-w-none">
          <div className="relative flex aspect-square w-full items-center justify-center">
            <div
              aria-hidden="true"
              className="absolute aspect-square w-[72%] rounded-full bg-blush-100"
            />
            <div className="relative aspect-square w-[88%]">
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
                  <span className="text-[11px] tracking-[0.22em] text-ink-400">
                    제품 이미지
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 텍스트 블록 */}
        <div className="order-2 lg:order-1">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-blush-500 lg:text-[11px]">
            Diet Program
          </p>

          <h1 className="mt-5 text-[32px] font-medium leading-[1.4] tracking-[-0.04em] text-ink-900 lg:text-[46px]">
            빠지지 않는 나잇살,
            <br />
            일산감비환으로.
          </h1>

          <p className="mt-4 text-[13px] leading-[1.85] text-ink-600 lg:text-[15px]">
            누적 9,000건의 처방 데이터로 정립한 다이어트 한약
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-cocoa-500 px-6 py-3 text-[14px] font-medium text-cream transition-colors hover:bg-cocoa-700 sm:w-auto"
            >
              비대면 진료 신청
            </a>
            <a
              href="https://pf.kakao.com/_eXXun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-blush-300 px-5 py-3 text-[14px] font-medium text-blush-500 transition-colors hover:bg-blush-100 sm:w-auto"
            >
              카카오톡 상담
            </a>
          </div>

          <dl className="mt-8 flex gap-8 border-t border-sand-line pt-5">
            {METRICS.map((metric) => (
              <div key={metric.label}>
                <dt className="text-[20px] font-medium tabular-nums text-ink-900">
                  {metric.value}
                </dt>
                <dd className="mt-1 text-[12px] text-ink-400">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
