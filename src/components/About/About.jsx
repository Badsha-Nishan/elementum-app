import React from "react";
import { motion } from "motion/react"; // Change to "framer-motion" if you are using an older version

const AboutSection = () => {
  // Animation settings for the content blocks sliding smoothly upwards
  const blockVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Image zoom entry setting
  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.2 },
    },
  };

  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-24 px-5 lg:px-[160px] overflow-hidden">
      {/* ================= BLOCK 1: TOMORROW (Top Row) ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={blockVariants}
        className="relative flex flex-col lg:flex-row items-center gap-3 justify-between mb-48"
      >
        {/* Left Column Text Content */}
        <div className="max-w-[800px]">
          <motion.h2
            variants={itemVariants}
            className="font-gerbil text-3xl md:text-4xl lg:text-[56px] leading-tight mb-8"
          >
            Tomorrow should be better than{" "}
            <span className="bg-[#D7EEDD] rounded-full px-5 py-1 inline-block transform -rotate-1">
              today
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-satoshi max-w-[700px] text-2xl text-gray-800 mb-8 leading-relaxed"
          >
            We are a team of strategists, designers, communicators, and
            researchers. Together, we believe that progress only happens when
            you refuse to play things safe.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#"
            className="group font-satoshi font-bold text-black inline-flex items-center gap-2"
          >
            <span>Read more</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
              —&gt;
            </span>
          </motion.a>
        </div>

        {/* Right Column Circular Image Container */}
        <motion.div
          variants={imageVariants}
          className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 border-[6px] border-white shadow-xl z-10"
        >
          <img
            src="/images/image348.png"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Background Floating Accents */}
        <motion.img
          className="absolute top-12 -z-10 -right-30"
          src="/images/Polygon3.png"
          alt="Triangle Shape"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute top-36 -z-10 left-0"
          src="/images/Vector5.png"
          alt="Wavy Line"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ================= BLOCK 2: SEE HOW (Bottom Row) ================= */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
        variants={blockVariants}
        className="relative lg:flex-row-reverse flex flex-col items-center gap-3 justify-between mb-48"
      >
        {/* Soft Background Radial Ambient Glow */}
        <motion.img
          className="absolute left-110 -z-30 -top-210 opacity-60 pointer-events-none"
          src="/images/Ellipse734.png"
          alt="Background Glow"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Right Column Text Content (Pushed Left on desktop layout) */}
        <div className="max-w-[700px]">
          <motion.h2
            variants={itemVariants}
            className="font-gerbil text-3xl md:text-4xl lg:text-[56px] leading-tight mb-8"
          >
            <span className="bg-[#D7EEDD] rounded-full px-5 py-1 inline-block mr-2 transform rotate-1">
              See
            </span>
            how we can help you progress
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-satoshi max-w-[700px] text-2xl text-gray-800 mb-8 leading-relaxed"
          >
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, commons and social research.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#"
            className="group font-satoshi font-bold text-black inline-flex items-center gap-2"
          >
            <span>Read more</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
              —&gt;
            </span>
          </motion.a>
        </div>

        {/* Left Column Circular Image Container */}
        <motion.div
          variants={imageVariants}
          className="relative w-[340px] h-[340px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 border-[6px] border-white shadow-xl z-10"
        >
          <img
            src="/images/image48.png"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Geometric Decorative Overlays */}
        <motion.img
          className="absolute -top-8 -z-10 -left-6"
          src="/images/Polygon1.png"
          alt="Salmon Triangle"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          className="absolute -top-78 -z-10 -right-50"
          src="/images/Vector517.png"
          alt="Decorative Path"
        />
        <motion.img
          className="absolute -bottom-12 z-20 left-80"
          src="/images/Polygon1.png"
          alt="Salmon Triangle Small"
          animate={{ y: [0, -15, 0], rotate: [0, 12, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.img
          className="absolute top-56 -z-10 right-16"
          src="/images/Vector5.png"
          alt="Background Accent Line"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
