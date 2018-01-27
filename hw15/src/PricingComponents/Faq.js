import React from 'react';

class Faq extends React.Component {
  render() {


    return (
      <section className="faq-section gray-bg">
        <div className="container">
          <h3>frequently asked questions</h3>

          <div id="faqAccordion" data-children=".faq-item">
            <div className="faq-item">
          <span className="faq-title">
            Lorem Ipsum is simply dummy text of the printing ?
          </span>
              <i className="fa fa-plus" aria-hidden="true"></i>
              <div className="">
                <p className="faq-answer">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into
                  electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
            
            <div className="faq-item" data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion2"
                 role="button"
                 aria-expanded="true"
                 aria-controls="faqAccordion2">
          <span className="faq-title">Readable content of a page when looking at its layout ?
          </span>
              <i className="fa fa-plus" aria-hidden="true"></i>
              <div id="faqAccordion2" className="collapse" role="tabpanel">
                <p className="faq-answer">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                  into
                  electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
            {/*<div className="faq-item"  data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion3" role="button"*/}
            {/*aria-expanded="true"*/}
            {/*aria-controls="faqAccordion3">*/}
            {/*<span className="faq-title">Suspendisse mattis leo non neque bibendum semper ?</span>*/}
            {/*<i className="fa fa-plus" aria-hidden="true"></i>*/}
            {/*<div id="faqAccordion3" className="collapse" role="tabpanel">*/}
            {/*<p className="faq-answer">*/}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and*/}
            {/*scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap*/}
            {/*into*/}
            {/*electronic typesetting, remaining essentially unchanged.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="faq-item"  data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion4" role="button"*/}
            {/*aria-expanded="true"*/}
            {/*aria-controls="faqAccordion4">*/}
            {/*<span className="faq-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>*/}
            {/*<i className="fa fa-plus" aria-hidden="true"></i>*/}
            {/*<div id="faqAccordion4" className="collapse" role="tabpanel">*/}
            {/*<p className="faq-answer">*/}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and*/}
            {/*scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap*/}
            {/*into*/}
            {/*electronic typesetting, remaining essentially unchanged.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="faq-item"  data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion5" role="button"*/}
            {/*aria-expanded="true"*/}
            {/*aria-controls="faqAccordion5">*/}
            {/*<span className="faq-title">Mauris dictum purus ac dui efficitur, sed interdum ligula blandit ?</span>*/}
            {/*<i className="fa fa-plus" aria-hidden="true"></i>*/}
            {/*<div id="faqAccordion5" className="collapse" role="tabpanel">*/}
            {/*<p className="faq-answer">*/}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and*/}
            {/*scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap*/}
            {/*into*/}
            {/*electronic typesetting, remaining essentially unchanged.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="faq-item"  data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion6" role="button"*/}
            {/*aria-expanded="true"*/}
            {/*aria-controls="faqAccordion6">*/}
            {/*<span className="faq-title">Phasellus eget erat aliquet, egestas odio eget, laoreet augue ?</span>*/}
            {/*<i className="fa fa-plus" aria-hidden="true"></i>*/}
            {/*<div id="faqAccordion6" className="collapse" role="tabpanel">*/}
            {/*<p className="faq-answer">*/}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and*/}
            {/*scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap*/}
            {/*into*/}
            {/*electronic typesetting, remaining essentially unchanged.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*<div className="faq-item"  data-toggle="collapse" data-parent="#faqAccordion" href="#faqAccordion7" role="button"*/}
            {/*aria-expanded="true"*/}
            {/*aria-controls="faqAccordion7">*/}
            {/*<span className="faq-title">Cras pharetra velit eu pretium viverra. ?</span>*/}
            {/*<i className="fa fa-plus" aria-hidden="true"></i>*/}
            {/*<div id="faqAccordion7" className="collapse" role="tabpanel">*/}
            {/*<p className="faq-answer">*/}
            {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the*/}
            {/*industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and*/}
            {/*scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap*/}
            {/*into*/}
            {/*electronic typesetting, remaining essentially unchanged.*/}
            {/*</p>*/}
            {/*</div>*/}
            {/*</div>*/}

          </div>
        </div>
      </section>
    );
  }
}

export default Faq;
