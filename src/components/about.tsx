import { Component } from "solid-js";
import Layout from "./layout";

const About: Component = () => {
  return (
    <Layout className="mt-10" title="Who am I ? 👋">
      <section id="about">
        <p class="p-text my-2">
          Full Stack Developer with more than 2 years of experience building
          scalable web applications using React, TypeScript, and Django. Experienced in building end-to-end systems across frontend, backend, and deployment.
        </p>
      </section>
    </Layout>
  );
};

export default About;
