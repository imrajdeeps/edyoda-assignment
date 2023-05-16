import { Col, Container, Row } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import "./navbar.css";
import Button from "../Button";

export default function Navbar() {
  return (
    <div className="navBar">
      <Container>
        <Row className="py-2 justify-content-between">
          <Col md={6}>
            <img
              src="assets/logo.svg"
              alt="logo"
              height={20}
              className="me-4"
            />

            <Button
              classes="btn btn-text"
              text="Courses"
              icon={<RiArrowDropDownLine />}
            />

            <Button
              classes="btn btn-text"
              text="Programs"
              icon={<RiArrowDropDownLine />}
            />
          </Col>
          <Col md={6} className="d-flex">
            <div className="ms-auto">
              <Button classes="btn" icon={<AiOutlineSearch />} />
              <Button classes="btn btn-text mx-4" text="Log In" />
              <Button classes="btn btn-primary" text="JOIN NOW" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
