import React from "react";
import { motion } from "framer-motion";

export default function FooterSection() {
  const footerLinks = {
    company: ["Home", "Studio", "Service", "Blog"],
    terms: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
    follow: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  };

  // Prettier-friendly single layer orchestrations for column layouts
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full max-w-[1920px] mx-auto bg-[#D7EEDD] px-5 lg:px-[120px] pb-[40px]">
      {/* Separator Line */}
      <div className="w-full border-t border-gray-400/60 mb-[80px]" />

      {/* 4-Column Grid Structure */}
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-16 md:mb-[120px]"
      >
        {/* Column 1: Company */}
        <motion.div variants={columnVariants}>
          <h4 className="font-gerbil text-[26px] text-black mb-8">Company</h4>
          <ul className="space-y-4">
            {footerLinks.company.map((link) => (
              <li key={link}>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={`#${link.toLowerCase()}`}
                  className="inline-block font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 2: Terms & Policies */}
        <motion.div variants={columnVariants}>
          <h4 className="font-gerbil text-[26px] text-black mb-8">
            Terms & Policies
          </h4>
          <ul className="space-y-4">
            {footerLinks.terms.map((link) => {
              const urlHash = link.toLowerCase().replace(/[^a-z]/g, "");
              return (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    href={`#${urlHash}`}
                    className="inline-block font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Column 3: Follow Us */}
        <motion.div variants={columnVariants}>
          <h4 className="font-gerbil text-[26px] text-black mb-8">Follow Us</h4>
          <ul className="space-y-4">
            {footerLinks.follow.map((link) => (
              <li key={link}>
                <motion.a
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  href={`#${link.toLowerCase()}`}
                  className="inline-block font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                >
                  {link}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: Location & Contact Info */}
        <motion.div variants={columnVariants}>
          <h4 className="font-gerbil text-[26px] text-black mb-8">
            Terms & Policies
          </h4>
          <div className="font-satoshi text-[16px] text-gray-800 space-y-6 leading-relaxed">
            <p>
              1498w Fluton ste, STE <br />
              2D Chicgo, IL 63867.
            </p>
            <p className="hover:text-black cursor-pointer transition-colors w-fit">
              (123) 456789000
            </p>
            <p className="hover:text-black cursor-pointer underline decoration-1 underline-offset-4 transition-colors w-fit">
              info@elementum.com
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full text-center font-satoshi text-[14px] text-gray-700 tracking-wide"
      >
        {"©2023 Elementum. All rights reserved"}
      </motion.div>
    </footer>
  );
}
