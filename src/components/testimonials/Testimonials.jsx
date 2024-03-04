import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Container  className=" text-center" id="testimonials">
      <Stack>
        <h5>Review from clients </h5>
        <h2>Testimonials</h2>
      </Stack>
      <Row lg={1} className=" justify-content-center mt-5">
        <Col lg={6}>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className=" pb-5"
          
          >
            <SwiperSlide>
              <Card className=" p-3 text-white">
                <Card.Img variant="top"  src="/images/avatar.jpg" className=" avatar" />
                <Card.Body>
                  <Card.Title>Ernest Achiever</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa harum laudantium cum consectetur molestiae quo quaerat? Illum reprehenderit facilis eius! Libero dolorem
                    architecto quo explicabo vel illo quod corrupti!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="  text-center text-white">
                <Card.Img variant="top" src="/images/avatar.jpg" className="avatar" />
                <Card.Body >
                  <Card.Title>Ernest Achiever</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa harum laudantium cum consectetur molestiae quo quaerat? Illum reprehenderit facilis eius! Libero dolorem
                    architecto quo explicabo vel illo quod corrupti!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className=" text-center text-white">
                <Card.Img variant="top" src="/images/avatar.jpg" className="avatar" />
                <Card.Body>
                  <Card.Title>Ernest Achiever</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et culpa harum laudantium cum consectetur molestiae quo quaerat? Illum reprehenderit facilis eius! Libero dolorem
                    architecto quo explicabo vel illo quod corrupti!
                  </Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
