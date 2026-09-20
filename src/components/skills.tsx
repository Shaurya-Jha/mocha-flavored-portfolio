import { Component } from "solid-js";
import Layout from "./layout";
import { SKILLS } from "../lib/data";

export const Skills: Component = () => {
  return (
    <Layout title="What I work with">
      <section id="skills" class="w-full p-text">
        <div class="mt-3">
        {SKILLS.map((skill) => (
          <div class="flex flex-wrap items-center gap-2 my-1.5">
            <p class="font-semibold">{skill.type}:</p>
            {Array.isArray(skill.values) &&
              skill.values.map((value, index, array) => (
                <span class="inline-flex items-center gap-2">
                  <span>{value}</span>
                  {index < array.length - 1 && (
                    <span
                      class="h-1.5 w-1.5 rounded-full bg-[#664343]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
          </div>
        ))}
          </div>
      </section>
    </Layout>
  );
};
