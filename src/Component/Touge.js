import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function Touge() {
  return (
    <>
    <div className = 'touge'>
    
    <Row>
    <Col md ={5}  className='touge_form' >
 <Form>
 <h1 style={{ fontSize: "1.6em" }}>
          <span className="purple">Add vessels</span>
         </h1>     
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Daily Rate </Form.Label>
    <Form.Control type="input type" placeholder="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Charter Rate </Form.Label>
    <Form.Control type="input type" placeholder=""/>

  </Form.Group>


</Form>
</Col>
    </Row>
    </div>
    </>
  )
}

export default Touge