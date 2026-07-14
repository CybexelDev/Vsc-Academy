import { X, Download } from "lucide-react";

export default function CourseDetailsModal({
  title,
  description,
  onClose,
  onDownload,
  pdf
}) {
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop(); // optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 inter">
      <div className="relative w-full max-w-[760px] rounded-[28px] bg-white shadow-2xl p-7">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black hover:text-gray-600"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Title */}
        <h2 className="text-[20px] font-bold text-[#1F2937]">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[16px] leading-[33px] text-[#5B6475] max-w-[620px]">
          {description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-8 border border-[#D8DDE8] rounded-full h-[74px] px-7 flex items-center justify-between">

          <p className="text-[18px] font-semibold text-[#252933]">
            Get a detailed course overview.
          </p>
{pdf &&(
          <button
            onClick={handleDownload}
            className="h-[50px] px-7 rounded-full bg-[#0056D8] hover:bg-[#0049B8] text-white font-semibold flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Syllabus
          </button>
)
}

        </div>

      </div>
    </div>
  );
}