import React from "react";

const Hero = () => {
  return (
    <section className="text-center px-6 py-36">
      {/* Title */}
      <h1 className="relative text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-gerbil leading-tight">
        The thinkers and <br className="lg:block hidden" /> doers were changing{" "}
        <br className="hidden lg:block" /> the
        <span className="bg-[#D7EEDD] px-8 rounded-full">status</span>Quo with
      </h1>
      <img
        className="absolute top-108 right-32 -z-30"
        src="./images/Ellipse6.png"
        alt="Ellipse"
      />
      <img
        className="absolute top-84 right-162 -z-30"
        src="./images/Vector6.png"
        alt="Ellipse"
      />
      <img
        className="absolute top-90 right-72 -z-30"
        src="./images/Ellipse7.png"
        alt="Ellipse"
      />
      {/* Description */}
      <p className="text-2xl mt-10 mb-20">
        We are a team of strategists, designers communicators, researchers.
        Together, <br className="hidden lg:block" /> we believe that progress
        only happens when you refuse to play things safe.
      </p>
      {/* For Large Device */}
      <div className="hidden lg:flex relative px-9 max-w-[1844px] min-h-[453px]">
        <img
          className="absolute -left-6 -top-56"
          src="./images/orange.png"
          alt="Curved Line"
        />
        <img
          className="absolute left-8 -top-56"
          src="./images/black.png"
          alt="Curved Line"
        />
        <img
          className="absolute left-0 bottom-9"
          src="./images/Ellipse1.png"
          alt="CircleImage"
        />
        <img
          className="absolute left-38 top-28"
          src="./images/Ellipse-2.png"
          alt="CircleImage"
        />
        <img
          className="absolute top-0 left-128"
          src="./images/Ellipse-3.png"
          alt="CircleImage"
        />
        <img
          className="absolute left-158 bottom-0"
          src="./images/Ellipse-4.png"
          alt="CircleImage"
        />
        <img
          className="absolute top-12 left-232"
          src="./images/Ellipse-5.png"
          alt="CircleImage"
        />
        <img
          className="absolute top-32 left-272"
          src="./images/Ellipse-6.png"
          alt="CircleImage"
        />
        <img
          className="absolute top-0 left-342"
          src="./images/Ellipse-7.png"
          alt="CircleImage"
        />
        <img
          className="absolute right-0 bottom-20"
          src="./images/Ellipse-8.png"
          alt="CircleImage"
        />
      </div>
      {/* For Small Devices */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-3 relative px-9 max-w-[1844px] min-h-[453px]">
        <img
          className="absolute -z-10 -left-6 top-56"
          src="./images/orange.png"
          alt="Curved Line"
        />
        <img
          className="absolute -z-10 left-8 top-56"
          src="./images/black.png"
          alt="Curved Line"
        />
        <img src="./images/Ellipse1.png" alt="CircleImage" />
        <img src="./images/Ellipse-2.png" alt="CircleImage" />
        <img src="./images/Ellipse-3.png" alt="CircleImage" />
        <img src="./images/Ellipse-4.png" alt="CircleImage" />
        <img src="./images/Ellipse-5.png" alt="CircleImage" />
        <img src="./images/Ellipse-6.png" alt="CircleImage" />
        <img src="./images/Ellipse-7.png" alt="CircleImage" />
        <img src="./images/Ellipse-8.png" alt="CircleImage" />
      </div>
    </section>
  );
};

export default Hero;
