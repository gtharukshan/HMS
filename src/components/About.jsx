import React from 'react';

const About = () => {
    return (
        <div className="main-about" id="about">
            <div className="about-heading">About Us</div>

            <div className="inner-main-about">
                <div className="about-inner-content-left">
                    {/* Typically image area */}
                </div>

                <div className="about-inner-content">
                    <div className="about-right-content">
                        <h2>"Your Trusted Partner in Health and Wellness."</h2>
                        <p>
                            Welcome to HMS, a comprehensive Hospital Management System designed to streamline healthcare services.
                            Our platform bridges the gap between patients, medical staff, and administrators, ensuring seamless
                            communication and efficient care delivery.
                        </p>
                        <p className="aboutsec-content">
                            We provide world-class facilities for treatments and patient care. We are among the most qualified
                            health providers with years of highly-trained staff and modern technologies.
                        </p>
                        <button className="aboutbtn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
