import { Jumbotron, Container, Row } from "react-bootstrap";
import NavigatinBar from "./NavigatinBar";
import Image from "next/image";

function Layout({ children }) {
  return (
    //  This is for the application header
    <Container fluid className="m-0 p-0">
      <NavigatinBar />
      <Jumbotron fluid className="bg-black my-0 py-0 text-center">
        <Image
          src="/images/fitnessCover2.jpg"
          alt="Welcome-Prescription"
          width="1350"
          height="600"
          className="p-0 m-0"
        />
      </Jumbotron>
      {/* This is end of the application header */}
      <Row className="flex-grow-1" style={{ minHeight: "75vh" }}>
        {children}
      </Row>
    </Container>
  );
}

export default Layout;
