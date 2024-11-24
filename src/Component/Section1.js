import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '../images/banner.png';

const FirstSection = () => {
  return (
    <section className="first-section bg-dark1 text-white">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <h5 className="text-secondary">
            Unified Endpoint Management
            </h5>
            <h1 className="display-5 fw-bold">
              Gain control and visibility over your endpoints
            </h1>
            <p className="lead">
              Hexnode's UEM solution allows you to simplify endpoint management
              and free up IT. Focus on the big picture while Hexnode works on
              the details.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Email"
              />
              <button className="btn btn-danger">LET'S TRY IT OUT!</button>
            </form>
          </div>
          <div className="col-md-6 text-center position-relative">
            <img
              src={banner}
              alt="Person working on laptop"
              className="img-fluid rounded"
            />
            <div className="hide-sec">
            <div className="custom-button btn-yellow position-absolute top-2 start-32 translate-middle">
              <span>✔</span><span> Password policy applied</span>
            </div>
            <div className="custom-button btn-blue position-absolute top-42 start-90 translate-middle">
              <span>✔</span><span> TvOS Kiosk Active</span>
            </div>
            <div className="custom-button btn-green position-absolute bottom-10 start-50 translate-middle">
            <span>✔</span><span>  Device Enrolled</span>
            </div>
            </div>
          </div>
        </div>
        {/* <div className="awards-section mt-5">
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="fw-bold">IDC</h5>
              <p className="text-secondary">
                Hexnode is listed as a leader and a major player in IDC
                MarketScape UEM Vendors Assessment Reports 2024.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">Gartner</h5>
              <p className="text-secondary">
                Hexnode mentioned as a Notable Vendor in Midmarket Context:
                Magic Quadrant for Unified Endpoint Management tools 2022.
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold">Forrester</h5>
              <p className="text-secondary">
                Forrester includes Hexnode as a Notable vendor in The Unified
                Endpoint Management Landscape, Q3 2023.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FirstSection;