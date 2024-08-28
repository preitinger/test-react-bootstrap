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
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import styles from './page.module.css'
import { Badge, ButtonToolbar, Modal, OverlayTrigger, Popover, Spinner, Table, Tooltip } from "react-bootstrap";
import { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

interface DummyRowsProps {
  num: number;
}

function DummyRows({ num }: DummyRowsProps): React.ReactNode {
  const rows: React.ReactNode[] = []

  for (let i = 0; i < num; ++i) {
    rows.push(<div>Dummy row {i}</div>)
  }

  return rows
}

interface DummyColsProps {
  num: number;
}

function DummyCols({ num }: DummyColsProps): React.ReactNode {
  const cols: React.ReactNode[] = [];
  for (let i = 0; i < num; ++i) {
    cols.push(
      <Col>Dummy Col {i}</Col>
    )
  }

  return <Row>
    {cols}
  </Row>
}

export default function Home() {
  const [prename, setPrename] = useState('');
  const [surname, setSurname] = useState('');
  const [alertsVisible, setAlertsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function showIt() {
    setAlertsVisible(true);
  }

  function renderOverlay1(props: OverlayInjectedProps) {
    return <Tooltip {...props} id='overlay-1'>
      Ich bin ein Tooltip
    </Tooltip>
  }

  return (
    <Container >
      <Navbar expand='lg' >
        {/* <Container fluid> */}
        <Navbar.Brand href='/' >Test react-bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
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
        <Row cols={2} style={{border: '1px solid red'}}>
          <Col className="d-none d-lg-block">
            <Image className='rounded mb-4' src='/group-friends-jumping-top-hill.jpg' alt='Decorative image' width='576' height='384' />
          </Col>

          <Col>
            <FormGroup className='mb-3'>
              <Form.Label>Vorname</Form.Label>
              <Form.Control type='text' value={prename} onChange={(e) => setPrename(e.target.value)} />
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Label>Nachname</Form.Label>
              <Form.Control type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
            </FormGroup>
            <Button className='mb-3' onClick={showIt}>Show it!</Button>
            <Alert show={alertsVisible} variant='primary' dismissible className='mb-3' onClose={() => setAlertsVisible(false)}>Prename: {prename}</Alert>
            <Alert show={alertsVisible} variant='secondary' className='mb-3'>Surname: {surname}</Alert>
            <div className='d-flex flex-row justify-content-between mb-3'>
              {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(s => <Button className='' key={s} variant={s}>{s}</Button>)}
            </div>
            <div>
              <ButtonToolbar className='mb-3 '>
                <Button className='me-1'>1</Button>
                <Button className='me-1'>2</Button>
                {['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'].map(s => <Button className='me-1' key={s} variant={s}>{s}</Button>)}
              </ButtonToolbar>
            </div>
            <h1 className='mb-3'><Badge bg='danger'>NEW</Badge></h1>
            <OverlayTrigger
              placement='right'
              delay={{ show: 250, hide: 1000 }}
              overlay={(props: OverlayInjectedProps) => <Tooltip {...props} id='overlay-1'>
                Ich bin ein Tooltip
              </Tooltip>
              }
            >
              <Button>Hover me 1</Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement='bottom'
              delay={{ show: 400, hide: 0 }}
              overlay={(props) => <Popover {...props} id='overlay-2' body>Content</Popover>}
            >
              <Button title="bla">Hover me 2</Button>
            </OverlayTrigger>

            <Button onClick={() => setModalVisible(true)}>Show Modal</Button>
            <Modal show={modalVisible} onHide={() => setModalVisible(false)}>
              <Modal.Header closeButton><h3>Header</h3></Modal.Header>
              <Modal.Body>Body</Modal.Body>
              <Modal.Footer>
                <Button onClick={() => setModalVisible(false)}>Close modal</Button>
              </Modal.Footer>
            </Modal>
            <Spinner />
            {/* <Table style={{width: '200px'}} responsive={true}>
              <thead>
                <tr>
                  <th>#</th>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <th key={index}>Table heading</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>2</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
              </tbody>
            </Table> */}
            <DummyRows num={16} />
            <DummyCols num={12} />
            <div className='mb-3' style={{width: '690px', border: '1px solid red'}}>
              custom width
            </div>
          </Col>
        </Row>

      </Form>
    </Container>
  );
}
