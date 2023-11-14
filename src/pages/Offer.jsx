import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const Offer = ({ data, token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const offersTab = data.offers;
  // console.log(offersTab);

  let offerInOffers = offersTab.find((elem) => elem._id === id);
  // console.log(offerInOffers);
  let offerDetails = offerInOffers.product_details;
  // console.log(offerDetails);

  let tabKeys = [];
  for (let i = 0; i < offerDetails.length; i++) {
    tabKeys.push(Object.keys(offerDetails[i]));
  }

  console.log(tabKeys);
  // let keys = Object.keys(offerInOffers.product_details);
  // console.log(keys);

  return (
    <main>
      <h1>Je suis sur la page Offer</h1>
      <Link to="/">Cliquez ici pour naviguer vers la page Home</Link>
      <p> The product id is : {id}</p>
      {offerInOffers.product_details.map((elem, index) => {
        return (
          <div key={elem.index}>
            <p> {elem.MARQUE}</p>
            <p> {elem.TAILLE}</p>
            <p> {elem.ÉTAT}</p>
            <p> {elem.COULEUR}</p>
            <p> {elem.EMPLACEMENT}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          if (token) {
            navigate("/payment");
          } else {
            navigate("/login");
          }
        }}
      >
        Acheter
      </button>
    </main>
  );
};

export default Offer;
