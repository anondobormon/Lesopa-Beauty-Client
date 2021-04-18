import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UserSidbar/UserSidebar';
import './UserDashboard.css'

const BookingList = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const loggedUser = sessionStorage.getItem('email')
    console.log(loggedUser);
    // const {email} = loggedInUser;
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('https://lit-ravine-67138.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => {
                const userData = data.filter(pd => pd.info?.email === loggedUser)
                setOrder(userData)
            })
    }, [])
    return (
        <div className="row">
            <UserSidebar></UserSidebar>

            <div className="col-md-10">
                <div className="order">
                    <div className="table">
                        <h1 className="text-order">Booking List</h1>
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
                                        <td>{od.info?.name}</td>
                                        <td>{od.info?.email}</td>
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
            </div>
            
        </div>
    );
};

export default BookingList;