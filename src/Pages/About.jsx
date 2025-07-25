import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Crazy XYZ</h2>
        <p className="about-text">
          <strong>Crazy XYZ</strong> is one of India’s most popular YouTube channels for science experiments,
          creative engineering, and jaw-dropping innovation. With over <strong>millions of subscribers</strong>, it
          has inspired a whole generation to think beyond textbooks and dive into the real-world magic of science.
        </p>

        <h3 className="about-subtitle">Meet the Creator – Amit Sharma</h3>
        <p className="about-text">
          The brain behind Crazy XYZ is <strong>Amit Sharma</strong>, an IIT Roorkee graduate who transformed his passion
          for science and engineering into viral content. Amit is known for his daring experiments, unique ideas,
          and commitment to spreading scientific curiosity among students and creators across India.
        </p>

        <h3 className="about-subtitle">Introducing Crazinos – Science Kits for Future Scientists</h3>
        <p className="about-text">
          To make science even more accessible, Crazy XYZ launched <strong>Crazinos</strong> – a line of exciting,
          hands-on DIY science kits for kids and teens. These kits are packed with mind-blowing experiments,
          safe materials, and clear instructions — perfect for sparking curiosity in the next generation
          of innovators and scientists.
        </p>

        <p className="about-text">
          Whether you're a student, parent, or science lover — <strong>Crazinos</strong> is your gateway to
          explore, learn, and have fun with science at home.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
