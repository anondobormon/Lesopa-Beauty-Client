import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCommentDots, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const UserSidebar = () => {
    return (
        <div className="col-md-2">
            <div className="option">
                <Link to='/userBooking' > <p><FontAwesomeIcon icon={faPlus} /><span>Book Appointment</span></p></Link>
                <Link to='/userBookingList' > <p><FontAwesomeIcon icon={faShoppingCart} /> <span>Booking list</span></p></Link>
                <Link to='/userReview' > <p><FontAwesomeIcon icon={faCommentDots} /><span>Review</span></p></Link>
            </div>
        </div>
    );
};

export default UserSidebar;