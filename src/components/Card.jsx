function Card({ image, title, price }) {
  return (
    <div className="flex flex-col justify-start items-center p-4 rounded-lg text-center ">
      <img src={image} alt={title} className="w-auto h-96 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-[12px_12px_12px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-in-out hover:scale-106 cursor-pointer"/>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-semibold mt-5">{title}</span>
        <span className="text-xl font-semibold text-yellow-300">{price}</span>
      </div>
    </div>
  );
}

export default Card;