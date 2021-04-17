import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

const Sidebar = () => {
    return (

        <div className="col-md-2 side-bar">
            <div className="admin-service">
                <p><Link to='/admin/orderList' style={{color: '#ff817e'}}>Order List</Link></p>
                <p><Link to='/admin/addService'>Add Service</Link></p>
                <p><Link to='/admin/makeAdmin'>Make Admin</Link></p>
                <p><Link to='/admin/manage'>Manage Service</Link></p>
            </div>
        </div>

    );
};

export default Sidebar;