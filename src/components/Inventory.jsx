import Items from "./Items";

function Inventory() {

  const items = [
    {
      image: "/151.jpg", 
      title: "Item1",
    },
    {
      image: "/151.jpg",
      title: "Item2",
    },
    {
      image: "/151.jpg",
      title: "Item3",
    },
    {
      image: "/151.jpg",
      title: "Item4",
    },
    {
      image: "/151.jpg", 
      title: "Item5",
    },
    {
      image: "/151.jpg",
      title: "Item6",
    },
    {
      image: "/151.jpg",
      title: "Item7",
    },
    {
      image: "/151.jpg",
      title: "Item8",
    },
  ];
  
  return (
    <div id="inventory" className="w-384 h-auto bg-opacity-50 backdrop-blur-xs rounded-lg shadow-2xl m-4 p-4 scroll-mt-42 border-2" >
      <h1 class="text-4xl font-bold text-center mb-4">Inventory</h1>
      <div class="grid grid-cols-4 gap-x-4 gap-y-16">
        {items.map((item, index) => (
          <Items key={index} image={item.image} title={item.title} />
        ))}
      </div>
  </div>
  );
}

export default Inventory;