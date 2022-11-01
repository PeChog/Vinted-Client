import Logo from "../../assets/images/Vinted_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content container">
        <img alt="logo" src={Logo} />
        <div className="search">
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            className="icon"
          />
          <input placeholder="Rechercher des articles" />
        </div>

        <div className="log-buttons-cont">
          <button className="log-buttons">S'inscrire</button>
          <button className="log-buttons">Se connecter</button>
        </div>
        <button className="sell-header">Vends tes articles</button>
      </div>
    </div>
  );
};

export default Header;
