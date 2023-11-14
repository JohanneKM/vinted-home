import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const Offer = ({ data, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const offersTab = data.offers;
  // console.log(offersTab);

  let offerInOffers = offersTab.find((elem) => elem._id === id);
  console.log(offerInOffers);
  let offerDetails = offerInOffers.product_details;
  // console.log(offerDetails);

  // let tabKeys = [];
  // for (let i = 0; i < offerDetails.length; i++) {
  //   tabKeys.push(Object.keys(offerDetails[i]));
  // }

  // console.log(tabKeys);
  // // let keys = Object.keys(offerInOffers.product_details);
  // // console.log(keys);

  return (
    <main className="article">
      <img src={offerInOffers.product_image.secure_url} alt="offer" />

      <div className="article-text">
        <p className="article-price"> {offerInOffers.product_price} €</p>

        {offerInOffers.product_details.map((elem) => {
          const clefs = Object.keys(elem);
          console.log(clefs);
          const clef = clefs[0];
          console.log(clef);

          return (
            <div className="details" key={clef}>
              <p className="clef"> {clef}</p>
              <p>{elem[clef]}</p>
            </div>
          );
        })}

        <p className="offer-name"> {offerInOffers.product_name} </p>
        <p className="offer-desc"> {offerInOffers.product_description} </p>
        {offerInOffers.owner.account.avatar && (
          <img
            className="avatar-in-offer"
            src={offerInOffers.owner.account.avatar.secure_url}
            alt=""
          />
        )}
        <p> {offerInOffers.owner.account.username} </p>

        <button
          onClick={() => {
            if (token) {
              navigate("/payment", {
                state: {
                  title: offerInOffers.product_name,
                  price: offerInOffers.product_price,
                },
              });
            } else {
              navigate("/login");
            }
          }}
        >
          Acheter
        </button>
      </div>
    </main>
  );
};

export default Offer;
