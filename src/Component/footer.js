import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section py-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-sm-auto text-center text-sm-start mb-3 mb-sm-0">
            <div className="footer-links">
              <a href="#terms" className="footer-link">Terms of Use</a>
              <span> - </span>
              <a href="#privacy" className="footer-link">Privacy</a>
              <span> - </span>
              <a href="#cookies" className="footer-link">Cookies</a>
            </div>
          </div>
          <div className="col-12 col-sm-auto text-center text-sm-end">
            <div className="footer-copyright">
              <p className="m-0">Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
