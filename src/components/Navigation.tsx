"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-warm-200/50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-warm-800">
          일산한의원
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#gambi" className="text-warm-700 hover:text-coral-500 transition-colors text-sm">
            일산감비환
          </Link>
          <Link href="/reviews" className="text-warm-700 hover:text-coral-500 transition-colors text-sm">
            후기
          </Link>
          <a
            href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-coral-600 transition-colors"
          >
            상담신청
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-warm-700"
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
        <div className="md:hidden bg-warm-50 border-b border-warm-200 px-4 pb-4">
          <Link
            href="/#gambi"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-warm-700 border-b border-warm-100"
          >
            일산감비환
          </Link>
          <Link
            href="/reviews"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-warm-700 border-b border-warm-100"
          >
            후기
          </Link>
          <a
            href="https://forms.gle/x6ZoNh6zmnbpmsSAA"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block py-3 text-coral-500 font-semibold"
          >
            상담신청
          </a>
        </div>
      )}
    </nav>
  );
}
