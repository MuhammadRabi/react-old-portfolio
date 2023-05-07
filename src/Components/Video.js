const Video = () => {
  return (
    <section className="pb-12 vid bg-slate-50">
      <iframe
        className="w-3/4 mx-auto rounded-md md:w-1/2"
        src="https://www.youtube.com/embed/HbO1qcqvh04"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default Video;
