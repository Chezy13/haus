import Banner from "./AppBlocks/Banner";
import Footer from "./AppBlocks/Footer";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Banner.css";
import "./styles/Description.css";
import "./styles/Footer.css";
import Description from "./AppBlocks/Description";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Description/>
      <Footer/>
    </div>
      
  );
}

export default App;
