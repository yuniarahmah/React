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
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            YuzaShoop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              style={{ width: "10%" }}
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                style={{ fill: "white" }}
              />
            </svg>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", color: "white" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/data" style={{ color: "white" }}>
                Profile
              </Nav.Link>
              <Nav.Link href="/about" style={{ color: "white" }}>
                About
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content with 10% margin-top */}
      <div style={{ marginTop: "5%" }}>
        {/* Your content goes here */}
        {/* Example: */}
        {/* <h1>Your Content Goes Here</h1>
        <p>More content...</p> */}
      </div>
    </div>
  );
}

export default navbar;
