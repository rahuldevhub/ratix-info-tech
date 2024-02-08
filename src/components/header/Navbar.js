import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../header/Navbar.css'
import logo from '../../Assets/logo.png'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar-just">
      <Container className='container'>
        <Navbar.Brand href="#home" className='Brandlogo'>
          <img src={logo} alt='logo image'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>

          <Nav className='Navbarcomponents'>
          <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#deets">About Us</Nav.Link>
            <Nav.Link href="#deets">Services</Nav.Link>
            <Nav.Link href="#deets">Testimonials</Nav.Link>
            <Nav.Link href="#deets">How it Works</Nav.Link>
            <Nav.Link href="#deets">Jobs</Nav.Link>

            <Nav.Link href="#deets">Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;