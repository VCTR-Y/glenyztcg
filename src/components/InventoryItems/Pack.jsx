
function Pack({ image, title, price }) {
  return (
    <div className="flex flex-col justify-start items-center p-4 rounded-lg text-center">
      <img src={image} alt={title} className="h-48 sm:h-80 md:h-88 lg:h-96 object-fill rounded-2xl shadow-[12px_12px_12px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-in-out hover:scale-106 cursor-pointer"/>
      <span className="text-2xl font-semibold mt-5">{title}</span>
      <span className="text-xl font-semibold text-yellow-300">{price}</span>
    </div>
  );
}

export default Pack;