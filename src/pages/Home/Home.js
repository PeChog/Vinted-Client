import Header from "../../components/Header/Header";
import Banner from "../../assets/images/banner.jpg";

import "./style.scss";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="banner">
        <img alt="banner" src={Banner} />
        <div className="sell-adv container"></div>
      </div>
    </div>
  );
};

export default Home;
