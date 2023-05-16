import "./App.css";
import { Container, Row } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import SubcriptionForm from "./components/SubcriptionForm";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-4 pt-3 justify-content-between">
          <Content />
          <SubcriptionForm />
        </Row>
      </Container>
    </>
  );
}

export default App;
