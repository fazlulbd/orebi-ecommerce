import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, Image, Badge } from 'react-bootstrap';
import { logoData } from '../fackData/logoData';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Manubar = () => {
  const { quantity } = useSelector(state => state.cart)
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <div className={`${scroll ? "main-manu" : "manu-bar"}`}>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><Image src={logoData.logo} /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link to='/login' as={Link}>User</Nav.Link>
              <Nav.Link to='/' as={Link}>Home</Nav.Link>
              <Nav.Link to='/shop' as={Link}>Shop</Nav.Link>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link to='cart' as={Link}>Cart {quantity ? <Badge pill bg="danger"> {quantity}</Badge> : ''}</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Manubar
