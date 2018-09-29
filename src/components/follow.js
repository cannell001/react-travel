import React from "react";

const Follow = () => {
  return (
    <div>
        <section className="section section-follow teal darken-2 white-text center">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h4>Follow Travelville</h4>
                        <p>Follow us on social media for special offers</p>
                        <a href="#" className="white-text">
                            <i className="fab fa-facebook fa-4x" />
                        </a>
                        <a href="#" className="white-text">
                            <i className="fab fa-twitter fa-4x" />
                        </a>
                        <a href="#" className="white-text">
                            <i className="fab fa-linkedin fa-4x" />
                        </a>
                        <a href="#" className="white-text">
                            <i className="fab fa-google-plus fa-4x" />
                        </a>
                        <a href="#" className="white-text">
                            <i className="fab fa-pinterest fa-4x" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Follow;
