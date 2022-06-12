import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container">
            <Link class="navbar-brand fw-bold fs-4" to={"/"}>
              <img src="https://tse3.mm.bing.net/th?id=OIP.8NGxjoamFPomSTDFDF1LeQHaHa&pid=Api&P=0&w=187&h=187" style={{height:"60px",width:"60px"}} alt="myntralogo"/>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to={'/'}>
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    New
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                  Studio
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/"}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="buttons">
                <Link to={"/"} className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>Login
                </Link>
                <Link to={"/"} className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Link>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
