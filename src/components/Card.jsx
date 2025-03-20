function Card({ image, title, price }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <img src={image} alt={title} className="w-68 h-96 sm:w-48 sm:h-64 md:w-56 md:h-80 lg:w-68 lg:h-96 object-cover rounded-2xl shadow-[12px_12px_12px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-in-out hover:scale-106 cursor-pointer"/>
      <span className="text-2xl font-semibold mt-5">{title}</span>
      <span className="text-xl font-semibold">{price}</span>
    </div>
  );
}

export default Card;