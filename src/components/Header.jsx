import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();

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

        <button
          onClick={() => {
            if (token) {
              navigate("/publish");
            } else {
              navigate("/login");
            }
          }}
        >
          Vends tes articles
        </button>
      </div>
    </div>
  );
};

export default Header;
