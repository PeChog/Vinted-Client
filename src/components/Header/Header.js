import Logo from "../../assets/images/Vinted_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Header = ({ userToken, handleToken }) => {
  return (
    <div className="header">
      <div className="header-content container">
        <Link to="/">
          <img alt="logo" src={Logo} />
        </Link>
        <div className="search">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="icon"
          />
          <input placeholder="Rechercher des articles" />
        </div>

        <div className="log-buttons-cont">
          {userToken ? (
            <button
              className="log-buttons"
              onClick={() => {
                handleToken();
              }}
            >
              Déconnexion
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="log-buttons">S'inscrire</button>
              </Link>
              <Link to="/signin">
                <button className="log-buttons">Se connecter</button>
              </Link>
            </>
          )}
        </div>
        <button className="sell-header">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
