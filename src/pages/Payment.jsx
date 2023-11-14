import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  return (
    <main className="main-payment">
      <div className="payment">
        <h2>Résumé de la commande</h2>
        <div className="order">
          <p>Commande</p>
          <p> {price} €</p>
        </div>
        <div className="buyer-protection">
          <p>Frais de protection acheteurs</p>
          <p> 0.40 €</p>
        </div>
        <div className="delivery-fee">
          <p>Frais de port</p>
          <p> 0.80 €</p>
        </div>
        <div className="total">
          <div className="total-total">
            <p>Total</p>
            <p> xx €</p>
          </div>
          <p className="last-step">
            Il ne vous reste plus qu'une étape pour vous offrir {title}. Vous
            aller payer {price} € (frais de protection et frais de port inclus).
          </p>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </main>
  );
};

export default Payment;
