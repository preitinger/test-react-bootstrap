'use client'
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function Home() {
  return (
    <Container>
      <Navbar expand='lg'>
        {/* <Container fluid> */}
        <Navbar.Brand href='/' >Test react-bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#test-link'>Test-link</Nav.Link>
            <NavDropdown title="Dropdown" id='basic-nav-dropdown'>
              <NavDropdown.Item href='/bla'>bla</NavDropdown.Item>
              <NavDropdown.Item href='/blubb'>blubb</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/last'>last</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav about="Test of the library react-bootstrap" />
        {/* </Container> */}
      </Navbar>
      <Form>
        <Row cols={2}>
          <Col className="d-none d-lg-block">
            <Image className=' mb-4' src='/group-friends-jumping-top-hill.jpg' alt='Decorative image' width='576' height='384' />
          </Col>

          <Col>
            <FormGroup className='mb-3'>
              <Form.Label>Vorname</Form.Label>
              <Form.Control type='text' />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Label>Nachname</Form.Label>
              <Form.Control type='text' />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
