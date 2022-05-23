import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
   const location = useLocation() //это хук, внутри которого в виде объекта хранится инфа о текущей локации
   console.log(location);
    return (
        <Navbar>
        <Container>
            
            <Link to="/">
            <Navbar.Brand className={location.pathname === "/" ? "btn btn-success" : "btn btn-light"} href="#home">Home</Navbar.Brand>
            </Link>
            <Link to="/add">
            <Navbar.Brand className={location.pathname === "/add" ? "btn btn-success" : "btn btn-light"} href="#add">Add from</Navbar.Brand>
            </Link>
            <Link to="/edit">
            <Navbar.Brand className={location.pathname === "/edit" ? "btn btn-success" : "btn btn-light"} href="#edit">Edit</Navbar.Brand>
            </Link>
            <Link to="/contacts">
            <Navbar.Brand className={location.pathname === "/contacts" ? "btn btn-success" : "btn btn-light"} href="#contacts">Contacts</Navbar.Brand>
            </Link>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;