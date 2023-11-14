import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      handleToken(response.data.token);
      Cookies.set("userID", response.data._id, { expires: 15 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          placeholder="Adresse email"
        />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="Mot de passe"
        />
        <input type="submit" value="Se connecter" />
      </form>
    </main>
  );
};

export default Login;
