import React, { useState } from "react";
import row1 from "../images/row1.png";
import row2 from "../images/row2.png";
import row3 from "../images/row3.png";
import row4 from "../images/row4.png";
import row5 from "../images/row5.png";
import row6 from "../images/row6.png";

const Section4 = () => {
  const items = [
    {
      id: 1,
      title: "Android",
      content:
        "Remotely deploy, manage, monitor, and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      image: row1,
      foot: "Try Hexnode on your endpoints",
    },
    {
      id: 2,
      title: "iOS",
      content:
        "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
      image: row2,
      foot: "Try Hexnode on your endpoints",
    },
    {
      id: 3,
      title: "macOS",
      content:
        "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
      image: row3,
      foot: "Try Hexnode on your endpoints",
    },
    {
      id: 4,
      title: "Windows",
      content:
        "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
      image: row4,
      foot: "Try Hexnode on your endpoints",
    },
    {
      id: 5,
      title: "tvOS",
      content:
        "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
      image: row5,
      foot: "Try Hexnode on your endpoints",
    },
    {
      id: 6,
      title: "FireOS",
      content:
        "Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single console.",
      image: row6,
      foot: "Try Hexnode on your endpoints",
    },
  ];

  const [activeRow, setActiveRow] = useState(1);

  const toggleRow = (id) => {
    setActiveRow((prev) => (prev === id ? null : id));
  };

  const activeImage = activeRow
    ? items.find((item) => item.id === activeRow).image
    : row1;

  return (
    <div className="interactive-container">
      <h2 className="text-center mb-4">Multi-platform Endpoint Management</h2>
      <p className="text-center">
        Devices of varying platforms? Hexnode thrives in a diverse environment.
      </p>
      <div className="row align-items-start">
        <div className="col-12 col-sm-2"></div>
        <div className="col-12 col-sm-4">
          <div className="image-container">
            <img
              src={activeImage}
              alt="Platform"
              width="600"
              height="565"
              className="img-fluid transition-image"
            />
          </div>
        </div>
        <div className="col-12 col-sm-5">
          <div className="feature-list">
            {items.map((item) => (
              <div
                key={item.id}
                className={`feature-row ${
                  activeRow === item.id ? "active" : ""
                }`}
                onClick={() => toggleRow(item.id)}
                style={{
                  pointerEvents: activeRow === item.id ? "none" : "auto", 
                  cursor: activeRow === item.id ? "default" : "pointer",
                }}
              >
                <div className="feature-title">{item.title}</div>
                <div
                  className={`feature-content ${
                    activeRow === item.id ? "expanded" : ""
                  }`}
                >
                  {item.content} <br />
                  <br />
                  <span style={{ color: "rgb(221 7 53)" }}>{item.foot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Section4;
