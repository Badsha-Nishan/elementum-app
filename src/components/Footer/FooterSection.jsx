// src/components/FooterSection.jsx
import React from "react";

export default function FooterSection() {
  const footerLinks = {
    company: ["Home", "Studio", "Service", "Blog"],
    terms: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"],
    follow: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  };

  return (
    <footer className="w-full max-w-[1920px] mx-auto bg-[#DBEFE0] px-5 lg:px-[120px] pb-[40px]">
      {/* Clean thin horizontal rule separating subscribe from footer content */}
      <div className="w-full border-t border-gray-400/60 mb-[80px]" />

      {/* 4-Column Grid Structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-16 md:mb-[120px]">
        {/* Column 1: Company */}
        <div>
          <h4 className="font-gerbil text-[26px] text-black mb-8">Company</h4>
          <ul className="space-y-4">
            {footerLinks.company.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Terms & Policies */}
        <div>
          <h4 className="font-gerbil text-[26px] text-black mb-8">
            Terms & Policies
          </h4>
          <ul className="space-y-4">
            {footerLinks.terms.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
                  className="font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h4 className="font-gerbil text-[26px] text-black mb-8">Follow Us</h4>
          <ul className="space-y-4">
            {footerLinks.follow.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-satoshi text-[16px] text-gray-800 hover:text-black transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Location & Contact Info */}
        <div>
          {/* Note: In the image image_46bd04.png, the 4th heading repeats the header title text "Terms & Policies" */}
          <h4 className="font-gerbil text-[26px] text-black mb-8">
            Terms & Policies
          </h4>
          <div className="font-satoshi text-[16px] text-gray-800 space-y-6 leading-relaxed">
            <p>
              1498w Fluton ste, STE <br />
              2D Chicgo, IL 63867.
            </p>
            <p className="hover:text-black cursor-pointer">(123) 456789000</p>
            <p className="hover:text-black cursor-pointer underline decoration-1 underline-offset-4">
              info@elementum.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="w-full text-center font-satoshi text-[14px] text-gray-700 tracking-wide">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
}
