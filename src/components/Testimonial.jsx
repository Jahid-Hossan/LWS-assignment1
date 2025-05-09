import avatar from "../assets/avatar/michael-gouch.png";
import { quoteIcon } from "../constants";

export default function Testimonial() {
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            {quoteIcon}
            <blockquote>
              <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                "Landwind is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img
                class="w-6 h-6 rounded-full"
                src={avatar}
                alt="profile picture"
              />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
