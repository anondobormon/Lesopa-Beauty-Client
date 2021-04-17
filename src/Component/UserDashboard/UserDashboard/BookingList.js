import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidbar/UserSidebar';

const BookingList = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loggedUser = sessionStorage.getItem('email')
    console.log(loggedUser);
    // const {email} = loggedInUser;
    const [order, setOrder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                const userData = data.filter(pd => pd.loggedInUser.email === loggedUser)
                setOrder(userData)
            })
    },[])
    return (
        <div className="row">
            <UserSidebar></UserSidebar>
            <div className="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SL No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">PayWith</th>
                            <th scope="col">Status</th>
                            
                        </tr>
                    </thead>
                    {
                        order.map((od, index) => <tbody>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{od.loggedInUser?.name}</td>
                                <td>{od.loggedInUser?.email}</td>
                                <td>{od.info?.service}</td>
                                <td>Visa</td>
                                <td>Done</td>
                            </tr>
                        </tbody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default BookingList;