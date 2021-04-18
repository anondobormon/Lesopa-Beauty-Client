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

            <div className="col-md-10">
                <div className="order">
                    <div className="table">
                        <h1 className="text-order">Order List</h1>
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
                                        <td>{od.info?.status}</td>
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

export default OrderList;