import React from "react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const avatars = [
    {
      id: 1,
      src: "/images/customers/Ellipse263.png",
      size: "w-[100px] h-[100px]",
      position: "top-[20%] left-[10%]",
      yRange: [-10, 10],
      duration: 4,
    },
    {
      id: 2,
      src: "/images/customers/Ellipse266.png",
      size: "w-[60px] h-[60px]",
      position: "top-[40%] left-[5%]",
      yRange: [6, -12],
      duration: 5,
    },
    {
      id: 3,
      src: "/images/customers/Ellipse268.png",
      size: "w-[170px] h-[170px]",
      position: "bottom-[35%] left-[12%]",
      yRange: [-15, 15],
      duration: 6,
    },
    {
      id: 4,
      src: "/images/customers/Ellipse267.png",
      size: "w-[90px] h-[90px]",
      position: "bottom-[15%] left-[3%]",
      yRange: [8, -8],
      duration: 4.5,
    },
    {
      id: 5,
      src: "/images/customers/Ellipse264.png",
      size: "w-[74px] h-[74px]",
      position: "top-[28%] right-[24%]",
      yRange: [-8, 8],
      duration: 5.2,
    },
    {
      id: 6,
      src: "/images/customers/Ellipse270.png",
      size: "w-[110px] h-[110px]",
      position: "top-[20%] right-[14%]",
      yRange: [12, -10],
      duration: 4.8,
    },
    {
      id: 7,
      src: "/images/customers/Ellipse265.png",
      size: "w-[90px] h-[90px]",
      position: "top-[42%] right-[22%]",
      yRange: [-10, 10],
      duration: 5.5,
    },
    {
      id: 8,
      src: "/images/customers/Ellipse269.png",
      size: "w-[220px] h-[220px]",
      position: "bottom-[12%] right-[8%]",
      yRange: [15, -15],
      duration: 6.5,
    },
  ];

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-white px-5 lg:px-[120px] py-[100px] min-h-[900px] overflow-hidden flex flex-col items-center">
      {/* ---------------- FLOATING CUSTOMER AVATARS ---------------- */}
      {avatars.map((avatar, index) => (
        <motion.div
          key={avatar.id}
          className={`hidden lg:block absolute ${avatar.position} ${avatar.size} rounded-full overflow-hidden border-4 border-white shadow-md z-0`}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: avatar.yRange }}
          // Cleansed single-level transition configuration block that Prettier loves
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: index * 0.08,
            duration: avatar.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <img
            src={avatar.src}
            alt="Customer avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* ---------------- MAIN TEXT CONTENT WRAPPER ---------------- */}
      <div className="relative z-10 w-full max-w-[860px] flex flex-col items-center text-center mt-[40px]">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-gerbil text-4xl lg:text-6xl leading-[1.1] text-black tracking-tight mb-16 select-none"
        >
          <span className="inline-block bg-[#D7EEDD] px-6 py-1 rounded-full font-normal mr-2 transform -rotate-1">
            What
          </span>{" "}
          our customer <br />
          says <span className="relative inline-block">About Us</span>
        </motion.h2>

        {/* Testimonial Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative bg-[#F4F9F6] rounded-[40px] px-6 lg:px-[80px] py-[60px] w-full shadow-sm"
        >
          <div className="absolute top-4 left-6 lg:top-8 lg:left-10 text-[#CBDED5] text-[80px] lg:text-[100px] font-serif leading-none select-none pointer-events-none">
            {"“"}
          </div>

          <p className="font-satoshi text-xl lg:text-3xl leading-[1.65] text-black font-normal relative z-10">
            Elementum delivered the site with in the timeline as they requested.
            Inthe end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn{"'"}t used, which have also
            proved to be easy to use and reliable
          </p>

          <div className="absolute bottom-[-20px] right-8 lg:right-32 text-[#CBDED5] text-[80px] lg:text-[100px] font-serif leading-none select-none pointer-events-none">
            {"”"}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
