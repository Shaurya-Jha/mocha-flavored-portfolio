import { Component } from "solid-js";
import Layout from "./layout";
import { PROJECTS } from "../lib/data";

const Projects: Component = () => {
  return (
    <Layout title="Projects">
      <section id="projects" class="w-full p-text">
        {PROJECTS.map((project) => {
          return (
            <div class="flex flex-col">
              <div class="my-4">
                <div class="flex gap-1.5">
                  <p class="text-md font-medium">{project.title}</p>
  
                  <p class="text-sm mt-0.5">
                    {project.visitUrl ? (
                      <a
                        href={project.visitUrl}
                        class="underline underline-offset-2"
                      >
                        Live
                      </a>
                    ) : (
                      ''
                    )}{" "}
                  </p>
                </div>

                <div class="flex flex-row items-stretch gap-3 my-4">
                  <div class="w-0.5 bg-[#664343] rounded-full shrink-0" />
                  <p>{project.briefSummary}</p>
                </div>

                <div class="flex flex-wrap items-center gap-2 my-2">
                  <span class="font-medium">Tech Stack:</span>
                  {Array.isArray(project.keyTechnologies)
                    ? project.keyTechnologies.map((tech, index, array) => (
                        <span class="flex items-center gap-2">
                          {tech}
                          {index < array.length - 1 && (
                            <span class="inline-block w-1 h-1 rounded-full bg-[#664343]" />
                          )}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Projects;
