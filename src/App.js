import Header from "./components/Header/Header";
import Home from "./components/Home/Home"; 
import Offer from "./components/Offers/Offer";
// import Footer from "./components/Foot/Footer";
import Info from "./components/Info/Info";
import "./App.css"



function App() {
  return (
    <div className="app">
        <Header />  
        <Home />
        <Offer />
         <Info />
        {/* <Footer /> */}
    </div>
  );
}

export default App;
