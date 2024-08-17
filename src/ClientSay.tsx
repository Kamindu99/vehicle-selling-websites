import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ClientSay = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        items: 1, // Adjust as needed
        autoplay: true, // Enables autoplay
        autoplayTimeout: 3000, // 3 seconds delay between slides
        autoplayHoverPause: true, // Pause on hover
        autoplaySpeed: 1000, // Transition speed (1 second)
        animateOut: 'fadeOut', // Transition effect
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    return (
        <section id="clients-say" className="clients-say">
            <div className="container">
                <div className="section-header">
                    <h2>what our clients say</h2>
                </div>
                <div className="row">
                    <OwlCarousel className="owl-carousel testimonial-carousel" {...options}>
                        <div className="col-sm-3 col-xs-12">
                            <div className="single-testimonial-box">
                                <div className="testimonial-description">
                                    <div className="testimonial-info">
                                        <div className="testimonial-img">
                                            <img
                                                src="assets/images/clients/c1.png"
                                                alt="image of clients person"
                                            />
                                        </div>
                                    </div>
                                    <div className="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem
                                            accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                                            illo inventore verit.
                                        </p>
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>
                                            <a href="#">tomas lili</a>
                                        </h2>
                                        <h4>new york</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="single-testimonial-box">
                                <div className="testimonial-description">
                                    <div className="testimonial-info">
                                        <div className="testimonial-img">
                                            <img
                                                src="assets/images/clients/c2.png"
                                                alt="image of clients person"
                                            />
                                        </div>
                                    </div>
                                    <div className="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem
                                            accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                                            illo inventore verit.
                                        </p>
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>
                                            <a href="#">romi rain</a>
                                        </h2>
                                        <h4>london</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <div className="single-testimonial-box">
                                <div className="testimonial-description">
                                    <div className="testimonial-info">
                                        <div className="testimonial-img">
                                            <img
                                                src="assets/images/clients/c3.png"
                                                alt="image of clients person"
                                            />
                                        </div>
                                    </div>
                                    <div className="testimonial-comment">
                                        <p>
                                            Sed ut pers unde omnis iste natus error sit voluptatem
                                            accusantium dolor laudan rem aperiam, eaque ipsa quae ab
                                            illo inventore verit.
                                        </p>
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>
                                            <a href="#">john doe</a>
                                        </h2>
                                        <h4>washington</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default ClientSay;
