import { arrowDownIcon, arrowUpIcon } from "../constants";
import SectionTitle from "./SectionTitle";

function AccordianButton({ question, icon }) {
  return (
    <button
      type="button"
      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      data-accordion-target="#accordion-flush-body-1"
      aria-expanded="true"
      aria-controls="accordion-flush-body-1"
    >
      <span>{question}</span>
      {icon}
    </button>
  );
}

function AccordianAns({ ans }) {
  return <div dangerouslySetInnerHTML={{ __html: ans }} />;
}

export default function Faq() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <SectionTitle
            text={"Frequently asked questions"}
            style={`text-center`}
          />
          <div className="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <h3 id="accordion-flush-heading-1">
                <AccordianButton
                  question={`Can I use Landwind in open-source projects?`}
                  icon={arrowUpIcon}
                />
              </h3>

              <div
                id="accordion-flush-body-1"
                className=""
                aria-labelledby="accordion-flush-heading-1"
              >
                <AccordianAns
                  ans={`<div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Landwind is an open-source library of
                                interactive components built on top of Tailwind CSS including buttons, dropdowns,
                                modals,
                                navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="#"
                                    className="text-purple-600 dark:text-purple-500 hover:underline">get started</a> and
                                start
                                developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>`}
                />
              </div>
              <h3 id="accordion-flush-heading-2">
                <AccordianButton
                  question={`Is there a Figma file available?`}
                  icon={arrowDownIcon}
                />
              </h3>

              <div
                id="accordion-flush-body-2"
                className="hidden"
                aria-labelledby="accordion-flush-heading-2"
              >
                <AccordianAns
                  ans={`<div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Landwind is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{" "}
                    <a
                      href="#"
                      className="text-purple-600 dark:text-purple-500 hover:underline"
                    >
                      Figma design system
                    </a>
                    based on the utility classes from Tailwind CSS and
                    components from Landwind.
                  </p>
                </div>`}
                />
              </div>
              <h3 id="accordion-flush-heading-3">
                <AccordianButton
                  question={`What are the differences between Landwind and Tailwind UI?`}
                  icon={arrowDownIcon}
                />
              </h3>
              <div
                id="accordion-flush-body-3"
                className="hidden"
                aria-labelledby="accordion-flush-heading-3"
              >
                <AccordianAns
                  ans={`<div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Landwind are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Landwind relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Landwind, Landwind
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        Landwind Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>`}
                />
              </div>
              <h3 id="accordion-flush-heading-4">
                <AccordianButton
                  question={`What about browser support?`}
                  icon={arrowDownIcon}
                />
              </h3>
              <div
                id="accordion-flush-body-4"
                className="hidden"
                aria-labelledby="accordion-flush-heading-4"
              >
                <AccordianAns
                  ans={`<div className="py-5 border-b border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Landwind are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Landwind relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Landwind, Landwind
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        Landwind Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-purple-600 dark:text-purple-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
