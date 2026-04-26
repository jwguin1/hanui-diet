export default function TelehealthSection() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-coral-500 to-coral-600">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          비대면 진료 가능
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          내원이 어려우신가요?
          <br />
          비대면 진료가 가능합니다
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          일산한의원은 비대면 진료가 가능합니다.
          <br />
          아래 구글 폼을 작성하시면 원하는 시간에 비대면 진료를 받으실 수 있습니다.
        </p>
        <a
          href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-coral-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-warm-50 transition-colors shadow-lg hover:shadow-xl"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          비대면 진료 신청하기
        </a>
      </div>
    </section>
  );
}
