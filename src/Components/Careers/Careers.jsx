import React, { useState } from 'react';
import { Star, ChevronDown, RefreshCw, ArrowUpRight } from 'lucide-react';
import CourseDetailsModal from './CourseDetailModal';
import EnquiryModal from './EnquiryModal';
import img1 from "../../assets/1st.png"
import img2 from "../../assets/2nd.png"
import img3 from "../../assets/3rd.png"
import img4 from "../../assets/4rth.png"
import img5 from "../../assets/56.png"
import img6 from "../../assets/66.png"
import img7 from "../../assets/7th.png"
import img8 from "../../assets/8th.png"
import img9 from "../../assets/9th.png"
import img10 from "../../assets/10th.jpg"
import img11 from "../../assets/ddd.png"
import img12 from "../../assets/ds.png"
import java from "../../assets/java.png"
import python from "../../assets/python.png"
import aipdf from "../../assets/doc/AI&MachineLearning.pdf"
import cpdf from "../../assets/doc/CProgramming.pdf"
import csharppdf from "../../assets/doc/CsharpProgramming.pdf"
import cplus from "../../assets/doc/C++Programming.pdf"
import dataanalysitcs from "../../assets/doc/DataAnalytics.pdf"
import datascience from "../../assets/doc/DataScience.pdf"
import embeddedsystem from "../../assets/doc/Embedded Systems (8-bit, 16-bit & 32-bit Controle).pdf"
import fgpa from "../../assets/doc/FPGA Programming.pdf"
import javapdf from "../../assets/doc/Java Programming.pdf"
import pythonpdf from "../../assets/doc/Python Programming.pdf"
import pythondatascience from "../../assets/doc/Python prgramming with data science.pdf"
import vlsi from "../../assets/doc/VLSI Programming.pdf"

