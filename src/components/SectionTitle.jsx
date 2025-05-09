export default function SectionTitle({ text, style }) {
  return (
    <>
      <h2
        className={`${
          style ?? ""
        } mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white`}
      >
        {text}
      </h2>
    </>
  );
}
