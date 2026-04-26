import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-300 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 한의원 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">일산한의원</h3>
            <p className="text-sm leading-loose">
              경기 고양시 일산동구 무궁화로 237
              <br />
              이마트 풍산점 3층
              <br />
              사업자등록번호: 699-14-02824
              <br />
              전화:{" "}
              <a href="tel:031-976-7706" className="hover:text-white transition-colors">
                031-976-7706
              </a>
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">바로가기</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                홈
              </Link>
              <Link href="/reviews" className="hover:text-white transition-colors">
                후기
              </Link>
              <Link href="/consult" className="hover:text-white transition-colors">
                상담신청
              </Link>
              <a
                href="https://www.ilsanhan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                일산한의원 메인 사이트 보기 <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* 외부 링크 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">상담 및 예약</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://naver.me/IItclnGB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#03C75A] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
              >
                <span className="w-5 h-5 bg-white rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-[#03C75A] font-bold text-[10px]">N</span>
                </span>
                네이버 플레이스
              </a>
              <a
                href="https://pf.kakao.com/_eXXun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FEE500] text-[#3C1E1E] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#F5DC00] transition-colors w-fit"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.8 5.22 4.51 6.6-.2.73-.72 2.65-.83 3.06-.13.5.18.49.39.36.16-.1 2.59-1.76 3.64-2.48.74.1 1.51.16 2.29.16 5.52 0 10-3.58 10-7.9S17.52 3 12 3z" />
                </svg>
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-warm-700 pt-6 text-xs text-warm-500 text-center">
          &copy; {new Date().getFullYear()} 일산한의원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
