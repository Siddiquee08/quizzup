import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  return (
    <Navbar
      className="navbar-container"
      collapseOnSelect
      expand="lg"
      bg=""
      variant=""
    >
      <Container className="navbar">
        <img className="mx-2" src={logo} alt="" />
        <Navbar.Brand className="navbar-brand ms-2 text-white" href="#home">
          <Link to="/" className="text-white" aria-current="page" href="#">
            QuizzUp
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link to="/" className="text-white" aria-current="page" href="#">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#statistics">
              <Link to="/statistics" className="text-white" href="#">
                Statistics
              </Link>
            </Nav.Link>
            <Nav.Link href="#blogs">
              <Link to="/blogs" className="text-white" href="#">
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link href="#upcoming">
              <Link to="/upcoming" className="text-white">
                Upcoming Quizzes
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
