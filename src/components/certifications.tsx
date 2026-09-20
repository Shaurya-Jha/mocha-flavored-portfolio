import { Component } from "solid-js";
import Layout from "./layout";
import { CERTIFICATES } from "../lib/data";

const Certifications: Component = () => {
  return (
    <Layout title="Certifications">
      <section id="certifications" class="w-full p-text">
        {CERTIFICATES.map((certificate) => {
          return (
            <div class="flex flex-col">
              <div class="flex gap-2 my-4 items-center">
                <p class="text-md font-medium">{certificate.name}</p>
                <a href={ certificate.certificateUrl } class="text-sm hover:cursor-pointer">&#x2197;</a>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  )
}

export default Certifications;