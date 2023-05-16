import { Col } from "react-bootstrap";
import "./content.css";

const Content = () => {
  return (
    <Col md={6} className="text-light pt-1 ms-4">
      {/* Heading */}
      <h1 className="mb-5">
        Access curated courses worth ₹{" "}
        <span className="cutIt">
          <span style={{ color: "white" }}>18,500</span>
        </span>{" "}
        at just <span className="text-blue">₹ 99</span> per year!
      </h1>

      {/* Key Points */}
      <section>
        <div className="my-2 d-flex gap-5 mb-4">
          <img src="assets/book.svg" alt="book" height={40} />
          <p className="fs-5 pt-1">
            <span className="text-blue">100+</span> Job relevant courses
          </p>
        </div>
        <div className="my-2 d-flex gap-5 mb-4">
          <img src="assets/clock.svg" alt="clock" height={40} />
          <p className="fs-5 pt-1">
            <span className="text-blue">20,000+ </span>Hours of content
          </p>
        </div>
        <div className="my-2 d-flex gap-5 mb-4">
          <img src="assets/live.svg" alt="live" height={40} />
          <p className="fs-5 pt-1">
            <span className="text-blue">Exclusive </span>webinar access
          </p>
        </div>
        <div className="my-2 d-flex gap-5 mb-4">
          <img src="assets/graduate.svg" alt="graduate" height={40} />
          <p className="fs-5 pt-1">
            Scholarship worth<span className="text-blue"> ₹94,500</span>
          </p>
        </div>
        <div className="my-2 d-flex gap-5 mb-4">
          <img src="assets/ads.svg" alt="ads" height={40} />
          <p className="fs-5 pt-1">
            <span className="text-blue">Ad Free </span>learning experience
          </p>
        </div>
      </section>
    </Col>
  );
};

export default Content;
