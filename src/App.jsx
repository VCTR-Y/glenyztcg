import './App.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Inventory from './components/Inventory.jsx';
import Links from './components/Links.jsx';
import MiniLinks from './components/MiniLinks.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState([]);

  // Fetch inventory data from Google Sheets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL);
        const data = await res.json();
        setInventory(data.data);
      } catch (error) {
        alert("Failed to fetch inventory");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [])

  // Loading screen to give time for the inventory to be fetched
  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="loader">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-tr from-sky-500 via-[#3362ad] to-sky-500"></div>
      <section className="pointer-events-none"> 
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
        </section>
      <div className="relative min-h-screen">
        <Header/>
        <div className="relative z-10 flex flex-col justify-center items-center">
          {/* <MiniLinks /> */}
          <About />
          <Inventory inventory={inventory}/>
          <Links />
        </div>
      </div>
    </>
  )
}

export default App;
