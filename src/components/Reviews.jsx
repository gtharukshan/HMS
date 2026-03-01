import React from 'react';

const reviewsData = [
    {
        id: 1,
        name: 'Eleanor Pena',
        img: '/images/doctor1.jpg',
        rating: 5,
        text: "The level of care I received at HMS was outstanding. From the moment I walked in, the staff was incredibly welcoming and professional. The doctors took the time to explain everything clearly."
    },
    {
        id: 2,
        name: 'Robert Fox',
        img: '/images/doctor3.jpg',
        rating: 5,
        text: "I was extremely impressed with the modern facilities and the advanced technology used during my treatment. The entire process was seamless, and the medical team made me feel safe and comfortable."
    },
    {
        id: 3,
        name: 'Jacob Jones',
        img: '/images/doctor7.jpg',
        rating: 4,
        text: "Booking an appointment was very easy, and the preventive checkup package I chose was comprehensive. The doctors provided great insights into my health, although wait times could be slightly improved."
    }
];

const Reviews = () => {
    return (
        <div className="main-review" id="review">
            <section>
                <div className="review-heading">
                    <h1>Our Customers Review</h1>
                </div>

                <div className="main-inner-review">
                    <div className="review-inner-content">
                        {reviewsData.map((review) => (
                            <div className="review-box" key={review.id}>
                                <img src={review.img} alt={review.name} />
                                <h2>{review.name}</h2>
                                <div className="review-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <i
                                            key={i}
                                            className={i < review.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                                        ></i>
                                    ))}
                                </div>
                                <div className="review-text">
                                    <p>{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Reviews;
