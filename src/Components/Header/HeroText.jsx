import { socialLinks } from "./links";

const HeroText = () => {
  return (
    <article className="flex flex-col w-full p-4 space-y-8 text-center md:text-left md:p-12 md:w-1/2">
      <p className="m-0">
        <span className="text-2xl font-bold text-main">Hello</span>, I`m
      </p>
      <h1 className="text-3xl font-bold tracking-wide md:text-5xl">
        Muhammad Rabi
      </h1>
      <h2 className="mb-2">I`m a Front End Developer</h2>
      <p className="leading-loose">
        I can translate UI/UX design to modern code and write maintainable,
        scalable, responsive, and cross-browser code. Skilled in pixel-perfect
        PSD-to-HTML, CSS, SASS, JavaScript, and Bootstrap
      </p>
      <a
        href="mailto:contact@muhammadrabi.com"
        className="mx-auto mt-5 text-white md:mx-0 w-fit bg-main btn"
      >
        hire me
      </a>
      <div className="flex mx-auto space-x-2 md:mx-0">
        {socialLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.link}
              aria-label={link.aria}
              rel="noreferrer"
              target="_blank"
              className="text-3xl duration-300 rounded-full text-dark hover:opacity-70"
            >
              {<link.icon />}
            </a>
          );
        })}
      </div>
    </article>
  );
};

export default HeroText;
