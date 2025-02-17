import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({ filterTitle, setFilterTitle }) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link as={Link} to="/tvshows">
              TV shows
            </Nav.Link>
          </Nav>
          <Form className="d-flex gap-5">
            {/* <Button variant="outline-success">Add Movie</Button> */}

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={filterTitle}
              onChange={(e) => setFilterTitle(e.target.value)}
            />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
