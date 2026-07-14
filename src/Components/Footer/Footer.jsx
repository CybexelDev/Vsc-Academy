import React from 'react';
import logo from "../../assets/logo.png"
import footerLogo from "../../assets/footer.png"
const Footer = () => {
  return (
    <footer className="bg-[#f0f5ff] text-slate-800 font-sans px-6 py-10 md:px-16 md:py-6 manrope rounded-t-5">
      {/* Main Top Section */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 ">
        
        {/* Left Column: Branding and Newsletter */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
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
            
            {/* Heading & Subtext */}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight mt-4">
              Stay updated with latest state of art technology
            </h2>
            <p className="text-xs text-[#000000] max-w-sm mb-6 leading-relaxed font-[400]">
              Get coding tips, career guidance, and exclusive course offers directly to your inbox. 
              Join thousands of learners building their future with us.
            </p>
          </div>

          {/* Subscription Input Form */}
          <div className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-md ">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
               <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L11.06 8.34C10.41 8.75 9.59 8.75 8.94 8.34L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="white"/>
</svg>

              </span>
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="w-full bg-black text-white rounded-full py-3 pl-11 pr-4 text-xs italic focus:outline-none focus:ring-2 focus:ring-[#2563eb] border border-[#94A3B8]"
              />
            </div>
            <button className="w-full sm:w-auto bg-[#1E40AF] hover:bg-[#1d4ed8] text-white font-medium text-xs rounded-full px-6 py-3 transition-colors shadow-sm">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="md:col-span-2 md:pl-4 ">
          <h3 className="text-[#1d4ed8] font-extrabold text-sm mb-4">Quick Link</h3>
          <ul className="space-y-2.5 text-xs font-medium text-[#000000] poppins">
            <li><a href="#home" className="hover:text-[#2563eb] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#2563eb] transition-colors">About Us</a></li>
            <li><a href="#courses" className="hover:text-[#2563eb] transition-colors">Courses</a></li>
            <li><a href="#contact" className="hover:text-[#2563eb] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Popular Courses */}
        <div className="md:col-span-2 ">
          <h3 className="text-[#1d4ed8] font-bold text-sm mb-4 ">Popular Courses</h3>
          <ul className="space-y-2.5 text-xs font-medium text-black poppins">
            <li><a href="#python" className="hover:text-[#2563eb] transition-colors">Python for data science</a></li>
            <li><a href="#c" className="hover:text-[#2563eb] transition-colors">C Programming</a></li>
            <li><a href="#cpp" className="hover:text-[#2563eb] transition-colors">C++ Programming</a></li>
            <li><a href="#java" className="hover:text-[#2563eb] transition-colors">Java programming</a></li>
            <li><a href="#embedded" className="hover:text-[#2563eb] transition-colors">Embedded systems</a></li>
          </ul>
        </div>

        {/* Social Connect Column */}
        <div className="md:col-span-2 flex flex-col items-start md:items-end poppins">
          <div className="w-full md:max-w-[120px] poppins">
            <h3 className="text-[#1d4ed8] font-bold text-sm mb-4 text-left">Connect</h3>
            <div className="flex gap-2.5">
              {/* Instagram */}
             <a
  href="#instagram"
  className="p-[13px] flex items-center justify-center bg-[#1E40AF] hover:bg-[#1d4ed8] rounded-full transition-colors"
>
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.464 0C3.28037 -8.72778e-08 2.14519 0.470078 1.30808 1.30687C0.470968 2.14366 0.000454543 3.27866 0 4.46229V16.3663C0 17.5502 0.470313 18.6856 1.30748 19.5228C2.14464 20.36 3.28007 20.8303 4.464 20.8303H16.368C17.5516 20.8298 18.6866 20.3593 19.5234 19.5222C20.3602 18.6851 20.8303 17.5499 20.8303 16.3663V4.46229C20.8298 3.27895 20.3596 2.14422 19.5228 1.30747C18.6861 0.470732 17.5513 0.000454342 16.368 0H4.464ZM17.652 4.46914C17.652 4.81014 17.5165 5.13716 17.2754 5.37828C17.0343 5.6194 16.7073 5.75486 16.3663 5.75486C16.0253 5.75486 15.6983 5.6194 15.4571 5.37828C15.216 5.13716 15.0806 4.81014 15.0806 4.46914C15.0806 4.12815 15.216 3.80112 15.4571 3.56001C15.6983 3.31889 16.0253 3.18343 16.3663 3.18343C16.7073 3.18343 17.0343 3.31889 17.2754 3.56001C17.5165 3.80112 17.652 4.12815 17.652 4.46914ZM10.4177 6.84857C9.47203 6.84857 8.56508 7.22424 7.89637 7.89294C7.22767 8.56165 6.852 9.4686 6.852 10.4143C6.852 11.36 7.22767 12.2669 7.89637 12.9356C8.56508 13.6043 9.47203 13.98 10.4177 13.98C11.3634 13.98 12.2704 13.6043 12.9391 12.9356C13.6078 12.2669 13.9834 11.36 13.9834 10.4143C13.9834 9.4686 13.6078 8.56165 12.9391 7.89294C12.2704 7.22424 11.3634 6.84857 10.4177 6.84857ZM5.136 10.4143C5.136 9.01394 5.69228 7.67095 6.68248 6.68076C7.67267 5.69057 9.01566 5.13429 10.416 5.13429C11.8163 5.13429 13.1593 5.69057 14.1495 6.68076C15.1397 7.67095 15.696 9.01394 15.696 10.4143C15.696 11.8146 15.1397 13.1576 14.1495 14.1478C13.1593 15.138 11.8163 15.6943 10.416 15.6943C9.01566 15.6943 7.67267 15.138 6.68248 14.1478C5.69228 13.1576 5.136 11.8146 5.136 10.4143Z" fill="white"/>
</svg>

</a>
              {/* Facebook */}
              <a href="#facebook" className="p-[13px]  flex items-center justify-center bg-[#1E40AF] hover:bg-[#1d4ed8] text-white rounded-full transition-colors text-sm">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 19.888C16.311 19.164 20 15.013 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.013 3.689 19.165 8.5 19.888V13H7C6.60218 13 6.22064 12.842 5.93934 12.5607C5.65804 12.2794 5.5 11.8978 5.5 11.5C5.5 11.1022 5.65804 10.7206 5.93934 10.4393C6.22064 10.158 6.60218 10 7 10H8.5V8C8.5 7.07174 8.86875 6.1815 9.52513 5.52513C10.1815 4.86875 11.0717 4.5 12 4.5H12.5C12.8978 4.5 13.2794 4.65804 13.5607 4.93934C13.842 5.22064 14 5.60218 14 6C14 6.39782 13.842 6.77936 13.5607 7.06066C13.2794 7.34196 12.8978 7.5 12.5 7.5H12C11.8674 7.5 11.7402 7.55268 11.6464 7.64645C11.5527 7.74021 11.5 7.86739 11.5 8V10H13C13.3978 10 13.7794 10.158 14.0607 10.4393C14.342 10.7206 14.5 11.1022 14.5 11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H11.5V19.888Z" fill="white"/>
</svg>
              </a>
              {/* X (Twitter) */}
              <a href="#twitter" className="p-[13px] flex items-center justify-center bg-[#1E40AF] hover:bg-[#1d4ed8] text-white rounded-full transition-colors text-xs font-bold">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9 0H22.5806L14.5406 9.21257L24 21.7509H16.5943L10.7897 14.148L4.15543 21.7509H0.471429L9.07029 11.8937L0 0.00171426H7.59429L12.8331 6.94971L18.9 0ZM17.6057 19.5429H19.6457L6.48 2.09314H4.29257L17.6057 19.5429Z" fill="white"/>
</svg>

              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Contact Info Bar */}
      <div className="max-w-7xl mx-auto py-5 flex flex-col md:flex-row justify-end items-start md:items-center gap-4 md:gap-8 text-xs text-[#1E40AF] font-medium">
        <div className="flex items-center gap-1.5">
          <span className="text-[#2563eb]"><svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.15042 12.1398C4.50392 12.4314 4.87258 12.698 5.25 12.9582C5.62823 12.7014 5.99511 12.4284 6.34958 12.1398C6.9405 11.6545 7.49662 11.1284 8.01383 10.5653C9.20617 9.26158 10.5 7.37158 10.5 5.25C10.5 4.56056 10.3642 3.87787 10.1004 3.24091C9.83653 2.60395 9.44982 2.0252 8.96231 1.53769C8.4748 1.05018 7.89605 0.66347 7.25909 0.399632C6.62213 0.135795 5.93944 0 5.25 0C4.56056 0 3.87787 0.135795 3.24091 0.399632C2.60395 0.66347 2.0252 1.05018 1.53769 1.53769C1.05018 2.0252 0.66347 2.60395 0.399632 3.24091C0.135795 3.87787 -1.02735e-08 4.56056 0 5.25C0 7.37158 1.29383 9.261 2.48617 10.5653C3.00336 11.1286 3.55948 11.6544 4.15042 12.1398ZM5.25 7.14583C4.74719 7.14583 4.26498 6.94609 3.90944 6.59056C3.55391 6.23502 3.35417 5.75281 3.35417 5.25C3.35417 4.74719 3.55391 4.26498 3.90944 3.90944C4.26498 3.55391 4.74719 3.35417 5.25 3.35417C5.75281 3.35417 6.23502 3.55391 6.59056 3.90944C6.94609 4.26498 7.14583 4.74719 7.14583 5.25C7.14583 5.75281 6.94609 6.23502 6.59056 6.59056C6.23502 6.94609 5.75281 7.14583 5.25 7.14583Z" fill="#1E40AF"/>
</svg>
</span>
          <span>Coimbatore, Tamil Nadu, India</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#2563eb]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.81372 12.2497C9.27997 12.2497 8.53021 12.0567 7.40747 11.4294C6.0422 10.6638 4.98618 9.95697 3.62829 8.60264C2.31907 7.29424 1.68196 6.44713 0.790284 4.82455C-0.21706 2.99252 -0.0453414 2.03221 0.146612 1.62178C0.375205 1.13123 0.712627 0.837832 1.14876 0.546621C1.39648 0.384319 1.65863 0.245189 1.93189 0.130996C1.95923 0.119238 1.98466 0.108028 2.00735 0.0979104C2.14271 0.0369338 2.34778 -0.0552146 2.60755 0.0432229C2.78091 0.108301 2.93567 0.241465 3.17794 0.480723C3.67478 0.970723 4.35372 2.06201 4.60419 2.59795C4.77235 2.95916 4.88364 3.1976 4.88392 3.46502C4.88392 3.77811 4.72642 4.01955 4.53528 4.28014C4.49946 4.32908 4.46392 4.37584 4.42946 4.42123C4.22138 4.69467 4.17571 4.77369 4.20579 4.91479C4.26677 5.19834 4.72149 6.04244 5.4688 6.78811C6.2161 7.53377 7.03587 7.95978 7.32052 8.02049C7.46763 8.05193 7.54829 8.00436 7.83048 7.78889C7.87095 7.75799 7.91251 7.726 7.95599 7.694C8.24747 7.47717 8.47771 7.32377 8.78341 7.32377H8.78505C9.0511 7.32377 9.27888 7.43916 9.65622 7.62947C10.1484 7.87775 11.2725 8.54795 11.7655 9.04533C12.0053 9.28705 12.139 9.44127 12.2044 9.61436C12.3028 9.87494 12.2101 10.0792 12.1497 10.2159C12.1396 10.2386 12.1284 10.2635 12.1166 10.2911C12.0015 10.5639 11.8616 10.8255 11.6985 11.0726C11.4079 11.5074 11.1134 11.844 10.6217 12.0728C10.3693 12.1923 10.093 12.2528 9.81372 12.2497Z" fill="#1E40AF"/>
</svg>

          </span>
          <span>+91 98437 93427</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#2563eb]">
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0H1.16667C0.525 0 0 0.525 0 1.16667V8.16667C0 8.80833 0.525 9.33333 1.16667 9.33333H10.5C11.1417 9.33333 11.6667 8.80833 11.6667 8.16667V1.16667C11.6667 0.525 11.1417 0 10.5 0ZM10.2667 2.47917L6.45167 4.865C6.0725 5.10417 5.59417 5.10417 5.215 4.865L1.4 2.47917C1.34151 2.44633 1.29029 2.40197 1.24944 2.34876C1.20858 2.29556 1.17895 2.23462 1.16234 2.16963C1.14572 2.10465 1.14246 2.03696 1.15276 1.97068C1.16306 1.9044 1.1867 1.84089 1.22225 1.78401C1.2578 1.72713 1.30452 1.67805 1.35959 1.63975C1.41466 1.60145 1.47693 1.57471 1.54262 1.56117C1.60832 1.54763 1.67608 1.54756 1.74181 1.56097C1.80753 1.57438 1.86985 1.60098 1.925 1.63917L5.83333 4.08333L9.74167 1.63917C9.79681 1.60098 9.85914 1.57438 9.92486 1.56097C9.99059 1.54756 10.0583 1.54763 10.124 1.56117C10.1897 1.57471 10.252 1.60145 10.3071 1.63975C10.3621 1.67805 10.4089 1.72713 10.4444 1.78401C10.48 1.84089 10.5036 1.9044 10.5139 1.97068C10.5242 2.03696 10.5209 2.10465 10.5043 2.16963C10.4877 2.23462 10.4581 2.29556 10.4172 2.34876C10.3764 2.40197 10.3252 2.44633 10.2667 2.47917Z" fill="#1E40AF"/>
</svg>

          </span>
          <a href="mailto:anna.karthikbabu@gmail.com" className="hover:underline">anna.karthikbabu@gmail.com</a>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="w-full  mx-auto pt-4 border-t border-[#4E4E4E] flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-[#64748B] font-bold tracking-wider uppercase">
        <div className='inter tracking-[1.2px]'>
          © 2026 VKS ACADEMY. ALL RIGHTS RESERVED.
        </div>
        {/* CodeBridge Mini Right-Aligned Branding Icon */}
        <div className="flex items-center opacity-80">
  <img
    src={footerLogo}
    alt="Footer Logo"
    className="w-[61.68px] h-[38px] object-contain mix-blend-luminosity"
  />
</div>
      </div>
    </footer>
  );
};

export default Footer;