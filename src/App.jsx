import Navbar from "./components/Navbar";
import bgCover from "./assets/Bg-Cover.jpg";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div className=" w-full h-screen"  style={{ backgroundImage: `url(${bgCover})`, backgroundSize: 'cover', backgroundPosition: 'center'  }}>
        <Navbar />
        <Hero />
        <Card/>
    </div>
  );
}

export default App;
