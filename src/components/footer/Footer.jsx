import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Col, Container, Image, Nav, NavLink, Navbar, Row, Stack } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className=" pb-5 mt-5  text-center justify-content-center footer">
      <Row xs={1} lg={1} className=" gap-5 py-5 justify-content-center ">
        <Col xs={3} lg={1}>
          <Stack className="boxlogo">
            <Image src="/public/images/logo.png" />
          </Stack>
        </Col>
        <Col>
          <h1 className="textname">Pejman Kiamehr</h1>
        </Col>
        <Col>
          <Navbar className=" justify-content-center navfooter" data-bs-theme="dark">
            <Nav className=" flex-column flex-md-row justify-content-center">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#portfolio">Portfolio</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </Nav>
          </Navbar>
        </Col>
        <Col className=" mb-5">
          <Nav className=" justify-content-center">
            <NavLink href="https://linkedin.com" target="_blank" className=" rounded iconfooter">
              <FaFacebookF />
            </NavLink>
            <NavLink href="https://github.com" target="_blank" className=" rounded iconfooter">
              <FaInstagram />
            </NavLink>
            <NavLink href="https://dribbble.com" target="_blank" className=" rounded iconfooter">
              <FaTwitter />
            </NavLink>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
