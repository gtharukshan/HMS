import React from 'react';

const Hero = () => {
    return (
        <div className="main-home" id="home">
            <div className="home">
                <div className="home-left-content">
                    <span><br />welcome to HMS Healthcare</span>
                    <h2>"Smart healthcare<br />solutions for a modern world."</h2>
                    <p className="note">
                        We're delighted to have you here. At HMS, we prioritize your health and well-being by providing
                        seamless and efficient healthcare management. Our dedicated team is here to ensure that your experience is
                        smooth, supportive, and centered around you.
                    </p>

                    <div className="home-btn">
                        <a href="#read">Explore More</a>
                        <a className="homebtnsec" href="#appointment">Start Check-up</a>
                    </div>
                </div>

                <div className="home-right-content">
                    <img src="/images/hero2.png" alt="Hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
