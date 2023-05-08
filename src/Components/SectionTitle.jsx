const SectionTitle = ({ title, dark }) => {
  return (
    <>
      <h2
        className={`text-xl md:text-3xl font-bold text-center capitalize  ${
          dark ? "text-white" : "text-main"
        }`}
      >
        {title}
      </h2>
      <span
        className={`absolute block w-12 p-1 text-center border-b-4 ${
          dark ? "border-white" : "border-[#333]"
        } -translate-x-1/4 left-1/2`}
      ></span>
    </>
  );
};
export default SectionTitle;
