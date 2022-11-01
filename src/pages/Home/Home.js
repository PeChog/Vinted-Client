import Header from "../../components/Header/Header";
import Banner from "../../assets/images/banner.jpg";

import "./style.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="banner">
        <img alt="banner" src={Banner} />
        <div className="sell-adv container">
          <div className="adv">
            <div className="content">
              <h1 className="title-adv">
                Prêts à faire du tri dans vos placards
              </h1>
              <button className="button-adv">Vends maintenant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
