import Container from "./components/Container";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="">
      <Container>
        <HeroSection />
        <Projects />
      </Container>
    </div>
  );
}
