'use client'

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Page() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                {/* <Nav dir='' className='me-auto'>
                    <Nav.Link eventKey='test-0'>test 0</Nav.Link>
                    <Nav.Link eventKey='test-1'>test 1</Nav.Link>
                </Nav> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}