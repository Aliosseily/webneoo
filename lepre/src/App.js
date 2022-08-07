import "./App.css";
import Footer from "./components/footer/Footer";
import LatestNews from "./pages/LatesNews";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div>
      <div className="app-container">
        <Navbar />
        <LatestNews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
