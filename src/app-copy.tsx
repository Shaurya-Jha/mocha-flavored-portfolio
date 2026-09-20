import type { Component } from "solid-js";
import ScrollToTop from "./components/scroll-to-top";
import About from "./components/about";
import Work from "./components/work";
import Projects from "./components/projects";
import { MetaProvider, Title } from "@solidjs/meta";
import Certifications from "./components/certifications";
import { Skills } from "./components/skills";

const App: Component = () => {
  return (
    <>
      {/* Manage document global title */}
      <MetaProvider>
        <Title>Portfolio</Title>
      </MetaProvider>

      <main class="max-w-[46rem] mx-auto">
        {/* about me */}
        <About />

        {/* work */}
        <Work />

        {/* projects / freelance works. can add other pet projects later*/}
        <Projects />

        {/* what i work with */}
        <Skills />

        {/* certifications */}
        <Certifications />

        {/* contact */}
        <ScrollToTop />
      </main>
    </>
  );
};

export default App;
