interface CTAButtonsProps {
  variant?: "default" | "large";
}

export default function CTAButtons({ variant = "default" }: CTAButtonsProps) {
  const isLarge = variant === "large";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${isLarge ? "gap-4" : ""}`}>
      <a
        href="https://pf.kakao.com/_placeholder"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] font-bold rounded-full hover:bg-[#F5DC00] transition-colors ${
          isLarge ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.83 3.06-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.74.1 1.51.16 2.29.16 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
        </svg>
        카카오톡 상담
      </a>
      <a
        href="tel:031-000-0000"
        className={`inline-flex items-center justify-center gap-2 bg-coral-500 text-white font-bold rounded-full hover:bg-coral-600 transition-colors ${
          isLarge ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
        전화 예약
      </a>
    </div>
  );
}
