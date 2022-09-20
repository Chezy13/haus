import "./styles/App.css";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Ingredients from "./components/Inngredients/Ingredients";
import Aperetifs from "./components/Aperetifs/Aperetifs";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import Different from "./components/Different/Different";
import Mood from "./components/Mood/Mood";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Description/>
      <Ingredients/>
      <Aperetifs/>
      <Content/>
      <Reviews/>
      <Different/>
      <Mood/>
      <Footer/>
    </div>  
  );
}

export default App;
