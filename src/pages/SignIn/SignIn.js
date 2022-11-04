import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./style.scss";
import axios from "axios";

const SignIn = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="signin-page">
        <div className="form-container-signIn">
          <h1>Se connecter</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="inputs-text"
              value={email}
              type="email"
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="inputs-text"
              value={password}
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input className="login" type="submit" value="Se connecter" />
          </form>
          <Link to="/signup" className="toSignUp">
            <span>Pas encore de compte ? Inscris toi !</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
