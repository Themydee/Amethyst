import Header from "./components/Header/Header";
import Home from "./components/Home/Home"; 
import Offer from "./components/Offers/Offer";
import Info from "./components/Info/Info";
import Footer from "./components/Foot/Footer";
import "./App.css"
import Teams from "./components/Teams/Teams";



function App() {
  return (
    <div className="app">
        <Header />  
        <Home />
        <Offer />
        <Info />
        <Teams />
        <Footer />
    </div>
  );
}

export default App;
