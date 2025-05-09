export default function ServiceImg({ serviceImg }) {
  return (
    <>
      <img
        class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
        src={serviceImg}
        alt="dashboard feature image"
      />
    </>
  );
}
