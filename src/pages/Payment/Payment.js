import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate } from "react-router-dom";

import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

import "./style.scss";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ userToken }) => {
  const location = useLocation();
  const { productName, price } = location.state;
  return userToken ? (
    <div>
      je suis la page paiement
      <Elements stripe={stripePromise}>
        <CheckoutForm productName={productName} price={price} />
      </Elements>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Payment;
