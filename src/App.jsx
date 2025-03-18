import './App.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Inventory from './components/Inventory.jsx';
import Links from './components/Links.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [inventory, setInventory] = useState([]);

  // Fetch inventory data from Google Sheets
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLj9gYQThEVfBcvfN8nhKLLEbsI5EukVU0cmyQqGZOIE93dcjpbtMK_9_Zii7izUKRUnZq4zlLE8zZ6n1vwNXYLclmoaUBWFp0FfQHZKsU5KO52Z9fgGc7VhVHpN2rJyZ-oq0BbDUECAQ_n2Vmld0tesFhFjpQ-zpMX89mUGzUdyrnOePQvWaWYbJvfeTHMOIIJZN3A5-hvZLiCbriMdkG7I6RHhyvrBVR_hue-qwxyrtDB7DfCp8Dp73CRratpV_hj2oPEafayR-bib-I4caCoe7Kn-uw&lib=MbhIAs9sIAbziN0xr6uxTdXOXm488-rdK");
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
      <div className="relative min-h-screen">
        <video
          autoPlay
          loop
          muted
          className="fixed top-0 left-0 w-screen h-screen object-cover pt-36"
        >
          <source src="/Pokemon.mp4" type="video/mp4" /> {/* Video Source: https://x.com/stefscribbles?fbclid=IwAR3RCzg8NBCYklNII8Y0VuGbRp8BEQYL7Q7-qqGOLYf2cebeIuyaTHGOfYw */}
          Your browser does not support the video tag.
        </video>
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"></div>
        <Header />
        <div className="relative z-10 flex flex-col justify-center items-center ">
          <About />
          <Inventory inventory={inventory}/>
          <Links />
        </div>
      </div>
    </>
  )
}

export default App;
