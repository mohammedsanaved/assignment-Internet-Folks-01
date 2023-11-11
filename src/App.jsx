import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestArticle from "./components/LatestArticle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="relative">
        <div className="absolute flex justify-between right-4">
          <Navbar />
        </div>
        <Hero />
        <About />
        <LatestArticle />
        <Footer />
      </div>
    </>
  );
}

export default App;
