import React from "react";

const Search = () => {
  return (
    <div>
        <section
            id="search"
            className="section section-search teal darken-1 white-text center scrollspy"
        >
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3>Search Destinations</h3>
                        <div className="input-field">
                            <input
                                type="text"
                                className="white grey-text autocomplete"
                                id="autocomplete-input"
                                placeholder="Aruba, Cancun, etc..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section-icons grey lighten-4 center">
            <div className="container">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card-panel">
                            <i className="material-icons large teal-text">room</i>
                            <h4>Pick Where</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Accusamus, tempore?
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card-panel">
                            <i className="material-icons large teal-text">store</i>
                            <h4>Travel Shop</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Accusamus, tempore?
                            </p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="card-panel">
                            <i className="material-icons large teal-text">
                                airplanemode_active
                            </i>
                            <h4>Fly Cheap</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Accusamus, tempore?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Search;
