import React from 'react';

class AboutUsCard extends React.Component {

  render() {

    const aboutUsCards= [
      {
        img: "images/about-us-page-our-team.png",
        title: "Our team",
        text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        buttonText: "Our team"
      },
      {
        img: "images/about-us-page-careers.png",
        title: "Careers",
        text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        buttonText: "Join team"
      },
      {
        img: "images/about-us-page-services.png",
        title: "Sevices",
        text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        buttonText: "Full Sevices"
      }
    ];

    return (
      <section className="about-us-page-card text-center">
        <div className="container">
          <ul className="row">

            {
              aboutUsCards.map((item, index) =>{
                return(
                  <li key={index} className="col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={item.img}
                        alt="Card img"
                      />
                      <div className="card-block">
                        <h4 className="card-title">{item.title}</h4>
                        <p className="card-text">{item.text}</p>
                        <a href="" className="button-main">{item.buttonText}</a>
                      </div>
                    </div>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </section>
    )
  }
}

export default AboutUsCard;