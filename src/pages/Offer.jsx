import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offer = ({ data }) => {
  const { id } = useParams();

  const offersTab = data.offers;
  console.log(offersTab);

  let offerInOffers = offersTab.find((elem) => elem._id === id);

  console.log(offerInOffers);

  return (
    <main>
      <h1>Je suis sur la page Offer</h1>
      <Link to="/">Cliquez ici pour naviguer vers la page Home</Link>
      <p> The product id is : {id}</p>
      {offerInOffers.product_details.map((elem, index) => {
        return (
          <div key={elem.index}>
            <p> {elem.MARQUE}</p>
            <p> {elem.ÉTAT}</p>
            <p> {elem.COULEUR}</p>
            <p> {elem.EMPLACEMENT}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Offer;
