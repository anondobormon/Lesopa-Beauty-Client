import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const ManageOrder = () => {

    const [order, setOrder] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                // console.log(data);
            })
    }, [])


    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('Deleted successfully');
                alert('Order Deleted Successfully')
            })
        console.log(id);

    }

    const [changStatus, setChangeStatus] = useState()

    const handleChangeStatus = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/allOrder/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setChangeStatus(data)
            })
    }
    const handleClickStatus = (id) => {
        // const statusValue = document.getElementById('status').value
        // console.log(statusValue);

    }


    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div className="col-md-10">
                <div className="col-md-12">
                    <div className="order">
                        <div className="table">
                            <h1 className="text-order">Manage Order</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">SL No</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email ID</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">PayWith</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>

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
                                            <td>

                                                <select onChange={() => handleChangeStatus(od._id)} onClick={handleClickStatus(od._id)} id='status' class="form-select " id='status' style={{ width: '80%', display: 'inline' }}>
                                                    <option defaultValue="Pending">Pending</option>
                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Done">Done</option>
                                                </select>
                                                {/* <button class='btn btn-danger'>Update</button> */}

                                            </td>
                                            <td><button onClick={() => handleDelete(od._id)}>delete</button></td>
                                        </tr>
                                    </tbody>
                                    )
                                }
                                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, repellendus. Libero animi cupiditate placeat fuga cum id hic omnis vitae. */}
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ManageOrder;