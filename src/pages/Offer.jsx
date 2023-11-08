import { Link } from "react-router-dom";

const Offer = ({ selectedOffer }) => {
  return (
    <main>
      <h1>Je suis sur la page Offer</h1>
      <Link to="/">Cliquez ici pour naviguer vers la page Home</Link>
      <Link to={`/offer/${selectedOffer}`}>
        Cliquez ici pour naviguer vers l'Offre dont l'id est selectedOffer
      </Link>
    </main>
  );
};

export default Offer;
