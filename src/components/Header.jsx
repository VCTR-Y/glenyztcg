import glenyz_logo from "/glenyztcg.jpg";


function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between bg-orange-500 text-white p-6">
        <img src={glenyz_logo} alt="Glenyz" className="w-16 h-16 rounded-full" />
        <h1 className="text-4xl font-bold flex-1 text-center">GlenyzTCG</h1>
        <div className="w-16 h-16"></div> {/* Empty div for spacing */}
      </div>
      <nav className="flex justify-center items-center w-full bg-orange-400 text-white py-2 mb-6">
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#inventory" className="hover:underline">Inventory</a></li>
          <li><a href="#links" className="hover:underline">Links</a></li>
        </ul>
      </nav>
  </header>
  );
}

export default Header;