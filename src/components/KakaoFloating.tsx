"use client";

export default function KakaoFloating() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* 비대면 진료 버튼 */}
      <a
        href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-coral-500 hover:bg-coral-600 text-white rounded-full h-14 px-5 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm font-bold"
        aria-label="비대면 진료 신청"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        비대면 진료
      </a>

      {/* 카카오톡 상담 버튼 */}
      <a
        href="https://pf.kakao.com/_eXXun"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#FEE500] hover:bg-[#F5DC00] text-[#3C1E1E] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="카카오톡 상담"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.83 3.06-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.74.1 1.51.16 2.29.16 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
      </a>
    </div>
  );
}
