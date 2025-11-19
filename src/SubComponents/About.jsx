import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p className="mb-4 text-lg leading-relaxed">
We connect discerning travelers with exceptional villas and empower hosts to showcase
their properties with ease. Our platform combines thoughtful curation, dependable
support, and a seamless booking experience so every stay becomes a memorable story.
</p>


<p className="mb-4 text-base leading-relaxed">
Whether you own a stunning coastal villa or a tranquil countryside retreat, LUXURY
RENTAL helps you reach guests who value privacy, comfort, and unforgettable
experiences. We take care of the details so hosts can focus on hospitality and guests
can focus on making memories.
</p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
