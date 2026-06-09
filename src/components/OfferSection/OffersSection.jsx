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

  return (
    <section className="relative w-full max-w-[1920px] mx-auto bg-white px-5 lg:px-[120px] py-[140px] overflow-hidden">
      {/* Red wavy line here */}
      <img
        src="/images/Vector2516.png"
        alt="Decorative line"
        className="absolute right-0 -top-74"
      />

      {/*  HEADER */}
      <div className="relative text-center lg:text-left z-10 mb-[80px]">
        <h2 className="font-gerbil text-4xl md:text-6xl lg:text-8xl leading-[1.1] text-black tracking-tight">
          What we{""}
          <span className="inline-block bg-[#D7EEDD] px-5 rounded-full ml-5 mr-2">
            can
          </span>{" "}
          <br />
          <span className="relative inline-block">
            offer
            {/* Yellow underline */}
            <img
              src="./images/Vector5.png"
              className="absolute left-0 -bottom-3 -z-10"
            />
          </span>{" "}
          you!
        </h2>
      </div>

      {/* OFFERS LIST */}
      <div className="relative z-10 w-full border-t border-gray-200">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="group flex-col lg:flex-row flex items-center justify-between py-[40px] border-b border-gray-200 cursor-pointer transition-colors duration-300 hover:bg-gray-50/50"
          >
            <div className="w-[340px] mr-14 px-5 font-satoshi text-3xl leading-relaxed text-gray-700 pr-4">
              {offer.tags}
            </div>

            <div className="flex-1 relative flex items-center">
              <h3 className="font-gerbil text-3xl md:text-4xl lg:text-6xl text-black tracking-tight select-none">
                {offer.title}
              </h3>

              {offer.hasImage && (
                <div className="absolute left-[55%] top-1/2 -translate-y-1/2 w-[130px] h-[130px] rounded-full overflow-hidden -z-20 shadow-md transform rotate-[-10deg] pointer-events-none">
                  <img
                    src={offer.imageSrc}
                    alt="Decorative overlay graphic"
                    className="w-full h-full object-cover "
                  />
                </div>
              )}
            </div>

            <div className="pl-4">
              <span className="font-satoshi text-[32px] text-black block transition-transform duration-300 ease-out group-hover:translate-x-4">
                ──────→
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
