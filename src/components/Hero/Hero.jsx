import React from "react";

const Hero = () => {
  return (
    <section className="relative text-center px-6 py-36">
      <h1 className="text-4xl md:text-8xl font-gerbil leading-tight">
        The thinkers and <br /> doers were changing <br /> the status Quo with
      </h1>
      <p className="text-2xl mt-7 mb-20">
        We are a team of strategists, designers communicators, researchers.
        Togeather, <br /> we belive that progress only hghappens when you refuse
        to play things safe.
      </p>
      <div className="relative flex px-9 w-[1844px] border h-[453px]">
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
    </section>
  );
};

export default Hero;
