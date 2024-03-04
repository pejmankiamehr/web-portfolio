import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { Card, Col, Container, Image, Nav, NavLink, Row, Stack } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className=" text-center mt-1" id="about">
      <Stack>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Stack>
      <Row className="justify-content-center gap-5">
        <Col lg={4} xs={10} className=" mb-5 mb-md-0">
          <div className="aboutme">
            <div className="imgbox">
              <Image src="images/pejman kiamehr.png" alt="pejman kiamehr" title="پژمان کیامهر" className="me" />
            </div>
          </div>
        </Col>
        <Col lg={6} className="  ms-0 ms-md-5">
          <Row xs={1} md={3} className="gy-4">
            <Col>
              <Card className=" text-white ">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <FaAward />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 ">Experience</Card.Subtitle>
                  <Card.Text className="textcard">2+ Years Working</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" text-white">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <FiUsers />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 ">Clients</Card.Subtitle>
                  <Card.Text className="textcard">200+ worldwide</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" text-white">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <VscFolderLibrary />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 ">Projects</Card.Subtitle>
                  <Card.Text className="textcard">6+ Complated</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Stack>
              <p className=" text-md-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi nobis veniam mollitia labore repudiandae necessitatibus perferendis delectus ipsum reiciendis eveniet libero
                consectetur atque ex magni, facere dolores sapiente corrupti.
              </p>
              <Nav className=" justify-content-center justify-content-md-start mt-3">
                <NavLink className="btn-sm btn-primary rounded-2">Let's Talk</NavLink>
              </Nav>
            </Stack>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
