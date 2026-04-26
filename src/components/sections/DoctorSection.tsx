import Image from "next/image";
import SectionTitle from "../SectionTitle";

const doctors = [
  { name: "장경진", image: "/images/doctor-1.JPG" },
  { name: "남태훈", image: "/images/doctor-2.JPG" },
  { name: "박건희", image: "/images/doctor-3.png" },
  { name: "강민석", image: "/images/doctor-4.jpg" },
  { name: "박동석", image: "/images/doctor-5.png" },
  { name: "이명주", image: "/images/doctor-6.png" },
];

export default function DoctorSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          subtitle="의료진 소개"
          title="신뢰할 수 있는 의료진"
          description="일산한의원은 6명의 한의사가 협진하는 시스템입니다. 다이어트, 통증, 자율신경, 피부 등 각 분야의 진료를 협진합니다."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[3/4] relative bg-gradient-to-br from-sage-50 to-beige-100">
                <Image
                  src={doc.image}
                  alt={`${doc.name} 원장`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-warm-900">{doc.name}</h3>
                <p className="text-warm-500 text-sm">원장</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
