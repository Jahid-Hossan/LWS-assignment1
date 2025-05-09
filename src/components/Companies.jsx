import {
  airbnb,
  google,
  mailchimp,
  mashable,
  microsoft,
  spotify,
} from "../constants";

function Company({ icon }) {
  return (
    <a href="#" class="flex items-center lg:justify-center">
      {icon}
    </a>
  );
}

export default function Companies() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
          <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <Company icon={airbnb} />
            <Company icon={google} />
            <Company icon={microsoft} />
            <Company icon={spotify} />
            <Company icon={mailchimp} />
            <Company icon={mashable} />
          </div>
        </div>
      </section>
    </>
  );
}
