import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
    <div className="container">
      <img src="../src/assets/img/vinted.png" alt="logo-vinted" />

      <div className="right-header">
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
              console.log(token);
            }}
          >
            Déconnecter
          </button>
        ) : (
          <div className="login-signup">
            <Link to="http://localhost:5173/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="http://localhost:5173/login">
              <button>Se Connecter</button>
            </Link>
          </div>
        )}

        <button>Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
