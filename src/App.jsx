import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOffer, setSelectedOffer] = useState();
  const [path, setPath] = useState("/");

  const handleClickOffer = (elem) => {
    // console.log("Je clique");
    setSelectedOffer(elem._id);
    setPath(`/offer/${elem._id}`);
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
          <Route path="/offer/:id" element={<Offer data={data} />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
