"use client";

import { useState } from "react";
import SectionTitle from "../SectionTitle";

const faqs = [
  {
    q: "감비환은 어떤 약인가요?",
    a: "감비환(減肥丸)은 체지방 분해를 돕고 기초대사량을 높여주는 한약입니다. 마황, 의이인, 산사 등 천연 한약재로 구성되어 있으며, 개인 체질에 맞게 처방됩니다.",
  },
  {
    q: "부작용은 없나요?",
    a: "천연 한약재를 사용하므로 합성 식욕억제제에 비해 부작용이 현저히 적습니다. 또한 1알 단위로 용량 조절이 가능하여, 몸에 불편함이 느껴지면 바로 조절할 수 있습니다.",
  },
  {
    q: "수유 중에도 복용 가능한가요?",
    a: "수유 중에는 복용을 권장하지 않습니다. 수유 종료 후 시작하시는 것을 권장드리며, 정확한 시기는 상담 시 안내해 드립니다.",
  },
  {
    q: "얼마나 빠질 수 있나요?",
    a: "개인차가 있지만, 2개월 복용 기준 평균 5~10kg 감량을 목표로 합니다. 체질, 식습관, 활동량에 따라 결과가 달라질 수 있습니다.",
  },
  {
    q: "운동을 못 해도 효과가 있나요?",
    a: "네, 운동 없이도 효과를 보실 수 있습니다. 다만 가벼운 산책 정도의 활동을 병행하시면 더 좋은 결과를 얻을 수 있습니다.",
  },
  {
    q: "요요가 오지 않나요?",
    a: "감비환은 단순히 살을 빼는 것이 아니라 체질 자체를 개선하기 때문에 요요가 적습니다. 또한 감량 후 요요 관리 프로그램을 통해 체중을 유지할 수 있도록 돕습니다.",
  },
  {
    q: "비용은 얼마인가요?",
    a: "1개월 기준 30~50만원대이며, 체질과 처방 내용에 따라 달라집니다. 정확한 비용은 상담 후 안내드립니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle subtitle="FAQ" title="자주 묻는 질문" />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-warm-800 text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-warm-400 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </button>
              <div
                className={`accordion-content ${openIndex === i ? "open" : ""}`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-warm-600 text-sm md:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
