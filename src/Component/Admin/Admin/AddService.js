import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const AddService = () => {
    const [imageURL, setImageURL] = useState({})
    const [info, setInfo] = useState({})

    const handleSubmit = () => {
        const eventData = {
            serviceTitle: info.titleName,
            description: info.description,
            date: new Date().toISOString(),
            img: imageURL
        }
        console.log(eventData);
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                alert('Admin Added Successfully')
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
        <section>
            <div className="row">
                <Sidebar></Sidebar>
                <div className="col-md-10">
                    <div className="order">
                        <div className="table">
                            <div className="col-md-6">
                                <div class="form-group">
                                    <h4 className='text-order'>Add Service</h4>
                                    <h4>Title Name</h4>
                                    <input onBlur={handleBlur} type="text" class="form-control" name='titleName' placeholder="Enter Title" />
                                </div>
                                <div class="form-group">
                                    <h4>Description</h4>
                                    <textarea onBlur={handleBlur} class="form-control" name='description' placeholder="Description" />
                                </div>
                                <div class="form-group">
                                    <h4>Upload Image</h4>
                                    <input type="file" class="form-control" onChange={handleUploadImage} />
                                </div>
                                <button onClick={handleSubmit} class="btn-brand">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;