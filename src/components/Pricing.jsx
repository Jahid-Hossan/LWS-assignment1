import { pricingData } from "../constants";
import PricingCard from "./PricingCard";
import ServiceText from "./SectionDescription";
import ServiceHeading from "./SectionTitle";

export default function Pricing() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
          <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
            <ServiceHeading text={`Designed for business teams like yours`} />
            <ServiceText
              text={`Here at Landwind we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.`}
            />
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {pricingData.map((card) => (
              <PricingCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
