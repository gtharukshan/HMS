import React from 'react';

const Services = () => {
    const servicesData = [
        {
            icon: "fa-solid fa-truck-medical",
            title: "Emergency Care",
            desc: "Our Emergency Care unit operates round the clock to handle all critical and life-threatening situations. With a highly trained team, we ensure swift and accurate medical intervention."
        },
        {
            icon: "fa-regular fa-hospital",
            title: "Diagnostic Services",
            desc: "Our hospital is equipped with cutting-edge diagnostic tools, delivering precise and reliable results to aid in accurate diagnosis and effective treatment planning."
        },
        {
            icon: "fa-regular fa-heart",
            title: "Preventive Checkups",
            desc: "Stay ahead of potential health risks with our tailored preventive health checkup packages. These packages include assessments for lifestyle diseases and cardiac health."
        },
        {
            icon: "fa-solid fa-notes-medical",
            title: "Inpatient & Outpatient",
            desc: "Whether you need extended hospital care or a quick consultation, our inpatient and outpatient services are designed to meet your needs with a focus on holistic recovery."
        },
        {
            icon: "fa-solid fa-list-check",
            title: "Specialized Consultations",
            desc: "Our panel of experienced specialists covers a wide range of medical fields, including cardiology, orthopedics, neurology, pediatrics, and more."
        },
        {
            icon: "fa-solid fa-user-doctor",
            title: "Surgical Services",
            desc: "From minimally invasive surgeries to major operations, we prioritize patient safety, precision, and faster recovery times supported by advanced technology."
        }
    ];

    return (
        <div className="our-service" id="service">
            <div className="service-heading">
                <h2>Our Services</h2>
            </div>

            <div className="main-services">
                {servicesData.map((srv, index) => (
                    <div className="inner-services" key={index}>
                        <div className="service-icon">
                            <i className={srv.icon}></i>
                        </div>
                        <h3>{srv.title}</h3>
                        <p>{srv.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
