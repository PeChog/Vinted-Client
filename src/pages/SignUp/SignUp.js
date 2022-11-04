import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./style.scss";

const SignUp = ({ handleToken }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: userName,
          email: email,
          password: password,
          newsletter: newsLetter,
        }
      );
      handleToken(response.data.token);
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="signup-page">
        <div className="form-container-signUp">
          <h1>S'inscrire</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="signUp-text-inputs"
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              className="signUp-text-inputs"
              type="email"
              placeholder="E-mail"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="signUp-text-inputs"
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <div className="newsletter">
              <input
                className="newsletter-checkbox"
                type="checkbox"
                checked={newsLetter}
                onChange={() => {
                  setNewsLetter(!newsLetter);
                }}
              />
              <span>S'inscrire à notre newsletter</span>
            </div>

            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
            <input className="signup" type="submit" value="S'incrire" />
          </form>
          <Link to="/signin" className="toSignIn">
            <span>Tu as déjà un compte ? Connecte-toi !</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
