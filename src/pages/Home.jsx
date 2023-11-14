import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

const Home = ({ data, handleClickOffer, token }) => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="hero">
        <img src="../src/assets/img/img-hero.jpg" alt="image hero" />

        <p>Prêts à faire du tri dans vos placards ?</p>
        <button
          onClick={() => {
            if (token) {
              navigate("/publish");
            } else {
              navigate("/login");
            }
          }}
        >
          Commencez à vendre
        </button>
      </div>

      <h2>Articles Populaires</h2>

      <div className="offers">
        {data.offers.map((elem) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={elem._id}
              to={`/offer/${elem._id}`}
            >
              <div
                onClick={() => {
                  handleClickOffer(elem);
                }}
                className="offer"
              >
                <div className="avatar">
                  {elem.owner.account.avatar && (
                    <img src={elem.owner.account.avatar.secure_url} alt="" />
                  )}

                  <p className="username">{elem.owner.account.username}</p>
                </div>
                <img
                  className="offer-img"
                  src={elem.product_image.url}
                  alt=""
                />
                <p> {elem.product_price} €</p>
                <p> {elem.product_details[1].TAILLE} </p>
                <p> {elem.product_details[0].MARQUE} </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
