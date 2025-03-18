import Pack from "./Pack";
import Card from "./Card";

function Inventory(props) {

  const { inventory } = props;
  
  // const items = [
  //   {
  //     image: "/151.jpg", 
  //     title: "Unknown Item1",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item2",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item3",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item4",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg", 
  //     title: "Unknown Item5",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item6",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item7",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item8",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg", 
  //     title: "Unknown Item9",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item10",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item11",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item12",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg", 
  //     title: "Unknown Item13",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item14",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item15",
  //     price: "$100.00",
  //   },
  //   {
  //     image: "/151.jpg",
  //     title: "Unknown Item16",
  //     price: "$100.00",
  //   },
  // ];

  const items = inventory;

  const packs = items.filter(item => item.type === "Pack");
  const cards = items.filter(item => item.type === "Card");

  return (
    <div id="inventory" className="w-384 h-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-[16px_16px_16px_rgba(0,0,0,0.6)] m-4 p-4 scroll-mt-42 border-2" >
      <h1 className="text-6xl font-bold text-center mb-4">Inventory</h1>
      <nav className="flex justify-center items-center w-full rounded-lg border-1 py-2 mb-6">
        <ul className="flex space-x-8 text-xl">
          <li><a href="#packs" className="hover:underline">Packs</a></li>
          <li><a href="#cards" className="hover:underline">Cards</a></li>
        </ul>
      </nav>
      <h2 id="packs" className="text-4xl font-bold text-center mb-4 scroll-mt-42 border-b-1">Packs</h2>
      <div className="grid grid-cols-4 gap-x-4 gap-y-16">
        {packs?.map((item, index) => (
          <Pack key={index} image={item.image} title={item.title} price={item.price} />
        ))}
        </div>
      <h2 id="cards" className="text-4xl font-bold text-center mb-4 border-b-1">Cards</h2>
      <div className="grid grid-cols-4 gap-x-4 gap-y-16">
        {cards?.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} price={item.price} />
        ))}
        </div>
    </div>
  );
}

export default Inventory;