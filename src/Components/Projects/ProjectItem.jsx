import Btn from "./Btn";

function ProjectItem({ url, repo, image }) {
  return (
    <article className="flex flex-col items-center duration-300 bg-white border border-gray-100 rounded-md shadow-md cursor-pointer product-box hover:translate-y-2">
      <img
        src={image}
        className="relative flex flex-auto object-cover duration-500 rounded-sm grayscale hover:grayscale-0"
        alt="test01"
      />
      <div className="z-30 flex justify-around w-10/12 py-8 mx-auto mt-6 md:w-3/4 project-btns ">
        <Btn title="view code" link={repo} />
        <Btn title="visit website" link={url} />
      </div>
    </article>
  );
}

export default ProjectItem;