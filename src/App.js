import "./styles/App.css";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Ingredients from "./components/Inngredients/Ingredients";
import Aperetifs from "./components/Aperetifs/Aperetifs";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

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
