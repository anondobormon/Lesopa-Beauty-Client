import React from 'react';
import './Review.css'
import img1 from '../../../Image/review.jpg';




const reviews = [
    {
        name: 'Depa Nier',
        via: 'Via Facebook',
        comment: 'Thank you all it was an excellant work this is the good place for care skin ',
        stars: 5,
        img: img1
    },
    {
        name: 'Depa Nier',
        via: 'Via Facebook',
        comment: 'Thank you all it was an excellant work this is the good place for care skin ',
        stars: 5,
        img: img1
    },
    {
        name: 'Depa Nier',
        via: 'Via Facebook',
        comment: 'Thank you all it was an excellant work this is the good place for care skin ',
        stars: 5,
        img: img1
    },
    {
        name: 'Depa Nier',
        via: 'Via Facebook',
        comment: 'Thank you all it was an excellant work this is the good place for care skin .',
        stars: 5,
        img: img1
    }
]

const Reviews = () => {
    return (
        <section>
            <div className="col-md-6 review">
                <h2>Customer Review</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid iusto nam harum qui veniam error perferendis magnam autem illo placeat.</small></p>
            </div>
            <div className="row m-5 p-5">
                {
                    reviews.map(review =>
                        <div className="col-md-6">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img style={{width: '110%'}} src={review.img} alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h4 class="card-title">{review.name}</h4>
                                            <h5 class="card-title">{review.via}</h5>
                                            <p class="card-text">{review.comment}</p>
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