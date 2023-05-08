const SectionIntro = ({ content, dark }) => {
  return (
    <p
      className={`w-10/12 md:w-1/2 mx-auto my-12 text-center ${
        dark ? "text-white" : "text-[#333]"
      }`}
    >
      {content}
    </p>
  );
};
export default SectionIntro;
