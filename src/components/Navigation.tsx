"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-[0.5px] border-sand-line bg-cream/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-[14px] font-medium tracking-[0.05em] text-blush-500">
            ILSANHAN
          </span>
          <span className="text-[10px] text-ink-400">일산감비환</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#gambi"
            className="text-[11px] lg:text-[13px] text-[#5F564D] hover:text-blush-500 transition-colors"
          >
            일산감비환
          </Link>
          <Link
            href="/reviews"
            className="text-[11px] lg:text-[13px] text-[#5F564D] hover:text-blush-500 transition-colors"
          >
            후기
          </Link>
          <a
            href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blush-300 px-4 py-1.5 text-[11px] lg:text-[13px] font-medium text-white transition-colors hover:bg-blush-500"
          >
            상담신청
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#5F564D]"
          aria-label="메뉴 열기"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-b-[0.5px] border-sand-line bg-cream px-4 pb-4">
          <Link
            href="/#gambi"
            onClick={() => setIsOpen(false)}
            className="block border-b-[0.5px] border-sand-line py-3 text-[13px] text-[#5F564D]"
          >
            일산감비환
          </Link>
          <Link
            href="/reviews"
            onClick={() => setIsOpen(false)}
            className="block border-b-[0.5px] border-sand-line py-3 text-[13px] text-[#5F564D]"
          >
            후기
          </Link>
          <a
            href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-[13px] font-medium text-blush-500"
          >
            상담신청
          </a>
        </div>
      )}
    </nav>
  );
}
