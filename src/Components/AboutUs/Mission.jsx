
import about2 from "../../assets/images/about2.jpg"; 
import about1 from "../../assets/images/about1.jpg"; 


export default function VisionMissionSection() {
  return (
    <section className="bg-gradient-to-br from-[#003B8D]  to-[#0056CD] py-16 px-5 sm:px-9 lg:px-[61px]">
      <div className="mx-auto space-y-18">
        {/* Row 1: Vision text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <span className="block w-[203px] h-3 bg-white rounded-[10px] mb-4.5" />
            <p className="text-[#FF7A00] text-[20px] leading-[28px] font-[700] mb-2 inter">Success</p>
            <h2 className="text-white text-3xl sm:text-[36px] leading-[40px] tracking-[-0.9px] font-[800] mb-6 inter">
              Our Vision
            </h2>
            <p className="text-[#FFFFFFCC] font-[350] text-[20px] leading-[29px] inter">
              To empower every learner with the knowledge, skills, mindset,
              and confidence needed to seamlessly transition from academia to
              industry by bridging the skill gap through career counselling,
              mentoring, coaching, and industry-aligned training. We envision
              a future where educational institutions and training centres
              collaborate to develop competent, innovative, and employable
              professionals who are prepared to meet the evolving demands of
              the global workforce and contribute meaningfully to society.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-[24px] p-2 overflow-hidden backdrop:blur-md bg-[#2161B9] shadow-xl">
            <img
              src={about1}
              alt="Team celebrating success in an office"
              className="w-full rounded-[20px] h-auto sm:h-auto lg:h-auto object-cover"
            />
          </div>
        </div>

        {/* Row 2: image + Mission text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image (order-2 on desktop to sit on the left visually like the design) */}
          <div className="rounded-[24px] p-2 overflow-hidden backdrop:blur-md bg-[#2161B9] shadow-xl">
            <img
              src={about2}
              alt="Colleagues high fiving over a laptop"
              className="w-full rounded-[20px] h-auto sm:h-auto lg:h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:text-right">
            <span className="block w-[203px] h-3 bg-white rounded-[10px] mb-4.5 lg:ml-auto" />

            <p className="text-[#FF7A00] text-[20px] leading-[28px] font-[700] mb-2 inter">Success</p>
            <h2 className="text-white text-3xl sm:text-[36px] leading-[40px] tracking-[-0.9px] font-[800] mb-6 inter">
              Our Mission
            </h2>
            <p className="text-[#FFFFFFCC] font-[350] text-[20px] leading-[29px] inter mb-6">
              To empower every learner with the knowledge, skills, mindset,
              and confidence needed to seamlessly transition from academia to
              industry by bridging the skill gap through career counselling,
              mentoring, coaching, and industry-aligned training. We envision
              a future where educational institutions and training centres
              collaborate to develop competent, innovative, and employable
              professionals who are prepared to meet the evolving demands of
              the global workforce and contribute meaningfully to society.
            </p>
            <p className="text-[#FFFFFFCC] font-[350] text-[20px] leading-[29px] inter">
              We will launch another startup for inhouse startup development
              within 1 years were the students from VSC academy will be
              preferred for job opportunities.
            </p>
            <p className="text-[#FF7A00] text-[14px] font-[600] mt-4 inter">--VSC ACADEMY</p>
          </div>
        </div>
      </div>
    </section>
  );
}