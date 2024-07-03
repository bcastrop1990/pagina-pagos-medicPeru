
import '@stripe/react-stripe-js'
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.tsx';

const stripePromise = loadStripe("pk_test_Nk0cGvjGlp2HwLvbXf8nZsN4");

const CheckoutForm = () => {
  return (
    <form>
      <CardElement />
    </form>
  );
};

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
