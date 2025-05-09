export default function ServiceList({ listIcon, text }) {
  return (
    <>
      <li class="flex space-x-3">
        {listIcon}
        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {text}
        </span>
      </li>
    </>
  );
}
