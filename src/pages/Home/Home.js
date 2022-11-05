import { Link } from "react-router-dom";

import Banner from "../../assets/images/banner.jpg";

import "./style.scss";

const Home = ({ isLoading, data, setSort, sort }) => {
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
                <Link to="/publish">
                  <button className="button-adv">Vends maintenant</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="toggle container">
          <span>Trier par prix:</span>
          <div class="onoffswitch">
            <input
              type="checkbox"
              name="onoffswitch"
              className="onoffswitch-checkbox"
              id="myonoffswitch"
              tabindex="0"
              checked={sort}
              onClick={() => {
                sort ? setSort(false) : setSort(true);
              }}
            />
            <label className="onoffswitch-label" for="myonoffswitch">
              <span className="onoffswitch-inner"></span>
              <span className="onoffswitch-switch"></span>
            </label>
          </div>
        </div>

        <div className="offers container">
          {data.offers.map((offer) => {
            return (
              <div className="offer-card" key={offer._id}>
                <div className="offer-card-container">
                  <div className="user-offer">
                    {offer?.owner?.account?.avatar ? (
                      <div className="profil-img">
                        <img
                          alt="userImg"
                          src={offer.owner.account.avatar.url}
                        />
                      </div>
                    ) : (
                      <div style={{ height: "4vh" }}></div>
                    )}

                    <span>{offer?.owner?.account?.username}</span>

                    {/* <span>{offer.owner.account.username}</span> */}
                  </div>
                  <Link to={`/offer/${offer._id}`}>
                    <img
                      alt="offerImg"
                      src={offer.product_image.secure_url}
                      className="offer-pic"
                    />
                  </Link>

                  <div>
                    <span style={{ fontSize: "1.0vw" }}>
                      {offer.product_price.toFixed(2)} €
                    </span>
                    {offer.product_details.map((detail, index) => {
                      return (
                        <div className="infos-item" key={index}>
                          <span className="infos-item">{detail.TAILLE}</span>
                          <span className="infos-item">{detail.MARQUE}</span>
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
