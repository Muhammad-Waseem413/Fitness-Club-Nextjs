import React from "react";
import Link from "next/link";
import { Row, Col, Container, Button } from "react-bootstrap";
import HeadSection from "../../../components/HeadSection";

function FitnessCategories({ fitnessCategories }) {
  console.log(fitnessCategories.categories);
  return (
    <>
      <HeadSection title={fitnessCategories.title} />
      <Container>
        <Row className="p-3">
          <Col>
            <h1>{fitnessCategories.title}</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col>
            <p>{fitnessCategories.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            {fitnessCategories?.categories.map((category) => {
              return (
                <ul key={category.id}>
                  <li>{category.categoryTitle}</li>
                  <li>{category.description}</li>
                </ul>
              );
            })}
          </Col>
        </Row>
        <br />
        <Row className="p-3">
          <Col>
            <Link href="/">
              <Button
                className="bg-primary font-weight-bold px-5"
                // style={{
                //   backgroundImage:
                //     "linear-gradient(to right, #eb3c5a 0%, #f67831 100%)",
                // }}
              >
                Go Back
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FitnessCategories;

//By using this method each time a request is sent, this data will be refetched
export const getServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:4000/api/fitnessCategories/${context.params.id}`
  );

  const fitnessCategories = await response.json();

  return {
    props: {
      fitnessCategories,
    },
  };
};

//We can use the combinatino of getStaticProps and getStaticPaths if we dont need to refetch data on each request

// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const post = await response.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await response.json();

//   const ids = posts.map((post) => post.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
