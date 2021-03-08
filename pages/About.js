import { Row, Col, Container } from "react-bootstrap";
import HeadSection from "../components/HeadSection";

function About() {
  return (
    <>
      <HeadSection title="About page" />
      <Container>
        <Row className="p-3">
          <Col>
            <h2>This is about page</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
