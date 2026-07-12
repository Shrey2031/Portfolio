import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Skills } from "@/components/sections/skills/Skills";
import { Projects } from "@/components/sections/projects/Projects";
import { Experience } from "@/components/sections/experience/Experience";
import { Achievements } from "@/components/sections/achievements/Achievements";
import { Services } from "@/components/sections/services/Services";
import { Contact } from "@/components/sections/contact/Contact";

export function Home() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
