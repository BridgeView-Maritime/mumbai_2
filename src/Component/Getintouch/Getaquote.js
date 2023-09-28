import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Getaquote = (props) => {
  const [cred, setCred] = useState({
    Type: "Type",
    Numberoftanksholds: "1",
    DWT: "",
    Drydock: "",
    GRT: "",
    Insurance: "",
    Year:"",
    Quotation :"",
    value :"",
    Engine_type :"",
    Deductible : "",
    Engine_kw : "",
    Loss_required : "",
    Engine_type : "",
    Daily_hire : "",
    Cargo_gear : "",
    Basis :"",
    Port_rotation : "",
    PI_cover : "",
    Flag : "",
    fd_required : "",
    Quotation_crew : "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const response = await fetch("http://50.19.98.234/get/getqote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   
      },
      body: JSON.stringify({
        Type: cred.Type,
        Numberoftanksholds: cred.Numberoftanksholds,
        DWT: cred.DWT,
        Drydock: cred.Drydock,
        GRT: cred . GRT ,
        Insurance: cred.Insurance,
        Year:cred .Year,
        Quotation : cred .Quotation,
        value : cred .value ,
        Engine_type : cred .Engine_type,
        Deductible : cred .Deductible,
        Engine_kw : cred .Engine_kw,
        Loss_required : cred .Loss_required,
        Engine_type : cred . Engine_type ,
        Daily_hire : cred . Daily_hire ,
        Cargo_gear : cred .Cargo_gear ,
        Basis : cred .Basis ,
        Port_rotation : cred .Port_rotation ,
        PI_cover : cred .PI_cover ,
        Flag : cred .Flag ,
        fd_required : cred .fd_required ,
        Quotation_crew : cred . Quotation_crew,
      }),
    });
    console.log("test");
    const json = await response.json();
    console.log(json);
  };
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  // function Generalenquiry (){
  return (
    <>
      <Container>
        <Row>
          <Col className="getqote ">
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <h1 style={{ fontSize: "2.6em" , textAlign: "center"  }}>
                  <span className="purple"> Get a Quote  </span>
                </h1>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    required
                    name="Type"
                    type="text"
                    placeholder="First name"
                    defaultValue="Bulk carrier"
                    onChange={onChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Number of tanks/holds</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="Numberoftanksholds"
                    placeholder="Last name"
                    defaultValue="1"
                    
                    onChange={onChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>DWT capacity</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="DWT"
                    placeholder="Last name"
                    defaultValue="1"
                    
                    onChange={onChange}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
              
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Drydock estimate required</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    name="Drydock"
                    placeholder="City"
                    required
                  />
                
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>GRT</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder="State"
                    required
                    name="GRT"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Insurance quote required</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Insurance"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Year of build</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Year"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Quotation required for</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Quotation"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>H & M value</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="value"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Engine make and type</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Engine_type"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Deductible</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Deductible"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Engine BHP in KW</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Engine_kw"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Loss of hire cover required</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Loss_required"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Engine type</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Engine_type"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Daily hire for LOH cover</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Daily_hire"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Cargo gear</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Cargo_gear"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> Basis</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Basis"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> Port of rotation</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Port_rotation"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> P & I cover required</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Basis"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> Flag</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Flag"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> FD & D cover required</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="fd_required"
                  />
                  
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label> Quotation for crew to be</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    placeholder=""
                    required
                    name="Quotation_crew "
                  />
                  
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

export default Getaquote;
