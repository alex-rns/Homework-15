import React from 'react';

class Comments extends React.Component {
  render() {

    const data = this.props.dataComment;

    return (
      <section className="feedback-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 comment-section">

              <h3>comments</h3>
              <ul className="comment-list">

                {
                  data.map((item, index) => {
                    return(
                      <li key={index} className="comment d-flex">
                        <a href="">
                          <img className="commentator-img" src={item.img} alt="commentator-img"/>
                        </a>
                        <div className="comment-text">
                          <h6>{item.name}</h6>
                          <p>{item.text}</p>
                          <a className="button-main button-comment-reply button-small" href="">reply</a>
                        </div>
                      </li>
                    )
                  })
                }

              </ul>
            </div>

            <div className="col-lg-6 feedback-form">
              <h3>leave message</h3>
              <form className="form-default form-leave-message row">

                <label className="col-sm-6">
                  <input type="text" placeholder="name"/>
                </label>

                <label className="col-sm-6">
                  <input type="email" placeholder="email"/>
                </label>

                <label className="col-12">
                  <textarea rows="9" placeholder="Comment"></textarea>
                </label>
                <button className="button-main" type="submit">Submit comment</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
    );
  }
}

export default Comments;
