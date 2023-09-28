import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Generalenquiry = (props) => {
  const [cred, setCred] = useState({
    Firstname: "Mark",
    Lastname: "Otto",
    Tittle: "",
    country: "",
    company: "",
    add: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://50.19.98.234/gen/general", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Firstname: cred.Firstname,
        Lastname: cred.Lastname,
        Tittle: cred.Tittle,
        country: cred.country,
        company: cred.company,
        Address: cred.add,
      }),
    });
    console.log("test");
    const json = await response.json();
    console.log(json);
  };
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <Container>
        <Row>
          <Col className="generalenq ">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <h1 style={{ fontSize: "2.6em" , textAlign: "center"  }}>
                  <span className="purple"> Generalenquiry </span>
                </h1>
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    name="Firstname"
                    type="text"
                    placeholder="First name"
                    defaultValue="Mark"
                    onChange={onChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="Lastname"
                    placeholder="Last name"
                    defaultValue="Otto"
                    onChange={onChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="Tittle"
                      placeholder=""
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={onChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>country</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    name="country"
                    placeholder="City"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>company</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder="State"
                    required
                    name="company"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder="zip"
                    required
                    name="add"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required

                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Generalenquiry;
