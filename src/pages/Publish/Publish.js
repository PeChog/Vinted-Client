import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./style.scss";

const Publish = ({ userToken }) => {
  const [photo, setPhoto] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(0);
  // const [swap, setSwap] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", photo);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", place);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);

      if (response.data._id) {
        navigate(`/offer/${response.data._id}`);
      } else {
        alert("Une erreur est survenue");
      }
    } catch (error) {
      alert("Une erreur est survenue, veuillez réessayer");
      console.log(error);
    }
  };

  return userToken ? (
    <div className="publish-page">
      <div className="publish-container container ">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit}>
          <section className="upload">
            <div className="upload-content">
              <label>
                <input
                  type="file"
                  onChange={(event) => {
                    setPhoto(event.target.files[0]);
                  }}
                />
              </label>
            </div>
          </section>
          <section className="item-title">
            <div className="item-title-container">
              <div className="title">
                <span>Titre</span>
                <input
                  value={title}
                  type="text"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div className="describe">
                <span>Décris ton article</span>
                <input
                  value={description}
                  type="text"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </div>
            </div>
          </section>
          <section className="item-details">
            <div className="item-details-container">
              <div className="brand">
                <span>Marque</span>
                <input
                  value={brand}
                  type="text"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </div>
              <div className="size">
                <span>Taille</span>
                <input
                  value={size}
                  type="text"
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </div>
              <div className="color">
                <span>Couleur</span>
                <input
                  value={color}
                  type="text"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </div>
              <div className="etat">
                <span>Etat</span>
                <input
                  value={condition}
                  type="text"
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </div>
              <div className="place">
                <span>Lieu</span>
                <input
                  value={place}
                  type="text"
                  onChange={(event) => {
                    setPlace(event.target.value);
                  }}
                />
              </div>
            </div>
          </section>
          <section className="item-price">
            <div className="item-price-container">
              <div className="price">
                <span>Prix</span>
                <input
                  value={price}
                  type="number"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              {/* <div>
                <input
                  type="checkbox"
                  onChange={(event) => {
                    setSwap(!swap);
                  }}
                />
                <span>Je suis intéressé(e) par les échanges</span>
              </div> */}
            </div>
          </section>
          <input type="submit" />
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/signin" state={{ fromPublish: true }} />
  );
};

export default Publish;
