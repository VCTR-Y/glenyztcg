import { useState } from "react";
import Pack from "./InventoryItems/Pack";
import Card from "./InventoryItems/Card";
import searchIcon from "../assets/magnifying-glass-solid.svg";

function Inventory(props) {
  const { inventory } = props;
  const [cardSearchQuery, setCardSearchQuery] = useState("");
  const [packSearchQuery, setPackSearchQuery] = useState("");
  const [cardSortOrder, setCardSortOrder] = useState("default");
  const [packSortOrder, setPackSortOrder] = useState("default");

  const items = inventory;

  const packs = items.filter(item => item.type === "Pack");
  const cards = items.filter(item => item.type === "Card");

  const searchCards = cardSearchQuery.trim() ? 
    cards.filter((card) => 
      card.title.toLowerCase().includes(cardSearchQuery.toLowerCase())
    ) : cards;

  const searchPacks = packSearchQuery.trim() ? 
    packs.filter((pack) => 
      pack.title.toLowerCase().includes(packSearchQuery.toLowerCase())
  ) : packs;

  const sortItems = (items, sortOrder) => {
    const parsePrice = (price) => parseFloat(price.replace(/[^0-9.-]+/g, ""));
    if (sortOrder === "low-to-high") {
      return [...items].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOrder === "high-to-low") {
      return [...items].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else {
      return items;
    }
  }

  const sortedCards = sortItems(searchCards, cardSortOrder);
  const sortedPacks = sortItems(searchPacks, packSortOrder);

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
      <div className="flex justify-center items-center mb-4">
        <div className="flex justify-center items-center border rounded-lg max-w-xs w-full p-2">
          <img src={searchIcon} className="h-5 w-5 m-2" />
          <input 
            type="text"   
            placeholder="Search..." 
            value={cardSearchQuery} 
            onChange={(e) => setCardSearchQuery(e.target.value)}
            className="w-full text-lg outline-0 ml-2"
          />
        </div>
        <select
          value={cardSortOrder}
          onChange={(e) => setCardSortOrder(e.target.value)}
          className="ml-4 p-2 border rounded-lg"
          >
          <option value="default" className="bg-gray-400">Sort by: Default</option>
          <option value="low-to-high" className="bg-gray-400">Price: Low to High</option>
          <option value="high-to-low" className="bg-gray-400">Price: High to Low</option>
        </select>
      </div>
      {sortedCards.length === 0 ? (
        <p className="text-center text-red-300 text-4xl m-12">No cards match your search!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {sortedCards.map((item, index) => (
            <Card key={index} image={item.image} title={item.title} price={item.price} />
          ))}
        </div>
      )}
      <h2 id="packs" className="text-4xl font-bold text-center mb-4 scroll-mt-42 border-b-1 mt-8">Packs</h2> {/* Packs Section */}
      <div className="flex justify-center items-center m-4">
        <div className="flex justify-center items-center border rounded-lg max-w-xs w-full p-2">
          <img src={searchIcon} className="h-5 w-5 m-2" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={packSearchQuery} 
            onChange={(e) => setPackSearchQuery(e.target.value)}
            className="w-full text-lg outline-0 ml-2"
          />
        </div>
        <select
          value={packSortOrder}
          onChange={(e) => setPackSortOrder(e.target.value)}
          className="ml-4 p-2 border rounded-lg"
          >
          <option value="default" className="bg-gray-400">Sort by: Default</option>
          <option value="low-to-high" className="bg-gray-400">Price: Low to High</option>
          <option value="high-to-low" className="bg-gray-400">Price: High to Low</option>
        </select>
      </div>
      {sortedPacks.length === 0 ? (
        <p className="text-center text-red-300 text-4xl m-12">No packs match your search!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {sortedPacks.map((item, index) => (
            <Pack key={index} image={item.image} title={item.title} price={item.price} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Inventory;