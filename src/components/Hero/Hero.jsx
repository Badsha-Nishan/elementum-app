import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 },
    },
  };

  const popInVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="text-center px-6 py-36 relative overflow-hidden">
      {/* ---------------- FLOATING BACKGROUND ELEMENTS ---------------- */}
      <motion.img
        className="absolute top-108 right-32 -z-30"
        src="/images/Ellipse6.png"
        alt="Ellipse"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="absolute top-84 right-162 -z-30"
        src="/images/Vector6.png"
        alt="Vector Accent"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        className="absolute top-90 right-72 -z-30"
        src="/images/Ellipse7.png"
        alt="Ellipse"
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* ---------------- MAIN TEXT CONTENT ---------------- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* Title Heading */}
        <motion.h1
          variants={fadeUpVariants}
          className="relative text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-gerbil leading-tight"
        >
          The thinkers and <br className="lg:block hidden" /> doers were
          changing <br className="hidden lg:block" /> the{" "}
          <span className="bg-[#D7EEDD] px-8 rounded-full inline-block transform -rotate-1">
            status
          </span>{" "}
          Quo with
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          variants={fadeUpVariants}
          className="text-2xl mt-10 mb-20 text-gray-700 max-w-[800px] mx-auto font-satoshi"
        >
          We are a team of strategists, designers communicators, researchers.
          Together, <br className="hidden lg:block" /> we believe that progress
          only happens when you refuse to play things safe.
        </motion.p>
      </motion.div>

      {/* ---------------- IMAGES ROW FOR LARGE DEVICES ---------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="hidden lg:flex relative px-9 max-w-[1844px] min-h-[453px] mx-auto"
      >
        {/* Wavy Background Graphic Lines */}
        <img
          className="absolute -left-6 -top-56"
          src="/images/orange.png"
          alt="Curved Line"
        />
        <img
          className="absolute left-8 -top-56"
          src="/images/black.png"
          alt="Curved Line"
        />

        {/* Absolute Circles popping up with delay presets */}
        <motion.img
          variants={popInVariants}
          className="absolute left-0 bottom-9"
          src="/images/Ellipse1.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute left-38 top-28"
          src="/images/Ellipse-2.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute top-0 left-128"
          src="/images/Ellipse-3.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute left-158 bottom-0"
          src="/images/Ellipse-4.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute top-12 left-232"
          src="/images/Ellipse-5.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute top-32 left-272"
          src="/images/Ellipse-6.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute top-0 left-342"
          src="/images/Ellipse-7.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          className="absolute right-0 bottom-20"
          src="/images/Ellipse-8.png"
          alt="CircleImage"
        />
      </motion.div>

      {/* ---------------- IMAGES GRID FOR MOBILE DEVICES ---------------- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-3 relative px-9 max-w-[1844px] mx-auto mt-12"
      >
        <img
          className="absolute -z-10 -left-6 top-56"
          src="/images/orange.png"
          alt="Curved Line"
        />
        <img
          className="absolute -z-10 left-8 top-56"
          src="/images/black.png"
          alt="Curved Line"
        />

        <motion.img
          variants={popInVariants}
          src="/images/Ellipse1.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-2.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-3.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-4.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-5.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-6.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-7.png"
          alt="CircleImage"
        />
        <motion.img
          variants={popInVariants}
          src="/images/Ellipse-8.png"
          alt="CircleImage"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
