import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navv from "./components/nav/Navv";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row >
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Navv />
          </Col>
        </Row>
        <Row>
          <Col>
            <About />
          </Col>
        </Row>
        <Row>
          <Col>
            <Experience />
          </Col>
        </Row>
        <Row>
          <Col>
            <Services />
          </Col>
        </Row>
        <Row>
          <Col>
            <Portfolio />
          </Col>
        </Row>
        <Row>
          <Col>
            <Testimonials />
          </Col>
        </Row>
        <Row>
          <Col>
            <Contact />
          </Col>
        </Row>
        <Row>
          <Col className=" p-0">
            <Footer />
          </Col>
        </Row> 
      </Container>
      {/* <Header />
      <Navv />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
