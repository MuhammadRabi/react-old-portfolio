const Btn = ({ link, title }) => {
  return (
    <button>
      <a
        href={link}
        rel="noreferrer"
        className="block px-4 py-2 text-xs text-white capitalize duration-500 border-2 rounded-md border-main hover:text-main hover:bg-white bg-main w-fit"
        target="_blank"
      >
        {title}
      </a>
    </button>
  )
}
export default Btn
