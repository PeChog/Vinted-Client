import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <span>en cours de chargement </span>
  ) : (
    <>
      <div className="offer-page">
        <div className="container">
          <section className="left-section">
            <img alt="offer-product-img" src={data.product_image.secure_url} />
          </section>
          <section className="right-section">
            <div className="description-container">
              <section className="top-description-section">
                <span>{data.product_price} €</span>
                {data.product_details.map((detail, index) => {
                  const keyName = Object.keys(detail);
                  return (
                    <div key={index}>
                      <span>{keyName[0]}</span>
                      <span>{detail[keyName[0]]}</span>
                    </div>
                  );
                })}
              </section>
              <section className="bottom-description-section">
                <span>{data.product_name}</span>
                <span>{data.product_description}</span>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1vw" }}
                >
                  {/* {data.owner && data.owner.avatar && ( */}
                  {/* <img
                    alt="offer-profil-pic"
                    src={data.owner.account.avatar.url}
                    className="offer-profil-pic"
                  /> */}
                  {/* )} */}
                  <span>{data.owner.account.username}</span>
                </div>

                <button
                  onClick={() => {
                    navigate("/payment", {
                      state: {
                        productName: data.product_name,
                        price: data.product_price,
                      },
                    });
                  }}
                >
                  Acheter
                </button>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Offer;
