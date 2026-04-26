import SectionTitle from "../SectionTitle";

export default function CompareSection() {
  const rows = [
    { label: "성분", left: "천연 한약재", right: "합성 화학 성분" },
    { label: "식욕 조절", left: "자연스러운 식욕 감소", right: "강제적 식욕 억제" },
    { label: "부작용", left: "최소 (1알 단위 조절)", right: "심장 두근거림, 불면, 구갈" },
    { label: "요요", left: "체질 개선으로 요요 최소화", right: "복용 중단 시 요요 빈번" },
    { label: "처방 방식", left: "임상 데이터 기반 단계별 처방", right: "동일 성분 일괄 처방" },
    { label: "건강 효과", left: "소화, 부종, 피로 동시 개선", right: "체중 감량에만 집중" },
  ];

  return (
    <section className="py-20 md:py-28 bg-warm-100">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          subtitle="왜 일산감비환인가요?"
          title="식욕억제제 vs 일산감비환"
          description="단순히 살만 빼는 것이 아닌, 건강하게 체질을 바꿔드립니다."
        />

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Header */}
          <div className="grid grid-cols-3 text-center font-bold text-sm md:text-base">
            <div className="p-4 bg-warm-200 text-warm-700">비교 항목</div>
            <div className="p-4 bg-sage-100 text-sage-700">일산감비환</div>
            <div className="p-4 bg-warm-200 text-warm-500">식욕억제제</div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 text-center text-sm md:text-base ${
                i % 2 === 0 ? "bg-white" : "bg-warm-50"
              }`}
            >
              <div className="p-4 font-semibold text-warm-700 border-r border-warm-100">
                {row.label}
              </div>
              <div className="p-4 text-sage-700 border-r border-warm-100">
                {row.left}
              </div>
              <div className="p-4 text-warm-500">{row.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
