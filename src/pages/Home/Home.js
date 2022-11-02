import { Link } from "react-router-dom";

import Banner from "../../assets/images/banner.jpg";

import "./style.scss";

const Home = ({ isLoading, data }) => {
  return isLoading ? (
    <div>en cours de chargement</div>
  ) : (
    <>
      <div className="Home">
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
        <div className="offers container">
          {data.offers.map((offer) => {
            return (
              <div className="offer-card" key={offer._id}>
                <div className="offer-card-container">
                  <div className="user-offer">
                    {offer.owner && offer.owner.account.avatar && (
                      <img alt="userImg" src={offer.owner.account.avatar.url} />
                    )}

                    <span>{offer.owner.account.username}</span>
                  </div>
                  <Link to={`/offer/${offer._id}`}>
                    <img
                      alt="offerImg"
                      src={offer.product_image.secure_url}
                      className="offer-pic"
                    />
                  </Link>

                  <div>
                    <span>{offer.product_price} €</span>
                    {offer.product_details.map((detail, index) => {
                      return (
                        <div key={index}>
                          <span>{detail.TAILLE}</span>
                          <span>{detail.MARQUE}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
