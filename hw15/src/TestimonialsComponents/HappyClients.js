import React from 'react';

class HappyClients extends React.Component {
  render(){
    return(
      <section className="happy-clients container">
        <h3 className='text-left'>happy clients</h3>
        <ul className="row happy-clients-list">
          {
            this.props.dataClient.map((item, index) => {
              return(
                <li
                  key={index}
                  className="col-md-6 d-flex">

                  <div className="happy-clients-img">
                    <img
                      src={item.img}
                      alt="happy client"
                    />
                  </div>
                  <div className="happy-clients-blockquote">
                    <blockquote
                      className="icon-happy-clients icon-quote">
                      {item.blockqoute}
                    </blockquote>
                    <span>{item.name}</span>
                    <p>{item.designation}</p>
                  </div>
                </li>
              )
            })
          }

        </ul>
      </section>
    )
  }


}

export default HappyClients;