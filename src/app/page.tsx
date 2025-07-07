import Container from "./components/Container";
import Experience from "./components/Experience";
import HeroSection from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="">
      <Container>
        <HeroSection />
        <Projects />
        <Experience/>
      </Container>
    </div>
  );
}
