export default function CakeItem({ name, image, price, details }) {
  const message = `Hello! I'm interested in ordering the ${name} priced at ${price}. `;
  return (
    <div className="flex flex-col gap-5 bg-white max-w-75 py-5 px-2  rounded-lg">
      <div className="h-45 md:h-56 w-full overflow-hidden ">
        <img src={image} className="object-cover w-full h-full" />
      </div>

      <div
        className="flex flex-col gap-3 px-3
      "
      >
        <h3 className="font-poppins text-base">{name}</h3>
        <p className="text-green-600 font-oswald text-sm">{details}</p>
        <h3 className="text-secondary font-oswald">{price}</h3>
        <a
          href={`https://wa.me/233248967727?text=${encodeURIComponent(message)}`}
          className="border border-primary rounded-2xl py-1 px-5 text-base text-center text-primary hover:cursor-pointer hover:text-white hover:bg-primary transition-all ease-out "
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
