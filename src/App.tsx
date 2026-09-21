import type { Component, ParentProps } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { Navbar } from "./components/new/Navbar";

const App: Component<ParentProps> = (props) => {
  return (
    <>
      {/* Manage document global title */}
      <MetaProvider>
        <Title>Portfolio</Title>
      </MetaProvider>

      <main class="flex flex-col min-h-screen w-full p-4 sm:p-6 lg:p-8">
        <div class="flex flex-col flex-1 w-full gap-4">
          <Navbar />

          <div class="w-full">
            {props.children}
          </div>

          <div class="w-full h-80 flex justify-between items-center">
            <div class="w-full p-6 sm:p-8 flex flex-col gap-4 items-center justify-center text-center rounded-lg">
              <p class="text-xl sm:text-2xl font-medium leading-relaxed">
                Software Developer passionate about building (and sometimes
                breaking) things.
              </p>
              <p class="text-base max-w-2xl leading-relaxed">
                Full Stack Developer with more than 2 years of experience
                building scalable web applications using React, TypeScript, and Django. Experienced in building end-to-end systems across
                frontend, backend, and deployment.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;