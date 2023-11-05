import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Presse from "./Pages/Presse";
import SitesWeb from "./Pages/SitesWeb";
import ÉvénementsArtistiques from "./Pages/ÉvénementsArtistiques";
import ArtInfluenceurs from "./Pages/ArtInfluenceurs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/presse" exact element={<Presse />} />
          <Route path="/sites-web-1" exact element={<SitesWeb />} />
          <Route path="/événement-artistique" exact element={<ÉvénementsArtistiques />} />
          <Route path="/art-influenceurs" exact element={<ArtInfluenceurs />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
