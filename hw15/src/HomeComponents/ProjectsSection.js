import React from 'react';

const ProjectsSection = () => {
  return(
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="container projects-wrapper">
        <div className="row">

          <div className="col-lg-4 card border-0">
            <a href="industry.html" className="button-main button-card">Banking</a>
            <img className="card-img-top card-project" src="images/project-card.png"
                 alt="Card"/>

            <div className="card-block card-block-accent">
              <a href="industry.html">
                <h5>Project Heading</h5>
              </a>
              <p className="card-text">Popularised in the 1960s with the release
                Letraset sheets containing Lorem.</p>
            </div>
          </div>

          <div id="projectCarousel"
               className="project-carousel col-lg-8 card-slider card border-0">

            <div className="project-slider-item">
              <a href="industry.html" className="button-main button-card">Real Estate</a>
              <img className="card-img-top" src="images/project-slider-img.png"
                   alt="Slider"/>

              <div className="card-block bg-white">
                <a href="industry.html">
                  <h5>Project Heading</h5>
                </a>
                <p className="card-text">Popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a
                  page when.</p>
              </div>
            </div>

            <div className="project-slider-item">
              <a href="industry.html" className="button-main button-card">Real Estate</a>
              <img className="card-img-top" src="images/project-slider-img.png"
                   alt="Slider"/>

              <div className="card-block bg-white">
                <a href="industry.html">
                  <h5>Project Heading</h5>
                </a>
                <p className="card-text">Popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a
                  page when.</p>
              </div>
            </div>

            <div className="project-slider-item">
              <a href="industry.html" className="button-main button-card">Real Estate</a>
              <img className="card-img-top" src="images/banner.png" alt="Slider"/>

              <div className="card-block bg-white">
                <a href="industry.html">
                  <h5>Project Heading</h5>
                </a>
                <p className="card-text">Popularised in the 1960s with the release of
                  Letraset sheets containing
                  Lorem Ipsum
                  passages. fact that a reader will be distracted by the readable of a
                  page when.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <a className="button-main button-main-margin" href="industry.html">Full Projects</a>
      </div>
    </section>
  )
};

export default ProjectsSection;