import React from 'react';
import Sidebar from './Sidebar';


const OrderList = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-8">
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Credit Card</th>
                            <th>Status</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderList;