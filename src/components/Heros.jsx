import React from "react";

const Heros = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center ">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-1 fw-bold lh-1 text-body-emphasis">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="lead">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 me-md-2 fw-bold"
            >
              Shop now
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Category
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1  overflow-hidden ">
          <img
            className="https://www.divi-pixel.com/wp-content/uploads/2023/01/parallax-shoe.png"
            src="https://www.divi-pixel.com/wp-content/uploads/2023/01/parallax-shoe.png"
            alt
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Heros;
