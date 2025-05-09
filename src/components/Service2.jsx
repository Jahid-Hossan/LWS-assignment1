import {
  arrowIcon,
  cartIcon,
  driveIcon,
  peopleIcon,
  worldIcon,
} from "../constants";
import ServiceText from "./SectionDescription";
import ServiceHeading from "./SectionTitle";

function ServiceTitle({ title, icon = "", textSize = "" }) {
  return (
    <>
      <p
        class={`${
          textSize ?? "text-lg"
        } font-medium text-purple-600 dark:text-purple-500 flex items-center`}
      >
        {title}
        {icon}
      </p>
    </>
  );
}

function ServiceOption({ icon, title, desc }) {
  return (
    <div>
      {icon}
      <h3 class="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p class="font-light text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
  );
}

export default function Service2() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <ServiceTitle title={"Trusted Worldwide"} textSize="text-lg" />
            <ServiceHeading
              text={" Trusted by over 600 million users and 10,000 teams"}
            />
            <ServiceText
              text={`Our rigorous security and compliance
                    standards are at the heart of all we do. We work tirelessly to protect you and your customers.`}
            />
            <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <ServiceTitle
                  title={`Explore Legality Guide
                  `}
                  icon={arrowIcon}
                />
              </div>
              <div>
                <ServiceTitle
                  title={`Visit the Trust Center
                  `}
                  icon={arrowIcon}
                />
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <ServiceOption
              icon={driveIcon}
              title={"99.99% uptime"}
              desc={`For Landwind, with zero maintenance downtime`}
            />
            <ServiceOption
              icon={peopleIcon}
              title={"600M+ Users"}
              desc={`Trusted by over 600 milion users around the world`}
            />
            <ServiceOption
              icon={worldIcon}
              title={" 100+ countries"}
              desc={`Have used Landwind to create functional websites`}
            />
            <ServiceOption
              icon={cartIcon}
              title={"5+ Million"}
              desc={`Transactions per day`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
