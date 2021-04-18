import React from 'react';
import AddAdmin from './AddAdmin';
import Sidebar from './Sidebar';

const Admin = () => {
    return (
        <section>
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10">
                    
                    <AddAdmin></AddAdmin>
                </div>
            </div>
        </section>
    );
};

export default Admin;