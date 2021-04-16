import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';

const PayCard = ({ info }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errMessage, setErrMessage] = useState([])



  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [cardData, setCardData] = useState([])
  // console.log(loggedInUser);
  // console.log(info);



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
    } else {
      // setCardData(paymentMethod)
      console.log('[PaymentMethod]', paymentMethod);



      const orderService = { loggedInUser, paymentMethod, info }
      console.log(orderService);
      fetch('http://localhost:5000/bookService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderService)
      })
        .then(result => {
          alert('Added Successfully')
          console.log(orderService);
        })
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className='btn btn-primary mt-5' disabled={!stripe}>
        Pay
      </button>
      {/* <p className='text-danger'>{errMessage ? errMessage.message : ''}</p> */}
      {
        errMessage && <p>{errMessage.message}</p>
      }

    </form>
  );
};
export default PayCard