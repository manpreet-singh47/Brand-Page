import React from "react";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5 hero">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 hero-container">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://www.divi-pixel.com/wp-content/uploads/2023/01/parallax-shoe.png"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            height={400}
            width={400}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-2 fw-bold text-body-emphasis 1h-1 mb-3 ">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="lead">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 me-md-2"
            >
              Shop Now
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Category
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Hero;
