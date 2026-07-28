"use client";

import { useEffect, useState } from "react";

const CIRCLE =
  "flex h-10 w-10 items-center justify-center rounded-full bg-blush-300 text-white shadow-md transition-colors hover:bg-blush-500 md:h-11 md:w-11";

export default function FloatingQuickLinks() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 z-40 flex flex-col gap-2 transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* 네이버 플레이스 — 데스크톱 전용 */}
      <a
        href="https://naver.me/IItclnGB"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="네이버 플레이스에서 일산한의원 보기"
        className={`hidden md:flex ${CIRCLE}`}
      >
        <span className="text-[13px] font-bold leading-none">N</span>
      </a>

      {/* 카카오톡 상담 */}
      <a
        href="https://pf.kakao.com/_eXXun"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오톡으로 상담하기"
        className={CIRCLE}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.83 3.06-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.74.1 1.51.16 2.29.16 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
      </a>

      {/* 전화 걸기 */}
      <a
        href="tel:031-976-7706"
        aria-label="일산한의원에 전화하기 031-976-7706"
        className={CIRCLE}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* 맨 위로 — 데스크톱 전용 */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="페이지 맨 위로 이동"
        className={`hidden md:flex ${CIRCLE}`}
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
