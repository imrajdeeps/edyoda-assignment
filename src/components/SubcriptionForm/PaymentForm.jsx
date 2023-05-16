import { Fragment, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { mockData } from "./mockdata";
import "./SubscriptionForm.css";
import Button from "../Button";

function PaymentForm() {
  const [plan, setPlan] = useState(179);
  const [price, setPrice] = useState(149);

  const handlePlanChange = (event) => {
    setPlan(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected Plan: ${plan}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="formPlan">
        <h6
          className="text-center d-block fw-bold my-3"
          style={{ fontSize: "1.1rem" }}
        >
          Select your subscription plan
        </h6>

        {/* Plan List */}
        {mockData.map(
          ({ name, id, flag, pricePerMonth, totalPrice, actualCost, text }) => (
            <Fragment key={name + id}>
              {/*------ Tag ------ */}
              {flag && (
                <span
                  className="text-light flag"
                  style={{
                    background: `${name === "expired" ? "#F77171" : "#47BA68"}`,
                  }}
                >
                  {flag}
                </span>
              )}

              {/*------ Input-Box ------ */}
              <div
                className={`radioInputBox ${
                  plan === totalPrice && name !== "expired" ? "recommend" : ""
                } ${name === "expired" ? "expirePlan" : ""}`}
                onClick={() => {
                  if (name !== "expired") {
                    setPrice(actualCost);
                    setPlan(totalPrice);
                  }
                }}
              >
                <Form.Check
                  className="fw-bold"
                  disabled={name === "expired"}
                  type="radio"
                  label={text}
                  name={name}
                  id={id}
                  value={totalPrice}
                  checked={plan === totalPrice && name !== "expired"}
                  onChange={handlePlanChange}
                />

                {/*------ Total ------ */}
                <p
                  className="d-flex flex-column m-0"
                  style={{ fontSize: "0.70rem" }}
                >
                  <span>
                    <span style={{ fontSize: "0.6rem" }} className="text-muted">
                      Total{" "}
                    </span>
                    <span className="fw-bold">&#8377;{totalPrice}</span>
                  </span>
                  <span style={{ fontSize: "0.6rem" }} className="ms-auto">
                    &#8377;{pricePerMonth}{" "}
                    <span className="text-muted" style={{ fontSize: "0.5rem" }}>
                      /mo
                    </span>
                  </span>
                </p>
              </div>
            </Fragment>
          )
        )}

        {/*------ Subscription-Details ------ */}
        <hr />
        <p className="subscription m-0">
          <span>Subscription Fee </span> <span>&#8377;18,500</span>
        </p>
        <img src="assets/subscription.svg" alt="image" className="col-12" />

        <p className="subscription">
          <span>
            <span className="fw-bold">Total </span>(Incl. of 18% GST)
          </span>
          <span className="fw-bold fs-6">&#8377;{price}</span>
        </p>

        {/* ------- Buttons ------- */}
        <div className="d-flex gap-1">
          <Button text="CANCEL" classes={"cancelBtn col col-md-6"} />
          <button
            value="PROCEED TO PAY"
            className={"confirmBtn col col-md-6"}
            onClick={() => alert("Payment Successful!")}
          />
        </div>

        <img src="assets/razor.svg" alt="razorPay" height={60} />
      </Form.Group>
    </Form>
  );
}

export default PaymentForm;
