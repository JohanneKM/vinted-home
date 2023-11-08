import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <h1>Je suis sur la page Home</h1>
      <Link to="/offers">Cliquez ici pour naviguer vers la page Offers</Link>
    </main>
  );
};

export default Home;
