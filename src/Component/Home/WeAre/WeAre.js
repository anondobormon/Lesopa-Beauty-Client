import React from 'react';
import img1 from '../../../Image/joseph.jpg';
import img2 from '../../../Image/qutaion.png'
import './WeAre.css'

const WeAre = () => {


    return (
        <div>


            <div id="carouselExampleIndicators" class="carousel slide bg-classic" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button className='active bg-primary' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                    <button className=' bg-primary' type="button " data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button className=' bg-primary' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <h1 className='text-center text-brand'>What Out Clients Says</h1>
                    <div class="carousel-item active">

                        <div className="details-client mb-5 pb-5">
                            <div className="col-8 text-center">
                               <h1>"</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores illum sint culpa vero officia quas quasi corrupti tempore suscipit vel voluptate neque, assumenda excepturi iste molestiae saepe aperiam quae nam aliquid qui! Omnis, commodi? Itaque sit, iure autem maxime harum voluptates animi voluptatem quod dignissimos tenetur unde iste ut placeat excepturi commodi beatae consectetur et tempora facere sunt? Consequatur vero illo officia labore ad eius accusamus cupiditate porro vel, ipsum nulla quaerat iure! Accusantium alias neque est? Labore, dolorem!</p>
                                <div className="client-image">
                                    <div className="img">
                                    <img src={img1} alt="" />
                                    </div>
                                    <h4>Mary Justine</h4>
                                    <p><small>Web Developer</small></p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div className="details-client mb-5 pb-5">
                            <div className="col-8 text-center">
                                <h1>"</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores illum sint culpa vero officia quas quasi corrupti tempore suscipit vel voluptate neque, assumenda excepturi iste molestiae saepe aperiam quae nam aliquid qui! Omnis, commodi? Itaque sit, iure autem maxime harum voluptates animi voluptatem quod dignissimos tenetur unde iste ut placeat excepturi commodi beatae consectetur et tempora facere sunt? Consequatur vero illo officia labore ad eius accusamus cupiditate porro vel, ipsum nulla quaerat iure! Accusantium alias neque est? Labore, dolorem!</p>
                                <div className="client-image">
                                <div className="img">
                                    <img src={img1} alt="" />
                                    </div>
                                    <h4>Mary Justine</h4>
                                    <p><small>Web Developer</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="details-client mb-5 pb-5">
                            <div className="col-8 text-center">
                                <h1>"</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores illum sint culpa vero officia quas quasi corrupti tempore suscipit vel voluptate neque, assumenda excepturi iste molestiae saepe aperiam quae nam aliquid qui! Omnis, commodi? Itaque sit, iure autem maxime harum voluptates animi voluptatem quod dignissimos tenetur unde iste ut placeat excepturi commodi beatae consectetur et tempora facere sunt? Consequatur vero illo officia labore ad eius accusamus cupiditate porro vel, ipsum nulla quaerat iure! Accusantium alias neque est? Labore, dolorem!</p>
                                <div className="client-image">
                                <div className="img">
                                    <img src={img1} alt="" />
                                    </div>
                                    <h4>Mary Justine</h4>
                                    <p><small>Web Developer</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default WeAre;