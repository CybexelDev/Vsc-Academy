import { FileText, Mic, Briefcase, UserSearch } from "lucide-react";



const features = [
  {
    icon: (
      <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 16H12V14H4V16ZM4 12H12V10H4V12ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H10L16 6V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 7V2H2V18H14V7H9ZM2 2V7V2V7V18V2Z"
          fill="#006591"
        />
      </svg>
    ),
    iconBg: "#C9E6FF",
    title: "Resume & Portfolio Review",
    description: "Get expert feedback to make your application stand out.",
  },
  {
    icon: (
      <svg
        width="22"
        height="19"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.95 13.9L17.4 12.35C18.1333 11.6667 18.7083 10.8583 19.125 9.925C19.5417 8.99167 19.75 8 19.75 6.95C19.75 5.9 19.5417 4.91667 19.125 4C18.7083 3.08333 18.1333 2.28333 17.4 1.6L18.95 0C19.8833 0.883333 20.625 1.925 21.175 3.125C21.725 4.325 22 5.6 22 6.95C22 8.3 21.725 9.575 21.175 10.775C20.625 11.975 19.8833 13.0167 18.95 13.9ZM15.75 10.7L14.15 9.1C14.45 8.81667 14.6917 8.49583 14.875 8.1375C15.0583 7.77917 15.15 7.38333 15.15 6.95C15.15 6.51667 15.0583 6.12083 14.875 5.7625C14.6917 5.40417 14.45 5.08333 14.15 4.8L15.75 3.2C16.2833 3.68333 16.7 4.24583 17 4.8875C17.3 5.52917 17.45 6.21667 17.45 6.95C17.45 7.68333 17.3 8.37083 17 9.0125C16.7 9.65417 16.2833 10.2167 15.75 10.7ZM8 10.95C6.9 10.95 5.95833 10.5583 5.175 9.775C4.39167 8.99167 4 8.05 4 6.95C4 5.85 4.39167 4.90833 5.175 4.125C5.95833 3.34167 6.9 2.95 8 2.95C9.1 2.95 10.0417 3.34167 10.825 4.125C11.6083 4.90833 12 5.85 12 6.95C12 8.05 11.6083 8.99167 10.825 9.775C10.0417 10.5583 9.1 10.95 8 10.95ZM0 18.95V16.15C0 15.6 0.141667 15.0833 0.425 14.6C0.708333 14.1167 1.1 13.75 1.6 13.5C2.45 13.0667 3.40833 12.7 4.475 12.4C5.54167 12.1 6.71667 11.95 8 11.95C9.28333 11.95 10.4583 12.1 11.525 12.4C12.5917 12.7 13.55 13.0667 14.4 13.5C14.9 13.75 15.2917 14.1167 15.575 14.6C15.8583 15.0833 16 15.6 16 16.15V18.95H0ZM2 16.95H14V16.15C14 15.9667 13.9542 15.8 13.8625 15.65C13.7708 15.5 13.65 15.3833 13.5 15.3C12.9 15 12.1292 14.7 11.1875 14.4C10.2458 14.1 9.18333 13.95 8 13.95C6.81667 13.95 5.75417 14.1 4.8125 14.4C3.87083 14.7 3.1 15 2.5 15.3C2.35 15.3833 2.22917 15.5 2.1375 15.65C2.04583 15.8 2 15.9667 2 16.15V16.95ZM8 8.95C8.55 8.95 9.02083 8.75417 9.4125 8.3625C9.80417 7.97083 10 7.5 10 6.95C10 6.4 9.80417 5.92917 9.4125 5.5375C9.02083 5.14583 8.55 4.95 8 4.95C7.45 4.95 6.97917 5.14583 6.5875 5.5375C6.19583 5.92917 6 6.4 6 6.95C6 7.5 6.19583 7.97083 6.5875 8.3625C6.97917 8.75417 7.45 8.95 8 8.95Z"
          fill="#842BD2"
        />
      </svg>
    ),
    iconBg: "#F0DBFF",
    //   iconColor: "text-purple-600",
    title: "Mock Interview Sessions",
    description:
      "Practice with industry veterans and sharpen your communication skills.",
  },
  {
    icon: (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 19C1.45 19 0.979167 18.8042 0.5875 18.4125C0.195833 18.0208 0 17.55 0 17V6C0 5.45 0.195833 4.97917 0.5875 4.5875C0.979167 4.19583 1.45 4 2 4H6V2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V4H18C18.55 4 19.0208 4.19583 19.4125 4.5875C19.8042 4.97917 20 5.45 20 6V17C20 17.55 19.8042 18.0208 19.4125 18.4125C19.0208 18.8042 18.55 19 18 19H2ZM2 17H18V6H2V17ZM8 4H12V2H8V4ZM2 17V6V17Z"
          fill="#006591"
        />
      </svg>
    ),
    iconBg: "#C9E6FF",
    iconColor: "text-blue-600",
    title: "Exclusive Job Portal",
    description:
      "Access a curated list of openings from our global network of partner companies.",
  },
  {
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8C6.9 8 5.95833 7.60833 5.175 6.825C4.39167 6.04167 4 5.1 4 4C4 2.9 4.39167 1.95833 5.175 1.175C5.95833 0.391667 6.9 0 8 0C9.1 0 10.0417 0.391667 10.825 1.175C11.6083 1.95833 12 2.9 12 4C12 5.1 11.6083 6.04167 10.825 6.825C10.0417 7.60833 9.1 8 8 8ZM8 6C8.55 6 9.02083 5.80417 9.4125 5.4125C9.80417 5.02083 10 4.55 10 4C10 3.45 9.80417 2.97917 9.4125 2.5875C9.02083 2.19583 8.55 2 8 2C7.45 2 6.97917 2.19583 6.5875 2.5875C6.19583 2.97917 6 3.45 6 4C6 4.55 6.19583 5.02083 6.5875 5.4125C6.97917 5.80417 7.45 6 8 6ZM19.1 19.5L15.9 16.3C15.55 16.5 15.175 16.6667 14.775 16.8C14.375 16.9333 13.95 17 13.5 17C12.25 17 11.1875 16.5625 10.3125 15.6875C9.4375 14.8125 9 13.75 9 12.5C9 11.25 9.4375 10.1875 10.3125 9.3125C11.1875 8.4375 12.25 8 13.5 8C14.75 8 15.8125 8.4375 16.6875 9.3125C17.5625 10.1875 18 11.25 18 12.5C18 12.95 17.9333 13.375 17.8 13.775C17.6667 14.175 17.5 14.55 17.3 14.9L20.5 18.1L19.1 19.5ZM13.5 15C14.2 15 14.7917 14.7583 15.275 14.275C15.7583 13.7917 16 13.2 16 12.5C16 11.8 15.7583 11.2083 15.275 10.725C14.7917 10.2417 14.2 10 13.5 10C12.8 10 12.2083 10.2417 11.725 10.725C11.2417 11.2083 11 11.8 11 12.5C11 13.2 11.2417 13.7917 11.725 14.275C12.2083 14.7583 12.8 15 13.5 15ZM0 16V13.225C0 12.6583 0.141667 12.1333 0.425 11.65C0.708333 11.1667 1.1 10.8 1.6 10.55C2.45 10.1167 3.40833 9.75 4.475 9.45C5.54167 9.15 6.725 9 8.025 9C7.825 9.3 7.65417 9.62083 7.5125 9.9625C7.37083 10.3042 7.25833 10.6583 7.175 11.025C6.175 11.1083 5.28333 11.2792 4.5 11.5375C3.71667 11.7958 3.05833 12.0667 2.525 12.35C2.35833 12.4333 2.22917 12.5542 2.1375 12.7125C2.04583 12.8708 2 13.0417 2 13.225V14H7.175C7.25833 14.3667 7.37083 14.7167 7.5125 15.05C7.65417 15.3833 7.825 15.7 8.025 16H0Z"
          fill="#842BD2"
        />
      </svg>
    ),
    iconBg: "#F0DBFF",
    iconColor: "text-purple-600",
    title: "1-on-1 Career Mentorship",
    description:
      "Personalized guidance to navigate the job market and negotiate offers.",
  },
];

export default function CareerSupportSection() {
  return (
    <section className="bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto text-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[32px] leading-[34px] sm:leading-[38px] lg:leading-[40px] font-[700] text-[#171C20] inter">
            Launch Your Career with Expert{" "}
            <span className="text-[#F59E0B]">Placement</span> Support
          </h2>

          <p className="mt-4 inter text-[#3E4850] max-w-[670px] font-[400] text-[15px] sm:text-[16px] leading-[24px] px-2 sm:px-0">
            We don't just teach you to code; we help you get hired. Our
            dedicated career team works with you from day one.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="bg-white flex flex-col gap-3 border cursor-pointer border-gray-200 rounded-xl px-6 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div
                  className="w-11 h-11 lg:w-12 lg:h-12 rounded-[8px] flex items-center justify-center"
                  style={{ backgroundColor: feature.iconBg }}
                >
                  {feature.icon}
                </div>

                <h3 className="font-[700] text-[14px] leading-[20px] lg:leading-[14px] text-gray-900 inter">
                  {feature.title}
                </h3>

                <p className="text-[16px] font-[400] leading-[24px] text-[#3E4850] inter">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
