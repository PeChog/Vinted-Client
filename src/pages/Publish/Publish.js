import { useState } from "react";
// import axios from "axios";
// import { useNavigate, navigate } from "react-router-dom";
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
  const [price, setPrice] = useState("");
  const [swap, setSwap] = useState(false);

  // const navigate = useNavigate();

  return (
    <div className="publish-page">
      <div className="publish-container container">
        <h1>Vends ton article</h1>
        <form>
          <section className="upload">
            <div>
              <input type="file" />
            </div>
          </section>
          <section className="item-title">
            <div className="item-title-container">
              <div className="title">
                <span>Titre</span>
                <input type="text" />
              </div>
              <div className="describe">
                <span>Décris ton article</span>
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="item-details">
            <div className="item-details-container">
              <div className="brand">
                <span>Marque</span>
                <input type="text" />
              </div>
              <div className="size">
                <span>Taille</span>
                <input type="text" />
              </div>
              <div className="color">
                <span>Couleur</span>
                <input type="text" />
              </div>
              <div className="etat">
                <span>Etat</span>
                <input type="text" />
              </div>
              <div className="place">
                <span>Lieu</span>
                <input type="text" />
              </div>
            </div>
          </section>
          <section className="item-price">
            <div className="item-price-container">
              <div className="price">
                <span>Prix</span>
                <input type="text" />
              </div>
              <div>
                <input type="checkbox" />
                <span>Je suis intéressé(e) par les échanges</span>
              </div>
            </div>
          </section>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Publish;
