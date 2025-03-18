import './App.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Inventory from './components/Inventory.jsx';
import Links from './components/Links.jsx';

function App() {

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
          <Inventory/>
          <Links />
        </div>
      </div>
    </>
  )
}

export default App
