import test1 from "../images/test1.png";
import test2 from "../images/test2.png";
import test3 from "../images/test3.png";
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import logo3 from "../images/logo3.png";
import logo4 from "../images/logo4.svg";
import logo5 from "../images/logo5.svg";
import logo6 from "../images/logo6.svg";
import logo7 from "../images/logo7.svg";
import logo8 from "../images/logo8.svg";

const Section5 = () => {
  const testimonials = [
    {
      name: "Justin Modrak",
      company: 'Technology Coordinator East Troy Community School District',
      message:
        "Hexnode is of great value. Works great with Android and iOS!",
      image: test1,
    },
    {
      name: "Dalibor Kruljac",
      company: "KAMELEYA LTD",
      message:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      image: test2,
    },
    {
      name: "Dalibor",
      company: "KAMELEYA LTD",
      message:
        "It seemed to be in-line with everything we were looking at.",
      image: test3,
    },
  ];

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <div className="section5 py-4">
      <h2 className="text-center mt-5 pb-4">What our customers say</h2>

      <div className="container py-4">
        <div
          id="testimonialsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="row">
                  <div className="col-md-4 text-center p-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="img-fluid"
                      style={{ width: "320px", height: "290px" }}
                    />
                  </div>
                  <div className="col-md-8 p-0 slider-content">
                    <div style={{ background: "#f7f7f7", padding:"28px  0px 34px 28px" }}>
                      <h4 className="fs-5 fst-italic pb-5 m-0">"{testimonial.message}"</h4>
                    </div>
                    <div style={{ background: "#eaebeb", padding: "57px 0px 10px 30px" }}>
                      <h5 className="fw-bold">{testimonial.name}</h5>
                      <span className="text-muted">{testimonial.company}</span><br />
                      <span className="text-muted">{testimonial.company1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="logo-carousel">
        <div className="logo-track">
          {logos.concat(logos).map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
