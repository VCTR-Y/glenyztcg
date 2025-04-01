import Pack from "./InventoryItems/Pack";
import Card from "./InventoryItems/Card";

function Inventory(props) {

  const { inventory } = props;

  const items = inventory;

  const packs = items.filter(item => item.type === "Pack");
  const cards = items.filter(item => item.type === "Card");

  return (
    <div id="inventory" className="w-full max-w-412 mx-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-[16px_16px_16px_rgba(0,0,0,0.6)] m-4 p-4 scroll-mt-42 border-2" >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">Inventory</h1>
      <nav className="flex justify-center items-center w-full rounded-lg border-1 py-2 mb-6">
        <ul className="flex space-x-8 text-xl">
          <li><a href="#cards" className="hover:underline">Cards</a></li>
          <li><a href="#packs" className="hover:underline">Packs</a></li>
        </ul>
      </nav>
      <h2 id="cards" className="text-4xl font-bold text-center mb-4 scroll-mt-42 border-b-1">Cards</h2> {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {cards?.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} price={item.price} />
        ))}
        </div>
        <h2 id="packs" className="text-4xl font-bold text-center mb-4 scroll-mt-42 border-b-1">Packs</h2> {/* Packs Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {packs?.map((item, index) => (
          <Pack key={index} image={item.image} title={item.title} price={item.price} />
        ))}
        </div>
    </div>
  );
}

export default Inventory;