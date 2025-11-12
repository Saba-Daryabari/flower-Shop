import Collection from "./Components/Collection";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Intro from "./Components/Intro";
import Introduction from "./Components/Introduction";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Collection />
      <Intro />
      <Introduction />
      <Slider />
      <Footer />
    </div>
  );
}
