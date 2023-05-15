import image from "../../assets/images/dev.svg";

const CoverImage = () => {
  return (
    <>
      <div className="hidden w-1/3 md:block">
        <img src={image} className="object-cover" alt="bg" />
      </div>
    </>
  );
};

export default CoverImage;
