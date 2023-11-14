import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: "L'id de l'utilisateur",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
        }
      );

      console.log(response.data);

      if (response.data.status === "succeeded") {
        setSucceeded(true);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Formulaire de paiement</p>
      <CardElement />
      <input type="submit" value="Acheter" disabled={isLoading} />
    </form>
  );
};

export default CheckoutForm;
