export default function SubscribeSection() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-[#D7EEDD] px-5 lg:px-[120px] pt-[140px] pb-[80px] overflow-hidden flex flex-col items-center text-center">
      {/* Arrow top */}
      <img
        src="/images/Vector111.png"
        alt="Decorative arrows"
        className="absolute top-0 left-[38%] w-[120px] object-contain pointer-events-none z-0"
      />
      <img
        src="/images/Vector222.png"
        alt="Decorative arrows"
        className="absolute top-0 left-[42%] w-[120px] object-contain pointer-events-none z-0"
      />

      {/*  shape */}
      <div className="absolute right-[6%] top-[25%] w-[150px] h-[300px] bg-[#9747FF] rounded-l-full transform rotate-[15deg] pointer-events-none z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] flex flex-col items-center">
        <h2 className="font-gerbil text-4xl sm:text-6xl lg:text-[90px] leading-[1.05] text-black tracking-tight mb-6">
          Subscribe to <br />
          our newsletter
        </h2>

        <p className="font-satoshi text-[18px] text-gray-800 font-normal mb-10 tracking-wide">
          To make your stay special and even more memorable
        </p>

        {/* Subscribe Action Button */}
        <button className="bg-black text-white cursor-pointer font-satoshi font-bold text-[16px] px-[48px] py-[18px] rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-md">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}
