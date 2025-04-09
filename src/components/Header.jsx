import { useState, useEffect } from "react";
import glenyz_logo from "/glenyztcg.jpg";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Hide header visibility when scrolling down and show when scrolling up or at the top of the page
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; 
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  })

  return (
    <header className={`sticky top-0 z-50 shadow-2xl ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-out`}>
      <div className="flex items-center justify-between bg-blue-700 p-6 border-b-2">
        <img src={glenyz_logo} alt="Glenyz" className="w-16 h-16 rounded-full subtle-glow hover:scale-125 transition-transform duration-300" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold flex-1 text-center tracking-wide subtle-glow">GlenyzTCG</h1>
        <div className="w-16 h-16"></div> {/* Empty div for spacing */}
      </div>
      <nav className="flex justify-center items-center w-full bg-blue-700 py-2 mb-6 border-b-2">
        <ul className="flex space-x-8 text-xl">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#inventory" className="hover:underline">Inventory</a></li>
          <li><a href="#links" className="hover:underline">Links</a></li>
        </ul>
      </nav>

  </header>
  );
}

export default Header;