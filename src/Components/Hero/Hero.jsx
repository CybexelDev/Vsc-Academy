import React from "react";
import hero1 from "../../assets/images/hero1.jpg"; 
import hero2 from "../../assets/images/hero2.jpg"; 
import hero3 from "../../assets/images/hero3.jpg"; 
import hero4 from "../../assets/images/hero4.jpg"; 
import hero5 from "../../assets/images/hero5.jpg"; 


/**
 * Hero Section — "Master Coding. Code with Confidence."
 * React + Tailwind CSS
 *
 * Notes:
 * - Photos are placeholder stock portraits (randomuser.me). Swap the `src`
 *   values in the PHOTOS array below with your own images — just keep the
 *   same aspect ratios for the pill/circle shapes to look right.
 * - The collage uses a mobile-first responsive scale: base classes target
 *   mobile, sm:/md: scale the collage up for tablets, and lg: reproduces
 *   the ORIGINAL desktop pixel values exactly (unchanged from before).
 */



export default function HeroSection() {
  return (
    <section className="w-full bg-[radial-gradient(circle,rgba(245,158,11,0.03)_0%,rgba(245,158,11,0)_100%)]">
      <div className="mx-auto px-[20px] xl:px-[67px] py-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-3 lg:gap-4">
          {/* ---------------- Left content ---------------- */}
{/* ---------------- Left content ---------------- */}
<div className="w-full md:w-[45%] flex flex-col justify-center gap-5 sm:gap-6 lg:gap-7  lg:my-[55px]">

  {/* Eyebrow badge */}
  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-indigo-50 px-3 py-1">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-2 h-2 lg:w-[10px] lg:h-[10px]"
    >
      <rect
        width="9.22846"
        height="9.22846"
        rx="4.61423"
        fill="#4648D4"
      />
    </svg>

    <span className="jakarta text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-none font-[600] tracking-wide text-[#07006C]">
      NEW: AI ENGINEERING TRACK
    </span>
  </div>

  {/* Heading */}
  <h1
  className="
    jakarta
    font-[800]
    text-[42px]
    sm:text-[56px]
    md:text-[60px]
    lg:text-[83px]
    tracking-[-1.5px]
    sm:tracking-[-2px]
    lg:tracking-[-3.3px]
    leading-[1.1]
    lg:leading-[91px]
  "
>
  <span className="text-slate-900">Master Coding.</span>
  <br className="hidden sm:block" />

  <span className="text-[#1E40AF]">Code with</span>
  <br/>

  <span className="text-[#1E40AF]">Confidence.</span>
</h1>

  {/* Subtext */}
  <p
    className="
      inter
      text-[#464554]
      text-[16px]
      sm:text-[18px]
      lg:text-[20px]
      leading-[28px]
      lg:leading-[33px]
      max-w-full
      sm:max-w-[520px]
      lg:max-w-[590px]
    "
  >
    Join our courses to gain hands-on experience through real-world
    projects, guided by industry experts.
  </p>

  {/* CTAs */}
  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 jakarta w-full sm:w-auto">
<a href="#contact">
    <button
      className="
        w-full
        sm:w-auto
        rounded-full
        font-[500]
        text-[15px]
        lg:text-[16px]
        leading-[16px]
        tracking-[0.81px]
        cursor-pointer
        bg-[#1E40AF]
        hover:bg-blue-900
        transition-colors
        text-white
        px-7
        sm:px-8
        lg:px-9
        py-4
        lg:py-5
       shadow-[0px_4.61px_6.92px_-4.61px_rgba(70,72,212,0.2),0px_11.54px_17.3px_-3.46px_rgba(70,72,212,0.2)]      "
    >
      Start Learning Now
    </button>
    </a>
<a href="#course">

    <button
      className="
        w-full
        sm:w-auto
        rounded-full
        font-[500]
        text-[15px]
        lg:text-[16px]
        leading-[16px]
        tracking-[0.81px]
        border-2
        border-[#767586]
        hover:border-slate-400
        transition-colors
        text-[#1B1B23]
        px-7
        sm:px-8
        lg:px-9
        py-4
        lg:py-[18px]
        cursor-pointer
      "
    >
      View Syllabus
    </button>
    </a>

  </div>

</div>

          {/* ---------------- Right photo collage ---------------- */}
  <div className="w-full md:w-[55%] flex justify-center lg:justify-end">
  <div className="relative">

    {/* Orange Dot */}
    <div
      className="
        absolute z-10 rounded-full bg-[#FFA600]
        w-6 h-6 top-[24px] left-[68px]
        sm:w-8 sm:h-8 sm:top-[32px] sm:left-[135px]
        md:w-9 md:h-9 md:top-[42px] md:left-[95px]
        lg:w-10 lg:h-10 lg:top-[54px] lg:left-[130px] xl:left-[154px]
      "
    ></div>

    {/* Green Dot */}
    <div
      className="
        absolute z-10 rounded-full bg-[#44FF00] left-0
        w-8 h-8 bottom-4
        sm:w-12 sm:h-12 sm:bottom-18
        md:w-12 md:h-12 md:bottom-8
        lg:w-16 lg:h-16 lg:bottom-10
      "
    ></div>

    {/* Grid */}
<div
  className="
    grid grid-cols-3 w-fit overflow-hidden
    gap-3 px-[0px]
    sm:gap-2 sm:px-[14px]
    md:gap-4 md:px-[16px]
    lg:gap-5 lg:px-[20px] xl:px-[43px]
  "
>
      {/* Column 1 */}
      <div
        className="
          flex flex-col
          mt-[50px]
          sm:mt-[65px]
          md:mt-[80px]
          lg:mt-[100px]
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[45px] w-[90px] h-[280px]
            sm:rounded-[80px] sm:w-[154px] sm:h-[340px]
            md:rounded-[65px] md:w-[120px] md:h-[390px]
            lg:rounded-[89px] lg:w-[154px] lg:h-[475px]
          "
        >
          <img src={hero1} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Column 2 */}
      <div
        className="
          flex flex-col
          gap-3 mt-[15px]
          sm:gap-2 sm:mt-[20px]
          md:gap-3 md:mt-[27px]
          lg:gap-5 lg:mt-[33px]
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[45px] w-[90px] h-[145px]
            sm:rounded-[80px] sm:w-[150px] sm:h-[200px]
            md:rounded-[65px] md:w-[120px] md:h-[200px]
            lg:rounded-[89px] lg:w-[154px] lg:h-[251px]
          "
        >
          <img src={hero2} alt="" className="w-full h-full object-cover" />
        </div>

        <div
          className="
            overflow-hidden
            rounded-[45px] w-[90px] h-[200px]
            sm:rounded-[75px] sm:w-[154px] sm:h-[245px]
            md:rounded-[65px] md:w-[120px] md:h-[275px]
            lg:rounded-[89px] lg:w-[154px] lg:h-[341px]
          "
        >
          <img src={hero3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Column 3 */}
      <div
        className="
          flex flex-col
          gap-3
          sm:gap-2
          md:gap-3
          lg:gap-5
        "
      >
        <div
          className="
            overflow-hidden
            rounded-[45px] w-[90px] h-[300px]
            sm:rounded-[75px] sm:w-[154px] sm:h-[365px]
            md:rounded-[65px] md:w-[120px] md:h-[420px]
            lg:rounded-[89px] lg:w-[154px] lg:h-[509px]
          "
        >
          <img src={hero4} alt="" className="w-full h-full object-cover" />
        </div>

          <div
            className="
              overflow-hidden rounded-full
              w-[90px] h-[88px]
              sm:w-[144px] sm:h-[140px]
              md:w-[120px] md:h-[118px]
              lg:w-[154px] lg:h-[151px]
            "
          >
            <img src={hero5} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

  </div>
</div>
        </div>
      </div>
    </section>
  );
}