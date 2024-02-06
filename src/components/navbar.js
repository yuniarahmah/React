import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState } from "react";
import { Form, Card, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function navbar() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="fixed-top"
        style={{
          backgroundColor: "#FC6736",
          overflow: "hidden",
          color: "white",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">YuzaShoop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/data">Profile</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content with 10% margin-top */}
      <div style={{ marginTop: "10%" }}>
        {/* Your content goes here */}
        {/* Example: */}
        {/* <h1>Your Content Goes Here</h1>
        <p>More content...</p> */}
      </div>
    </div>
  );
}

export default navbar;
