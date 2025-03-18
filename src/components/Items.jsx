
function Items({ image, title }) {
  return (
    <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
      <img src={image} alt={title} className="w-auto h-96 rounded-2xl shadow-[12px_12px_12px_rgba(0,0,0,0.3)]" />
      <span className="text-2xl font-semibold mt-5">{title}</span>
    </div>
  );
}

export default Items;