import React from "react";
import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";

function FitnessesList({ fitnessData }) {
  return (
    <>
      <Row className="d-inline-flex  justify-content-between p-4">
        <Col className=" d-flex align-items-stretch">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fitnessData.imgURL} />
            <Card.Body>
              <Card.Title>{fitnessData.title}</Card.Title>
              <Card.Text>{fitnessData.description}</Card.Text>
              <Link
                href="/fitnessCategories/[id]"
                as={`/fitnessCategories/${fitnessData.id}`}
              >
                <a className="btn btn-primary ">Read More..</a>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default FitnessesList;
