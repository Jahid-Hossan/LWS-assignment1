import Companies from "./components/Companies";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Service2 from "./components/Service2";
import Testimonial from "./components/Testimonial";
import Trial from "./components/Trial";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
      <Service />
      <Service2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trial />
      <Footer/>
    </div>
  );
}
