import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <img src="../src/assets/img/vinted.png" alt="logo-vinted" />

      <div className="right-header">
        <div className="login-signup">
          <Link to="http://localhost:5173/signup">
            <button>S'inscrire</button>
          </Link>
          <button>Se Connecter</button>
        </div>

        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
