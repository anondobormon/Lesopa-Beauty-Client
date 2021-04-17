import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';


const OrderList = () => {
    const [order, setOrder] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data);
            })
    }, [])
    return (
        <div className="row">
            <Sidebar></Sidebar>
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
                            <th scope="col">Update Status</th>
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
                                <td>
                                    Done
                                </td>

                                <td>
                                    <select class="form-select " style={{ width: '10%', display: 'inline'}}>
                                        <option selected>Select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <button class='btn btn-danger'>Update</button>
                                </td>
                            </tr>
                        </tbody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default OrderList;