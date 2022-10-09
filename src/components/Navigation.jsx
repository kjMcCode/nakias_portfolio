import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../index.css'

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutMe">About Me</Nav.Link>
            <NavDropdown title="Design Themes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/theme/1">Theme 1</NavDropdown.Item>
              <NavDropdown.Item href="/theme/2">Theme 2</NavDropdown.Item>
              <NavDropdown.Item href="/theme/3">Theme 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactMe">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navigation;