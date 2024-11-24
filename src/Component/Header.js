import React from "react";
import idle from "../images/idle.png";

const Header = () => {
  return (
    <div className="header-section py-4">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-md-4 border-ending">
            <div className="content">
                <img
                  src={idle}
                  alt="IDC Logo"
                  className="mb-3"
                  width="83"
                  height="25"
                />
              <p>
                Hexnode is listed as a leader and a major player in IDC
                MarketScape UEM Vendors Assessment Reports 2024.
              </p>
            </div>
          </div>
          <div className="col-md-4 border-ending">
            <div className="content">
              <h4 className="mb-2">Gartner</h4>
              <p>
                Hexnode mentioned as a Notable Vendor in Midmarket Context:
                Magic Quadrant for Unified Endpoint Management tools 2022.
              </p>
            </div>
          </div>
          <div className="col-md-4" style={{textAlign:"left"}}>
            <div className="content">
              <h4 className="mb-2">Forrester</h4>
              <p>
                Forrester includes Hexnode as a Notable vendor in The Unified
                Endpoint Management Landscape, Q3 2023.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
