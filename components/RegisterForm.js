import React from "react";
import Image from "next/image";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function RegisterForm() {
  return (
    <Container className="bg-light p-5">
      <Row>
        <Col lg={8}>
          <Col className="pb-3 text-center">
            <div>
              <h2>REGISTER NOW</h2>
              <p className="font-weight-bold">
                The First 7 Day Trial Is Completely Free With The Teacher
              </p>
            </div>
          </Col>
          <Row>
            <Col lg={6}>
              <Form>
                <Form.Group controlId="zip">
                  <Form.Label className="font-weight-bold">
                    First Name
                  </Form.Label>
                  <Form.Control
                    className="rounded"
                    type="text"
                    placeholder="Enter First Name"
                    name="zip"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={6}>
              <Form>
                <Form.Group controlId="zip">
                  <Form.Label className="font-weight-bold">
                    Last Name
                  </Form.Label>
                  <Form.Control
                    className="rounded"
                    type="text"
                    placeholder="Enter Last Name"
                    name="zip"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form>
                <Form.Group controlId="zip">
                  <Form.Label className="font-weight-bold">
                    Your email address
                  </Form.Label>
                  <Form.Control
                    className="rounded"
                    type="text"
                    placeholder="Enter Your email address"
                    name="zip"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={6}>
              <Form>
                <Form.Group controlId="zip">
                  <Form.Label className="font-weight-bold">
                    Mobile No*
                  </Form.Label>
                  <Form.Control
                    className="rounded"
                    type="text"
                    placeholder="Enter Mobile No"
                    name="zip"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <Button block className="font-weight-bold">
                Get Started
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="m-0 p-0">
          <Image
            src="/images/register.jpg"
            alt="Welcome-Prescription"
            // width="850"
            // height="900"
            layout="fill"
            className="p-0 m-0"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
