import Items from "./Items";

function Inventory() {

  const items = [
    {
      image: "/151.jpg", 
      title: "Unknown Item1",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item2",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item3",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item4",
      price: "$100.00",
    },
    {
      image: "/151.jpg", 
      title: "Unknown Item5",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item6",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item7",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item8",
      price: "$100.00",
    },
    {
      image: "/151.jpg", 
      title: "Unknown Item9",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item10",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item11",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item12",
      price: "$100.00",
    },
    {
      image: "/151.jpg", 
      title: "Unknown Item13",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item14",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item15",
      price: "$100.00",
    },
    {
      image: "/151.jpg",
      title: "Unknown Item16",
      price: "$100.00",
    },
  ];
  
  return (
    <div id="inventory" className="w-384 h-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-[16px_16px_16px_rgba(0,0,0,0.6)] m-4 p-4 scroll-mt-42 border-2" >
      <h1 class="text-4xl font-bold text-center mb-4">Inventory</h1>
      <div class="grid grid-cols-4 gap-x-4 gap-y-16">
        {items.map((item, index) => (
          <Items key={index} image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
  </div>
  );
}

export default Inventory;