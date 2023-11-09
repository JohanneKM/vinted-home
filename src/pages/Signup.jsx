import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();

  Cookies.get("token");
  //   console.log(data.token);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

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
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: true,
        }
      );

      console.log(response.data);
      setData(response.data);
      //   console.log(data.token);

      Cookies.set("token", data.token), { expires: 15 };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUsernameChange}
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input onChange={handleEmailChange} type="email" placeholder="email" />
        <input
          onChange={handlePasswordChange}
          type="password"
          placeholder="password"
        />
        <input type="checkbox" />
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <input type="submit" value="S'inscrire" />
      </form>
    </main>
  );
};

export default Signup;
