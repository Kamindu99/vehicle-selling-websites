import React, { useEffect, useState } from 'react';

import './App.css';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);


    return (
        <nav className={`navbar bootsnav navbar-scrollspy ${sticky ? 'navbar-sticky sticked' : ''}`} data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#home">carvilla<span></span></a>
                </div>
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li className="scroll active"><a href="#home">home</a></li>
                        <li className="scroll"><a href="#service">service</a></li>
                        <li className="scroll"><a href="#featured-cars">featured cars</a></li>
                        <li className="scroll"><a href="#new-cars">new cars</a></li>
                        <li className="scroll"><a href="#brand">brands</a></li>
                        <li className="scroll"><a href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
