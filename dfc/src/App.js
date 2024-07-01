import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Loginpopup from "./component/Loginpopup/Loginpopup";

const App = () => {
  const [showlogin,setshowlogin] = useState(false)
  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
      <div>
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Placeorder" element={<Placeorder />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
