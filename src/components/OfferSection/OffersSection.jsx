import React from "react";
import { motion } from "motion/react"; // Swap to "framer-motion" if you are using an older version

export default function OffersSection() {
  const offers = [
    {
      id: 1,
      tags: "Office of multiple interest content",
      title: "Colaborative & partnership",
      hasImage: false,
    },
    {
      id: 2,
      tags: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
      hasImage: false,
    },
    {
      id: 3,
      tags: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
      hasImage: true,
      imageSrc: "/images/Rectangle661.png",
    },
  ];

  // List container reveal variants
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Row reveal variants
  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-white px-5 lg:px-[120px] py-[140px] overflow-hidden">
      {/* ---------------- BACKGROUND DECORATION ---------------- */}
      <motion.img
        src="/images/Vector2516.png"
        alt="Decorative line"
        className="absolute right-0 -top-74 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---------------- SECTION HEADER ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative text-center lg:text-left z-10 mb-[80px]"
      >
        <h2 className="font-gerbil text-4xl md:text-6xl lg:text-8xl leading-[1.1] text-black tracking-tight">
          What we{" "}
          <span className="inline-block bg-[#D7EEDD] px-5 rounded-full ml-5 mr-2 transform -rotate-1">
            can
          </span>{" "}
          <br />
          <span className="relative inline-block">
            offer
            {/* Yellow underline graphic */}
            <img
              src="/images/Vector5.png"
              className="absolute left-0 -bottom-3 -z-10 w-full"
              alt="Underline Accent"
            />
          </span>{" "}
          you!
        </h2>
      </motion.div>

      {/* ---------------- OFFERS LIST ---------------- */}
      <motion.div
        variants={listContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 w-full border-t border-gray-200"
      >
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            variants={rowVariants}
            whileHover="hover" // Triggers "hover" variant across all child elements simultaneously
            className="group flex-col lg:flex-row flex items-center justify-between py-[40px] border-b border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-50/50"
          >
            {/* Left Column: Sub-labels / Tags */}
            <div className="w-[340px] mr-14 px-5 font-satoshi text-3xl leading-relaxed text-gray-700 pr-4 lg:text-left text-center mb-4 lg:mb-0">
              {offer.tags}
            </div>

            {/* Middle Column: Large Title & Pop Image */}
            <div className="flex-1 relative flex items-center justify-center lg:justify-start w-full">
              <motion.h3
                variants={{
                  hover: { x: 10, transition: { duration: 0.3 } },
                }}
                className="font-gerbil text-3xl md:text-4xl lg:text-6xl text-black tracking-tight select-none transition-colors duration-300 group-hover:text-neutral-800"
              >
                {offer.title}
              </motion.h3>

              {/* Overlapping Badge Image (Row 3 Specific) */}
              {offer.hasImage && (
                <motion.div
                  variants={{
                    hidden: { scale: 0, opacity: 0, rotate: -30, y: "-50%" },
                    visible: { scale: 1, opacity: 1, rotate: -10, y: "-50%" },
                    hover: {
                      scale: 1.15,
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      },
                    },
                  }}
                  className="absolute left-[55%] top-1/2 w-[130px] h-[130px] rounded-full overflow-hidden z-20 shadow-lg pointer-events-none"
                >
                  <img
                    src={offer.imageSrc}
                    alt="Decorative overlay graphic"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </div>

            {/* Right Column: Interactive Arrow */}
            <div className="pl-4 mt-4 lg:mt-0">
              <span className="font-satoshi text-[32px] text-black block transition-transform duration-300 ease-out group-hover:translate-x-4">
                ──────→
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
