import Banner from "./AppBlocks/Banner";
import Description from "./AppBlocks/Description";
import Footer from "./AppBlocks/Footer";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Banner.css";
import "./styles/Description.css";
import "./styles/Ingredients.css";
import "./styles/Aperetifs.css";
import "./styles/Content.css";
import "./styles/Footer.css";
import Ingredients from "./AppBlocks/Ingredients";
import Aperetifs from "./AppBlocks/Aperetifs";
import Content from "./AppBlocks/Content";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Description/>
      <Ingredients/>
      <Aperetifs/>
      <Content/>
      <Footer/>
    </div>  
  );
}

export default App;
