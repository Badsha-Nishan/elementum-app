import React from "react";

const AboutSection = () => {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-24 px-5 lg:px-[160px] overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center gap-3 justify-between mb-48">
        <div className="max-w-[800px]">
          <h2 className="font-gerbil text-3xl md:text-4xl lg:text-[56px] leading-tight mb-8">
            Tomorrow should be better than
            <span className="bg-[#D7EEDD] rounded-full px-3">today</span>
          </h2>
          <p className="font-satoshi max-w-[700px] text-2xl text-black mb-8">
            We are a team of strategists, designers, communicators, and
            researchers. Together, we believe that progress only happens when
            you refuse to play things safe.
          </p>
          <a
            href="#"
            className="group font-satoshi font-bold text-black inline-flex items-center gap-2"
          >
            <span>Read more</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
              —&gt;
            </span>
          </a>
        </div>

        {/* Image */}
        <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shrink-0">
          <img
            src="/images/image348.png"
            alt="Team meeting"
            className="w-full h-full object-cover "
          />
        </div>
        {/*  shape */}
        <img
          className="absolute top-12 -z-10 -right-30"
          src="./images/Polygon3.png"
        />
        <img
          className="absolute top-36 -z-10 left-0"
          src="./images/Vector5.png"
        />
      </div>

      <div className="relative lg:flex-row-reverse flex flex-col items-center gap-3 justify-between mb-48">
        <img
          className="absolute left-110 -z-30 -top-210"
          src="./images/Ellipse734.png"
          alt="Background Shape"
        />
        {/* Content */}
        <div className="max-w-[700px]">
          <h2 className="font-gerbil text-3xl md:text-4xl lg:text-[56px] leading-tight mb-8">
            <span className="bg-[#D7EEDD] rounded-full px-3">See</span>
            how we can help you progress
          </h2>
          <p className="font-satoshi max-w-[700px] text-2xl text-black mb-8">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, commons and social research.
          </p>
          <a
            href="#"
            className="group font-satoshi font-bold text-black inline-flex items-center gap-2"
          >
            <span>Read more</span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
              —&gt;
            </span>
          </a>
        </div>

        {/* Image */}
        <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden shrink-0">
          <img
            src="/images/image48.png"
            alt="Team meeting"
            className="w-full h-full object-cover "
          />
        </div>
        {/*  shape */}
        <img
          className="absolute -top-8 -z-10 -left-6"
          src="./images/Polygon1.png"
        />
        <img
          className="absolute -top-78 -z-10 -right-50"
          src="./images/Vector517.png"
        />
        <img
          className="absolute -bottom-12 z-10 left-80"
          src="./images/Polygon1.png"
        />
        <img
          className="absolute top-56 -z-10 right-16"
          src="./images/Vector5.png"
        />
      </div>
    </section>
  );
};

export default AboutSection;
