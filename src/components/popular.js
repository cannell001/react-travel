import React from "react";

const Popular = () => {
  return (
    <div>
        <section id="popular" className="section section-popular scrollspy">
            <div className="container">
                <div className="row">
                    <h4 className="center">
                        <span className="teal-text">Popular</span> Places
                    </h4>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="img/resort1.jpg" alt="" />
                                <span className="card-title">Cancun, Mexico</span>
                            </div>
                            <div className="card-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum ea deserunt officia, dicta sint perferendis.
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="img/resort2.jpg" alt="" />
                                <span className="card-title">The Bahamas</span>
                            </div>
                            <div className="card-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum ea deserunt officia, dicta sint perferendis.
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="img/resort3.jpg" alt="" />
                                <span className="card-title">Nova Scotia</span>
                            </div>
                            <div className="card-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Nostrum ea deserunt officia, dicta sint perferendis.
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular;
