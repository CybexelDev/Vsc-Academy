import { X, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PROGRAMS_DATA } from "./Careers";

export default function EnquiryModal({   onClose,
  title,
  description, }) {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  course: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  return (
    <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-[4px] flex items-center justify-center p-3 sm:p-4 inter">
  <div className="relative w-full max-w-[560px] max-h-[90vh] overflow-y-auto rounded-[22px] bg-white shadow-2xl p-5 sm:p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-black hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

   <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#4F5EF7] leading-tight">
  Hi, This is VSC Academy
</h2>

<p className="text-[14px] sm:text-[16px] text-[#111827] mt-1">
  How may I help you!
</p>

        {/* Course */}
      <div className="mt-6 sm:mt-8">
  <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1F2937] leading-tight">
    {title}
  </h3>

  <p className="mt-2 text-[14px] sm:text-[16px] text-[#6B7280] leading-6 sm:leading-8">
    {description}
  </p>
</div>

        {/* Form */}
<div className="mt-5 space-y-4 sm:space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-2" >
              Full Name
            </label>

            <input
              type="text"
                value={formData.name}
  onChange={handleChange}
              placeholder="e.g. Alex Johnson"
              className="w-full h-14 rounded-xl border bg-[#F5F7FA] border-[#D7DCEC] px-4 outline-none focus:ring-2 focus:ring-[#0056CD]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="alex@company.com"
                value={formData.email}
  onChange={handleChange}

              className="w-full h-14 rounded-xl border bg-[#F5F7FA] border-[#D7DCEC] px-4 outline-none focus:ring-2 focus:ring-[#0056CD]"
            />
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>

              <div className="flex border border-[#D7DCEC] rounded-xl overflow-hidden h-14">

                <div className="px-3 flex items-center bg-[#F8FAFC] border-r">
                  +91
                </div>

                <input
                  type="text"
                  placeholder="(555) 000-0000"
                    value={formData.phone}
  onChange={handleChange}

                  className="flex-1 px-3 outline-none bg-[#F5F7FA]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Select Course
              </label>

             <select
  name="course"
  className="w-full h-14 rounded-xl border bg-[#F5F7FA] border-[#D7DCEC] px-4 outline-none focus:ring-2 focus:ring-[#0056CD]"
>
  <option value="">Select Course</option>

  {PROGRAMS_DATA.map((program) => (
    <option key={program.id} value={program.title}>
      {program.title}
    </option>
  ))}
</select>
            </div>

          </div>

          {/* Button */}

          <button className="w-full h-14 rounded-xl bg-[#006DFF] hover:bg-[#0048ad] text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-lg">
            Submit
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Footer */}

          <div className="flex justify-center items-center gap-2 font-semibold text-[12px] text-[#424655] pt-1">
<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 15.75C1.0875 15.75 0.734375 15.6031 0.440625 15.3094C0.146875 15.0156 0 14.6625 0 14.25V6.75C0 6.3375 0.146875 5.98438 0.440625 5.69063C0.734375 5.39688 1.0875 5.25 1.5 5.25H2.25V3.75C2.25 2.7125 2.61562 1.82812 3.34687 1.09687C4.07812 0.365625 4.9625 0 6 0C7.0375 0 7.92188 0.365625 8.65312 1.09687C9.38437 1.82812 9.75 2.7125 9.75 3.75V5.25H10.5C10.9125 5.25 11.2656 5.39688 11.5594 5.69063C11.8531 5.98438 12 6.3375 12 6.75V14.25C12 14.6625 11.8531 15.0156 11.5594 15.3094C11.2656 15.6031 10.9125 15.75 10.5 15.75H1.5ZM6 12C6.4125 12 6.76562 11.8531 7.05937 11.5594C7.35312 11.2656 7.5 10.9125 7.5 10.5C7.5 10.0875 7.35312 9.73438 7.05937 9.44063C6.76562 9.14688 6.4125 9 6 9C5.5875 9 5.23438 9.14688 4.94063 9.44063C4.64688 9.73438 4.5 10.0875 4.5 10.5C4.5 10.9125 4.64688 11.2656 4.94063 11.5594C5.23438 11.8531 5.5875 12 6 12ZM3.75 5.25H8.25V3.75C8.25 3.125 8.03125 2.59375 7.59375 2.15625C7.15625 1.71875 6.625 1.5 6 1.5C5.375 1.5 4.84375 1.71875 4.40625 2.15625C3.96875 2.59375 3.75 3.125 3.75 3.75V5.25Z" fill="#424655"/>
</svg>
            Secure and Encrypted transaction
          </div>

        </div>
      </div>
    </div>
  );
}