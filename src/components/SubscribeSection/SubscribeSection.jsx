import React from "react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#D7EEDD] px-5 lg:px-[120px] pt-[140px] pb-[80px] overflow-hidden flex flex-col items-center text-center">
      {/* ---------------- DECORATIVE VECTOR ARROWS ---------------- */}
      <motion.img
        src="/images/Vector111.png"
        alt="Decorative arrows"
        className="absolute top-0 left-[38%] w-[120px] object-contain pointer-events-none z-0"
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.img
        src="/images/Vector222.png"
        alt="Decorative arrows"
        className="absolute top-0 left-[42%] w-[120px] object-contain pointer-events-none z-0"
        animate={{ y: [5, -5, 5] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* ---------------- DECORATIVE PURPLE SEMI-CIRCLE ---------------- */}
      <motion.div
        className="absolute right-[6%] top-[25%] w-[150px] h-[300px] bg-[#9747FF] rounded-l-full transform pointer-events-none z-0"
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        whileInView={{ opacity: 1, x: 0, rotate: 15 }}
        viewport={{ once: true }}
        animate={{ rotate: [15, 12, 18, 15] }}
        transition={{
          rotate: {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />

      {/* ---------------- MAIN CONTAINER CONTENT ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="relative z-10 max-w-[900px] flex flex-col items-center"
      >
        <h2 className="font-gerbil text-4xl sm:text-6xl lg:text-[90px] leading-[1.05] text-black tracking-tight mb-6">
          Subscribe to <br />
          our newsletter
        </h2>

        <p className="font-satoshi text-[18px] text-gray-800 font-normal mb-10 tracking-wide">
          To make your stay special and even more memorable
        </p>

        {/* Dynamic Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="bg-black text-white cursor-pointer font-satoshi font-bold text-[16px] px-[48px] py-[18px] rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-md"
        >
          Subscribe Now
        </motion.button>
      </motion.div>
    </section>
  );
}
