import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
      <div className="signin-page">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              type="checkbox"
              checked={newsLetter}
              onChange={() => {
                setNewsLetter(!newsLetter);
              }}
            />
            <input type="submit" value="S'incrire" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
