import { useState } from "react";
import { Link } from "react-router-dom";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./style.scss";

const CheckoutForm = ({ productName, price, totalPrice }) => {
  const [completed, setCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id de l'acheteur",
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: productName,
          amount: totalPrice,
        }
      );

      if (response.data) {
        setCompleted(true);
      } else {
        alert("Une erreur est survenue au moment du paiement");
      }
    } catch (error) {
      alert("Une erreur est survenue");
    }
  };

  return completed ? (
    <div className="payment-succeeded-container">
      <div className="payment-succeeded">Paiment effectué !</div>
      <div style={{ color: "gray", marginTop: "2vh" }}>
        Un e-mail va vous être envoyé avec le récapitulatif de commande.
      </div>
      <Link to="/" className="payment-home-link">
        Cliquez ici pour continuer vos achats
      </Link>
    </div>
  ) : (
    <>
      <div className="payment-to-pay"></div>
      <form onSubmit={handleSubmit}>
        <div className="card-infos">
          <CardElement className="card-elem" />
        </div>
        <input type="submit" className="pay-button" value="Pay" />
      </form>
    </>
  );
};
export default CheckoutForm;
