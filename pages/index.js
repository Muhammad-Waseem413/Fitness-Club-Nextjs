import { Container } from "react-bootstrap";
import Fitnesses from "../components/Fitnesses";
import HeadSection from "../components/HeadSection";
import Stories from "../components/Stories";
import RegisterForm from "../components/RegisterForm";

export default function Home({ fitnessData }) {
  return (
    <Container fluid style={{ backgroundColor: "#f5f4f4" }}>
      <HeadSection title="Home Page" />
      <Fitnesses fitnessData={fitnessData} />
      <Stories />
      <RegisterForm />
    </Container>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`http://localhost:4000/api/fitnessCategories`);
  const fitnessData = await response.json();

  return {
    props: {
      fitnessData,
    },
  };
};
