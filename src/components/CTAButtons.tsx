interface CTAButtonsProps {
  variant?: "default" | "large";
}

export default function CTAButtons({ variant = "default" }: CTAButtonsProps) {
  const isLarge = variant === "large";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${isLarge ? "gap-4" : ""}`}>
      <a
        href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 bg-coral-500 text-white font-bold rounded-full hover:bg-coral-600 transition-colors ${
          isLarge ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        비대면 진료 신청
      </a>
      <a
        href="https://pf.kakao.com/_eXXun"
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
    </div>
  );
}
