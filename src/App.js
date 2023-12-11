import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ArtInfluenceurs from "./Pages/ArtInfluenceurs";
import Home from "./Pages/Home";
import Presse from "./Pages/Presse";
import SitesWeb from "./Pages/SitesWeb";
import ÉvénementsArtistiques from "./Pages/ÉvénementsArtistiques";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/presse" exact element={<Presse />} />
          <Route path="/sites-web" exact element={<SitesWeb />} />
          <Route
            path="/événement-artistique"
            exact
            element={<ÉvénementsArtistiques />}
          />
          <Route path="/art-influenceurs" exact element={<ArtInfluenceurs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
