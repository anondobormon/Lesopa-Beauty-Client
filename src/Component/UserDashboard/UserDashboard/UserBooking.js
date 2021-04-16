import React, { useContext, useState } from 'react';
import UserSidebar from '../UserSidbar/UserSidebar';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PayCard from './PayCard';
import { UserContext } from '../../../App';




const stripePromise = loadStripe('pk_test_51IeO3RETJzLGeV9qQr5oCAop0kcjFm5Kek2Pti8GxU3pmTeOMlDoipFSSkarVuILFNEhyghB54J9VBJ4Zp1pJWw800VOZEiPca');

const UserBooking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [info, setInfo] = useState({})
    console.log(info);
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
   
    return (


        <section className='row'>
            <UserSidebar></UserSidebar>
            <div className="col-md-8">
                <h1>This is booking</h1>
                <div className='col-8'>

                    <div class="form-group">

                        <input type="text" class="form-control" value={loggedInUser.name}  />
                    </div>
                    <div class="form-group">

                        <input class="form-control" value={loggedInUser.email}  />
                    </div>
                    <select onBlur={handleBlur} class="form-select" name='service' >
                        <option selected>Select Service</option>
                        <option value="Message Therapy">Message Therapy</option>
                        <option value="Beauty Care">Beauty Care</option>
                        <option value="Executive Reflexology">Executive Reflexology</option>
                    </select>
                    
                    <div className='mt-5 pt-5'>
                        <Elements stripe={stripePromise}>
                            <PayCard info={info}></PayCard>
                        </Elements>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default UserBooking;