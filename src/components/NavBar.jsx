import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">TV shows</Nav.Link>
          </Nav>
          {/* <Form className="d-flex gap-5">
            <Button variant="outline-success">Add Movie</Button>

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar