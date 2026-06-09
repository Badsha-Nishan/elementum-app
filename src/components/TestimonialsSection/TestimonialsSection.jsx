import React from "react";

export default function TestimonialsSection() {
  const avatars = [
    {
      id: 1,
      src: "/images/customers/Ellipse263.png",
      size: "w-[100px] h-[100px]",
      position: "top-[20%] left-[10%]",
    },
    {
      id: 2,
      src: "/images/customers/Ellipse266.png",
      size: "w-[60px] h-[60px]",
      position: "top-[40%] left-[5%]",
    },
    {
      id: 3,
      src: "/images/customers/Ellipse268.png",
      size: "w-[170px] h-[170px]",
      position: "bottom-[35%] left-[12%]",
    },
    {
      id: 4,
      src: "/images/customers/Ellipse267.png",
      size: "w-[90px] h-[90px]",
      position: "bottom-[15%] left-[3%]",
    },

    {
      id: 5,
      src: "/images/customers/Ellipse264.png",
      size: "w-[74px] h-[74px]",
      position: "top-[28%] right-[24%]",
    },
    {
      id: 6,
      src: "/images/customers/Ellipse270.png",
      size: "w-[110px] h-[110px]",
      position: "top-[20%] right-[14%]",
    },
    {
      id: 7,
      src: "/images/customers/Ellipse265.png",
      size: "w-[90px] h-[90px]",
      position: "top-[42%] right-[22%]",
    },
    {
      id: 8,
      src: "/images/customers/Ellipse269.png",
      size: "w-[220px] h-[220px]",
      position: "bottom-[12%] right-[8%]",
    },
  ];

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-white px-[120px] py-[100px] min-h-[900px] overflow-hidden flex flex-col items-center">
      {/*  CUSTOMER AVATARS  */}
      {avatars.map((avatar) => (
        <div
          key={avatar.id}
          className={`absolute ${avatar.position} ${avatar.size} rounded-full overflow-hidden border-4 border-white shadow-md z-0`}
        >
          <img
            src={avatar.src}
            alt="Customer avatar"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/*MAIN CONTENT */}
      <div className="relative z-10 w-full max-w-[860px] flex flex-col items-center text-center mt-[40px]">
        {/* Section Heading */}
        <h2 className="font-gerbil text-4xl lg:text-6xl leading-[1.1] text-black tracking-tight mb-16 select-none">
          <span className="inline-block bg-[#D7EEDD] px-6 py-1 rounded-full font-normal mr-2">
            What
          </span>{" "}
          our customer <br />
          says <span className="relative inline-block">About Us</span>
        </h2>

        {/* Testimonial Card */}
        <div className="relative bg-[#F4F9F6] rounded-[40px] px-[80px] py-[60px] w-full shadow-sm">
          <div className="absolute top-8 left-10 text-[#CBDED5] text-[100px] font-serif leading-none select-none pointer-events-none">
            “
          </div>
          {/* Body Text */}
          <p className="font-satoshi text-3xl leading-[1.65] text-black font-normal">
            Elementum delivered the site with in the timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>
          <div className="absolute bottom-[-10px] right-32 text-[#CBDED5] text-[100px] font-serif leading-none select-none pointer-events-none">
            ”
          </div>
        </div>
      </div>
    </section>
  );
}
