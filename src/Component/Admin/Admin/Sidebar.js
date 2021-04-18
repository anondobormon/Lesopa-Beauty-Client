import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faShoppingCart, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (

        <div className="col-md-2 ">
            <div className="option">
               <Link to='/admin/orderList' > <p><FontAwesomeIcon icon={faShoppingCart} /><span> Order List</span></p></Link>
               <Link to='/admin/addService' > <p><FontAwesomeIcon icon={faPlus} /> <span>Add Service</span></p></Link>
               <Link to='/admin/makeAdmin' > <p><FontAwesomeIcon icon={faUserPlus} /><span> Make Admin</span></p></Link>
               <Link to='/admin/manage' > <p><FontAwesomeIcon icon={faThLarge} /><span> Manage Order</span></p></Link>
                
            </div>
        </div>

    );
};

export default Sidebar;