import React from 'react';

class IndustryContent extends React.Component {

  render() {

    const industryCards= [
      {
        img: "images/industry-business.png",
        title: "Business",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-education.png",
        title: "Education",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-technology.png",
        title: "Technology",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-real-estate.png",
        title: "real estate",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-telecommunication.png",
        title: "Telecommunication",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-banking-financial.png",
        title: "Banking & financial",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-law.png",
        title: "Law",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },
      {
        img: "images/industry-construction.png",
        title: "Construction",
        text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search"
      },

    ];

    return (
      <section className="choose-industry-section">
        <div className="container">
          <h3 className="text-left">choose your industry</h3>
          <ul className="row industry-card-list">

            {
              industryCards.map((item, index) =>{
                return(
                  <li key={index} className="col-md-6">
                    <div className="industry-card">
                      <div className="industry-card-img">
                        <img
                          src={item.img}
                          alt={item.title + "-card"}/>
                      </div>
                      <div className="industry-card-info">
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                        <button className="button-main button-industry">Choose your service</button>
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

export default IndustryContent;