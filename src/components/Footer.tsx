import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-300 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">일산한의원</h3>
            <p className="text-sm leading-relaxed">
              경기도 고양시 일산서구 (상세주소)
              <br />
              대표: 홍길동 | 사업자등록번호: 000-00-00000
              <br />
              전화: 031-000-0000
            </p>
          </div>
          <div className="md:text-right">
            <h3 className="text-white font-bold text-lg mb-3">바로가기</h3>
            <div className="flex flex-col gap-2 md:items-end text-sm">
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
                href="https://ilsanhan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1"
              >
                일산한의원 메인 보기 <span aria-hidden="true">&rarr;</span>
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
