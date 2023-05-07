function ServiceItem({ image, title, description }) {
  return (
    <article className="card relative py-12 bg-gray-50 cursor-pointer duration-500 text-center min-w-[320px]">
      <img
        src={image}
        className="object-cover w-24 mx-auto my-6 duration-500"
        alt="serviceImage"
      />
      <h3 className="mb-6 text-xl font-bold capitalize">{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceItem;
