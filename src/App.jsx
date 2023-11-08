import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOffer, setSelectedOffer] = useState();

  const handleClickOffer = (elem) => {
    console.log("Je clique");
    setSelectedOffer(elem._id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} handleClickOffer={handleClickOffer} />}
          />
          <Route path="/offers" element={<Offer />} />
          <Route
            path="/offer/:id"
            element={<Offer selectedOffer={selectedOffer} />}
          />

          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
