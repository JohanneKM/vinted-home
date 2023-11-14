import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  return (
    <div className="payment">
      <p>Résumé de la commande</p>
      <div className="order">
        <p>Commande</p>
        <p>xx €</p>
      </div>
      <div className="buyer-protection">
        <p>Frais de protection acheteurs</p>
      </div>
      <div className="delivery-fee">
        <p>Frais de port</p>
        <p>xx €</p>
      </div>
      <div className="total">
        <div className="total-total">
          <p>Total</p>
          <p>xx €</p>
        </div>
        <p>Il ne vous reste plus qu'une étape. Vous aller payer xx€</p>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
