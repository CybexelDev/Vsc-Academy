import React, { useState,useEffect } from 'react';
import logo from "../../assets/logo.png"
export default function Navbar() {
  const [active, setActive] = useState("home");
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");

    let current = "home";

    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;

      if (
        window.scrollY >= top &&
        window.scrollY < top + height
      ) {
        current = section.id;
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* --- DESKTOP / MEDIUM SCREEN HEADER (Top Navigation) --- */}
     <header className="hidden md:block sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm jakarta">
  <div className="w-full px-15 py-3 grid grid-cols-3 items-center">

    {/* Logo */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="VSC Logo"
        className="h-[41px] w-[91px] object-contain"
      />

      <span className="self-end text-[24px] font-extrabold tracking-[-1.2px] text-[#1E40AF] manrope">
        Academy
      </span>
    </div>

    {/* Center Navigation */}
    <nav className="flex justify-center items-center space-x-8 font-semibold text-[14px]">
   <a
  href="#home"
  onClick={() => setActive("home")}
  className={`pb-1 transition-colors ${
    active === "home"
      ? "text-[#2563eb] border-b-2 border-[#2563eb]"
      : "text-[#8B8B8B] hover:text-gray-900"
  }`}
>
  Home
</a>

<a
  href="#course"
  onClick={() => setActive("course")}
  className={`pb-1 transition-colors ${
    active === "course"
      ? "text-[#2563eb] border-b-2 border-[#2563eb]"
      : "text-[#8B8B8B] hover:text-gray-900"
  }`}
>
  Course
</a>

<a
  href="#about"
  onClick={() => setActive("about")}
  className={`pb-1 transition-colors ${
    active === "about"
      ? "text-[#2563eb] border-b-2 border-[#2563eb]"
      : "text-[#8B8B8B] hover:text-gray-900"
  }`}
>
  About Us
</a>
    </nav>

    {/* Right Button */}
    <div className="flex justify-end">
      <button className="bg-[#4648D4] hover:bg-[#3730a3] text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
        onClick={() => {
    setActive("contact");
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
        Contact
      </button>
    </div>

  </div>
</header>


      {/* --- MOBILE SCREEN HEADER (Top Logo Only) --- */}
     <header className="block md:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
  <div className="px-4 py-3 flex items-center justify-between">
    
    {/* Logo */}
    <div className="flex items-center">
      <img
        src={logo}
        alt="VSC Logo"
        className="h-8 w-auto object-contain"
      />

      <span className="self-end text-[18px] font-extrabold tracking-[-0.8px] text-[#1E40AF] manrope">
        Academy
      </span>
    </div>

    {/* Contact Button */}
    <button className="bg-[#4338ca] text-white text-xs font-medium px-4 py-2 rounded-full"   onClick={() => {
    setActive("contact");
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
      Contact
    </button>

  </div>
</header>


      {/* --- MOBILE BOTTOM NAVIGATION BAR --- */}
      <nav className="block md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center h-16">
          
          {/* Mobile Home Link */}
<a
  href="#home"
  onClick={() => setActive("home")}
  className={`flex flex-col items-center justify-center w-full h-full ${
    active === "home" ? "text-[#2563eb]" : "text-gray-400"
  }`}
>            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[11px] font-medium mt-1">Home</span>
          </a>

          {/* Mobile Course Link */}
<a
  href="#course"
  onClick={() => setActive("course")}
  className={`flex flex-col items-center justify-center w-full h-full ${
    active === "course" ? "text-[#2563eb]" : "text-gray-400"
  }`}
>            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.47 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[11px] font-medium mt-1">Course</span>
          </a>

          {/* Mobile About Link */}
<a
  href="#about"
  onClick={() => setActive("about")}
  className={`flex flex-col items-center justify-center w-full h-full ${
    active === "about" ? "text-[#2563eb]" : "text-gray-400"
  }`}
>            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[11px] font-medium mt-1">About Us</span>
          </a>

        </div>
      </nav>
    </>
  );
}