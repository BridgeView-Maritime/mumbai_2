import React from 'react'
import { Col, Container, Nav, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Charteringvessels() {
  return (
    <div> <Container>
        
    <Row>
       <Col md={12} className="home-about-description">
         
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple">Chartering of Vessels </span>
            </h1>
            <p className="home-about-body  text-center">
            We offer a wide range of OSVs / Patrol Boat / Ambulance boat to Indian operators, Shippers and Government Agencies. 
Our shipping business is involved in towing of vessels, supply of items , Patrolling services , transportation of grains, oils, seeds, fertilizers, steels, iron ore, coal, raw material, sugar, etc.               
       </p>
         </Col>
    </Row>
    <Nav.Item>
             <Nav.Link
             className=' text-black nav-link nav_text '
               as={Link}
               to="/touge" 
               
             >
                Add new
             </Nav.Link>
           </Nav.Item>
           
  


     
  
         
   </Container>
   <Container>
     
     {/* <Col md ={5}>

   
     <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Name</Form.Label>
       <Form.Control type="input type" placeholder="name" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="name@example.com" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label>Massage</Form.Label>
       <Form.Control as="textarea" rows={3} />
     </Form.Group>
   </Form>

 </Col> */}

     <h1>We are looking for touge</h1>

    <Table striped bordered hover variant="light">
     <thead>
       <tr>
         <th>#</th>
         <th>Daily Rate</th>
         <th>Charter Rate </th>
         
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>1</td>
         <td>--</td>
         <td>1000$</td>

       </tr>
       <tr>
         <td>2</td>
         <td>6000</td>
         <td>--</td>
         
       </tr>
       
     </tbody>
   </Table>
   
   </Container>

  

   </div>
  )
}

export default Charteringvessels