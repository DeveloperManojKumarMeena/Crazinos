import React from "react";
import "./ProjectSection.css";

const projectList = [
  {
    title: "Volcano Eruption",
    image:
      "https://i.postimg.cc/25bXssK7/tetiana-grypachevska-80x3-QULJDN4-unsplash.jpg",
    description:
      "Witness a real bubbling volcano using baking soda, citric acid, and volcano moulds.",
  },
  {
    title: "Crystal Growing",
    image:
      "https://i.postimg.cc/d1mMXMhS/dominik-scythe-n-Uyls-EYg-Oa-A-unsplash.jpg",
    description:
      "Grow sparkly crystals using crystal powder and create your own crystal garden!",
  },
  {
    title: "pH Testing Lab",
    image:
      "https://i.postimg.cc/HxCCrdJB/ph.jpg",
    description:
      "Test household liquids with litmus and pH papers to explore acidity and alkalinity.",
  },
  {
    title: "Color Mixing Magic",
    image:
      "https://i.postimg.cc/4N3R78dk/download.jpg",
    description:
      "Mix food colors and corn starch to learn about primary and secondary color blending.",
  },
  {
    title: "Soap Making Fun",
    image:
      "https://i.postimg.cc/t4ZTPRTj/shop.webp",
    description:
      "Make colorful and scented soaps using glycerin bars, molds, and food essence.",
  },
  {
    title: "Electric Circuit",
    image:
      "https://i.postimg.cc/D0SVDZRf/header-electric-circuit.webp",
    description:
      "Build a basic circuit using motor, fan, LED, and battery – learn how electricity works!",
  },
];

const Projects = () => {
  return (
    <section className="project-section">
      <h2 className="section-title">Exciting Science Projects</h2>
      <p className="section-subtitle">
        Explore these fun DIY experiments using your Mega Science Kit!
      </p>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;