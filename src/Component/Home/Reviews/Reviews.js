import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Reviews.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const reviewsData = reviews.slice(0, 6);
    console.log(reviews);

    useEffect(() => {
        fetch('https://lit-ravine-67138.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <div className="col-md-6 review">
                <h2>Customer Review</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iusto nam harum qui veniam error perferendis magnam autem illo placeat.</small></p>
            </div>
            <div className="row">
                {
                    reviewsData.map(review =>
                        <div className="col-md-4 review-card">
                            <div class="card mb-3 card-details">
                                <div class="row g-0">
                                    <div class="col-md-4 review-img">
                                        <img  src={review.img} alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title">{review.name}</h4>
                                            <h5 class="card-title">{review.date}</h5>
                                            <p class="card-text">{review.description}</p>
                                            <p  class="card-text"><small  class="text-muted">
                                                <FontAwesomeIcon style={{color:'#ff817e'}} icon={faStar} />
                                                <FontAwesomeIcon style={{color:'#ff817e'}} icon={faStar} />
                                                <FontAwesomeIcon style={{color:'#ff817e'}} icon={faStar} />
                                                <FontAwesomeIcon style={{color:'#ff817e'}} icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                </small></p>
                                                <button className="btn btn-brand">Read More</button>
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