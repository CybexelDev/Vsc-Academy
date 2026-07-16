import { X, Download } from "lucide-react";

export default function CourseDetailsModal({
  title,
  description,
  onClose,
  onDownload,
  pdf,
}) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4 inter">
      <div className="relative w-full max-w-[760px] rounded-2xl sm:rounded-[28px] bg-white shadow-2xl p-5 sm:p-7">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-black hover:text-gray-600"
        >
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Title */}
        <h2 className="text-xl sm:text-[20px] font-bold text-[#1F2937] pr-10">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[15px] sm:text-[16px] leading-7 sm:leading-[33px] text-[#5B6475] max-w-[620px]">
          {description}
        </p>

        {/* Bottom CTA */}
        <div className="mt-8 border border-[#D8DDE8] rounded-3xl sm:rounded-full p-5 sm:px-7 sm:h-[74px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <p className="text-base sm:text-[18px] font-semibold text-[#252933]">
            Get a detailed course overview.
          </p>

          {pdf && (
            <button
              onClick={handleDownload}
              className="w-full sm:w-auto h-12 sm:h-[50px] px-6 sm:px-7 rounded-full bg-[#0056D8] hover:bg-[#0049B8] text-white font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Syllabus
            </button>
          )}
        </div>
      </div>
    </div>
  );
}