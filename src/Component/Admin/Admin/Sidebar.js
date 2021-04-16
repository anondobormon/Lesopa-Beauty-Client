import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        
            <div className="col-md-2">
                <p><Link to='/admin/orderList'>Order List</Link></p>
                <p><Link to='/admin/addService'>Add Service</Link></p>
                <p><Link to='/admin/makeAdmin'>Make Admin</Link></p>
                <p><Link to='/admin/manage'>Manage Service</Link></p>
            </div>
        
    );
};

export default Sidebar;