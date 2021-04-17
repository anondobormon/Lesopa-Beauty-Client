import React, { useEffect, useState } from 'react';
import './Review.css'
import img1 from '../../../Image/review.jpg';






const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const reviewsData = reviews.slice(0, 4);
    console.log(reviews);

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
        <section>
            <div className="col-md-6 review">
                <h2>Customer Review</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iusto nam harum qui veniam error perferendis magnam autem illo placeat.</small></p>
            </div>
            <div className="row m-5 p-5">
                {
                    reviewsData.map(review =>
                        <div className="col-md-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img style={{width: '110%'}} src={review.img} alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title">{review.name}</h4>
                                            <h5 class="card-title">{review.date}</h5>
                                            <p class="card-text">{review.description}</p>
                                            <p class="card-text"><small class="text-muted">Start 5</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Reviews;