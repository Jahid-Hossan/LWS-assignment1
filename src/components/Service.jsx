import serviceImg1 from "../assets/features/feature-1.png";
import serviceImg2 from "../assets/features/feature-2.png";
import { listIcon } from "../constants";
import ServiceText from "./SectionDescription";
import ServiceHeading from "./SectionTitle";
import ServiceImg from "./ServiceImg";
import ServiceList from "./ServiceList";

export default function Service() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* <!-- Sub Service 1 --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <ServiceHeading text={"Work with tools you already use"} />
              <ServiceText
                text={`Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.`}
              />

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <ServiceList
                  listIcon={listIcon}
                  text={"Continuous integration and deployment "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={"Development workflow "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={" Knowledge management "}
                />
              </ul>

              <ServiceText
                text={`Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.`}
              />
            </div>
            <ServiceImg serviceImg={serviceImg1} />
          </div>

          {/* <!-- Sub Service 2 --> */}
          <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <ServiceImg serviceImg={serviceImg2} />
            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
              <ServiceHeading text={"We invest in the world’s potential"} />
              <ServiceText
                text={`Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.`}
              />

              <ul
                role="list"
                class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
              >
                <ServiceList
                  listIcon={listIcon}
                  text={" Dynamic reports and dashboards "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={"  Templates for everyone "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={" Development workflow "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={"  Limitless business automation "}
                />
                <ServiceList
                  listIcon={listIcon}
                  text={" Knowledge management "}
                />
              </ul>
              <ServiceText
                text={`Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
