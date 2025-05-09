export default function ServiceList({ listIcon, text }) {
  return (
    <>
      <li className="flex space-x-3">
        {listIcon}
        <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
          {text}
        </span>
      </li>
    </>
  );
}
