import axios from "axios";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

const Publish = ({ userToken }) => {
  const [photo, setPhoto] = useState({});
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [swap, setSwap] = useState(false);

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
              {preview ? (
                <div className="preview-image">
                  <img src={preview} alt="pré-visualisation" />
                  <div
                    className="remove-img-button"
                    onClick={() => {
                      setPreview("");
                    }}
                  >
                    X
                  </div>
                </div>
              ) : (
                <label className="upload-input-div">
                  <FontAwesomeIcon
                    icon="fa-solid fa-plus"
                    className="plus-icon"
                  />
                  Choisir une image
                  <input
                    type="file"
                    className="input-file"
                    onChange={(event) => {
                      setPhoto(event.target.files[0]);
                      setPreview(URL.createObjectURL(event.target.files[0]));
                    }}
                  />
                </label>
              )}
            </div>
          </section>
          <section className="item-title">
            <div className="item-title-container">
              <div className="title">
                <span>Titre</span>
                <input
                  value={title}
                  type="text"
                  placeholder="ex: Chemise Suzanne verte"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </div>
              <div className="describe">
                <span>Décris ton article</span>
                <input
                  placeholder="ex: Superbe chemise Vintage"
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
                  placeholder="ex: Nike"
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
                  placeholder="ex: L / 40 / 12"
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
                  placeholder="ex: Moutarde"
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
                  placeholder="ex: Très bon état"
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
                  placeholder="ex: Paris"
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
                  className="price-input"
                  placeholder="0,00 €"
                  value={price}
                  type="text"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
              <div className="swap-input">
                <input
                  type="checkbox"
                  onChange={(event) => {
                    setSwap(!swap);
                  }}
                />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </section>
          <div className="submit-button">
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Navigate to="/signin" state={{ fromPublish: true }} />
  );
};

export default Publish;
