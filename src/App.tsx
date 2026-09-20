import type { Component } from "solid-js";
import { MetaProvider, Title } from "@solidjs/meta";
import { Navbar } from "./components/new/Navbar";

const App: Component = () => {
  return (
    <>
      {/* Manage document global title */}
      <MetaProvider>
        <Title>Portfolio</Title>
      </MetaProvider>

      <main class="flex flex-col min-h-screen w-full box-border p-4">
        <div class="border h-full w-full flex-1">
          <Navbar />
        </div>
      </main>
    </>
  );
};

export default App;