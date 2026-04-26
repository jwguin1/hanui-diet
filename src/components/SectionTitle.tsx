interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""}`}>
      {subtitle && (
        <p className="text-sage-500 font-semibold text-sm mb-2 tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900 leading-snug text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-warm-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
