import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';



const PayCard = ({ info }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errMessage, setErrMessage] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setErrMessage(error)
    } 
    else {

      const orderService = { paymentMethod, info }
      console.log(orderService);
      fetch('https://lit-ravine-67138.herokuapp.com/bookService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderService)
      })
        .then(result => {
          alert('Added Successfully')
          window.location.reload()
          console.log(orderService);
        })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className='btn btn-danger mt-5' disabled={!stripe}>
        Pay
      </button>
      {
        errMessage && <p>{errMessage.message}</p>
      }
    </form>
  );
};
export default PayCard