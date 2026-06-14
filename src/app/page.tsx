import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Capabilities from "@/components/sections/Capabilities";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";
import Thoughts from "@/components/sections/Thoughts";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Capabilities />
      <Projects />
      <Experience />
      <Tools />
      <Thoughts />
      <Contact />
    </>
  );
}
