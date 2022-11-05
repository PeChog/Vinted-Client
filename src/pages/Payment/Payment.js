import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

import ItemSummary from "../../components/ItemSummary/ItemSummary";

import "./style.scss";

const Payment = ({ userToken }) => {
  const location = useLocation();
  const { productName, price, shippingFee, protectionFee, totalPrice } =
    location.state;

  return userToken ? (
    <div className="payment-page">
      <div className="payment-container">
        <ItemSummary
          price={price}
          protectionFee={protectionFee}
          shippingFee={shippingFee}
          totalPrice={totalPrice}
          productName={productName}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Payment;
