import React from 'react';

class WriteToUs extends React.Component {
  render() {
    return(
      <section className="write-to-us-section gray-bg">
        <h3 className="text-center">write to us</h3>
        <div className="container">
          <form className="form-default form-contact-us row">

            <label className="col-sm-6">
              <input type="text" placeholder="name"/>
            </label>

            <label className="col-sm-6">
              <input type="email" placeholder="email"/>
            </label>

            <label className="col-sm-6">
              <input type="tel" placeholder="phone"/>
            </label>
            <label className="col-sm-6">
              <select>
                <option disabled selected>service</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
                <option value="technology">technology</option>
                <option value="real-estate">real estate</option>
                <option value="telecommunication">telecommunication</option>
                <option value="banking-financial">banking & financial</option>
                <option value="Law">Law</option>
                <option value="Construction">Construction</option>
              </select>
            </label>
            <label className="col-12">
              <textarea rows="6" placeholder="Comment"></textarea>
            </label>
            <button className="button-main m-auto" type="submit">submit now</button>
          </form>

        </div>
      </section>
    )
  }
}

export default WriteToUs;