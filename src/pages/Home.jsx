import { Link } from "react-router-dom";

import Header from "../components/Header";

const Home = ({ data, handleClickOffer }) => {
  return (
    <div className="home">
      <Header />

      <div className="hero">
        <img src="../src/assets/img/img-hero.jpg" alt="image hero" />
      </div>

      <h1>Je suis sur la page Home</h1>
      <Link to="/offers">Cliquez ici pour naviguer vers la page Offers</Link>
      <h2>Articles Populaires</h2>

      <div className="offers">
        {data.offers.map((elem) => {
          return (
            <Link key={elem._id} to={`/offer/${elem._id}`}>
              <div
                onClick={() => {
                  handleClickOffer(elem);
                }}
                className="offer"
              >
                <img
                  className="offer-img"
                  src={elem.product_image.url}
                  alt=""
                />
                <p> {elem.product_price} €</p>
                <p> {elem.product_name} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
