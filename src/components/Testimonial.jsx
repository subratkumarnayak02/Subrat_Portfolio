import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>
      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Your teaching skills are so good."}
        />
        <TestimonialCard
          name={"Manisha"}
          feedback={"Really amazing portfolio"}
        />
        <TestimonialCard
          name={"Suresh"}
          feedback={"Wow, nice work done. Looks very cool..."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
