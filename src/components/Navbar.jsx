import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="https://www.freeiconspng.com/img/49323"
            title="Image from freeiconspng.com"
          >
            <img
              src="https://www.freeiconspng.com/uploads/nike-logo-icon-hd-transparent-2.png"
              width="75"
              alt="Nike Logo Icon hd transparent"
            />
            <svg
              className="bi"
              width={40}
              height={32}
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 text-black ">
              HOME
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-black">
              LOCATION
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-black">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-black">
              CONTACT
            </a>
          </li>
        </ul>
        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-danger">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
