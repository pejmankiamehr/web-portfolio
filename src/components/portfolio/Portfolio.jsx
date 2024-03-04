import { Card, Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <Container   id="portfolio">
      <Stack className=" text-center">
        <h5>My Recent Work Offer</h5>
        <h2>Portfolio</h2>
      </Stack>
      <iframe src="https://raw.githack.com/pejmankiamehr/web-portfolio/main/index.html" width="100%" height="500px">
</iframe>
      <Row lg={3} xs={1} md={2} className="g-5">
        <Col>
          <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/images/headphone.jpg" height="200px" className=" object-fit-cover p-2 rounded-5" />
            <Card.Body className=" text-light">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/images/headphone.jpg" height="200px" className=" object-fit-cover p-2 rounded-5" />
            <Card.Body className=" text-light">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/images/headphone.jpg" height="200px" className=" object-fit-cover p-2 rounded-5" />
            <Card.Body className=" text-light">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/images/headphone.jpg" height="200px" className=" object-fit-cover p-2 rounded-5" />
            <Card.Body className=" text-light">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/images/headphone.jpg" height="200px" className=" object-fit-cover p-2 rounded-5" />
            <Card.Body className=" text-light">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
   
      </Row>
    </Container>
  );
};

export default Portfolio;
