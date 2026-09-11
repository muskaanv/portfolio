import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <Nav />
      <Hero />
      <About />
      <Career />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
