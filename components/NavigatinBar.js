import Link from "next/link";
import {
  Row,
  Col,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavigatinBar() {
  return (
    <Row>
      <Col>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Navbar.Brand>
            <Link href="/">
              <a
                className=" font-weight-bold"
                style={{
                  textDecoration: "none",
                  color: "#f4511e",
                  hover: "#f67831",
                }}
              >
                EVOPE NUTRITION
              </a>
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Row>
              <Col>\</Col>
            </Row>
            <Nav.Item className="pr-2">
              <Link href="/">
                <a className="text-light">Home</a>
              </Link>
            </Nav.Item>
            <Nav.Item className="pr-2 text-white">
              <Link href="/About">
                <a className="text-light">About</a>
              </Link>
            </Nav.Item>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar>
      </Col>
    </Row>
  );
}

export default NavigatinBar;
