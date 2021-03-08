import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

function Stories() {
  return (
    <Container fluid className="m-0 p-0">
      <Row>
        <Col lg={6} className="m-0">
          <Image
            src="/images/service-pic.jpg"
            alt="Welcome-Prescription"
            width="1350"
            height="769"
            className="p-0 m-0"
          />
        </Col>
        <Col lg={6} className="text-light ml-0 pl-0">
          <Row>
            <Col lg={6} style={{ backgroundColor: "#1e1e1e" }}>
              <div className="p-5">
                <Image
                  src="/images/service-icon-1.PNG"
                  alt="Welcome-Prescription"
                  width="50"
                  height="50"
                />
                <h4 className="mt-2">Strategies</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
              <div className="p-5">
                <Image
                  src="/images/service-icon-3.PNG"
                  alt="Welcome-Prescription"
                  width="50"
                  height="50"
                />
                <h4 className="mt-2">Yoga</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
            </Col>
            <Col lg={6} style={{ backgroundColor: "black" }}>
              <div className="p-5">
                <Image
                  src="/images/service-icon-2.PNG"
                  alt="Welcome-Prescription"
                  width="50"
                  height="50"
                />
                <h4 className="mt-2">Workout</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
              <div className="p-5">
                <Image
                  src="/images/service-icon-4.PNG"
                  alt="Welcome-Prescription"
                  width="50"
                  height="50"
                />
                <h4 className="mt-2">Weight Loss</h4>
                <p>
                  Aenean massa. Cum sociis Theme et natoque penatibus et magnis
                  dis part urient montes.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Stories;
