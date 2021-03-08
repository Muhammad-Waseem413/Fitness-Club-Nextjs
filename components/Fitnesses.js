import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FitnessesList from "./FitnessesList";

function Fitnesses({ fitnessData }) {
  return (
    <Container>
      <Row>
        <Col className="pt-2 ml-3 text-center">
          <h3>Fitness Categories</h3>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          {fitnessData.map((fitnessData) => (
            <FitnessesList fitnessData={fitnessData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Fitnesses;
