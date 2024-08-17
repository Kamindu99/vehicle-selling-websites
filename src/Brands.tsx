import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brands = () => {
    // Optional: Customize the carousel options
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true, // Enables autoplay
        autoplayTimeout: 3000, // 3 seconds delay between slides
        autoplayHoverPause: true, // Pause on hover
        autoplaySpeed: 1000, // Transition speed (1 second)
        animateOut: 'fadeOut', // Transition effect
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    };

    return (
        <section id="brand" className="brand">
            <div className="container">
                <div className="brand-area">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br1.png" alt="brand-image" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br2.png" alt="brand-image" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br3.png" alt="brand-image" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br4.png" alt="brand-image" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br5.png" alt="brand-image" />
                            </a>
                        </div>
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/brand/br6.png" alt="brand-image" />
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default Brands;
