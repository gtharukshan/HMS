import React from 'react';

const doctorData = [
    { name: 'Dr. Sandeep Vaishya', img: '/images/doctor1.jpg' },
    { name: 'Dr. Naresh Trehan', img: '/images/doctor3.jpg' },
    { name: 'Dr. Ami Shah', img: '/images/doctor4.webp' },
    { name: 'Dr. Mani Naghibi', img: '/images/doctor5.webp' },
    { name: 'Dr. Arthur Reese Abright', img: '/images/doctor6.jpg' },
    { name: 'Dr. Elizabeth J. Mahler', img: '/images/doctor7.jpg' },
    { name: 'Dr. Fouad. M', img: '/images/doctor8.avif' },
    { name: 'Dr. Syma Iqbal', img: '/images/doctor9.jpg' },
    { name: 'Dr. Khalid Abbed', img: '/images/doctor2.jpg' },
];

const Doctors = () => {
    return (
        <div className="main-doctors" id="doctors">
            <div className="doctors-heading">
                <h2>Our Doctors</h2>
            </div>

            <div className="main-inner-doctor">
                {doctorData.map((doc, index) => (
                    <div className="doc-poster" key={index}>
                        <div className="doc-icons">
                            <i className="fa-solid fa-share"></i>
                            <i className="fa-solid fa-eye"></i>
                            <i className="fa-solid fa-heart"></i>
                        </div>
                        <img src={doc.img} alt={doc.name} />

                        <div className="doc-details">
                            <h2>{doc.name}</h2>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
