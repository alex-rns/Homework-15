import React from 'react';
import { Link} from 'react-router-dom'

const MainServices = () => {

  const servicesList = [
    {
      title: 'business consultation',
      iconClassName: 'icon-business-consultation',
      content: 'Many variations of passages of Lorem available, but the majority have suffered alteration in some form, by injected humour,'
    },
    {
      title: 'boost local business',
      iconClassName: 'icon-boost-local-business',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.'
    },
    {
      title: 'accounting',
      iconClassName: 'icon-accounting',
      content: 'professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.'
    }
  ];

  return (
    <section className="services-section">
      <h3>Services</h3>
      <div className="container">
        <div className="row">

          {
            servicesList.map((item, index) => {
              return (
                <Link
                  key={index}
                  to="/industry"
                  className={'col-md-4 services-item icon-services ' + item.iconClassName}>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className="text-center">
        <Link className="button-main button-main-margin" to="/industry">Full Services</Link>
      </div>
    </section>
  )

};

export default MainServices;