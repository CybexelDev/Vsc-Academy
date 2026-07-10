import about3 from "../../assets/images/about3.jpg";
import about4 from "../../assets/images/about4.jpg";
import about5 from "../../assets/images/about5.jpg";

const features = [
  {
    image: about4,
    title: "Training Aligned with Industry Needs",
    description:
      "Curriculum designed to match today's evolving technology and workplace demands.",
  },
  {
    image: about3,

    title: "Project-Based Learning",
    description:
      "Build real-world projects that strengthen practical skills and confidence.",
  },
  {
    image: about5,
    title: "Expert Mentorship",
    description:
      "Learn directly from experienced professionals with practical industry knowledge.",
  },
  {
    image: about4,
    title: "Professional Course Certification",
    description:
      "Receive a professional certificate upon successful completion of your course.",
  },
];
export default function About() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 px-5 sm:px-9 lg:px-[60px]">
      <div className="mx-auto">
        <h2 className="text-center inter text-[28px] leading-[38px] tracking-[-0.5px] sm:text-[36px] sm:leading-[46px] lg:text-[42px] lg:leading-[56px] lg:tracking-[-0.96px] font-[700] text-[#191B24] mb-8 lg:mb-10">
          Why <span className="text-[#F59E0B]">We</span> Are Better
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-6 inter bg-white border border-[#C2C6D84D] rounded-2xl p-5 sm:p-8 shadow-[0px_8px_30px_0px_rgba(0,45,91,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_40px_0px_rgba(0,45,91,0.08)]"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover flex-shrink-0"
              />

              <div className="text-center sm:text-left">
                <h3 className="font-[700] text-[#191B24] text-[18px] sm:text-[20px] leading-[28px] mb-[6px] sm:mb-3">
                  {feature.title}
                </h3>

                <p className="text-[14px] sm:text-[16px] font-[400] text-[#424655] leading-[20px] sm:leading-[26px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}