import { useNavigate } from "react-router-dom";
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
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              value={password}
              type="password"
              placeholder="Mot de passe"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input type="submit" value="Se connecter" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
