import React from "react";
import {
  FiCheckSquare,
  FiBriefcase,
  FiGlobe,
  FiAward,
} from "react-icons/fi";
import img from "../../assets/img/im2.png"

const StudentExperience = () => {
  const features = [
    {
      icon: <FiCheckSquare />,
      title: "Guaranteed Placement",
      desc: "Internship placement for top performers in our flagship programs.",
      color: "bg-sky-100 text-sky-600",
    },
    {
      icon: <FiBriefcase />,
      title: "Monthly Stipend",
      desc: "Earn while you learn with a competitive monthly stipend.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FiGlobe />,
      title: "Live Global Projects",
      desc: "Work on real-world challenges with global technology partners.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FiAward />,
      title: "Expert Mentorship",
      desc: "Receive direct guidance from industry veterans throughout.",
      color: "bg-violet-100 text-violet-600",
    },
  ];


  return (
    <section className="relative overflow-hidden bg-[#EEF4FB] py-20 inter">
      {/* Decorative Circles */}
      <div className="absolute -top-19 right-1 h-38 w-38 rounded-full bg-[#B9C4FF] opacity-70"></div>
      <div className="absolute -bottom-19 left-1 h-38 w-38 rounded-full bg-[#B9C4FF] opacity-70"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
            See What
            <br />
            Our <span className="text-[#F59E0B]">Students</span> say
          </h2>

          <div className="mt-5 h-2 w-32 rounded-full bg-[#2448B8]"></div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0px] text-[#2448B8] alexandria">
              Career Growth
            </p>

            <h3 className="text-7xl font-semibold text-[#1E40AF] sora">
              80<span className="text-[#F59E0B] text-5xl">%</span>
            </h3>

            <div className="mt-4 h-[6px]  w-20 rounded-full bg-[#F59E0B]"></div>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0px] text-[#2448B8] alexandria">
              Average Rating
            </p>

            <h3 className="text-7xl font-semibold text-[#2448B8] sora">
              4.8
              <span className="text-[#F59E0B] text-4xl"> /5</span>
            </h3>

            <div className="mt-4 h-[6px] w-20 rounded-full bg-[#F59E0B]"></div>
          </div>
<div className="flex flex-col items-start md:items-end">
  <p className="mb-2 text-xs font-medium uppercase text-[#2448B8] alexandria">
    Placement Assistance
  </p>

  <div className="inline-flex flex-col items-start">
    <h3 className="text-7xl font-semibold text-[#2448B8] sora">
      100<span className="text-[#F59E0B]">%+</span>
    </h3>

    <div className="mt-4 h-[6px]  w-20 rounded-full bg-[#F59E0B]"></div>
  </div>
</div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 grid items-center gap-19 lg:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <div className="rounded-[26px] border border-blue-200 bg-transparent p-3 shadow-lg">
              <img
                src={img}
                alt=""
                className="h-[650px] w-full rounded-3xl object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-0 right-0 translate-x-5 translate-y-5 rounded-2xl bg-white px-6 py-5 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white">
                  <FiAward size={20} />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    100% Placement
                  </h4>

                  <p className="text-sm text-gray-500">
                    Track Record
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Content */}
          <div>

            <h2 className="mb-10 text-4xl font-bold leading-tight text-gray-900">
              Gain Real-World Experience
              <br />
              with{" "}
              <span className="text-[#2448B8]">
                Paid Internships
              </span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentExperience;