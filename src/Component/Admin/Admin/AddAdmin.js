import axios from 'axios';
import React, { useState } from 'react';


const AddAdmin = () => {
    const [imageURL, setImageURL] = useState({})
    const [info, setInfo] = useState({})

    const handleSubmit = () => {
        const eventData = {
            name: info.name,
            email: info.email,
            date: new Date().toISOString(),
            img: imageURL
        }
        console.log(eventData);
        fetch('https://lit-ravine-67138.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                alert('Admin Added Successfully')
                window.location.reload()
            })
    }

    const handleBlur = event => {
        const newInfo = { ...info }
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo)
        console.log(newInfo);
    }


    const handleUploadImage = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '54f8ad2746e4238bf47c906854d1de16');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="col-md-12">
                <div className="order">
                    <div className="table">
                        
                        <div className="col-md-6">
                            <div class="form-group">
                            <h1 className="text-order">Add Admin</h1>
                                <h4>User Name</h4>
                                <input onBlur={handleBlur} type="text" class="form-control" name='name' placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <h4>User Email</h4>
                                <input onBlur={handleBlur} type="email" class="form-control" name='email' placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <h4>Upload Image</h4>
                                <input type="file" class="form-control" onChange={handleUploadImage} />
                            </div>
                            <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddAdmin;