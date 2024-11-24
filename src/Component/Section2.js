import React from "react";
import main from "../images/main.png.svg";

const Section2 = () => {
  return (
    <div className="why-hexnode-container">
      <h2 className="why-hexnode-title mt-4">Why Hexnode?</h2>
      <div className="container">
        <div className="why-hexnode-grid row">
          <div class="col-12 col-sm-5">
            <div class="feature-card">
              <div class="cont-icon">
                <div class="icon">🔧</div>
                <h4 class="feature-title">Adapt to the new normal</h4>
              </div>
              <p class="feature-description">
                Hybrid, remote or onsite, you can trust Hexnode UEM to deliver.
                Create policies that cater to your organization’s protocols.
                Whether it be BYOD, COPE, or platform limited, Hexnode can
                manage it all.
              </p>
              <a href="#" class="feature-link">
                Try Hexnode on your endpoints
              </a>
            </div>

            <div className="feature-card">
              <div className="cont-icon">
                <div className="icon">🔒</div>
                <h3 className="feature-title">Get more done with automation</h3>
              </div>
              <p className="feature-description">
                Hexnode UEM automation features help free up IT’s time spent on
                mundane and repetitive tasks. Do hours’ worth of work in a few
                minutes.
              </p>
              <a href="#" class="feature-link">
                Try Hexnode on your endpoints
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-2">
            <img src={main} alt="main" />
          </div>
          <div class="col-12 col-sm-5">
            <div className="feature-card">
              <div className="cont-icon">
                <div className="icon">⚙️</div>
                <h3 className="feature-title">Zero compromise security</h3>
              </div>
              <p className="feature-description">
                Enable full-fledged device encryption, data loss prevention, and
                all-rounded device security with Hexnode UEM. Be at the bleeding
                edge of device security without any compromises.
              </p>
              <a href="#" class="feature-link">
                Try Hexnode on your endpoints
              </a>
            </div>

            <div className="feature-card">
              <div className="cont-icon">
                <div className="icon">📋</div>
                <h3 className="feature-title">Unified Policy Management</h3>
              </div>
              <p className="feature-description">
                Create a single policy through Hexnode and apply it on all the
                devices in your organization. Any platform or form factor,
                achive single pane of glass management with Hexnode.
              </p>
              <a href="#" class="feature-link">
                Try Hexnode on your endpoints
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
