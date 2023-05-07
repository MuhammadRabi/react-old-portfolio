const SectionIntro = ({ content, dark }) => {
  return (
    <p
      className={`w-1/2 mx-auto mt-6 mb-12 text-center ${
        dark ? "text-white" : "text-[#333]"
      }`}
    >
      {content}
    </p>
  );
};
export default SectionIntro;
