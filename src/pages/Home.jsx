import { Link } from "react-router-dom";

import Header from "../components/Header";

const Home = ({ data }) => {
  return (
    <main>
      <Header />
      <h1>Je suis sur la page Home</h1>
      <Link to="/offers">Cliquez ici pour naviguer vers la page Offers</Link>

      <div className="offers">
        {data.offers.map((elem) => {
          return (
            <div key={elem.product_image.asset_id}>
              <img className="offer-img" src={elem.product_image.url} alt="" />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
