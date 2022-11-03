import { useState } from "react";
import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "./style.scss";

const CheckoutForm = ({ productName, price }) => {
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
      //   console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: productName,
          amount: price,
        }
      );
      console.log(response.data);
      if (response.data === "succeeded") {
        setCompleted(true);
      } else {
        alert("Une erreur est survenue au moment du paiement");
      }
    } catch (error) {
      alert("Une erreur est survenue");
    }
  };

  return completed ? (
    <p>Paiment effectué</p>
  ) : (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <input type="submit" />
    </form>
  );
};
export default CheckoutForm;
