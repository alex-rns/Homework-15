import React from 'react';

class Faq extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    }
  }

  toggleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  };

  render() {

    let FaqContent;
    let Plus = "plus";
    if (this.state.isOpened) {
      FaqContent = (
        <div>
          <p  className="faq-answer">{this.props.dataItem.answer}
          </p>
        </div>
      );
      Plus = "minus";
    }

    return (
        <div
             key={this.props.dataIndex}
             onClick={this.toggleClick}
             className="faq-item">

          <span
            className="faq-title">
            {this.props.dataItem.question}
          </span>

          <i
            className={"fa fa-" + Plus} aria-hidden="true">
          </i>

          {FaqContent}

        </div>

    );
  }
}

export default Faq;
