import React from 'react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
    return (
        <div className="col-md-2">
            <ul>
                <li><Link to='/userBooking'>Book Appointment</Link></li>
                <li><Link to='/userBookingList'>Booking list</Link></li>
                <li><Link to='/userReview'>Review</Link></li>
            </ul>
        </div>
    );
};

export default UserSidebar;