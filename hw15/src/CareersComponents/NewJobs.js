import React from 'react';

class NewJobs extends React.Component {
  render() {

    const newJob = [
      {
        vacancy: "accountant manager",
        employment: "fool time",
        location: "San francisco"
      },

      {
        vacancy: "Computer & information systam manager",
        employment: "half time",
        location: "San francisco2"
      },

      {
        vacancy: "sales executive",
        employment: "fool time",
        location: "San francisco3"
      },

      {
        vacancy: "education consultants",
        employment: "fuck time",
        location: "San francisco4"
      }
    ];


    return (
      <section className="new-jobs-section container">
        <h3 className="text-left">new jobs</h3>
        <ul className="new-jobs-list">

          {
            newJob.map((item, index) => {
              return (
                <li key={index} className="new-jobs-item row">
                  <div className="col-sm-6">
                    <span>{item.vacancy}</span>
                    <p>{item.employment}</p>
                  </div>
                  <div className="col-sm-6 row justify-content-between align-items-center">
                    <div className="new-jobs-location row align-items-center">
                      <i className="icon-location-pin"></i>
                      <span>location :</span>
                      <p>{item.location}</p>
                    </div>
                    <button className="button-main">apply now</button>
                  </div>
                </li>
              )
            })
          }

        </ul>

        <form className="form-default form-new-jobs row">

          <label className="col-md-4">
            <input type="text" placeholder="first Name"/>
          </label>

          <label className="col-md-4">
            <input type="text" placeholder="Last Name"/>
          </label>

          <label className="col-md-4">
            <input type="email" placeholder="email"/>
          </label>

          <label className="col-md-4">
            <input type="tel" placeholder="Phone number"/>
          </label>

          <label className="col-md-4">
            <input type="text" placeholder="Location (City)"/>
          </label>

          <label className="col-md-4">
            <input placeholder="Resume/CV"/>
            <input type="file"/>
          </label>

          <label className="col-12">
            <textarea rows="7" placeholder="Write your self / copy paste your Resume"></textarea>
          </label>
          <div className="col-12">
            <button className="button-main" type="submit">Submit application</button>
          </div>
        </form>

      </section>
    );
  }
}

export default NewJobs;
