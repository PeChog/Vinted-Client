import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./style.scss";

import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const ItemSummary = ({
  price,
  totalPrice,
  shippingFee,
  protectionFee,
  productName,
}) => {
  return (
    <div className="item-summary">
      <div className="item-summary-container">
        <span style={{ color: "rgb(142, 142, 142)" }}>
          Résumé de la commande
        </span>
        <section className="checkout-details">
          <div className="detail-display">
            <span>Commande</span>
            <span>{price} €</span>
          </div>
          <div className="detail-display">
            <span>Frais protection acheteurs</span>
            <span>{protectionFee} €</span>
          </div>
          <div className="detail-display">
            <span>Frais de port</span>
            <span>{shippingFee} €</span>
          </div>
        </section>
        <section className="checkout-total">
          <div className="detail-display">
            <span>Total</span>
            <span>{totalPrice} €</span>
          </div>
          <p style={{ color: "rgb(111, 110, 110)", lineHeight: "2.4vh" }}>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span style={{ color: "black" }}>{productName}</span>. Vous allez
            payer
            <span style={{ color: "black" }}> {totalPrice} €</span> (frais de
            port et frais de protection inclus).
          </p>
        </section>
        <section className="checkout-form">
          <Elements stripe={stripePromise} className="card-infos">
            <CheckoutForm productName={productName} totalPrice={totalPrice} />
          </Elements>
        </section>
      </div>
    </div>
  );
};

export default ItemSummary;
