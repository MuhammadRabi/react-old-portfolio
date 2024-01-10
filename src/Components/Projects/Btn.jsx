const Btn = ({ link, title }) => {
  return (
    <button className="px-4 py-2 text-xs md:text-sm text-white capitalize duration-500 border-2 rounded-md border-main hover:text-main hover:bg-white bg-main w-fit">
      <a href={link} rel="noreferrer" target="_blank">
        {title}
      </a>
    </button>
  )
}
export default Btn