// Unified mock data reflecting your UI items exactly
export const PROGRAMS_DATA = [
  {
    id: 1,
    title: 'Java Programming',
    categories: ['Java Programming'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.9,
    learners: '2.4k learners enrolled',
    description: "Learn one of the world's most popular programming languages used by leading companies to build secure, scalable, and high-performance applications. Gain hands-on experience in object-oriented programming, core Java concepts, and real-world project development to prepare for software development careers.",
    badge: 'MOST POPULAR',
    badgeColor: 'bg-[#0056CD] text-white',
    side:"bg-[#0056CD]",
    isHero: true,
    image:java,
    pdf:javapdf
  },
  {
    id: 2,
    title: 'Python Programming',
    categories: ['Python Programming'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.8,
    learners: '1.9k learners enrolled',
    description: "Master Python from fundamentals to advanced programming by building practical applications and solving real-world problems. Learn automation, web development, data analysis, and programming concepts that prepare you for careers in software development, AI, and data science.",
    badge: 'TOP SELLER',
    badgeColor: 'bg-[#3E5F90] text-white',
    side:"bg-[#3E5F90]",
    isHero: true,
    image:python,
    pdf:pythonpdf
  },
  {
    id: 3,
    title: 'CAPM® Certification Guidance',
    categories: ['Data Science'],
    level: 'Beginner',
    duration: '0-6 Weeks',
    rating: 4.7,
    description: "Build a strong foundation in project management by preparing for the CAPM® certification with structured guidance, industry best practices, and exam-focused training. Develop the knowledge and confidence required to begin a successful career in project management.",
    isCert: true,
    certColor: 'border-[#00829A]',
    certText: 'CAPM®',
    certSubtext: 'Professional Certification',
    image:img1
  },
  {
    id: 4,
    title: 'PMP® Certification Guidance',
    categories: ['Data Science'],
    level: 'Intermediate',
    duration: '8-12 Weeks',
    rating: 4.0,
    description: "Advance your project management career through comprehensive PMP® certification guidance designed around PMI standards. Strengthen your leadership, planning, risk management, and project execution skills while preparing confidently for the certification exam.",
    isCert: true,
    certColor: 'border-[#4A154B]',
    certText: 'PMP®',
    certSubtext: 'Professional Certification',
        image:img2
  },
  {
    id: 5,
    title: 'PMI-ACP® Certification Guidance',
    categories: ['Data Science'],
    level: 'Advanced',
    duration: '12+ Weeks',
    rating: 4.6,
    description: "Master Agile principles, Scrum frameworks, Kanban, and modern project delivery practices through comprehensive PMI-ACP® certification guidance. Build the skills needed to lead Agile teams and successfully prepare for the PMI-ACP® certification examination.",
    isCert: true,
    certColor: 'border-[#7C5A3E]',
    certText: 'PMI-ACP®',
    certSubtext: 'Professional Certification',
        image:img3
  },
  {
    id: 6,
    title: 'Embedded Systems ',
    categories: ['FPGA Programming'],
    level: 'Intermediate',
    duration: '12+ Weeks',
    rating: 4.6,
    description: "Master Agile principles, Scrum frameworks, Kanban, and modern project delivery practices through comprehensive PMI-ACP® certification guidance. Build the skills needed to lead Agile teams and successfully prepare for the PMI-ACP® certification examination.",
    iconText: '⚙️',
    iconBg: 'bg-blue-50',
        image:img4,
        pdf:embeddedsystem
  },
  {
    id: 7,
    title: 'FPGA Programming',
    categories: ['FPGA Programming'],
    level: 'Beginner',
    duration: '12+ Weeks',
    rating: 4.8,
    description:"Master Agile principles, Scrum frameworks, Kanban, and modern project delivery practices through comprehensive PMI-ACP® certification guidance. Build the skills needed to lead Agile teams and successfully prepare for the PMI-ACP® certification examination.",
    iconText: '📟',
    iconBg: 'bg-gray-50',
        image:img5,
        pdf:fgpa
  },
  {
    id: 8,
    title: 'VLSI Programming',
    categories: ['FPGA Programming'],
    level: 'Beginner',
    duration: '12+ Weeks',
    rating: 4.9,
    description: "Explore the fundamentals of Very Large Scale Integration (VLSI) design through industry-focused training in digital circuit design, HDL programming, simulation, verification, and chip design workflows. Build the technical skills required for careers in semiconductor and integrated circuit design.",
    iconText: '⚡',
    iconBg: 'bg-orange-50',
        image:img6,
        pdf:vlsi
  },
  {
    id: 9,
    title: 'C Programming',
    categories: ['Java Programming'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.8,
    description: "Build a strong programming foundation by mastering C, one of the world's most widely used programming languages. Learn structured programming, memory management, algorithms, and problem-solving techniques through practical coding exercises and real-world projects.",
    iconText: '🅲',
    iconBg: 'bg-blue-50',
        image:img7,
        pdf:cpdf
  },
  {
    id: 10,
    title: 'C++ Programming',
    categories: ['Java Programming'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.8,
    description: "Learn object-oriented programming concepts and advanced C++ techniques used in software development, game programming, and system applications. Gain practical experience by building efficient, high-performance applications using industry-standard programming practices.",
    iconText: '🅲🞤🞤',
    iconBg: 'bg-indigo-50',
        image:img8,
        pdf:cplus
  },
  {
    id: 11,
    title: 'C# Programming',
    categories: ['Python Programming'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.8,
    description: "Master Microsoft's C# programming language to develop modern desktop, web, and enterprise applications using the .NET platform. Learn object-oriented programming, application development, and database integration while working on practical software projects.",
    iconText: '🎛️',
    iconBg: 'bg-purple-50',
        image:img9,
        pdf:csharppdf
  },
  {
    id: 12,
    title: 'AI & Machine Learning',
    categories: ['Python Programming'],
    level: 'Beginner',
    duration: '12+ Weeks',
    rating: 4.8,
    description: "Discover how intelligent systems are built by learning artificial intelligence, machine learning algorithms, and real-world model development using Python. Gain hands-on experience with industry-standard tools and projects that prepare you for the future of AI-driven technologies.",
    iconText: '🧠',
    iconBg: 'bg-slate-50',
    image:img10,
    pdf:aipdf
  },
  {
    id: 13,
    title: 'Data Analytics',
    categories: ['Data Science'],
    level: 'Beginner',
    duration: '8-12 Weeks',
    rating: 4.8,
    description: "Transform raw data into meaningful business insights by learning data analysis, visualization, SQL, Excel, Power BI, and reporting techniques. Develop practical analytical skills through real-world datasets and projects that support data-driven decision making.",
    iconText: '📊',
    iconBg: 'bg-emerald-50',
    image:img11,
    pdf:dataanalysitcs
  },
  {
    id: 14,
    title: 'Data Science',
    categories: ['Data Science'],
    level: 'Beginner',
    duration: '12+ Weeks',
    rating: 4.8,
    description: "Become a data-driven professional by mastering data analysis, statistics, machine learning, and predictive modeling using Python and industry-standard tools. Build practical projects that prepare you for careers in data science, analytics, and artificial intelligence.",
    iconText: '🕸️',
    iconBg: 'bg-cyan-50',
    image:img12,
    pdf:datascience
  }
];

export default function Careers() {
  const [selectedCategories, setSelectedCategories] = useState([]);
const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [mobileVisibleCards, setMobileVisibleCards] = useState(4);
const [selectedProgram, setSelectedProgram] = useState(null);
const [showCourseModal, setShowCourseModal] = useState(false);
const [showEnquiryModal, setShowEnquiryModal] = useState(false);


  const handleCategoryChange = (cat) => {
  setSelectedCategories((prev) =>
    prev.includes(cat)
      ? prev.filter((c) => c !== cat)
      : [...prev, cat]
  );
};

  const handleClearAll = () => {
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedDurations([]);
  };

  // Safe filtration fallbacks
  const filteredPrograms = PROGRAMS_DATA.filter(prog => {
    const matchesCategory = selectedCategories.length === 0 || prog.categories.some(c => selectedCategories.includes(c));
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(prog.level);
    const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(prog.duration);
    return matchesCategory && matchesLevel && matchesDuration;
  });
    const normalPrograms = filteredPrograms.filter((program) => !program.isHero);
    
const visiblePrograms =
  window.innerWidth < 768
    ? normalPrograms.slice(0, mobileVisibleCards)
    : normalPrograms;


  return (
<div className="min-h-screen bg-white antialiased inter px-4 sm:px-6 md:px-8 lg:px-15">      {/* Top Main Premium Header */}
<header className="mx-auto pt-8 sm:pt-10 lg:pt-12 pb-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0 ">       <div>
  <h1 className="text-3xl md:text-[42px] font-bold text-[#191B24] tracking-[-0.96px] leading-none">
    Elevate Your <span className="text-[#F59E0B]">Career</span> with
  </h1>

  <p className="text-[32px] sm:text-[36px] lg:text-[42px] font-bold text-[#191B24] mt-2">
    Expert-Led Programs
  </p>

  <div className="mt-3 h-[12px] w-max bg-[#1E40AF] rounded-full">
    <div className="w-[203px] h-full"></div>
  </div>
</div>

        <div className="mt-4 md:mt-0 max-w-[495px]">
          <p className="text-right text-[14px] text-[#424655] leading-relaxed">
Choose from industry-ready courses designed to boost your career. Gain
certificates recognized by leading global institutions and tech giants.          </p>
        </div>
      </header>

      {/* Main Filter & Grid Workspace Viewport */}
<main className="mx-auto py-6 lg:py-8 flex flex-col lg:flex-row gap-6 lg:gap-8">        
        {/* Left Interactive Sidebar Filters */}
<aside className="hidden lg:block lg:w-[330px] shrink-0">
            <div className="border border-gray-200 rounded-xl p-10 sticky top-6 shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.03),0px_4px_20px_-2px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-[20px] text-[#191B24]">Filters</h3>
              <button onClick={handleClearAll} className="text-[12px] font-semibold text-[#0056CD] hover:underline">
                Clear All
              </button>
            </div>

            {/* Accordion Block: Categories */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[14px] font-bold  tracking-wider text-[#191B24] mb-3">
                <span>Categories</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-2.5">
                {['Data Science', 'Java Programming', 'Python Programming', 'FPGA Programming'].map((cat) => (
                  <label key={cat} className="flex items-center text-sm text-gray-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="rounded border-gray-300 text-[#0056B3] focus:ring-[#0056B3] mr-2.5 w-4 h-4"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Accordion Block: Professional Level */}
            <div className="mb-6 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                <span>Professional Level</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-2.5">
                {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <label key={lvl} className="flex items-center text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(lvl)}
                      onChange={() => setSelectedLevels(prev => prev.includes(lvl) ? prev.filter(l => l !== lvl) : [...prev, lvl])}
                      className="rounded border-gray-300 text-[#0056B3] mr-2.5 w-4 h-4"
                    />
                    {lvl}
                  </label>
                ))}
              </div>
            </div>

            {/* Accordion Block: Duration */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                <span>Duration</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="space-y-2.5">
                {['0-6 Weeks', '8-12 Weeks', '12+ Weeks'].map((dur) => (
                  <label key={dur} className="flex items-center text-sm text-gray-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(dur)}
                      onChange={() => setSelectedDurations(prev => prev.includes(dur) ? prev.filter(d => d !== dur) : [...prev, dur])}
                      className="rounded border-gray-300 text-[#0056B3] mr-2.5 w-4 h-4"
                    />
                    {dur}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Right Active Grid Area */}
        <section className="flex-1">
          {/* Header Metric Bar */}
            <div className="flex items-center justify-between mb-5 lg:hidden">
    <p className="text-[#424655] font-medium">
      {filteredPrograms.length} Programs
    </p>

    <button
      onClick={() => setShowFilters(true)}
      className="px-5 py-2.5 rounded-full bg-[#0056CD] text-white font-medium"
    >
      Filters
    </button>
  </div>

          <div className="hidden lg:flex items-center justify-between mb-6 text-sm">
            <p className="text-[#424655] font-[400] text-[16px]">
              Showing {filteredPrograms.length}  programs
            </p>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
  {filteredPrograms
    .filter((program) => program.isHero)
    .map((program) => (
      <div
        key={program.id}
        
        className="relative bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden
        shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.03),0px_4px_20px_-2px_rgba(0,0,0,0.05)]
        p-5 sm:p-6 lg:p-7 flex flex-col justify-between"
      >
        {/* Left Blue Accent */}
        <div
          className={`absolute left-0 top-0 h-full w-[6px] ${program.side} rounded-l-[24px]`}
        />

        {/* Top */}
        <div  onClick={() => {
    setSelectedProgram(program);
    setShowCourseModal(true);
  }}>
          <div className="flex items-start justify-between gap-4">
            <span
              className={`px-3 sm:px-4 py-1 rounded-full text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.6px] ${program.badgeColor}`}
            >
              {program.badge}
            </span>

            <img
              src={program.image}
              alt=""
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
            />
          </div>

          <h2 className="mt-5 lg:mt-8 text-[22px] lg:text-[24px] font-semibold text-[#191B24] leading-tight">
            {program.title}
          </h2>

          <p className="mt-4 lg:mt-8 text-[15px] lg:text-[16px] text-[#424655] leading-7 max-w-[520px]">
{
  program.description.length > 90
    ? program.description.slice(0, 90) + "..."
    : program.description
}          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mt-6 lg:mt-8">
          <div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z"
                  fill="#F59E0B"
                />
              </svg>

              <span className="text-[15px] lg:text-[16px] text-[#191B24]">
                {program.rating}
              </span>
            </div>

            <p className="mt-1.5 text-[12px] text-[#424655] font-semibold">
              {program.learners}
            </p>
          </div>

          <button
 onClick={() => {
    setSelectedProgram(program);
    setShowCourseModal(true);
  }}            className="w-full sm:w-auto bg-[#0056CD] hover:bg-[#004db3]
            text-white font-semibold rounded-full
            px-6 lg:px-8 py-3 text-[14px]
            shadow-[0_8px_20px_rgba(0,86,205,.25)]"
          >
            View Program
          </button>
        </div>
      </div>
    ))}
</div>
{showCourseModal && selectedProgram && (
  <CourseDetailsModal
    title={selectedProgram.title}
    description={selectedProgram.description}
    pdf={selectedProgram.pdf}
    onClose={() => setShowCourseModal(false)}
    onDownload={() => {
      setShowCourseModal(false);
      setShowEnquiryModal(true);
    }}
  />
)}

{showEnquiryModal && selectedProgram && (
  <EnquiryModal
    onClose={() => {
      setShowEnquiryModal(false);
      setSelectedProgram(null);
    }}
    title={selectedProgram.title}
    description={selectedProgram.description}
  />
)}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {visiblePrograms
    .filter((program) => !program.isHero)
    .map((program) => (
   <div
  key={program.id}
onClick={() => {
    setSelectedProgram(program);
    setShowCourseModal(true);
  }}
    className="rounded-[24px] border border-[#E6E7F4] shadow-[0px_2px_8px_-2px_rgba(0,0,0,0.03),0px_4px_20px_-2px_rgba(0,0,0,0.05)]  bg-white"
>
  {/* Image - NO PADDING */}
  <div className="bg-[#FAFAFA] rounded-t-[24px]">
    <img
      src={program.image}
      alt={program.title}
      className="w-full h-[172px] object-contain"
    />
  </div>

  {/* Content - HAS PADDING */}
  <div className="p-5">
    {/* Level & Duration */}
    <div className="flex items-center gap-2 mb-3">
      <span className="bg-[#EEF4FF] text-[#0056CD] text-[12px] font-semibold px-2 py-1 rounded-full">
        {program.level}
      </span>

      <span className="w-1 h-1 rounded-full bg-gray-300"></span>

      <span className="text-[10px] text-[#6B7280]">
        {program.duration}
      </span>
    </div>

    {/* Title */}
    <h3 className="text-[20px] font-semibold text-[#191B24] leading-[1.3] mb-3 max-w-[249px]">
      {program.title}
    </h3>

    {/* Description */}
    <p className="text-[16px] text-[#424655] leading-[26px]  mb-6">
      {program.description.length > 53
  ? program.description.slice(0, 53) + "..."
  : program.description}
    </p>

    {/* Footer */}
    <div className="border-t border-[#E5E7EB] pt-4 flex items-center justify-between">
      <div className="flex items-center gap-1 text-[#191B24]">
        <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
        <span className="text-sm font-semibold">{program.rating}</span>
      </div>

      <button className="text-[#0056CD] font-bold text-sm flex items-center gap-1 cursor-pointer "   onClick={() => {
    setSelectedProgram(program);
    setShowEnquiryModal(true);
  }}>
        Enquiry Now
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>

  </div>
</div>
    ))}
</div>
<div className="mt-8 flex justify-center md:hidden">
  {mobileVisibleCards < normalPrograms.length && (
    <button
      onClick={() => setMobileVisibleCards((prev) => prev + 4)}
      className="px-8 py-3 rounded-full bg-[#0056CD] text-white font-semibold hover:bg-[#004db3]"
    >
      Load More
    </button>
  )}
</div>
{showFilters && (
  <div className="fixed inset-0 z-50 lg:hidden px-10">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setShowFilters(false)}
    />

    {/* Bottom Sheet */}
<div className="absolute bottom-4 left-14 right-14 bg-white rounded-3xl max-h-[85vh] overflow-y-auto p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-[#191B24]">
          Filters
        </h3>

        <button
          onClick={() => setShowFilters(false)}
          className="text-2xl text-gray-500"
        >
          ✕
        </button>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-[14px] font-bold text-[#191B24] mb-3">
          <span>Categories</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-2.5">
          {['Data Science', 'Java Programming', 'Python Programming', 'FPGA Programming'].map((cat) => (
            <label
              key={cat}
              className="flex items-center text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
                className="mr-2.5 w-4 h-4"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Professional Level */}
      <div className="mb-6 border-t pt-5">
        <div className="flex items-center justify-between text-[14px] font-bold text-[#191B24] mb-3">
          <span>Professional Level</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-2.5">
          {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
            <label
              key={lvl}
              className="flex items-center text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedLevels.includes(lvl)}
                onChange={() =>
                  setSelectedLevels((prev) =>
                    prev.includes(lvl)
                      ? prev.filter((l) => l !== lvl)
                      : [...prev, lvl]
                  )
                }
                className="mr-2.5 w-4 h-4"
              />
              {lvl}
            </label>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="border-t pt-5">
        <div className="flex items-center justify-between text-[14px] font-bold text-[#191B24] mb-3">
          <span>Duration</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        <div className="space-y-2.5">
          {['0-6 Weeks', '8-12 Weeks', '12+ Weeks'].map((dur) => (
            <label
              key={dur}
              className="flex items-center text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedDurations.includes(dur)}
                onChange={() =>
                  setSelectedDurations((prev) =>
                    prev.includes(dur)
                      ? prev.filter((d) => d !== dur)
                      : [...prev, dur]
                  )
                }
                className="mr-2.5 w-4 h-4"
              />
              {dur}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-3">
        <button
          onClick={handleClearAll}
          className="w-1/2 border border-gray-300 rounded-full py-3 font-medium"
        >
          Clear
        </button>

        <button
          onClick={() => setShowFilters(false)}
          className="w-1/2 bg-[#0056CD] text-white rounded-full py-3 font-semibold"
        >
          Apply
        </button>
      </div>

    </div>
  </div>
)}
        </section>
      </main>
    </div>
  );
}