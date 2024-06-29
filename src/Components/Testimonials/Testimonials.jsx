// src/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        text: "I used to be lost and alone. After joining The Moving Bible's volunteer program, I found purpose and a supportive community.",
        name: "Sarah",
        location: "California USA"
    },
    {
        text: "Our marriage was on the brink of collapse. Through The Moving Bible's marriage counseling program based on Christian principles, we rediscovered the love and respect for each other.",
        name: "Maria and Carlos",
        location: "Brazil, South America"
    },
    {
        text: "The Moving Bible's daily devotionals have been a guiding light in my life.",
        name: "David",
        location: "Kenya, Africa"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonialss">
            <div className="testimonial-headers">
                <h2>The Impact</h2>
                <p>Countless lives have already been touched by The Moving Bible. We've witnessed individuals embrace faith, communities flourish, and the message of Christ reach new corners of the globe.</p>
                <a href="#" className="view-more-buttons">View More</a>
            </div>
            <div className="testimonial-cardss">
                {testimonials.map((testimonial, index) => (
                    <div className="cardss" key={index}>
                        <p>{testimonial.text}</p>
                        <p><strong>{testimonial.name}</strong>, {testimonial.location}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
