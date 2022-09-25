import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'

function Navigation() {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <NavDropdown title="Design Themes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Theme 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Theme 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Theme 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;