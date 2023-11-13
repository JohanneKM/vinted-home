import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./components/Header";
import Publish from "./pages/Publish";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [token, setToken] = useState(
    Cookies.get("token") ? Cookies.get("token") : null
  );

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

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
        <Header token={token} handleToken={handleToken} />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} handleClickOffer={handleClickOffer} />}
          />
          <Route path="/offer/:id" element={<Offer data={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login handleToken={handleToken} />} />
          <Route path="/publish" element={<Publish />} />

          <Route path="*" element={<p>All</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
