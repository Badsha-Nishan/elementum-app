import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutSection from "./components/About/About";
import OffersSection from "./components/OfferSection/OffersSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import SubscribeSection from "./components/SubscribeSection/SubscribeSection";

function App() {
  return (
    <>
      <section className="max-w-[1920px] mx-auto w-full font-satoshi">
        <Hero />
        <AboutSection />
        <OffersSection />
        <TestimonialsSection />
        <SubscribeSection />
      </section>
    </>
  );
}

export default App;
