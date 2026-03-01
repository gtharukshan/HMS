import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer">
            <div
                className="footer-inner"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '3rem'
                }}
            >
                <div className="footer-content" style={{ maxWidth: '600px' }}>
                    <h1>About HMS</h1>
                    <p style={{ fontSize: '1.6rem', lineHeight: '1.8', color: '#aeb4d1' }}>
                        Thank you for choosing HMS Hospital. We are dedicated to providing
                        world-class medical facilities and compassionate care. Your health,
                        safety, and well-being are our highest priorities.
                    </p>
                </div>

                <div className="footer-content" style={{ maxWidth: '600px' }}>
                    <h1>Contact Information</h1>
                    <div className="link" style={{ color: '#aeb4d1', lineHeight: '2.5' }}>
                        <p style={{ fontSize: '1.6rem', margin: '0.5rem 0' }}>
                            <i className="fa-solid fa-location-dot" style={{ marginRight: '1rem', color: 'var(--primary)' }}></i>
                            No-56, Maria bazzar Lindula, Nuwara Eliya
                        </p>
                        <p style={{ fontSize: '1.6rem', margin: '0.5rem 0' }}>
                            <i className="fa-solid fa-phone" style={{ marginRight: '1rem', color: 'var(--primary)' }}></i>
                            0760355773
                        </p>
                        <p style={{ fontSize: '1.6rem', margin: '0.5rem 0' }}>
                            <i className="fa-solid fa-envelope" style={{ marginRight: '1rem', color: 'var(--primary)' }}></i>
                            gtharukshan@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
