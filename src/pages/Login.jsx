import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <main>
      <h2>Se connecter</h2>
      <form>
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
      </form>
    </main>
  );
};

export default Login;
