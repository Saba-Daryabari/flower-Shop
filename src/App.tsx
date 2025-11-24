import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import './App.scss';
import Collection from "./Components/Collection";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="shop" element={<Collection limit={20}/>} />
        <Route path="blog" element={<Blog/>} />
        
      </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}
