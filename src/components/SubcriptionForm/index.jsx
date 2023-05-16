import Card from "react-bootstrap/Card";
import PaymentForm from "./PaymentForm";

function SubcriptionForm() {
  return (
    <Card className="col col-md-4">
      <div className="d-flex justify-content-around mt-4">
        <p className="d-flex flex-column m-0">
          <img src="assets/button1.svg" height={27} />
          <span style={{ fontSize: "0.75rem" }}>Sign Up</span>
        </p>
        <p className="d-flex flex-column m-0">
          <img src="assets/button2.svg" height={27} />
          <span style={{ fontSize: "0.75rem" }}>Subscribe</span>
        </p>
      </div>

      <PaymentForm />
    </Card>
  );
}

export default SubcriptionForm;
