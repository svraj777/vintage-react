import React, { useState } from "react";
import { CartContext } from "./../context/cart";
import { UserContext } from "./../context/user";
import { useHistory } from "react-router-dom";
import EmptyCart from "./../Components/Cart/EmptyCart";
import SubmitOrder from "../strapi/submitOrder";
import { StripeProvider, CardElement, Elements, injectStripe } from "react-stripe-elements";
function Checkout(props) {
  let history = useHistory();
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;
  async function handleSubmit(e) {
    showAlert({ msg: "submitting order... please wait" });
    e.preventDefault();
    const response = await props.stripe.createToken().catch((error) => console.log(error));

    const { token } = response;
    if (token) {
      setError("");
      const { id } = token;

      let order = await SubmitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token,
      });

      if (order) {
        showAlert({ msg: "your order is complete" });
        clearCart();
        history.push("/");
        return;
      } else {
        showAlert({
          msg: "there was an error with your order. please try again!",
          type: "danger",
        });
      }
    } else {
      hideAlert();
      setError(response.error.message);
    }
  }
  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return (
    <section className='section form'>
      <h2 className='section-title'>checkout</h2>
      <form action='' className='checkout-form'>
        <h3>
          order total : <span>${total}</span>
        </h3>
        <div className='form-control'>
          <label htmlFor='name'>name</label>
          <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='stripe-input'>
          <label htmlFor='card-element'>Credit or Debit Cart</label>
          <p className='stripe-info'>
            Test using this credit card : <span>4242 4242 4242 4242</span>
            enter any 5 digits for the zip code enter any 3 digits for the CVC
          </p>
          <CardElement className='card-element'></CardElement>
          {error && <p>please enter valid Card</p>}
          {isEmpty ? (
            <p className='form-empty'>please fill out name field</p>
          ) : (
            <button type='submit' className='btn btn-primary btn-block' onClick={handleSubmit}>
              submit
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
const CardForm = injectStripe(Checkout);
const StripeWrapper = () => {
  return (
    <StripeProvider apiKey='pk_test_51IOo2tDH9z4QrjoPuLr02w3JCfmO3uDXMythl1OY21T28wMHyxxOtcAUohQCiynD2IjfJsJwuejrF1Hq59TlegPR00HTviQeGH'>
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};
export default StripeWrapper;
