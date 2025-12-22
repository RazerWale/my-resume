import "./index.css";
import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Editor from "./components/layout/editor/Editor";
import content from "./data/content";

function App() {
  return (
    <Layout>
      <Editor content={content} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
