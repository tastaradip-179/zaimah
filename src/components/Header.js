import React from 'react';
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import { FiUsers } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-transparent">
      <Container fluid style={{height: "100%", lineHeight: "3"}}>
        <Navbar.Brand href="#home" style={{width: "20%"}}>
          <img src="images/logo.png" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{width: "100%"}}>
            <NavDropdown title={<><span className='text-uppercase'>Delivering To: </span><span><b>3 Dhakeshwari Rd Dhaka</b></span></>} id="basic-nav-dropdown" style={{width: "35%", maxWidth: "100%"}}>
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<><span className='text-uppercase'>When: </span><span><b>ASAP</b></span></>} id="basic-nav-dropdown" style={{width: "25%", maxWidth: "100%"}}>
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" style={{width: "10%", maxWidth: "100%"}}>BN</Nav.Link>
            <Nav.Link href="#link" style={{width: "20%", maxWidth: "100%"}}><FiUsers/>Login</Nav.Link>
            <Nav.Link href="#link" style={{width: "20%", maxWidth: "100%",  borderRight: "0"}}><AiOutlineShoppingCart/>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header